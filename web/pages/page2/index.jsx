import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';

function onClick() {
  console.log("我是页面2")
}
function Title(props) {
  return <div className='title-name'>
  专栏 4Ark 5小时前 程序员 分享一些好用的网站 73 5 专栏 saltfish666 5小时前 Vue.js Vue 源码中一些util函数 45 3 专栏 嘉乐MrMaple 1小时前 程序员年终总结 一个技术创业者的2018年度回顾和总结 | 掘金年度征文 4 3 小册修言 前端性能优化原理与实践 购买人数: 4886 特价: 19.9元 分享 专栏 極楽 1小时前 Node.js微信小程序 微信小程序websocket聊天室 4 专栏 call_me_R 3小时前 前端前端框架 【译】框架与库的差异 12 6 专栏 大翰仔仔 3小时前 面试 刷前端面经笔记（七） 5 专栏 小生方勤 4小时前 前端 【前端词典】继承（二） - “回”的八种写法 20 HollisChuang 6小时前 程序员编程语言 指引趋势与方向！2019开发者调查报告出炉 5 6 专栏 boomyao 3小时前 React.js React是如何区分class和function的？ 9 专栏 wznonstop 3小时前 前端掘金翻译计划 [译] 2019 前端性能优化年度总结 — 第五部分 7 热 专栏 frontdog 17小时前 前端 web页面录屏实现 89 7 专栏 超人汪小建 6小时前 前端算法 基于桶的基数排序 12 专栏 神奇排骨 3小时前 前端 浅析前端的模块化 8 专栏 我是一个前端 3小时前 JavaScript Javascript 事件循环event loop 6 freefrontend 5小时前 CSS 14 CSS Button Click Effects 6 专栏 boomyao 22小时前 React.js 为什么我们要添加 super(props) ？ 36 3 热 张熠 1天前 Vue.jsTypeScript 值得一看，Vue 作者尤雨溪的回答【TypeScript 不适合在 vue 业务开发中使用吗？】 45 9 专栏 南波 22小时前 JavaScript面试 JS专题之继承 29 1 专栏 MarcusY 1天前 CSS 【译】通过css，用一个div做一个芝士汉堡 51 14 简单卟容易 1天前 Vue.js vue修饰符--可能是东半球最详细的文档（滑稽） 114 4 专栏 sea_ljf 1天前 JavaScript 知多一点二进制中的负数 45 6 热 huangsw 1年前 前端 强烈推荐--基于 vue2.x table 组件 386 9 专栏 serialcoder 1天前 JavaScript函数式编程 再谈 JavaScript 函数式编程的适用性 45 2 专栏 南波 1天前 JavaScript面试 JS专题之垃圾回收 66 热 专栏 芬达Tz 2天前 CSS 如何使用css绘制钻石 66 5 专栏 caiyongji 8月前 面试Java 你的知识死角不能否定你的技术能力 38 10 专栏 掘墓人4449 1天前 微信 微信支付申请相关问
  <button onClick={onClick}>我是按钮</button>
  </div>
}

// if(process.env.WEBPACK_WEB) {
//   ReactDOM.hydrate(<Title/>, document.querySelector('#app'));
// } else {
export default  Title;
// }