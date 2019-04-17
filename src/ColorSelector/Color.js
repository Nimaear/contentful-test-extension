//@flow
import * as React from 'react';
import cx from 'classnames';
import css from './ColorSelector.css';

type Props = {
  active?: boolean,
  color: string,
  onSelect: ( value: string ) => void,
};

const { useCallback } = React;

const Color = ({ active, color, onSelect }: Props ) => {
  const cn = cx( css.color, css[ color ], {
    [ css.active ]: active,
  });

  const handleClick = useCallback(() => {
    onSelect && onSelect( color );
  }, [ color, onSelect ]);

  return <div key={color} onClick={handleClick} className={cn} />;
};

export default Color;
