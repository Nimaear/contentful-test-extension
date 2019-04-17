//@flow
import * as React from 'react';

type Props = {
  color: string,
};

const Grid = ({ color = '#000000' }: Props ) => {
  return (
    <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" stroke={color} strokeWidth="1" fillRule="evenodd">
        <rect x="0" y="0" width="24" height="24" />
        <line x1="12" y1="0" x2="12" y2="24" strokeWidth="0.5" />
        <line x1="0" y1="12" x2="24" y2="12" strokeWidth="0.5" />
      </g>
    </svg>
  );
};

export default Grid;
