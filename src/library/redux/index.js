import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './configureStore';

export const withRedux = PageComponent => {
  const WhithRedux = ({initialReduxState, ...props}) => {
    const store = configureStore();

    return (
      <Provider store={store}>
        <PageComponent {...props} />
      </Provider>
    );
  };
  return WhithRedux
};
