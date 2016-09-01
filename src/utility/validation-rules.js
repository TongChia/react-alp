/* eslint max-len: 0 */
const r = new Map();
r.set('email', /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/);
r.set('url', /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i);
r.set('date', (value) => !/Invalid|NaN/.test(new Date(value).toString()));
r.set('dateISO', /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/);
r.set('number', /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/);
r.set('digits', /^\d+$/);
r.set('password', /^[a-zA-Z0-9]+[a-zA-Z0-9<>\(\),.!#$%&'*+\/=?^_`{|}~-]*$/);
r.set('username', /^[a-zA-Z0-9]+$/);

export default class Validation {
  constructor(type, rules) {
    this._rules = [];
    if (type && r.has(type)) this._rules.push(r.get(type));
    if (rules && rules instanceof Array) this._rules = this._rules.concat(rules);
  }

  get rules() {
    return this._rules;
  }

  set rules(rules) {
    if (rules instanceof Array) this._rules = this._rules.concat(rules);
    else this._rules.push(rules);
  }

  validation = (value) => {
    const val = (rule) => {
      if (rule instanceof RegExp) {
        return rule.test(value);
      }
      if (typeof rule === 'function') {
        return rule(value);
      }
      return '';
    };
    for (let i = 0; i < this.rules.length; i++) {
      if (val(!this.rules[i])) return false;
    }
    return true;
  };
}

// TODO: 用户名验证规则
