import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as i,o as e}from"./app-_9vaDOHR.js";const l={};function p(t,s){return e(),a("div",null,s[0]||(s[0]=[i(`<h1 id="模板语法" tabindex="-1"><a class="header-anchor" href="#模板语法"><span>模板语法</span></a></h1><p>所谓模板，是 Vue 中构建视图的地方。</p><p>模板的写法基本上和 HTML 是一模一样的，上手无难度。</p><p>不过这个之所以被称之为模板，就是因为这个和之前的模板引擎类似，提供了一些不同于纯 HTML 的特性。</p><h2 id="文本插值" tabindex="-1"><a class="header-anchor" href="#文本插值"><span><strong>文本插值</strong></span></a></h2><p>可以在模板里面使用一对大括号（双大括号、猫须语法），括号内部就可以绑定动态的数据。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;{{ name }}&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>const name = &#39;Steve&#39;</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style lang=&quot;scss&quot; scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="原始html" tabindex="-1"><a class="header-anchor" href="#原始html"><span><strong>原始HTML</strong></span></a></h2><p>有些时候，变量的值对应的是一段 HTML 代码，但是普通的文本插值只会将这段 HTML 代码原封不动的输出</p><p>例如：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;{{ htmlCode }}&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>const htmlCode = &#39;&lt;span style=&quot;color:red&quot;&gt;this is a test&lt;/span&gt;&#39;</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style lang=&quot;scss&quot; scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果想要让上面的 HTML 字符串以 HTML 的形式渲染出来，那么需要指令。</p><p>指令是带有 v- 前缀的特殊属性。Vue 提供了一部分内置指令，开发者还可以自定义指令。</p><p>Vue 中所有内置的指令：<a href="https://cn.vuejs.org/api/built-in-directives.html" target="_blank" rel="noopener noreferrer">https://cn.vuejs.org/api/built-in-directives.html</a></p><p>这里我们需要用到 v-html 的指令，例如：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div v-html=&quot;htmlCode&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>const htmlCode = &#39;&lt;span style=&quot;color:red&quot;&gt;this is a test&lt;/span&gt;&#39;</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style lang=&quot;scss&quot; scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="绑定属性" tabindex="-1"><a class="header-anchor" href="#绑定属性"><span><strong>绑定属性</strong></span></a></h2><p>Vue 中的核心思想，就是将模板中所有的东西都通过数据来控制，除了普通文本以外，属性应该由数据来控制，这就是所谓的属性绑定。</p><p>例如：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div v-bind:id=&quot;id&quot;&gt;hello&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>const id = &#39;my-id&#39;</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style lang=&quot;scss&quot; scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>属性的动态绑定用得非常的多，因此有一种简写形式，直接用一个冒号（ : ）表示该属性是动态绑定的</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div :id=&quot;id&quot;&gt;hello&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>const id = &#39;my-id&#39;</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style lang=&quot;scss&quot; scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外还有一种简写形式，这种形式 <strong>Vue3.4 以上版本才能用</strong>，如果动态绑定的属性和数据同名，那么可以直接简写：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div :id&gt;hello&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>const id = &#39;my-id&#39;</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style lang=&quot;scss&quot; scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 HTML 中，有一类属性是比较特殊的，就是布尔类型属性，例如 disabled，针对这一类布尔属性，绑定的数据不同，会有不同的表现</p><ul><li>如果所绑定的数据是真值或者空字符串，该布尔值属性会存在</li><li>如果所绑定的数据是假值（null 和 undefined），该布尔值属性会被忽略</li></ul><p>有些时候，如果想要绑定多个属性，那么这个时候可以直接绑定成一个对象：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div v-bind=&quot;attrObj&quot;&gt;hello&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>const attrObj = {</span></span>
<span class="line"><span>  id: &#39;container&#39;,</span></span>
<span class="line"><span>  class: &#39;wrapper&#39;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style lang=&quot;scss&quot; scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用js表达式" tabindex="-1"><a class="header-anchor" href="#使用js表达式"><span><strong>使用JS表达式</strong></span></a></h2><p>目前为止，模板可以绑定数据，但是目前数据是什么，模板中就渲染什么。</p><p>但是实际上模板中是可以对要渲染的数据进行一定处理的，通过 JavaScript 表达式来进行处理。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;{{ number + 1 }}&lt;/div&gt;</span></span>
<span class="line"><span>  &lt;div&gt;{{ ok ? &#39;晴天&#39; : &#39;雨天&#39; }}&lt;/div&gt;</span></span>
<span class="line"><span>  &lt;div&gt;{{ message.split(&#39;&#39;).reverse().join(&#39;&#39;) }}&lt;/div&gt;</span></span>
<span class="line"><span>  &lt;div :id=&quot;\`list-\${id}\`&quot;&gt;{{ id + 100 }}&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>const number = 1</span></span>
<span class="line"><span>const ok = true</span></span>
<span class="line"><span>const message = &#39;hello&#39;</span></span>
<span class="line"><span>const id = 1</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style lang=&quot;scss&quot; scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里有一个关键点，就是你要区分什么是表达式，什么是语句</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;!-- 这是一个语句，而非表达式 --&gt;</span></span>
<span class="line"><span>{{ var a = 1 }}</span></span>
<span class="line"><span>&lt;!-- 条件控制也不支持，请使用三元表达式 --&gt;</span></span>
<span class="line"><span>{{ if (ok) { return message } }}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有一个简单的判断方法：看是否能够写在 return 后面。如果能够写在 return 后面，那么就是表达式，如果不能那么就是语句。</p><p>例如函数调用，其实就是一个表达式</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>return test();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>{{ test() }}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="模板沙盒化" tabindex="-1"><a class="header-anchor" href="#模板沙盒化"><span><strong>模板沙盒化</strong></span></a></h2><p>模板中可以使用表达式，这些表达式都是沙盒化的，沙盒的意义主要在于安全，这里在模板中能够访问到全局对象，但是由于沙盒的存在，对能够访问到的全局对象进行了限制，只能访问 <a href="https://github.com/vuejs/core/blob/main/packages/shared/src/globalsAllowList.ts#L3" target="_blank" rel="noopener noreferrer">部分的全局对象</a></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;{{ Math.random() }}&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style lang=&quot;scss&quot; scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是如果是不在上述列表中的，则无法访问到：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;{{ Math.random() }}&lt;/div&gt;</span></span>
<span class="line"><span>  &lt;div&gt;{{ Test.a }}&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>window.Test = {</span></span>
<span class="line"><span>  a: 1</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style lang=&quot;scss&quot; scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的例子中，我们尝试给 window 挂载一个新的全局对象，然后在模板中进行访问，但是会报错：Cannot read properties of undefined (reading &#39;a&#39;)</p><p>如果真的有此需求，需要在 window 上挂载一个全局对象供模板访问，可以使用 app.config.globalProperties，例如：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// main.js</span></span>
<span class="line"><span>// import &#39;./assets/main.css&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import { createApp } from &#39;vue&#39;</span></span>
<span class="line"><span>// 引入了根组件</span></span>
<span class="line"><span>import App from &#39;./App.vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 挂载根组件</span></span>
<span class="line"><span>const app = createApp(App)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 在这里新增全局对象属性</span></span>
<span class="line"><span>app.config.globalProperties.Test = {</span></span>
<span class="line"><span>  a: &#39;Hello, Global Object!&#39;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.mount(&#39;#app&#39;)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><ul><li>EOF-</li></ul>`,48)]))}const c=n(l,[["render",p],["__file","Vue01.html.vue"]]),v=JSON.parse('{"path":"/Vue/Vue01.html","title":"模板语法","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"文本插值","slug":"文本插值","link":"#文本插值","children":[]},{"level":2,"title":"原始HTML","slug":"原始html","link":"#原始html","children":[]},{"level":2,"title":"绑定属性","slug":"绑定属性","link":"#绑定属性","children":[]},{"level":2,"title":"使用JS表达式","slug":"使用js表达式","link":"#使用js表达式","children":[]},{"level":2,"title":"模板沙盒化","slug":"模板沙盒化","link":"#模板沙盒化","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":3.95,"words":1185},"filePathRelative":"Vue/Vue01.md"}');export{c as comp,v as data};
