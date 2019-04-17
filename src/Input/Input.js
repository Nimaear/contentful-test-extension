//@flow
import * as React from 'react';
import cx from 'classnames';

type Props = {
  value: any,
  onChange: ( value: any ) => void,
};

const { useCallback } = React;

const Input = ({ value, onChange, ...other }: Props ) => {
  const handleChange = useCallback(
    ( event ) => {
      onChange && onChange( event.target.value );
    },
    [ onChange, value ]
  );
  const cn = cx( 'cf-form-input' );

  return <input {...other} className={cn} value={value} onChange={handleChange} />;
};

export default Input;
