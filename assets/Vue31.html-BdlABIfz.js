import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as e,o as i}from"./app-_9vaDOHR.js";const l={};function p(t,s){return i(),a("div",null,s[0]||(s[0]=[e(`<h1 id="指令的本质" tabindex="-1"><a class="header-anchor" href="#指令的本质"><span>指令的本质</span></a></h1><p>目前为止，我们学习过很多 Vue 的内置指令，例如：</p><ul><li>v-if</li><li>v-show</li><li>v-for</li><li>v-model</li><li>v-html</li><li>v-bind</li><li>v-on</li><li>......</li></ul><p>结合 vite-plugin-inspect 插件的编译结果来进行分析指令的本质。</p><p><strong>v-if</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div v-if=&quot;type === 1&quot;&gt;type 的值为 1&lt;/div&gt;</span></span>
<span class="line"><span>  &lt;div v-else-if=&quot;type === 2&quot;&gt;type 的值为 2&lt;/div&gt;</span></span>
<span class="line"><span>  &lt;div v-else-if=&quot;type === 3&quot;&gt;type 的值为 3&lt;/div&gt;</span></span>
<span class="line"><span>  &lt;div v-else-if=&quot;type === 4&quot;&gt;type 的值为 4&lt;/div&gt;</span></span>
<span class="line"><span>  &lt;div v-else&gt;Not 1/2/3/4 is 0&lt;/div&gt;</span></span>
<span class="line"><span>  &lt;button @click=&quot;toogleFunc&quot;&gt;Toggle&lt;/button&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span>const type = ref(1)</span></span>
<span class="line"><span>function toogleFunc() {</span></span>
<span class="line"><span>  type.value = Math.floor(Math.random() * 5)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译结果如下：</p><p>!<a href="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2024-05-27-030545.png" target="_blank" rel="noopener noreferrer">https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2024-05-27-030545.png</a></p><p>对于 v-if 指令，背后对应的就是三目运算符写的不同分支。</p><p>每一次 $setup.type 值的变化就会导致渲染函数重新执行，然后进入到不同的分支。</p><p><strong>v-for</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>    &lt;h2&gt;商品列表&lt;/h2&gt;</span></span>
<span class="line"><span>    &lt;ul&gt;</span></span>
<span class="line"><span>      &lt;!-- 使用 v-for 遍历 products 数组，渲染每个商品的信息 --&gt;</span></span>
<span class="line"><span>      &lt;li v-for=&quot;(product, index) in products&quot; :key=&quot;index&quot;&gt;</span></span>
<span class="line"><span>        {{ product.name }} - \${{ product.price }}</span></span>
<span class="line"><span>      &lt;/li&gt;</span></span>
<span class="line"><span>    &lt;/ul&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span>const products = ref([</span></span>
<span class="line"><span>  { name: &#39;键盘&#39;, price: 99.99 },</span></span>
<span class="line"><span>  { name: &#39;鼠标&#39;, price: 59.99 },</span></span>
<span class="line"><span>  { name: &#39;显示器&#39;, price: 299.99 }</span></span>
<span class="line"><span>])</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译结果如下：</p><p>!<a href="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2024-05-27-030842.png" target="_blank" rel="noopener noreferrer">https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2024-05-27-030842.png</a></p><p>生成的渲染函数里面，用到了一个名为 renderList 的内部方法。</p><p>renderList：packages/runtime-core/src/helpers/renderList.ts</p><p><strong>v-bind</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div v-bind:id&gt;dynamicId&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span>const id = ref(&#39;my-id&#39;)</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style lang=&quot;scss&quot; scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译后的结果如下：</p><p>!<a href="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2024-05-27-031250.png" target="_blank" rel="noopener noreferrer">https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2024-05-27-031250.png</a></p><p>这里就是将 $<a href="http://setup.id" target="_blank" rel="noopener noreferrer">setup.id</a> 的值作为 div 的 id 属性值，这里涉及到了响应式数据的读取，因此 $<a href="http://setup.id" target="_blank" rel="noopener noreferrer">setup.id</a> 的值发生变化的时候，渲染函数会重新执行，div 对应的属性也会发生变化。</p><p><strong>v-on</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;{{ count }}&lt;/div&gt;</span></span>
<span class="line"><span>  &lt;button v-on:click=&quot;count++&quot;&gt;+1&lt;/button&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span>const count = ref(0)</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style lang=&quot;scss&quot; scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译结果如下：</p><p>!<a href="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2024-05-27-031602.png" target="_blank" rel="noopener noreferrer">https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2024-05-27-031602.png</a></p><p>这个也非常简单，编译结果就是为 button 元素添加上了 click 事件，该事件对应的事件处理函数为：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>$event =&gt; $setup.count++</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>通过这么几个例子，我们对比编译前后的结果，可以得出一个结论：</p><p>最终编译出来的渲染函数，根本不存在什么指令，<strong>不同的指令会被编译为不同处理</strong>。</p><hr><ul><li>EOF-</li></ul>`,31)]))}const c=n(l,[["render",p],["__file","Vue31.html.vue"]]),v=JSON.parse('{"path":"/Vue/Vue31.html","title":"指令的本质","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":1.92,"words":576},"filePathRelative":"Vue/Vue31.md"}');export{c as comp,v as data};
