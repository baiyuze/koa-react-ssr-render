/**
 *
 * @param {router 实例化对象} app
 */

const home = require('./controller/home');

module.exports = (router) => {
  router.get('/',home.renderHtml);
  router.get('/page2',home.renderHtml);
  router.get('/favicon.ico',home.favicon);
  router.get('/test',home.test);
}
