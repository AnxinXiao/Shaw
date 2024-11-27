import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as i,o as e}from"./app-_9vaDOHR.js";const l={};function p(t,s){return e(),a("div",null,s[0]||(s[0]=[i(`<h1 id="组件介绍" tabindex="-1"><a class="header-anchor" href="#组件介绍"><span>组件介绍</span></a></h1><ul><li>组件结构</li><li>组件注册</li><li>组件名</li></ul><h2 id="组件结构" tabindex="-1"><a class="header-anchor" href="#组件结构"><span><strong>组件结构</strong></span></a></h2><p>在 Vue 中支持<strong>单文件组件</strong>，也就是一个文件对应一个组件，这样的文件以 .vue 作为后缀。</p><p>一个组件会包含完整的一套结构、样式以及逻辑</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;button @click=&quot;count++&quot;&gt;Count is: {{ count }}&lt;/button&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span>const count = ref(0)</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>button{</span></span>
<span class="line"><span>  padding: 15px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>setup</strong></p><p>在 Vue3 初期，需要返回一个对象，该对象中包含模板中要用到的数据状态以及方法。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  setup() {</span></span>
<span class="line"><span>    // 在这里面定数据和方法</span></span>
<span class="line"><span>    const count = ref(0)</span></span>
<span class="line"><span>    function add() {</span></span>
<span class="line"><span>      count.value++</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      count,</span></span>
<span class="line"><span>      add</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从 Vue3.2 版本开始，推出了 setup 标签，所有定义的数据状态以及方法都会自动暴露给模板使用，从而减少了样板代码。</p><p>另外 setup 标签语法还有一些其他的好处：</p><ul><li>有更好的类型推断</li><li>支持顶级 await</li></ul><p><strong>scoped</strong></p><p>定义组件私有的 CSS 样式，也就是说写的样式只对当前组件生效。如果不书写 scoped，那么样式就是全局生效。</p><p>除了单文件组件的形式来定义组件外，还可以使用对象的形式来定义组件：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>export default {</span></span>
<span class="line"><span>  setup(){</span></span>
<span class="line"><span>    // 定义数据</span></span>
<span class="line"><span>    const count = ref(0)</span></span>
<span class="line"><span>    return { count }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  template: \`&lt;div&gt;{{count}}&lt;/div&gt;\`</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是一个具体的例子：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>  &lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot; /&gt;</span></span>
<span class="line"><span>    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot; /&gt;</span></span>
<span class="line"><span>    &lt;title&gt;Document&lt;/title&gt;</span></span>
<span class="line"><span>  &lt;/head&gt;</span></span>
<span class="line"><span>  &lt;body&gt;</span></span>
<span class="line"><span>    &lt;div id=&quot;app&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;template id=&quot;my-template-element&quot;&gt;</span></span>
<span class="line"><span>        &lt;div&gt;</span></span>
<span class="line"><span>            &lt;h1&gt;{{ count }}&lt;/h1&gt;</span></span>
<span class="line"><span>            &lt;button @click=&quot;count++&quot;&gt;Increment&lt;/button&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/template&gt;</span></span>
<span class="line"><span>    &lt;script src=&quot;https://unpkg.com/vue@3.2.31&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>      const { createApp, ref } = Vue;</span></span>
<span class="line"><span>      const App = {</span></span>
<span class="line"><span>        setup() {</span></span>
<span class="line"><span>          const count = ref(0);</span></span>
<span class="line"><span>          return { count };</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        template: &quot;#my-template-element&quot;,</span></span>
<span class="line"><span>      };</span></span>
<span class="line"><span>      createApp(App).mount(&quot;#app&quot;);</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>  &lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="组件注册" tabindex="-1"><a class="header-anchor" href="#组件注册"><span><strong>组件注册</strong></span></a></h2><p>组件注册分为两种：</p><ul><li>全局注册</li><li>局部注册</li></ul><p><strong>全局注册</strong></p><p>使用 Vue 应用实例的 .component( ) 方法来全局注册组件，所注册的组件全局可用。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>import { createApp } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const app = createApp({})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.component(</span></span>
<span class="line"><span>  // 注册的名字</span></span>
<span class="line"><span>  &#39;MyComponent&#39;,</span></span>
<span class="line"><span>  // 组件的实现</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    /* ... */</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>import MyComponent from &#39;./App.vue&#39;</span></span>
<span class="line"><span>app.component(&#39;MyComponent&#39;, MyComponent)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>Component 方法是可以链式调用的</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>app</span></span>
<span class="line"><span>  .component(&#39;ComponentA&#39;, ComponentA)</span></span>
<span class="line"><span>  .component(&#39;ComponentB&#39;, ComponentB)</span></span>
<span class="line"><span>  .component(&#39;ComponentC&#39;, ComponentC)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>局部注册</strong></p><p>局部注册就是在哪个组件里面用到了 TestCom 这个组件，那么就在当前的组件里面引入它，然后通过 components 配置项进行注册一下即可。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;button @click=&quot;add&quot;&gt;Count is: {{ count }}&lt;/button&gt;</span></span>
<span class="line"><span>  &lt;TestCom /&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span>import TestCom from &#39;./components/TestCom.vue&#39;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  // 局部注册</span></span>
<span class="line"><span>  components: {</span></span>
<span class="line"><span>    TestCom</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  setup() {</span></span>
<span class="line"><span>    // 在这里面定数据和方法</span></span>
<span class="line"><span>    const count = ref(0)</span></span>
<span class="line"><span>    function add() {</span></span>
<span class="line"><span>      count.value++</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      count,</span></span>
<span class="line"><span>      add</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>button {</span></span>
<span class="line"><span>  padding: 15px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果是 setup 标签语法糖，那么只需要导入组件即可，不需要使用 components 配置项来进行注册，因为导入后在模板中使用时会自动注册：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;button @click=&quot;add&quot;&gt;Count is: {{ count }}&lt;/button&gt;</span></span>
<span class="line"><span>  &lt;TestCom /&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span>import TestCom from &#39;./components/TestCom.vue&#39;</span></span>
<span class="line"><span>// 在这里面定数据和方法</span></span>
<span class="line"><span>const count = ref(0)</span></span>
<span class="line"><span>function add() {</span></span>
<span class="line"><span>  count.value++</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>button {</span></span>
<span class="line"><span>  padding: 15px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实际开发的时候，<strong>推荐使用局部注册</strong></p><ol><li>全局注册无法很好的 tree-shaking</li><li>全局注册的组件在大型项目中无法很好的看出组件之间的依赖关系</li></ol><h2 id="组件名" tabindex="-1"><a class="header-anchor" href="#组件名"><span><strong>组件名</strong></span></a></h2><p>推荐使用<strong>大驼峰</strong>作为组件名。</p><blockquote><p>但是大驼峰在 DOM 内模板中无法使用</p></blockquote><p>组件在应用层面，有三个核心知识点：</p><ol><li>Props</li><li>自定义事件</li><li>插槽</li></ol><hr><ul><li>EOF-</li></ul>`,41)]))}const r=n(l,[["render",p],["__file","Vue12.html.vue"]]),v=JSON.parse('{"path":"/Vue/Vue12.html","title":"组件介绍","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"组件结构","slug":"组件结构","link":"#组件结构","children":[]},{"level":2,"title":"组件注册","slug":"组件注册","link":"#组件注册","children":[]},{"level":2,"title":"组件名","slug":"组件名","link":"#组件名","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":2.81,"words":842},"filePathRelative":"Vue/Vue12.md"}');export{r as comp,v as data};
