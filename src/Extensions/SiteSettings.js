//@flow
import * as React from 'react';
import ReactDOM from 'react-dom';
import FormField from '../FormField/FormField';
import Button from '../Button/Button';
import css from '../Extensions/Extension.css';
import useApi from '../api';
import GlobalMessageEditor from '../GlobalMessageEditor/GlobalMessageEditor';

const { useCallback, Fragment } = React;

const SiteSettings = () => {
  const [siteSettings, setSiteSettings] = useApi({
    maintenance: false,
    globalMessage: {
      enabled: false,
      heading: '',
      message: '',
      type: 'info',
    },
  });

  const setMaintenance = useCallback(
    maintenance => {
      setSiteSettings({
        ...siteSettings,
        maintenance,
      });
    },
    [siteSettings, setSiteSettings]
  );

  const setGlobalMessage = useCallback(
    globalMessage => {
      setSiteSettings({
        ...siteSettings,
        globalMessage,
      });
    },
    [siteSettings, setSiteSettings]
  );

  return (
    <Fragment>
      <FormField label="Maintenance mode">
        <Button active={siteSettings.maintenance} value={true} onClick={setMaintenance}>
          ON
        </Button>
        <Button active={!siteSettings.maintenance} value={false} onClick={setMaintenance}>
          Off
        </Button>
      </FormField>
      <GlobalMessageEditor globalMessage={siteSettings.globalMessage} onChange={setGlobalMessage} />
    </Fragment>
  );
};

const appEl = document.getElementById('app');
if (appEl) {
  ReactDOM.render(<SiteSettings />, appEl);
}

if (module.hot) {
  module.hot.accept();
}
