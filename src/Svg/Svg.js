//@flow
import * as React from 'react';

type Props = {
  color: string,
};

const Input = ({ color = '#000000' }: Props ) => {
  return (
    <svg width="12px" height="12px" viewBox="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g fill={color} stroke="none" strokeWidth="1" fillRule="evenodd">
        <rect x="4" y="2" width="4" height="10" />
        <rect x="0" y="0" width="12" height="1" />
      </g>
    </svg>
  );
};

export default Input;
