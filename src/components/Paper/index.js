import React, {PropTypes as types} from 'react';
import classNames from 'classnames';
import './style.styl';

const zDepthShadows= [
  [1, 6, 0.12, 1, 4, 0.12],
  [3, 10, 0.16, 3, 10, 0.23],
  [10, 30, 0.19, 6, 10, 0.23],
  [14, 45, 0.25, 10, 18, 0.22],
  [19, 60, 0.30, 15, 20, 0.22]
].map((d) => (
  `0 ${d[0]}px ${d[1]}px rgba(0, 0, 0, ${d[2]}),
   0 ${d[3]}px ${d[4]}px rgba(0, 0, 0, ${d[5]})`
));

const zDepth2styles = (z) => ({ boxShadow: z <= 0 ? 'none' : zDepthShadows[(z < 5 ? z : 5) - 1] });

export default function Paper({ zDepth, className, style, inline, circle, children, ...others }) {
  return (
    <div
      className={classNames('alp-paper', { inline: inline || circle }, { circle }, className)}
      style={Object.assign({}, style, zDepth2styles(zDepth))}
      {...others}
    >
      {children}
    </div>
  );
}

Paper.defaultProps = {
  zDepth: 0
};

Paper.propTypes = {
  zDepth: types.number,
  inline: types.bool,
  circle: types.bool
};
