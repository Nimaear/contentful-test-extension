//@flow
import * as React from 'react';

type Props = {
  color: string,
  flip?: boolean,
};

const TopAlign = ({ color = '#000000', flip = false }: Props ) => {
  const transform = flip ? 'translate(0, 24) scale(1, -1)' : null;
  return (
    <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g fill={color} stroke="none" strokeWidth="1" fillRule="evenodd" transform={transform}>
        <rect x="10" y="2" width="4" height="20" />
        <rect x="0" y="0" width="24" height="1" />
      </g>
    </svg>
  );
};

export default TopAlign;
