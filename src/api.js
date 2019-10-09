//@flow
/* eslint-disable no-console */
import * as React from 'react';

const { useEffect, useState, useCallback } = React;

const setupApiForDev = callback => {
  let cache = null;

  const stubApi = {
    window: {
      startAutoResizer: () => {
        console.log('api:startAutoResizer');
      },
    },
    field: {
      getValue: () => {
        return cache;
      },
      setValue: value => {
        console.log('api:setValue', value);
        cache = value;
        return Promise.resolve();
      },
    },
  };
  callback(stubApi);
};

const setupApi = callback => {
  var cfExt = window.contentfulExtension || window.contentfulWidget;
  cfExt.init(api => {
    callback(api);
  });
};

const initApi = callback => {
  if (process.env.NODE_ENV === 'development') {
    setupApiForDev(callback);
  } else {
    setupApi(callback);
  }
};

let timeout;

const useApi = defaultValues => {
  const [api, setApi] = useState(null);
  const [value, setValue] = useState(defaultValues);

  const save = useCallback(
    newValue => {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      timeout = setTimeout(() => {
        api.field.setValue(newValue);
      }, 300);
    },
    [api]
  );

  useEffect(() => {
    initApi(cfApi => {
      cfApi.window.startAutoResizer();
      const storedValue = cfApi.field.getValue();
      if (storedValue) {
        setValue(storedValue);
      } else {
        cfApi.field.setValue(value);
      }
      setApi(cfApi);
    });
  }, [setApi, setValue]);

  const syncValue = useCallback(
    newValue => {
      save(newValue);
      setValue(newValue);
    },
    [api, setValue]
  );
  return [value, syncValue];
};

export default useApi;
