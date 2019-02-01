// import ReactDOMServer from 'react-dom/server';
const Koa = require('koa');
const app = new Koa();
const path = require('path');
const dom = require('./build/bundle').default;
// const ele = require('./build/list');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const koaStatic = require('koa-static');
const { renderStylesToString, extractCritical } = require('emotion-server');
const manifest = require('./public/manifest.json');

let script = "";
let link = "";
for(let key in manifest) {
  if(key.indexOf('.js') !== -1) {
    script += `<script src="${manifest[key]}"></script>`;
  }
  if(key.indexOf('.css') !== -1) {
    link += `<link rel="stylesheet" href="${manifest[key]}"/>`;
  }
}

app.use(koaStatic(path.resolve(__dirname, './public'), {
  maxage: 0, //浏览器缓存max-age（以毫秒为单位）
  hidden: false, //允许传输隐藏文件
  index: 'index.html', // 默认文件名，默认为'index.html'
  defer: false, //如果为true，则使用后return next()，允许任何下游中间件首先响应。
  gzip: true, //当客户端支持gzip时，如果存在扩展名为.gz的请求文件，请尝试自动提供文件的gzip压缩版本。默认为true。
}));

app.use(async ctx => {
  let element = React.createElement(dom);
  const html = renderStylesToString(ReactDOMServer.renderToString(element));
  ctx.body = `
    <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>React SSR</title>
        ${link}
      </head>
      <body>
        <div id="app">${html}</div>
      </body>
      ${script}
    </html>
  `;

});

app.listen(3000, () => {
  console.log("服务器已启动，请访问http://127.0.0.1:3000")
});