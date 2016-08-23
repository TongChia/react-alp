import React, { propTypes as types } from 'react';
import cx from 'classnames';
import Icon from './Icon';

const More = ({ vertical, className, ...props }) => (
  <Icon className={cx('alp-icon-more', { vertical }, className)} {...props}>
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0
        c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2
        s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
      />
    </svg>
  </Icon>
);

More.propTypes = {
  className: types.string,
  vertical: types.bool
};

export default More;
