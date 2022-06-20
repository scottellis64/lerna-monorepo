import { Provider } from 'react-redux';
import store from './store';

// @ts-ignore
export const ApplicationState = ({children}) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}
