import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as i,o as e}from"./app-_9vaDOHR.js";const l="/assets/image03-B_WkeJyV.jpg",p="/assets/image04-WCGTlUyo.png",t={};function r(c,n){return e(),a("div",null,n[0]||(n[0]=[i('<h1 id="状态管理库" tabindex="-1"><a class="header-anchor" href="#状态管理库"><span>状态管理库</span></a></h1><h2 id="状态管理库基本介绍" tabindex="-1"><a class="header-anchor" href="#状态管理库基本介绍"><span><strong>状态管理库基本介绍</strong></span></a></h2><p>所谓状态管理库，就是用于<strong>管理一个应用中组件的状态</strong>的。</p><p>传统方式组件之间传递状态:</p><ul><li>父传子用 Props</li><li>子传父用 Emit</li></ul><p>这种方式存在的问题？</p><p>如果你的应用的规模一旦慢慢变大，那么不同层级之间组件的状态传递，就会变得非常的麻烦。</p><figure><img src="'+l+'" alt="传统方式组件之间传递状态" tabindex="0" loading="lazy"><figcaption>传统方式组件之间传递状态</figcaption></figure><p>状态管理库如何解决这个问题的？</p><p>在状态管理库中，会有一个统一的地方（数据仓库）管理所有的状态，这个时候组件之间要进行状态的传递，只需要一个组件将状态提交到仓库，然后另一个组件从仓库获取最新的状态即可。</p><figure><img src="'+p+`" alt="状态管理库" tabindex="0" loading="lazy"><figcaption>状态管理库</figcaption></figure><h2 id="vue生态的状态管理库" tabindex="-1"><a class="header-anchor" href="#vue生态的状态管理库"><span><strong>Vue生态的状态管理库</strong></span></a></h2><p>目前，Vue 生态官方所推荐的状态管理库是 Pinia，这是目前最新的状态管理库，用于替代以前的 Vuex 的，因此我们也是以 Pinia 为主，介绍这个最新的状态管理库。</p><p>Pinia ，发音为 /piːnjʌ/，来源于西班牙语 piña 。意思为菠萝，表示与菠萝一样，由很多小块组成。在 Pinia 中，<strong>每个 Store 都是单独存在</strong>，一同进行状态管理。</p><p>Pinia 是由 Vue.js 团队成员开发，最初是在 2019 年 11 月左右作为<strong>一项实验性工作</strong>提出的，目的是为了使用 Composition API 重新设计 Vuex，探索 Vuex 下一次迭代会是什么样子。但是 Pinia 在设计之初就倾向于同时支持 Vue 2 和 Vue 3，并且不强制要求开发者使用组合式 API。在探索的过程中，Pinia 实现了 Vuex5 提案的大部分内容，于是就直接取而代之了。</p><p>目前 Vue 官方已经宣布 Pinia 就是新一代的 Vuex，但是为了尊重作者本人，名字保持不变，仍然叫做 Pinia。</p><p>与之前的 Vuex 相比，Pinia 提供了更简单的 API，更少的规范，以及 <em>Composition-API</em> 风格的 API 。更重要的是，与 <em>TypeScript</em> 一起使用具有可靠的类型推断支持。</p><p>Pinia 官网地址：<a href="https://pinia.vuejs.org/" target="_blank" rel="noopener noreferrer">https://pinia.vuejs.org/</a></p><p>!<a href="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2023-03-21-093840.png" target="_blank" rel="noopener noreferrer">https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2023-03-21-093840.png</a></p><p>对比之前的 Vuex，Pinia 具有如下的特点：</p><ol><li><strong>mutations 不复存在</strong>。只有 state 、getters 、actions</li><li>actions 中支持<strong>同步</strong>和<strong>异步</strong>方法修改 state 状态</li><li>与 TypeScript 一起使用具有可靠的类型推断支持</li><li><strong>不再有模块嵌套</strong>，只有 Store 的概念，Store 之间可以相互调用</li><li><strong>支持插件扩展</strong>，可以非常方便实现本地存储等功能</li><li>更加<strong>轻量</strong>，压缩后体积只有 2kb 左右</li></ol><h2 id="快速入门" tabindex="-1"><a class="header-anchor" href="#快速入门"><span><strong>快速入门</strong></span></a></h2><p>首先第一步仍然是安装</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>npm install pinia</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>接下来，需要在 Vue 应用中挂载 Pinia</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>import { createApp } from &#39;vue&#39;</span></span>
<span class="line"><span>// 引入了根组件</span></span>
<span class="line"><span>import App from &#39;./App.vue&#39;</span></span>
<span class="line"><span>import { createPinia } from &#39;pinia&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 挂载根组件</span></span>
<span class="line"><span>const app = createApp(App)</span></span>
<span class="line"><span>// 创建一个 pinia 的实例</span></span>
<span class="line"><span>const pinia = createPinia()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.use(pinia).mount(&#39;#app&#39;)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下一步就是创建数据仓库。src 目录下面创建一个 stores 是目录，该目录是数据仓库目录，下面可以对应多个数据仓库，每个数据仓库就是一个 JS 文件。</p><p>注意名字一般叫做 useXXXStore：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>import { defineStore } from &#39;pinia&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export const useCounterStore = defineStore(&#39;counter&#39;, {</span></span>
<span class="line"><span>  // 定义数据状态</span></span>
<span class="line"><span>  state: () =&gt; {</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      count: 0</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  // 定义了修改数据状态的两个方法</span></span>
<span class="line"><span>  actions: {</span></span>
<span class="line"><span>    increment() {</span></span>
<span class="line"><span>      this.count++</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    decrement() {</span></span>
<span class="line"><span>      this.count--</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过 defineStore 方法来创建一个数据仓库，该方法接收两个参数：</p><ul><li>仓库名称</li><li>配置对象，在该配置对象里面就可以定义 state、getters、actions</li></ul><p>最后就可以在组件中，使用数据仓库里面的状态：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;counter&quot;&gt;</span></span>
<span class="line"><span>    &lt;h1&gt;计数器：{{ conterStore.count }}&lt;/h1&gt;</span></span>
<span class="line"><span>    &lt;button @click=&quot;conterStore.increment&quot;&gt;增加&lt;/button&gt;</span></span>
<span class="line"><span>    &lt;button @click=&quot;conterStore.decrement&quot;&gt;减少&lt;/button&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { useCounterStore } from &#39;./stores/useCounterStore.js&#39;</span></span>
<span class="line"><span>// 获取数据仓库</span></span>
<span class="line"><span>const conterStore = useCounterStore()</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>.counter {</span></span>
<span class="line"><span>  display: flex;</span></span>
<span class="line"><span>  flex-direction: column;</span></span>
<span class="line"><span>  align-items: center;</span></span>
<span class="line"><span>  gap: 10px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>button {</span></span>
<span class="line"><span>  padding: 10px 20px;</span></span>
<span class="line"><span>  font-size: 16px;</span></span>
<span class="line"><span>  cursor: pointer;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><ul><li>EOF-</li></ul>`,35)]))}const u=s(t,[["render",r],["__file","Vue19.html.vue"]]),v=JSON.parse('{"path":"/Vue/Vue19.html","title":"状态管理库","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"状态管理库基本介绍","slug":"状态管理库基本介绍","link":"#状态管理库基本介绍","children":[]},{"level":2,"title":"Vue生态的状态管理库","slug":"vue生态的状态管理库","link":"#vue生态的状态管理库","children":[]},{"level":2,"title":"快速入门","slug":"快速入门","link":"#快速入门","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":3.36,"words":1007},"filePathRelative":"Vue/Vue19.md"}');export{u as comp,v as data};
