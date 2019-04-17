//@flow
import * as React from 'react';
import Color from './Color';
import css from './ColorSelector.css';

type Props = {
  children: React.Node,
  value: any,
  onSelect: ( value: any ) => void,
};

const colors = [ 'white', 'black', 'canvas', 'grey', 'magenta' ];

const { useCallback } = React;

const ColorSelector = ({ value, onSelect }: Props ) => {
  const handleChange = useCallback(
    ( color ) => {
      onSelect && onSelect( color );
    },
    [ onSelect ]
  );

  return (
    <div className={css.colorSelector}>
      {colors.map(( color ) => {
        return <Color key={color} onSelect={handleChange} color={color} active={value === color} />;
      })}
    </div>
  );
};

export default ColorSelector;
