/**
 *
 * @param {angel 实例化对象} app
 */

const home = require('./controller/home');

module.exports = (router) => {
  // let { router, config } = app;

  router.get('/',home.renderHtml);
  router.get('/page2',home.renderHtml);
  router.get('/favicon.ico',home.favicon);
  

}
