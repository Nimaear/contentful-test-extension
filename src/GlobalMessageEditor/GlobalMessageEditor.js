//@flow
import * as React from 'react';
import css from '../Extensions/Extension.css';
import FormField from '../FormField/FormField';
import Button from '../Button/Button';
import Input from '../Input/Input';
import TextArea from '../TextArea/TextArea';

type Props = {
  globalMessage: {
    enabled: boolean,
    message: string,
    heading: string,
    type: 'warning' | 'success' | 'info' | 'error',
  },
  onChange: (value: any) => void,
};

const { useCallback, Fragment } = React;

const GlobalMessageEditor = ({ globalMessage, onChange }: Props) => {
  const setGlobalMessageText = useCallback(
    message => {
      onChange({
        ...globalMessage,
        message,
      });
    },
    [globalMessage, onChange]
  );

  const setGlobalMessageHeading = useCallback(
    heading => {
      onChange({
        ...globalMessage,
        heading,
      });
    },
    [globalMessage, onChange]
  );
  const setMessageType = useCallback(
    type => {
      onChange({
        ...globalMessage,
        type,
      });
    },
    [globalMessage, onChange]
  );

  const setEnabled = useCallback(
    enabled => {
      onChange({
        ...globalMessage,
        enabled,
      });
    },
    [globalMessage, onChange]
  );

  return (
    <Fragment>
      <div className={css.header}>Global message</div>
      <FormField label="">
        <Button active={globalMessage.enabled} value={true} onClick={setEnabled}>
          Enable
        </Button>
        <Button active={!globalMessage.enabled} value={false} onClick={setEnabled}>
          Disable
        </Button>
      </FormField>
      {globalMessage.enabled && (
        <div className={css.indented}>
          <FormField label="Type">
            <Button
              variant={globalMessage.type === 'warning' ? 'warning' : undefined}
              value={'warning'}
              onClick={setMessageType}
            >
              Warning
            </Button>
            <Button
              variant={globalMessage.type === 'error' ? 'error' : undefined}
              value={'error'}
              onClick={setMessageType}
            >
              Error
            </Button>
            <Button
              variant={globalMessage.type === 'info' ? 'info' : undefined}
              value={'info'}
              onClick={setMessageType}
            >
              Info
            </Button>
            <Button
              variant={globalMessage.type === 'success' ? 'success' : undefined}
              value={'success'}
              onClick={setMessageType}
            >
              Success
            </Button>
          </FormField>
          <FormField label="Heading">
            <Input value={globalMessage.heading} onChange={setGlobalMessageHeading} />
          </FormField>
          <FormField label="Message">
            <TextArea value={globalMessage.message} onChange={setGlobalMessageText} />
          </FormField>
        </div>
      )}
    </Fragment>
  );
};

export default GlobalMessageEditor;
