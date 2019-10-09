//@flow
import * as React from 'react';
import cx from 'classnames';
import css from './List.css';

type Props = {
  children: React.Node,
};

type GroupProps = {
  children: React.Node,
  grow?: boolean,
  padRight?: boolean,
};

const { useCallback } = React;

const Item = ({ children }: Props) => {
  return <div className={css.item}>{children}</div>;
};

const Group = ({ children, grow, padRight }: GroupProps) => {
  const cn = cx(css.group, {
    [css.grow]: grow,
    [css.padRight]: padRight,
  });
  return <div className={cn}>{children}</div>;
};
const Actions = ({ children }: Props) => {
  return <div className={css.actions}>{children}</div>;
};

const List = ({ children }: Props) => {
  return <div className={css.list}>{children}</div>;
};

List.Item = Item;
List.Actions = Actions;
List.Group = Group;

export default List;
