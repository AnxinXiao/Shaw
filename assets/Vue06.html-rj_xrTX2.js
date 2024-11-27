import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,a,o as l}from"./app-_9vaDOHR.js";const e={};function p(t,s){return l(),i("div",null,s[0]||(s[0]=[a(`<h1 id="条件和列表渲染" tabindex="-1"><a class="header-anchor" href="#条件和列表渲染"><span>条件和列表渲染</span></a></h1><h2 id="条件渲染" tabindex="-1"><a class="header-anchor" href="#条件渲染"><span>条件渲染</span></a></h2><p>Vue 中为条件渲染提供了一组内置的指令：</p><ul><li>v-if</li><li>v-else</li><li>v-else-if</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div v-if=&quot;type === 1&quot;&gt;晴天&lt;/div&gt;</span></span>
<span class="line"><span>  &lt;div v-else-if=&quot;type === 2&quot;&gt;阴天&lt;/div&gt;</span></span>
<span class="line"><span>  &lt;div v-else-if=&quot;type === 3&quot;&gt;雨天&lt;/div&gt;</span></span>
<span class="line"><span>  &lt;div v-else-if=&quot;type === 4&quot;&gt;下雪&lt;/div&gt;</span></span>
<span class="line"><span>  &lt;div v-else&gt;不知道什么天气&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span>const type = ref(1)</span></span>
<span class="line"><span>setInterval(() =&gt; {</span></span>
<span class="line"><span>  type.value = Math.floor(Math.random() * 5 + 1)</span></span>
<span class="line"><span>}, 3000)</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果是要切换多个元素，那么可以将多个元素包裹在 template 的标签里面，该标签是不会渲染的。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;template v-if=&quot;type === 1&quot;&gt;</span></span>
<span class="line"><span>    &lt;div&gt;晴天&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;p&gt;要出去旅游&lt;/p&gt;</span></span>
<span class="line"><span>    &lt;p&gt;玩的开心&lt;/p&gt;</span></span>
<span class="line"><span>  &lt;/template&gt;</span></span>
<span class="line"><span>  &lt;template v-else-if=&quot;type === 2&quot;&gt;</span></span>
<span class="line"><span>    &lt;div&gt;阴天&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;p&gt;呆在家里吧&lt;/p&gt;</span></span>
<span class="line"><span>    &lt;p&gt;好好看一本书&lt;/p&gt;</span></span>
<span class="line"><span>  &lt;/template&gt;</span></span>
<span class="line"><span>  &lt;template v-else-if=&quot;type === 3&quot;&gt;</span></span>
<span class="line"><span>    &lt;div&gt;雨天&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;p&gt;阴天适合睡觉&lt;/p&gt;</span></span>
<span class="line"><span>    &lt;p&gt;好好睡一觉吧&lt;/p&gt;</span></span>
<span class="line"><span>  &lt;/template&gt;</span></span>
<span class="line"><span>  &lt;template v-else-if=&quot;type === 4&quot;&gt;</span></span>
<span class="line"><span>    &lt;div&gt;下雪&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;p&gt;下雪啦，我们出去堆雪人吧&lt;/p&gt;</span></span>
<span class="line"><span>    &lt;p&gt;下雪啦，我们出去打雪仗吧&lt;/p&gt;</span></span>
<span class="line"><span>  &lt;/template&gt;</span></span>
<span class="line"><span>  &lt;div v-else&gt;不知道什么天气&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span>const type = ref(1)</span></span>
<span class="line"><span>setInterval(() =&gt; {</span></span>
<span class="line"><span>  type.value = Math.floor(Math.random() * 5 + 1)</span></span>
<span class="line"><span>}, 3000)</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外，关于条件渲染，还有一个常用指令：v-show</p><p>v-show 的切换靠的是 CSS 的 display 属性，当值为 false 的时候，会将 display 属性设置为 none.</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div v-if=&quot;isShow&quot;&gt;使用 v-if 来做条件渲染&lt;/div&gt;</span></span>
<span class="line"><span>  &lt;div v-show=&quot;isShow&quot;&gt;使用 v-show 来做条件渲染&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span>const isShow = ref(true)</span></span>
<span class="line"><span>setTimeout(() =&gt; {</span></span>
<span class="line"><span>  isShow.value = false</span></span>
<span class="line"><span>}, 2000)</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>v-if 和 v-show 区别</strong></p><p>v-if 是“真实的”按条件渲染，因为它确保了在切换时，条件区块内的事件监听器和子组件都会被销毁与重建。</p><p>v-if 也是惰性的：如果在初次渲染时条件值为 false，则不会做任何事。条件区块只有当条件首次变为 true 时才被渲染。</p><p>相比之下，v-show 简单许多，元素无论初始条件如何，始终会被渲染，只有 CSS display 属性会被切换。</p><p>总的来说：</p><ul><li><p>v-if 有更高的切换开销，如果在运行时绑定条件很少改变，则 v-if 会更合适</p></li><li><p>v-show 有更高的，如果需要频繁切换，则使用 v-show 较好</p><p>初始渲染开销</p></li></ul><h2 id="列表渲染" tabindex="-1"><a class="header-anchor" href="#列表渲染"><span>列表渲染</span></a></h2><p>这里涉及到的就是循环，Vue 也提供了一个内置指令：v-for</p><p>v-for 指令使用的语法是 item in items 的形式，items 源数据的数组，item 代表的是从 items 取出来的每一项，有点类似于 JS 中的 for..of 循环。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>    &lt;h2&gt;商品列表&lt;/h2&gt;</span></span>
<span class="line"><span>    &lt;ul&gt;</span></span>
<span class="line"><span>      &lt;li v-for=&quot;(product, index) in products&quot; :key=&quot;index&quot;&gt;</span></span>
<span class="line"><span>        {{ index + 1 }}{{ product.name }} - {{ product.price }}</span></span>
<span class="line"><span>      &lt;/li&gt;</span></span>
<span class="line"><span>    &lt;/ul&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
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
<span class="line"><span>&lt;style scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一般来讲，在使用 v-for 循环的时候，我们会给元素指定一个 key 属性。key 属性主要是用于 <strong>优化虚拟DOM的渲染性能</strong> 的，相当于是给虚拟 DOM 元素一个唯一性标识。当对 key 进行绑定的时候，期望所绑定的值为一个基础类型的值（string、number），不要使用对象来作为 v-for 的 key.</p><p>使用 v-for 循环渲染的时候也可以使用 template 来循环多个元素，此时 key 就挂在 template 标签上面。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>    &lt;h2&gt;商品列表&lt;/h2&gt;</span></span>
<span class="line"><span>    &lt;template v-for=&quot;(product, index) in products&quot; :key=&quot;index&quot;&gt;</span></span>
<span class="line"><span>      &lt;div&gt;{{ index + 1 }}&lt;/div&gt;</span></span>
<span class="line"><span>      &lt;div&gt;{{ product.name }}&lt;/div&gt;</span></span>
<span class="line"><span>      &lt;div&gt;{{ product.price }}&lt;/div&gt;</span></span>
<span class="line"><span>      &lt;hr /&gt;</span></span>
<span class="line"><span>    &lt;/template&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
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
<span class="line"><span>&lt;style scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>关于v-for一些细节</strong></p><ol><li>v-for 是可以遍历对象的，遍历对象的时候，第一个值是对象的值，第二值是对象的键，第三个值是索引</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div v-for=&quot;(value, key, index) in stu&quot; :key=&quot;index&quot;&gt;</span></span>
<span class="line"><span>   {{ index }} - {{ key }} - {{ value }}</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { reactive } from &#39;vue&#39;</span></span>
<span class="line"><span>const stu = reactive({</span></span>
<span class="line"><span>  name: &#39;zhangsan&#39;,</span></span>
<span class="line"><span>  age: 18,</span></span>
<span class="line"><span>  gender: &#39;male&#39;,</span></span>
<span class="line"><span>  score: 100</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>v-for 还可以接收一个整数值 n，整数值会从 1….n 进行遍历</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div v-for=&quot;(value, index) in 10&quot; :key=&quot;index&quot;&gt;</span></span>
<span class="line"><span>    {{ value }}</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>v-for 也是存在作用域的，作用域的工作方式和 JS 中的作用域工作方式类似</li></ol><div class="language-jsx line-numbers-mode" data-highlighter="shiki" data-ext="jsx" data-title="jsx" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> parentMessage</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;Parent&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">const</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> items</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  /* ... */</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">items</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">forEach</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">((</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">item</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">index</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // 可以访问外层的 parentMessage  // 而 item 和 index 只在这个作用域可用  console.log(parentMessage, item.message, index)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;ul&gt;</span></span>
<span class="line"><span>    &lt;li v-for=&quot;project in projects&quot; :key=&quot;project.id&quot;&gt;</span></span>
<span class="line"><span>      &lt;h2&gt;{{ project.name }}&lt;/h2&gt;</span></span>
<span class="line"><span>      &lt;ul&gt;</span></span>
<span class="line"><span>        &lt;li v-for=&quot;task in project.tasks&quot; :key=&quot;task.id&quot;&gt;</span></span>
<span class="line"><span>          &lt;h3&gt;{{ task.name }}&lt;/h3&gt;</span></span>
<span class="line"><span>          &lt;ul&gt;</span></span>
<span class="line"><span>            &lt;li v-for=&quot;(subtask, index) in task.subtasks&quot; :key=&quot;index&quot;&gt;</span></span>
<span class="line"><span>              {{ project.name }}- {{ task.name }} - {{ subtask }}</span></span>
<span class="line"><span>            &lt;/li&gt;</span></span>
<span class="line"><span>          &lt;/ul&gt;</span></span>
<span class="line"><span>        &lt;/li&gt;</span></span>
<span class="line"><span>      &lt;/ul&gt;</span></span>
<span class="line"><span>    &lt;/li&gt;</span></span>
<span class="line"><span>  &lt;/ul&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span>const projects = ref([</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    id: 1,</span></span>
<span class="line"><span>    name: &#39;Project A&#39;,</span></span>
<span class="line"><span>    tasks: [</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        id: 1,</span></span>
<span class="line"><span>        name: &#39;Task A1&#39;,</span></span>
<span class="line"><span>        subtasks: [&#39;Subtask A1.1&#39;, &#39;Subtask A1.2&#39;]</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        id: 2,</span></span>
<span class="line"><span>        name: &#39;Task A2&#39;,</span></span>
<span class="line"><span>        subtasks: [&#39;Subtask A2.1&#39;, &#39;Subtask A2.2&#39;]</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    id: 2,</span></span>
<span class="line"><span>    name: &#39;Project B&#39;,</span></span>
<span class="line"><span>    tasks: [</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        id: 1,</span></span>
<span class="line"><span>        name: &#39;Task B1&#39;,</span></span>
<span class="line"><span>        subtasks: [&#39;Subtask B1.1&#39;, &#39;Subtask B1.2&#39;]</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        id: 2,</span></span>
<span class="line"><span>        name: &#39;Task B2&#39;,</span></span>
<span class="line"><span>        subtasks: [&#39;Subtask B2.1&#39;, &#39;Subtask B2.2&#39;]</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>])</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>官方有这么一句话：不要同时使用 v-if 和 v-for，因为两者优先级不明显</li></ol><p>这里官方所谓的同时使用，指的是不要在一个元素上面同时使用：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;!--</span></span>
<span class="line"><span> 这会抛出一个错误，因为属性 todo 此时</span></span>
<span class="line"><span> 没有在该实例上定义</span></span>
<span class="line"><span>--&gt;</span></span>
<span class="line"><span>&lt;li v-for=&quot;todo in todos&quot; v-if=&quot;!todo.isComplete&quot;&gt;</span></span>
<span class="line"><span>  {{ todo.name }}</span></span>
<span class="line"><span>&lt;/li&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的例子，在同一个元素上面，既使用了 v-for 又使用了 v-if，这种方式是容易出问题的。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template v-for=&quot;todo in todos&quot;&gt;</span></span>
<span class="line"><span>  &lt;li v-if=&quot;!todo.isComplete&quot;&gt;</span></span>
<span class="line"><span>    {{ todo.name }}</span></span>
<span class="line"><span>  &lt;/li&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在外新包装一层 template，这样可以满足上面的需求的同时代码也更加易读。</p><h2 id="数组的侦测" tabindex="-1"><a class="header-anchor" href="#数组的侦测"><span>数组的侦测</span></a></h2><p>数组的方法整体分为两大类：</p><ul><li>变更方法：调用这些方法时会对原来的数组进行变更 <ul><li>push</li><li>pop</li><li>shift</li><li>unshift</li><li>splice</li><li>sort</li><li>reverse</li></ul></li><li>非变更方法：调用这些方法不会对原来的数组进行变更，而是会返回一个新的数组 <ul><li>filter</li><li>concat</li><li>slice</li><li>map</li></ul></li></ul><p>针对变更方法，数组只要一更新，就会触发它的响应式，页面会重新渲染</p><div class="language-jsx line-numbers-mode" data-highlighter="shiki" data-ext="jsx" data-title="jsx" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">setTimeout</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(() </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">  projects</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">value</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">push</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    id</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,    </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;这是一个大项目&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,    </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">tasks</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        id</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,        </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;搭建工程&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,        </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">subtasks</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;🧵调研框架&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;熟悉框架&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      },      {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        id</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,        </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;分解模块&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,        </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">subtasks</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;先调研&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;分析&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    ]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  })</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">3000</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果是非变更方法，那么需要使用方法的返回值去替换原来的值：</p><div class="language-jsx line-numbers-mode" data-highlighter="shiki" data-ext="jsx" data-title="jsx" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// \`items\` 是一个数组的 refitems.value = items.value.filter((item) =&gt; item.message.match(/Foo/))</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><hr><ul><li>EOF-</li></ul>`,46)]))}const c=n(e,[["render",p],["__file","Vue06.html.vue"]]),v=JSON.parse('{"path":"/Vue/Vue06.html","title":"条件和列表渲染","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"条件渲染","slug":"条件渲染","link":"#条件渲染","children":[]},{"level":2,"title":"列表渲染","slug":"列表渲染","link":"#列表渲染","children":[]},{"level":2,"title":"数组的侦测","slug":"数组的侦测","link":"#数组的侦测","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":5.3,"words":1591},"filePathRelative":"Vue/Vue06.md"}');export{c as comp,v as data};
