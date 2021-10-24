import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { ToastProvider } from 'react-toast-notifications';

import ReactDOM from "react-dom";
import App from "./App";
import { store, persistor } from "./redux/store";
import "./base/sass/main.scss";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <ToastProvider autoDismiss={true}>
            <App />
          </ToastProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
