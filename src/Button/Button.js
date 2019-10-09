//@flow
import * as React from 'react';
import cx from 'classnames';
import css from './Button.css';

type Props = {
  active?: boolean,
  compact?: boolean,
  onClick: (value: any) => void,
  value?: any,
  className?: string,
  variant?: string,
};

const { useCallback } = React;

const Button = ({ active, onClick, className, variant, compact, value, ...other }: Props) => {
  const cn = cx(css.button, className, variant && css[variant], {
    [css.active]: active,
    [css.compact]: compact,
  });
  const handleClick = useCallback(() => {
    onClick && onClick(value);
  }, [value, onClick]);

  return <button className={cn} onClick={handleClick} {...other} />;
};

export default Button;
