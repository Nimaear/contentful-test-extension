//@flow
import * as React from 'react';
import Radio from './Radio';

type Props = {
  value: any,
  onChange: ( value: any ) => void,
  choices: Array<{
    value: any,
    label: string,
  }>,
};

const RadioGroup = ({ value, onChange, choices }: Props ) => {
  return (
    <div className="radio-editor__options">
      {choices.map(( choice ) => {
        return (
          <Radio
            checked={value === choice.value}
            onClick={onChange}
            value={choice.value}
            key={choice.value}
            label={choice.label}
          />
        );
      })}
    </div>
  );
};

export default RadioGroup;
