import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store.store}>
	    <BrowserRouter>
        <App />
	    </BrowserRouter>
    </Provider>
   </React.StrictMode>,
  document.getElementById('root')
);

