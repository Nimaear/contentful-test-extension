//@flow
import * as React from 'react';
import ReactDOM from 'react-dom';
import FormField from '../FormField/FormField';
import Container from '../Svg/Container';
import LeftAlign from '../Svg/LeftAlign';
import CenterAlign from '../Svg/CenterAlign';
import Justify from '../Svg/Justify';
import Grid from '../Svg/Grid';
import Button from '../Svg/Button';
import ColorSelector from '../ColorSelector/ColorSelector';
import BooleanEditor from '../BooleanEditor/BooleanEditor';
import GridEditor from '../GridEditor/GridEditor';
import './Extension.css';
import useApi from '../api';

const { useCallback, Fragment } = React;

const defaultGripOptions = {
  columnsOnMobile: 1,
  columnsOnTablet: 2,
  columnsOnDesktop: 4,
  columnsOnWidescreen: 4,
  vAlign: 'top',
};

const defaultContainerOptions = {
  hAlign: 'left',
};

const Layout = () => {
  const [ value, setValue ] = useApi({
    color: 'grey',
    isFullScreen: false,
    type: 'container',
    container: {
      ...defaultContainerOptions,
    },
    grid: {},
  });
  const grid = value.grid || {};
  const container = value.container || {};

  const setColor = useCallback(
    ( color ) => {
      setValue({
        ...value,
        color,
      });
    },
    [ value, setValue ]
  );

  const setType = useCallback(
    ( type ) => {
      const newValue = {
        ...value,
        type,
      };
      if ( type === 'grid' ) {
        newValue.grid = {
          ...defaultGripOptions,
          ...newValue.grid,
        };
      } else {
        newValue.container = {
          ...defaultContainerOptions,
          ...newValue.container,
        };
      }
      setValue( newValue );
    },
    [ value, setValue ]
  );
  const setGrid = useCallback(
    ( grid ) => {
      setValue({
        ...value,
        grid,
      });
    },
    [ value, setValue ]
  );
  const setIsFullscreen = useCallback(
    ( isFullScreen ) => {
      setValue({
        ...value,
        isFullScreen,
      });
    },
    [ value, setValue ]
  );
  const setHAlign = useCallback(
    ( hAlign ) => {
      setValue({
        ...value,
        container: {
          ...value.container,
          hAlign,
        },
      });
    },
    [ value, setValue ]
  );
  const hasTextAlignment = value.type === 'container' && !value.isFullScreen;
  return (
    <Fragment>
      <FormField label="Background color">
        <ColorSelector onSelect={setColor} value={value.color} />
      </FormField>
      <FormField label="Fullscreen">
        <BooleanEditor value={!!value.isFullScreen} onChange={setIsFullscreen} />
      </FormField>
      <FormField label="Container type">
        <Button active={value.type === 'container'} value="container" onClick={setType}>
          <Container />
        </Button>
        <Button active={value.type === 'grid'} value="grid" onClick={setType}>
          <Grid />
        </Button>
      </FormField>
      {value.type === 'grid' && <GridEditor grid={grid} onChange={setGrid} />}
      {hasTextAlignment && (
        <FormField label="Text alignment">
          <Button active={container.hAlign === 'left'} value="left" onClick={setHAlign}>
            <LeftAlign />
          </Button>
          <Button active={container.hAlign === 'center'} value="center" onClick={setHAlign}>
            <CenterAlign />
          </Button>
          <Button active={container.hAlign === 'right'} value="right" onClick={setHAlign}>
            <LeftAlign flip />
          </Button>
          <Button active={container.hAlign === 'justify'} value="justify" onClick={setHAlign}>
            <Justify />
          </Button>
        </FormField>
      )}
    </Fragment>
  );
};

ReactDOM.render( <Layout />, document.getElementById( 'app' ));

module.hot.accept();
