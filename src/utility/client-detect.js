
const p = new Map();
p.set('iOS', /like Mac OS X/);
p.set('Android', /Android/);
p.set('winPhone', /Windows Phone/);
p.set('BlackBerry', /BlackBerry/);

const s = new Map();
s.set('macOS', /Macintosh/);
s.set('Windows', /Windows NT/);
s.set('Ubuntu', /Ubuntu/);
s.set('Linux', /Linux/);

const b = new Map();
b.set('Opera', /Opera/);
b.set('Chrome', /Chrome/);
b.set('Firefox', /Firefox/);

export default class ClientDetect {
  static ua = '';
  static _platform = '';
  static _system = '';

  constructor(userAgent) {
    this.ua = userAgent || window.navigator.userAgent;
  }

  get platform() {
    if (this._platform) return this._platform;
    this._platform = 'browser';
    p.forEach((regExp, platform) => {
      if (regExp.test(this.ua)) this._platform = platform;
    });
    return this._platform;
  }

  get system() {
    if (this._system) return this._system;
    if (this.platform !== 'browser') return this._platform;
    s.forEach((regExp, system) => {
      if (regExp.test(this.ua)) this._system = system;
    });
    return this._system;
  }

  isWechat() {
    return /micromessenger/i.test(this.ua);
  }

  isCordova() {
    return window.cordova || window.PhoneGap || window.phonegap;
  }

  isElectronic() {}

  isNode() {}
}
