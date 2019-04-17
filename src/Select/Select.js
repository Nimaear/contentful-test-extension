//@flow
import * as React from 'react';
import cx from 'classnames';
import css from './Select.css';

type Props = {
  children: React.Node,
  value: any,
  onChange: ( value: any ) => void,
};

const { useCallback } = React;

const Select = ({ children, value, onChange }: Props ) => {
  const handleChange = useCallback(
    ( event ) => {
      onChange && onChange( event.target.value );
    },
    [ onChange, value ]
  );
  const cn = cx( 'cf-form-input', css.select );

  return (
    <select className={cn} value={value} onChange={handleChange}>
      {children}
    </select>
  );
};

export default Select;
