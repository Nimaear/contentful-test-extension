//@flow
import * as React from 'react';

type Props = {
  color?: string,
};

const MiddleAlign = ({ color = '#000000' }: Props) => {
  return (
    <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g stroke="none" strokeWidth="1" fill={color} fillRule="evenodd">
        <rect x="10" y="0" width="4" height="24" />
        <rect x="0" y="12" width="8" height="1" />
        <rect x="16" y="12" width="8" height="1" />
      </g>
    </svg>
  );
};

export default MiddleAlign;
