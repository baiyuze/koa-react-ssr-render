import React from 'react';
import { StaticRouter, Switch } from 'react-router'
import { BrowserRouter, Route, Link } from "react-router-dom";
import Page1 from './pages/page/index.jsx';
import Page2 from './pages/page2/index.jsx';
import Layout from './components/layout';

function RenderRouter() {
  return (
    <Switch>
      <Layout>
        <Route exact path='/' component={Page1} />
        <Route exact path='/page2' component={Page2} />
      </Layout>
    </Switch>
  )
}

export default RenderRouter;