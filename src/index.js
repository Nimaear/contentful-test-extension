//@flow
import React from 'react';
import ReactDOM from 'react-dom';

type Props = {
  title: string,
};

const Test = ({ title = ' My stuff' }: Props ) => {
  return <div>{title}</div>;
};

ReactDOM.render(
  <div>
    <Test title=" hi" />
  </div>,
  document.getElementById( 'app' )
);

module.hot.accept();
