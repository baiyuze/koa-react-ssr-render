
/**
 * 渲染react页面
 */

 exports.renderHtml = async (ctx) => {
    ctx.renderServer("page1", {store: JSON.stringify({ counter: 1 }) });
 }
 exports.favicon = (ctx) => {
   ctx.body = null;
 }