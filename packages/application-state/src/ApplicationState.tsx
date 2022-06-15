import { useEffect } from 'react';

import { Provider } from 'react-redux';
import store from './store';

import { createMockApi } from './mock-api';

// @ts-ignore
export const ApplicationState = ({children}) => {
  useEffect(() => {
    createMockApi();
  }, [createMockApi]);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}
