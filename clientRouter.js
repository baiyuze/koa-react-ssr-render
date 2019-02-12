import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import Router from './web/router';
import configStore from './web/store';

let initStore = window.__INIT_STORE__;
console.log(initStore,'initStore')
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