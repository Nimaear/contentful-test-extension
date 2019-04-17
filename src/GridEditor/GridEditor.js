//@flow
import * as React from 'react';
import css from './GridEditor.css';
import FormField from '../FormField/FormField';
import Input from '../Input/Input';
import TopAlign from '../Svg/TopAlign';
import MiddleAlign from '../Svg/MiddleAlign';
import Button from '../Svg/Button';

type Props = {
  grid: {
    columnsOnMobile: number,
    columnsOnTablet: number,
    columnsOnDesktop: number,
    columnsOnWidescreen: number,
  },
  onChange: ( value: any ) => void,
};

const { useCallback, Fragment } = React;

const GridEditor = ({ grid, onChange }: Props ) => {
  const setColumnOnMobile = useCallback(
    ( columnsOnMobile ) => {
      onChange({
        ...grid,
        columnsOnMobile: parseInt( columnsOnMobile, 10 ),
      });
    },
    [ grid, onChange ]
  );
  const setColumnOnTablet = useCallback(
    ( columnsOnTablet ) => {
      onChange({
        ...grid,
        columnsOnTablet: parseInt( columnsOnTablet, 10 ),
      });
    },
    [ grid, onChange ]
  );
  const setColumnOnDesktop = useCallback(
    ( columnsOnDesktop ) => {
      onChange({
        ...grid,
        columnsOnDesktop: parseInt( columnsOnDesktop, 10 ),
      });
    },
    [ grid, onChange ]
  );
  const setColumnOnWidescreen = useCallback(
    ( columnsOnWidescreen ) => {
      onChange({
        ...grid,
        columnsOnWidescreen: parseInt( columnsOnWidescreen, 10 ),
      });
    },
    [ grid, onChange ]
  );
  const setVAlign = useCallback(
    ( vAlign ) => {
      onChange({
        ...grid,
        vAlign,
      });
    },
    [ grid, onChange ]
  );
  return (
    <Fragment>
      <FormField label="Vertical alignment">
        <Button active={grid.vAlign === 'top'} value="top" onClick={setVAlign}>
          <TopAlign />
        </Button>
        <Button active={grid.vAlign === 'middle'} value="middle" onClick={setVAlign}>
          <MiddleAlign />
        </Button>
        <Button active={grid.vAlign === 'bottom'} value="bottom" onClick={setVAlign}>
          <TopAlign flip />
        </Button>
      </FormField>
      <div className={css.header}>Columns</div>
      <div className={css.indented}>
        <FormField label="Mobile" inline>
          <Input type="number" value={grid.columnsOnMobile || 1} onChange={setColumnOnMobile} />
        </FormField>
        <FormField label="Tablet" inline>
          <Input type="number" value={grid.columnsOnTablet || grid.columnsOnMobile} onChange={setColumnOnTablet} />
        </FormField>
        <FormField label="Desktop" inline>
          <Input type="number" value={grid.columnsOnDesktop || grid.columnsOnTablet} onChange={setColumnOnDesktop} />
        </FormField>
        <FormField label="Widescreen" inline>
          <Input
            type="number"
            value={grid.columnsOnWidescreen || grid.columnsOnWidescreen}
            onChange={setColumnOnWidescreen}
          />
        </FormField>
      </div>
    </Fragment>
  );
};

export default GridEditor;
