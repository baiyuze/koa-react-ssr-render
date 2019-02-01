
/**
 * 渲染react页面
 */

 exports.renderHtml = async (ctx) => {
    ctx.renderServer("page1");
 }

 

 exports.renderPage2 = async (ctx) => {
  ctx.renderServer("page2");
 }

 exports.favicon = (ctx) => {
   ctx.body = null;
 }