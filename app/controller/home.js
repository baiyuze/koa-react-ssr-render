
/**
 * 渲染react页面
 */

 exports.renderHtml = async (ctx) => {
    let initState = ctx.query.state ? JSON.parse(ctx.query.state) : null;
    ctx.renderServer("page1", {store: JSON.stringify(initState ? initState : { counter: 1 }) });
 }
 exports.favicon = (ctx) => {
   ctx.body = 'xxx';
 }

 exports.test = (ctx) => {
   ctx.body = {
     data: `测试数据`
   }
 }