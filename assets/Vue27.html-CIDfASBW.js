import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as e,o as i}from"./app-_9vaDOHR.js";const l={};function p(d,s){return i(),a("div",null,s[0]||(s[0]=[e(`<h1 id="响应式和组件渲染" tabindex="-1"><a class="header-anchor" href="#响应式和组件渲染"><span>响应式和组件渲染</span></a></h1><p>回顾一下之前讲的内容：</p><ul><li>模板的本质：对应的就是 render 渲染<strong>函数</strong>，该函数执行之后，会返回虚拟 DOM，这是一种用来描述真实 DOM 的数据结构。</li><li>响应式的本质：当数据发生变化的时候，依赖该数据的<strong>函数</strong>重新运行。</li></ul><p>假设 render 函数运行期间用到了响应式数据会怎么样？</p><p>结果很简单，那就是这个 render 函数会和响应式数据关联起来，当响应式数据发生变化的时候，所关联的 render 函数会重新运行，从而得到新的虚拟 DOM 结构，然后渲染器会根据新的虚拟 DOM 结构去更新真实 DOM 结构，从而在视觉感官上看到的是界面的变化。</p><blockquote><p>这里说是重新运行 render，其实都还不是最准确的表达，实际上源码内部是和 updateComponent 方法进行的关联，而该方法的内部调用了 render 函数。</p></blockquote><p><strong>再看模板编译</strong></p><p>App.vue</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;{{ name }}&lt;/div&gt;</span></span>
<span class="line"><span>  &lt;div&gt;{{ age }}&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span>let name = ref(&#39;Bill&#39;)</span></span>
<span class="line"><span>let age = ref(18)</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的代码中，模板用到了两个响应式数据，在模板中使用 ref 是会自动解包 value 的，因此这里就相当于在读取 vlaue 值，读取 value 就会产生读取的拦截，然后这两个响应式数据就会被模板背后所对应的渲染函数关联起来，有了依赖关系。</p><p>有了依赖关系之后，响应式数据的变化就会导致渲染函数（被监控的函数）重新执行，得到新的虚拟 DOM，从而 UI 得到更新。</p><p>下面是通过 vite-plugin-inspect 插件进行编译分析，从而验证上面的说法：</p><p>!<a href="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2024-05-24-015001.png" target="_blank" rel="noopener noreferrer">https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2024-05-24-015001.png</a></p><p>在 setup 函数中定义了响应式数据，会转变成一个 <strong>returned</strong> 的一个对象的访问器属性，针对这两个属性进行读取和赋值的时候，就会被拦截到。</p><p>在 _sfc_render 渲染函数中，setup 所返回的对象通过 $setup 参数可以拿到，在渲染函数中，通过 $<a href="http://setup.name" target="_blank" rel="noopener noreferrer">setup.name</a> 和 $setup.age 访问这两个访问器属性，产生读取行为的拦截，从而建立了依赖关系。</p><p><strong>为什么Vue能实现精准更新</strong></p><p><strong>Vue 的更新是组件级别的</strong>，通过响应式，能够知道具体是哪个组件更新了。</p><p>因为响应式数据是和 render 函数关联在一起，整个 render 函数对应的就是一整个组件的结构，回头只要响应式数据一变化，render 函数就会重新执行，生成组件新的虚拟 DOM 结构。</p><p>之后要知道具体是哪一个节点更新，就需要靠 diff 算法了。</p><ul><li>Vue2: 双端 diff</li><li>Vue3: 快速 diff</li></ul><p><strong>为什么Vue能实现数据共享</strong></p><p>在 Vue 中是可以轻松实现数据共享的。<strong>只需要将响应式数据单独提取出来，然后多个组件依赖这个响应式数据，之后只要这个响应式数据一变，依赖该数据的组件自然也会重新运行 render，然后渲染器渲染新的 DOM</strong>.</p><p>来看一个例子：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>import { reactive } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export const store = reactive({</span></span>
<span class="line"><span>  todos: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      id: 1,</span></span>
<span class="line"><span>      text: &#39;学习Vue3&#39;,</span></span>
<span class="line"><span>      completed: false</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      id: 2,</span></span>
<span class="line"><span>      text: &#39;学习React&#39;,</span></span>
<span class="line"><span>      completed: false</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      id: 3,</span></span>
<span class="line"><span>      text: &#39;学习Angular&#39;,</span></span>
<span class="line"><span>      completed: false</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  addTodo(todo) {</span></span>
<span class="line"><span>    this.todos.push(todo)</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  toggleTodo(id) {</span></span>
<span class="line"><span>    const todo = this.todos.find((todo) =&gt; todo.id === id)</span></span>
<span class="line"><span>    if (todo) {</span></span>
<span class="line"><span>      todo.completed = !todo.completed</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>完整的 demo 代码请参阅本节课的配套的课件。</p></blockquote><p>那 Pinia 的作用呢？</p><p>Pinia 是经过了完善的测试的，会给你带来很多附加的价值，例如：</p><ul><li>开发工具支持</li><li>热替换</li><li>插件机制</li><li>自动补全</li><li>SSR</li></ul><p>而且相比一个单纯的响应式数据，Pinia 语义上面也会更好一些：</p><ul><li>一个单独抽出来的 reactive 对象，从语义上来讲可能是任何东西</li><li>一个 Pinia 对象，从语义上来讲就是全局共享数据的仓库</li></ul><p>这样其实也能一定程度的降低开发者的心智负担，提高代码的可读性。</p><hr><ul><li>EOF-</li></ul>`,33)]))}const c=n(l,[["render",p],["__file","Vue27.html.vue"]]),o=JSON.parse('{"path":"/Vue/Vue27.html","title":"响应式和组件渲染","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":3.47,"words":1041},"filePathRelative":"Vue/Vue27.md"}');export{c as comp,o as data};
