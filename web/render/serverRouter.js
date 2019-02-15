import React from 'react';
import { StaticRouter } from 'react-router'
import { Provider } from 'react-redux'
import CreateStore from '../store/index.js'
import Router from '../router.js';

function ServerRender(req, initStore) {
  let store = CreateStore(JSON.parse(initStore.store));

  return (props, context) => {
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
