import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as i,o as e}from"./app-_9vaDOHR.js";const l="/assets/image01-KUFShwNA.jpg",p="/assets/image02-BNVC4ULY.jpg",r={};function t(d,s){return e(),a("div",null,s[0]||(s[0]=[i('<h1 id="前端路由" tabindex="-1"><a class="header-anchor" href="#前端路由"><span>前端路由</span></a></h1><ul><li>前端路由库</li><li>状态管理库</li><li>前端组件库</li></ul><p>Vue 生态中选择这三个最最最重要的生态库来介绍。</p><h2 id="什么是前端路由" tabindex="-1"><a class="header-anchor" href="#什么是前端路由"><span><strong>什么是前端路由</strong></span></a></h2><p>实际上在最早的多页应用时代，并不存在前端路由这么一说，那个时候路由是属于后端（服务器端）的东西，后端会根据不同的请求路由返回不同的页面。</p><figure><img src="'+l+'" alt="示例图片" tabindex="0" loading="lazy"><figcaption>示例图片</figcaption></figure><p>在此开发时期有两个特点：</p><ul><li>整个项目的前后端代码是杂糅在一起的。</li><li>多页应用时代，每次切换一个页面，都需要重新请求服务器。</li></ul><p>后面慢慢就到了单页应用时代，该时代的特点就是只有一个 HTML 页面，以前视图的切换是整个 HTML 页面的切换，而现在视图的切换是页面上某个模块的切换。</p><figure><img src="'+p+`" alt="示例图片" tabindex="0" loading="lazy"><figcaption>示例图片</figcaption></figure><p>上图中的模块其实就是对应 Vue 中不同的组件，这种组件我们称之为页面级组件。有了页面级组件，需要和路由产生一个映射关系，这个其实就是前端路由。</p><p>虽然有了前端路由，但是后端路由仍然存在，只不过从之前的路由和页面的映射关系变成了路由和数据接口之间的映射关系。</p><h2 id="vue生态的前端路由" tabindex="-1"><a class="header-anchor" href="#vue生态的前端路由"><span><strong>Vue生态的前端路由</strong></span></a></h2><p>Vue生态的前端路由是由 Vue 官方推出的，叫做 Vue Router：<a href="https://router.vuejs.org/zh/" target="_blank" rel="noopener noreferrer">https://router.vuejs.org/zh/</a></p><p>首先第一步，需要安装该路由库：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>npm install vue-router@4</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>快速入门</strong></p><ol><li>我们需要创建两个页面级别的组件，放在 views 目录下面。</li><li>在 src 下面创建一个 router 目录，用于存放前端路由配置，然后在该目录下面创建一个 index.js，该文件书写具体的路由配置</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 前端路由配置文件</span></span>
<span class="line"><span>import { createRouter, createWebHistory } from &#39;vue-router&#39;</span></span>
<span class="line"><span>// 页面组件</span></span>
<span class="line"><span>import Home from &#39;../views/Home.vue&#39;</span></span>
<span class="line"><span>import About from &#39;../views/About.vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 该方法会创建一个路由的实例</span></span>
<span class="line"><span>// 在创建路由实例的时候，可以传入一个配置对象</span></span>
<span class="line"><span>const router = createRouter({</span></span>
<span class="line"><span>  history: createWebHistory(), // 指定前端路由的模式，常见的有 hash 和 history 两种模式</span></span>
<span class="line"><span>  // 路由和组件的映射</span></span>
<span class="line"><span>  routes: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      path: &#39;/&#39;, // 路由的路径</span></span>
<span class="line"><span>      name: &#39;Home&#39;,</span></span>
<span class="line"><span>      component: Home // 路由对应的组件</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      path: &#39;/about&#39;,</span></span>
<span class="line"><span>      name: &#39;About&#39;,</span></span>
<span class="line"><span>      component: About</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>export default router</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>需要将该配置所导出的路由实例在 main.js 入口文件中进行挂载</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// main.js</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 引入路由实例</span></span>
<span class="line"><span>import router from &#39;@/router&#39;</span></span>
<span class="line"><span>// ...</span></span>
<span class="line"><span>// 挂载</span></span>
<span class="line"><span>app.use(router).mount(&#39;#app&#39;)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>接下来就可以在组件中使用了</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span>    &lt;h1&gt;欢迎来到Vue-router快速入门示例&lt;/h1&gt;</span></span>
<span class="line"><span>    &lt;nav&gt;</span></span>
<span class="line"><span>      &lt;!-- 该组件由 vue-router 这个库提供的 --&gt;</span></span>
<span class="line"><span>      &lt;router-link to=&quot;/&quot;&gt;Home&lt;/router-link&gt;</span></span>
<span class="line"><span>      &lt;router-link to=&quot;/about&quot;&gt;About&lt;/router-link&gt;</span></span>
<span class="line"><span>    &lt;/nav&gt;</span></span>
<span class="line"><span>    &lt;!-- 由 vue-router 这个库提供的 --&gt;</span></span>
<span class="line"><span>    &lt;!-- 路由所匹配上的组件，会渲染到这个位置 --&gt;</span></span>
<span class="line"><span>    &lt;router-view /&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>#app {</span></span>
<span class="line"><span>  font-family: &#39;Avenir&#39;, Helvetica, Arial, sans-serif;</span></span>
<span class="line"><span>  text-align: center;</span></span>
<span class="line"><span>  color: #2c3e50;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>nav a {</span></span>
<span class="line"><span>  padding: 15px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面会用到两个由 vue-router 库为我们提供的组件：</p><ul><li>router-link：指示具体的跳转路由路径</li><li>router-view：显示匹配的路由所对应的组件</li></ul><hr><ul><li>EOF-</li></ul>`,27)]))}const v=n(r,[["render",t],["__file","Vue17.html.vue"]]),o=JSON.parse('{"path":"/Vue/Vue17.html","title":"前端路由","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"什么是前端路由","slug":"什么是前端路由","link":"#什么是前端路由","children":[]},{"level":2,"title":"Vue生态的前端路由","slug":"vue生态的前端路由","link":"#vue生态的前端路由","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":2.69,"words":808},"filePathRelative":"Vue/Vue17.md"}');export{v as comp,o as data};
