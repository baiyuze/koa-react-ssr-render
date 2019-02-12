import React from 'react';
import { StaticRouter } from 'react-router'
import { Provider } from 'react-redux'
import CreateStore from './web/store/index'
import Router from './web/router';

function ServerRender(req, initStore) {
  let context = context ? context : {};
  let store = CreateStore(JSON.parse(initStore.store));

  return () => {
    return (
      <Provider store={store}>
        <StaticRouter location={req.url} context={context} >
          <Router />  
        </StaticRouter>
      </Provider>

    )
  }

}

export default ServerRender;
