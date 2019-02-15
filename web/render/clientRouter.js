import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import Router from '../router';
import configStore from '../store';

let initStore = window.__INIT_STORE__;
let store = configStore(initStore);

function ClientRender() {
  return (
    <Provider store={store}>
      <BrowserRouter >
        <Router />
      </BrowserRouter>
    </Provider>

  )
}

ReactDOM.hydrate(<ClientRender/>, document.querySelector('#app'));