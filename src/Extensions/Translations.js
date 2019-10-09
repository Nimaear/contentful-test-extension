//@flow
import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '../Button/Button';
import css from '../Extensions/Extension.css';
import useApi from '../api';
import List from '../List/List';
import Input from '../Input/Input';

const { useCallback, useState } = React;

const TranslationRow = ({ index, message, translation, onChange, onCancel }) => {
  const [newKey, setNewKey] = useState(message);
  const [newValue, setNewValue] = useState(translation);

  const save = useCallback(() => {
    onChange && onChange(index, newKey, newValue);
  }, [newKey, newValue, onChange]);
  const cancel = useCallback(() => {
    onCancel && onCancel();
  }, [onCancel]);
  return (
    <List.Item>
      <List.Group padRight>
        <Input value={newKey} onChange={setNewKey} />
      </List.Group>
      <List.Group>
        <Input value={newValue} onChange={setNewValue} />
      </List.Group>
      <List.Actions>
        <Button compact onClick={save}>
          Save
        </Button>
        <Button compact onClick={cancel}>
          Cancel
        </Button>
      </List.Actions>
    </List.Item>
  );
};

const Translations = () => {
  const [value, setValue] = useApi({
    messages: [],
  });
  const [selectedRow, setSelectedRow] = useState(-1);

  const add = useCallback(() => {
    setValue({ messages: [...value.messages, { k: '', v: '' }] });
  }, [value, setValue]);

  const save = useCallback(
    (index, newKey, newValue) => {
      const newMessages = [...value.messages];
      newMessages[index] = { k: newKey, v: newValue };
      setValue({ messages: newMessages });
      setSelectedRow(-1);
    },
    [setValue, value, setSelectedRow]
  );
  const deleteRow = useCallback(
    index => {
      const newMessages = [...value.messages];
      newMessages.splice(index, 1);
      setValue({ messages: newMessages });
      setSelectedRow(-1);
    },
    [setValue, value, setSelectedRow]
  );
  const cancel = useCallback(() => {
    setSelectedRow(-1);
  }, [setSelectedRow]);

  return (
    <>
      <List>
        <List.Item>
          <List.Group>
            <strong>Message</strong>
          </List.Group>
          <List.Group>
            <strong>Translation</strong>
          </List.Group>
          <List.Actions> </List.Actions>
        </List.Item>
        {value.messages.map(({ k, v }, index) => {
          if (index === selectedRow) {
            return (
              <TranslationRow message={k} onCancel={cancel} onChange={save} translation={v} key={k} index={index} />
            );
          }
          return (
            <List.Item key={index}>
              <List.Group>
                <small>{k || <div> </div>}</small>
              </List.Group>
              <List.Group>
                <small>{v || <div> </div>}</small>
              </List.Group>
              <List.Actions>
                {selectedRow === -1 && (
                  <>
                    <Button compact value={index} onClick={setSelectedRow}>
                      Edit
                    </Button>
                    <Button compact value={index} onClick={deleteRow}>
                      Delete
                    </Button>
                  </>
                )}{' '}
              </List.Actions>
            </List.Item>
          );
        })}
      </List>
      <Button compact onClick={add}>
        Add
      </Button>
    </>
  );
};

const appEl = document.getElementById('app');
if (appEl) {
  ReactDOM.render(<Translations />, appEl);
}

if (module.hot) {
  module.hot.accept();
}
