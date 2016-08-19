import React, { propTypes as types } from 'react';
import Icon from './Icon';

const ArrowBack = ({ fill, size, ...others }) => {

  const isNum = typeof size === 'number';
  const width = isNum ? size : size.width;
  const height = isNum ? size : size.height;

  return (
    <Icon>
      <svg fill={fill} height={width} width={height} {...others} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
        <path d="M0 0h24v24H0z" fill="none" />
      </svg>
    </Icon>
  );
};

ArrowBack.propTypes = {
  fill: types.string,
  size: types.oneOfType([
    types.number,
    types.string,
  ])
};

export default ArrowBack;
