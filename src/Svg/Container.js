//@flow
import * as React from 'react';

type Props = {
  color?: string,
};

const Container = ({ color = '#000000' }: Props) => {
  return (
    <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" stroke={color} strokeWidth="1" fillRule="evenodd">
        <rect x="0" y="0" width="24" height="24" />
      </g>
    </svg>
  );
};

export default Container;
