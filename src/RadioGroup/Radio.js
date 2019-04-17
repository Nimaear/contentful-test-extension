//@flow
import * as React from 'react';

type RadioProps = {
  value: any,
  label: string,
  onClick: ( value: any ) => void,
  checked?: boolean,
};

const { useCallback } = React;

const Radio = ({ value, onClick, label, checked }: RadioProps ) => {
  const handleClick = useCallback(() => {
    onClick && onClick( value );
  }, [ value, onClick ]);

  return (
    <label className="radio-editor__option">
      <input type="radio" onClick={handleClick} checked={checked} className="radio-editor__input" />
      <span className="radio-editor__label">{label}</span>
    </label>
  );
};

export default Radio;
