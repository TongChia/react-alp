import React, { PropTypes, Component } from 'react';
import cx from 'classnames';

export default class Input extends Component {
  static propTypes = {
    rules: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object
    ]),
    value: PropTypes.string,
    label: PropTypes.string,
    className: PropTypes.string,
    type: PropTypes.string,
    hint: PropTypes.string,
    icon: PropTypes.element,
    disabled: PropTypes.bool,
    full: PropTypes.bool,
  };

  static _type = '';
  static _rules = [];
  static state = {};

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value || ''
    };
    if (this.props.rules) this._rules = this.props.rules;
  }

  onInput = (event) => {
    window.console.log(event.target.value);
    this.setState({ value: event.target.value });
  };

  validation = () => {
    this._rules = [];
  };

  render() {
    const { className, label, ...others } = this.props;

    return (
      <div className={cx('alp-form-component', className)}>
        <label>{label}</label>
        <input {...others} type={this._type} value={this.state.value} onChange={this.onInput} />
      </div>
    );
  }
}
