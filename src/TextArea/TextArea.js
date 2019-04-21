//@flow
import * as React from 'react';
import cx from 'classnames';

type Props = {
  value: any,
  onChange: (value: any) => void,
};

const { useCallback } = React;

const TextArea = ({ value, onChange, ...other }: Props) => {
  const handleChange = useCallback(
    event => {
      onChange && onChange(event.target.value);
    },
    [onChange, value]
  );
  const cn = cx('cf-form-input');

  return <textarea {...other} className={cn} value={value} onChange={handleChange} />;
};

export default TextArea;
