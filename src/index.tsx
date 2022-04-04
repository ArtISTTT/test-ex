import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './controllers/App';
import store from './reducers';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

