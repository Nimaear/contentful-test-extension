//@flow
import * as React from 'react';
import cx from 'classnames';
import css from './Button.css';

type Props = {
  active?: boolean,
  onClick: ( value: any ) => void,
  value?: any,
};

const { useCallback } = React;

const Button = ({ active, onClick, value, ...other }: Props ) => {
  const cn = cx( css.button, {
    [ css.active ]: active,
  });
  const handleClick = useCallback(() => {
    onClick && onClick( value );
  }, [ value, onClick ]);

  return <button className={cn} onClick={handleClick} {...other} />;
};

export default Button;
