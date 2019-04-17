//@flow
import * as React from 'react';
import cx from 'classnames';
import css from './FormField.css';

type Props = {
  label?: string,
  children: React.Node,
  inline?: boolean,
};

const FormField = ({ inline, children, label }: Props ) => {
  const cn = cx( 'cf-form-field', {
    [ css.inline ]: inline,
  });
  return (
    <div className={cn}>
      {label && <label>{label}</label>}
      {children}
    </div>
  );
};

export default FormField;
