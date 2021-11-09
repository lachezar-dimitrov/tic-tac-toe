import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import StoreProvider from './components/StoreProvider/StoreProvider';
import AppStore from './store/AppStore';
import './index.less';

ReactDOM.render(
  <StoreProvider store={AppStore}>
    <App />
  </StoreProvider>,
  document.getElementById('root'),
);
