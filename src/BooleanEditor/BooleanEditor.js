//@flow
import * as React from 'react';
import cx from 'classnames';

type Props = {
  value: any,
  onChange: ( value: any ) => void,
};

const { useCallback } = React;

const BooleanEditor = ({ value, onChange }: Props ) => {
  const setTrue = useCallback(() => {
    onChange && onChange( true );
  }, [ onChange ]);
  const setFalse = useCallback(() => {
    onChange && onChange( false );
  }, [ onChange ]);
  const cn = cx( 'radio-editor__options' );

  return (
    <div className={cn}>
      <label className="radio-editor__option">
        <input type="radio" onChange={setTrue} checked={value} className="radio-editor__input" />
        <span className="radio-editor__label">Yes</span>
      </label>
      <label className="radio-editor__option">
        <input type="radio" onChange={setFalse} checked={!value} className="radio-editor__input" />
        <span className="radio-editor__label">No</span>
      </label>
    </div>
  );
};

export default BooleanEditor;
