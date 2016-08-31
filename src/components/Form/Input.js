import React, { PropTypes, Component } from 'react';
import ValRuls from '../../utility/validation-rules';
import cx from 'classnames';

export default class Input extends Component {
  static propTypes = {
    rules: PropTypes.array,
    min: PropTypes.number,
    max: PropTypes.number,
    value: PropTypes.string,
    label: PropTypes.string,
    className: PropTypes.string,
    type: PropTypes.string,
    isRequired: PropTypes.bool,
    hint: PropTypes.string,
    icon: PropTypes.element,
    disabled: PropTypes.bool,
    full: PropTypes.bool,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func
  };

  static defaultProps = {
    type: 'text'
  };

  constructor(props) {
    super(props);
    this.state = {
      checked: true,
      value: this.props.value || ''
    };
    this.valRuls = new ValRuls(this.props.type, this.props.rules);
  }

  onChange = (event) => {
    this.setState({
      value: event.target.value,
      checked: this.validation(event.target.value)
    });
    if (this.props.onChange) this.props.onChange(event);
  };

  onFocus = (event) => {
    this._DOM.className += ' focused';
    if (this.props.onFocus) this.props.onFocus(event);
  };

  onBlur = (event) => {
    this._DOM.className = this._DOM.className.replace(' focused', '');
    if (this.props.onBlur) this.props.onBlur(event);
  };

  validation = this.valRuls.validation;

  render() {
    const { className, type, label, ...others } = this.props;

    return (
      <div
        className={cx('alp-input', { error: !this.state.checked, success: this.state.checked }, className)}
        ref={(e) => { this._DOM = e; }}
      >
        <label>{label}</label>
        <input
          {...others}
          type={type === 'password' ? 'password' : 'text'}
          value={this.state.value}
          onChange={this.onChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        />
        <div>请勿输入特殊字符!~</div>
      </div>
    );
  }
}

// TODO: 验证手机号, 用户名
// TODO: 传递到 input 的 type 属性 应该是 text, password
