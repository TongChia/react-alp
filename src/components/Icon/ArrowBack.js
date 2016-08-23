import React, { propTypes as types } from 'react';
import cx from 'classnames';
import Icon from './Icon';

const ArrowBack = ({ forward, className, ...props }) => (
  <Icon className={cx('alp-icon-arrow', { forward }, className)} {...props}>
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
    </svg>
  </Icon>
);

ArrowBack.propTypes = {
  className: types.string,
  forward: types.bool
};

export default ArrowBack;
