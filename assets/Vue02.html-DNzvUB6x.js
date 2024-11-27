import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as i,o as e}from"./app-_9vaDOHR.js";const l={};function p(t,s){return e(),a("div",null,s[0]||(s[0]=[i(`<h1 id="响应式基础" tabindex="-1"><a class="header-anchor" href="#响应式基础"><span>响应式基础</span></a></h1><h2 id="使用ref" tabindex="-1"><a class="header-anchor" href="#使用ref"><span><strong>使用ref</strong></span></a></h2><p>可以使用 ref 创建一个响应式的数据：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;{{ name }}&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span>// 现在的 name 就是一个响应式数据</span></span>
<span class="line"><span>let name = ref(&#39;Bill&#39;)</span></span>
<span class="line"><span>console.log(name)</span></span>
<span class="line"><span>console.log(name.value)</span></span>
<span class="line"><span>setTimeout(() =&gt; {</span></span>
<span class="line"><span>  name.value = &#39;Tom&#39;</span></span>
<span class="line"><span>}, 2000)</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style lang=&quot;scss&quot; scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ref 返回的响应式数据是一个对象，我们需要通过 .value 访问到内部具体的值。模板中之所以不需要 .value，是因为在模板会对 ref 类型的响应式数据自动解包。</p><p>ref 可以持有任意的类型，可以是对象、数组、普通类型的值、Map、Set...</p><p>对象的例子：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;{{ Bill.name }}&lt;/div&gt;</span></span>
<span class="line"><span>  &lt;div&gt;{{ Bill.age }}&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span>// 现在的 name 就是一个响应式数据</span></span>
<span class="line"><span>let Bill = ref({</span></span>
<span class="line"><span>  name: &#39;Biil&#39;,</span></span>
<span class="line"><span>  age: 18</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>setTimeout(() =&gt; {</span></span>
<span class="line"><span>  Bill.value.name = &#39;Biil2&#39;</span></span>
<span class="line"><span>  Bill.value.age = 20</span></span>
<span class="line"><span>}, 2000)</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style lang=&quot;scss&quot; scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>数组的例子：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;{{ arr }}&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span>// 现在的 name 就是一个响应式数据</span></span>
<span class="line"><span>let arr = ref([1, 2, 3])</span></span>
<span class="line"><span>setTimeout(() =&gt; {</span></span>
<span class="line"><span>  arr.value.push(4, 5, 6)</span></span>
<span class="line"><span>}, 2000)</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style lang=&quot;scss&quot; scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二个点，ref 所创建的响应式数据是具备深层响应式，这一点主要体现在值是对象，对象里面又有嵌套的对象：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;{{ Bill.name }}&lt;/div&gt;</span></span>
<span class="line"><span>  &lt;div&gt;{{ Bill.age }}&lt;/div&gt;</span></span>
<span class="line"><span>  &lt;div&gt;{{ Bill.nested.count }}&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span>// 现在的 name 就是一个响应式数据</span></span>
<span class="line"><span>let Bill = ref({</span></span>
<span class="line"><span>  name: &#39;Biil&#39;,</span></span>
<span class="line"><span>  age: 18,</span></span>
<span class="line"><span>  nested: {</span></span>
<span class="line"><span>    count: 1</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>setTimeout(() =&gt; {</span></span>
<span class="line"><span>  Bill.value.name = &#39;Biil2&#39;</span></span>
<span class="line"><span>  Bill.value.age = 20</span></span>
<span class="line"><span>  Bill.value.nested.count += 2</span></span>
<span class="line"><span>}, 2000)</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style lang=&quot;scss&quot; scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果想要放弃深层次的响应式，可以使用 shallowRef，通过 shallowRef 所创建的响应式，不会深层地递归将对象每一层转为响应式，而只会将 .value 的访问转为响应式：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const state = shallowRef({ count: 1});</span></span>
<span class="line"><span>// 这个操作不会触发响应式更新</span></span>
<span class="line"><span>state.value.count += 2;</span></span>
<span class="line"><span>// 只针对 .value 值的更改会触发响应式更新</span></span>
<span class="line"><span>state.value = { count: 2}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>具体示例：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;{{ Bill.name }}&lt;/div&gt;</span></span>
<span class="line"><span>  &lt;div&gt;{{ Bill.age }}&lt;/div&gt;</span></span>
<span class="line"><span>  &lt;div&gt;{{ Bill.nested.count }}&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { shallowRef } from &#39;vue&#39;</span></span>
<span class="line"><span>let Bill = shallowRef({</span></span>
<span class="line"><span>  name: &#39;Biil&#39;,</span></span>
<span class="line"><span>  age: 18,</span></span>
<span class="line"><span>  nested: {</span></span>
<span class="line"><span>    count: 1</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>// 下面的更新不会触发视图更新</span></span>
<span class="line"><span>setTimeout(() =&gt; {</span></span>
<span class="line"><span>  Bill.value.name = &#39;Biil2&#39;</span></span>
<span class="line"><span>  Bill.value.age = 20</span></span>
<span class="line"><span>  Bill.value.nested.count += 2</span></span>
<span class="line"><span>}, 2000)</span></span>
<span class="line"><span>// 下面的更新会触发视图更新</span></span>
<span class="line"><span>setTimeout(() =&gt; {</span></span>
<span class="line"><span>  Bill.value = {</span></span>
<span class="line"><span>    name: &#39;Biil3&#39;,</span></span>
<span class="line"><span>    age: 30,</span></span>
<span class="line"><span>    nested: {</span></span>
<span class="line"><span>      count: 3</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}, 4000)</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style lang=&quot;scss&quot; scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>响应式数据的更新，带来了 DOM 的自动更新，但是这个 DOM 的更新并非是同步的，这意味着当响应式数据发生修改后，我们去获取 DOM 值，拿到的是之前的 DOM 数据：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div id=&quot;container&quot;&gt;{{ count }}&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref, onMounted } from &#39;vue&#39;</span></span>
<span class="line"><span>let count = ref(1)</span></span>
<span class="line"><span>let container = null</span></span>
<span class="line"><span>setTimeout(() =&gt; {</span></span>
<span class="line"><span>  count.value = 2 // 修改响应式状态</span></span>
<span class="line"><span>  console.log(&#39;第二次打印：&#39;, container.innerText)</span></span>
<span class="line"><span>}, 2000)</span></span>
<span class="line"><span>// 这是一个生命周期钩子方法</span></span>
<span class="line"><span>// 会在组件完成初始渲染并创建 DOM 节点后自动调用</span></span>
<span class="line"><span>onMounted(() =&gt; {</span></span>
<span class="line"><span>  container = document.getElementById(&#39;container&#39;)</span></span>
<span class="line"><span>  console.log(&#39;第一次打印：&#39;, container.innerText)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style lang=&quot;scss&quot; scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果想要获取最新的 DOM 数据，可以使用 nextTick，这是 Vue 提供的一个工具方法，会等待下一次的 DOM 更新，从而方便后面能够拿到最新的 DOM 数据。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div id=&quot;container&quot;&gt;{{ count }}&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref, onMounted, nextTick } from &#39;vue&#39;</span></span>
<span class="line"><span>let count = ref(1)</span></span>
<span class="line"><span>let container = null</span></span>
<span class="line"><span>setTimeout(async () =&gt; {</span></span>
<span class="line"><span>  count.value = 2 // 修改响应式状态</span></span>
<span class="line"><span>  // 等待下一个 DOM 更新周期</span></span>
<span class="line"><span>  await nextTick()</span></span>
<span class="line"><span>  // 这个时候再打印就是最新的值了</span></span>
<span class="line"><span>  console.log(&#39;第二次打印：&#39;, container.innerText)</span></span>
<span class="line"><span>}, 2000)</span></span>
<span class="line"><span>// 这是一个生命周期钩子方法</span></span>
<span class="line"><span>// 会在组件完成初始渲染并创建 DOM 节点后自动调用</span></span>
<span class="line"><span>onMounted(() =&gt; {</span></span>
<span class="line"><span>  container = document.getElementById(&#39;container&#39;)</span></span>
<span class="line"><span>  console.log(&#39;第一次打印：&#39;, container.innerText)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style lang=&quot;scss&quot; scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果不用 async await，那么就是通过回调的形式：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>setTimeout(() =&gt; {</span></span>
<span class="line"><span>  count.value = 2 // 修改响应式状态</span></span>
<span class="line"><span>  // 等待下一个 DOM 更新周期</span></span>
<span class="line"><span>  nextTick(() =&gt; {</span></span>
<span class="line"><span>    // 这个时候再打印就是最新的值了</span></span>
<span class="line"><span>    console.log(&#39;第二次打印：&#39;, container.innerText)</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>}, 2000)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然还是推荐使用 async await，看上去代码的逻辑更加清晰一些。</p><h2 id="使用-reactive" tabindex="-1"><a class="header-anchor" href="#使用-reactive"><span><strong>使用 reactive</strong></span></a></h2><p>reactive 通常将一个对象转为响应式对象</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;{{ state.count1 }}&lt;/div&gt;</span></span>
<span class="line"><span>  &lt;div&gt;{{ state.nested.count2 }}&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { reactive } from &#39;vue&#39;</span></span>
<span class="line"><span>const state = reactive({</span></span>
<span class="line"><span>  count1: 0,</span></span>
<span class="line"><span>  nested: {</span></span>
<span class="line"><span>    count2: 0</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>setTimeout(()=&gt;{</span></span>
<span class="line"><span>  state.count1++</span></span>
<span class="line"><span>  state.nested.count2 += 2;</span></span>
<span class="line"><span>},2000);</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style lang=&quot;scss&quot; scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Vue 中的响应式底层是通过 ProxyAPI 来实现的，但是这个 ProxyAPI 只能对对象进行拦截，无法对原始值进行拦截。</p><p>这里就会产生一个问题：如果用户想要把一个原始值转为响应式，该怎么办？</p><p>两种方案：</p><ol><li>让用户自己处理，用户需要将自己想要转换的原始值包装为对象，然后再使用 reactive API 🙅</li><li>框架层面来处理，多提供一个 API，这个 API 可以帮助用户简化操作，将原始值也能转为响应式数据 🙆</li></ol><p>ref 的背后其实也调用了 reactive API</p><ul><li>原始值：Object.defineProperty</li><li>复杂值：reactive API</li></ul><p>reactive 还有一个相关的 API shallowReactiveAPI，是浅层次的，不会深层次去转换成响应式</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;{{ state.count1 }}&lt;/div&gt;</span></span>
<span class="line"><span>  &lt;div&gt;{{ state.nested.count2 }}&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { shallowReactive } from &#39;vue&#39;</span></span>
<span class="line"><span>const state = shallowReactive({</span></span>
<span class="line"><span>  count1: 0,</span></span>
<span class="line"><span>  nested: {</span></span>
<span class="line"><span>    count2: 0</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>setTimeout(()=&gt;{</span></span>
<span class="line"><span>  state.count1++</span></span>
<span class="line"><span>},2000);</span></span>
<span class="line"><span>setTimeout(()=&gt;{</span></span>
<span class="line"><span>  state.nested.count2++</span></span>
<span class="line"><span>},4000)</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style lang=&quot;scss&quot; scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用细节" tabindex="-1"><a class="header-anchor" href="#使用细节"><span><strong>使用细节</strong></span></a></h2><p>先说最佳实践：尽量使用 ref 来作为声明响应式数据的主要 API.</p><h3 id="reactive局限性" tabindex="-1"><a class="header-anchor" href="#reactive局限性"><span><strong>reactive局限性</strong></span></a></h3><ol><li>使用 reactvie 创建响应式数据的时候，值的类型是有限的 <ul><li>只能是对象类型（object、array、map、set）</li><li>不能够是简单值（string、number、boolean）</li></ul></li><li>第二条算是一个注意点，不能够去替换响应式对象，否则会丢失响应式的追踪</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>let state = reactive({count : 0});</span></span>
<span class="line"><span>// 下面的这个操作会让上面的对象引用不再被追踪，从而导致上面对象的响应式丢失</span></span>
<span class="line"><span>state = reactive({count : 1})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>对解构操作不友好，当对一个 reactvie 响应式对象进行解构的时候，也会丢失响应式</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>let state = reactive({count : 0});</span></span>
<span class="line"><span>// 当进行解构的时候，解构出来的是一个普通的值</span></span>
<span class="line"><span>let { count } = state;</span></span>
<span class="line"><span>count++; // 这里也就是单纯的值的改变，不会触发和响应式数据关联的操作</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 另外还有函数传参的时候</span></span>
<span class="line"><span>// 这里传递过去的也就是一个普通的值，没有响应式</span></span>
<span class="line"><span>func(state.count)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ref解包细节" tabindex="-1"><a class="header-anchor" href="#ref解包细节"><span><strong>ref解包细节</strong></span></a></h3><p>所谓 ref 的解包，指的是自动访问 value，不需要再通过 .value 去获取值。例如模板中使用 ref 类型的数据，就会自动解包。</p><ol><li>ref作为reactvie对象属性</li></ol><p>这种情况下也会自动解包</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref, reactive } from &#39;vue&#39;</span></span>
<span class="line"><span>const name = ref(&#39;Bill&#39;)</span></span>
<span class="line"><span>const state = reactive({</span></span>
<span class="line"><span>  name</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>console.log(state.name) // 这里会自动解包</span></span>
<span class="line"><span>console.log(name.value)</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style lang=&quot;scss&quot; scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果 ref 作为 shallowReactive 对象的属性，那么不会自动解包</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref, shallowReactive } from &#39;vue&#39;</span></span>
<span class="line"><span>const name = ref(&#39;Bill&#39;)</span></span>
<span class="line"><span>const state = shallowReactive({</span></span>
<span class="line"><span>  name</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>console.log(state.name.value) // 不会自动解包</span></span>
<span class="line"><span>console.log(name.value)</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style lang=&quot;scss&quot; scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为对象的属性是一个 ref 值，这也是一个响应式数据，因此 ref 的变化会引起响应式对象的更新</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>    &lt;div&gt;{{ state.name.value }}&lt;/div&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref, shallowReactive } from &#39;vue&#39;</span></span>
<span class="line"><span>const name = ref(&#39;Bill&#39;)</span></span>
<span class="line"><span>const state = shallowReactive({</span></span>
<span class="line"><span>  name</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>setTimeout(() =&gt; {</span></span>
<span class="line"><span>  name.value = &#39;Tom&#39;</span></span>
<span class="line"><span>},2000)</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style lang=&quot;scss&quot; scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【课堂练习】下面的代码：</p><ol><li>为什么 Bill 渲染出来有双引号？</li><li>为什么 2 秒后界面没有渲染 Smith ？</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;{{ obj.name }}&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref, shallowReactive } from &#39;vue&#39;</span></span>
<span class="line"><span>const name = ref(&#39;Bill&#39;) // name 是一个 ref 值</span></span>
<span class="line"><span>const obj = shallowReactive({</span></span>
<span class="line"><span>  name</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>setTimeout(() =&gt; {</span></span>
<span class="line"><span>  obj.name = &#39;John&#39;</span></span>
<span class="line"><span>}, 1000)</span></span>
<span class="line"><span>setTimeout(() =&gt; {</span></span>
<span class="line"><span>  name.value = &#39;Smith&#39;</span></span>
<span class="line"><span>}, 2000)</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style lang=&quot;scss&quot; scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>答案：</p><ol><li>因为使用的是 shallowReactive，shallowReactive 内部的 ref 是不会自动解包的</li><li>1秒后，<a href="http://obj.name" target="_blank" rel="noopener noreferrer">obj.name</a> 被赋予了 John 这个字符串值，这就使得和原来的 ref 数据失去了联系</li></ol><p>如果想要渲染出 Smith，修改如下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>import { ref, shallowReactive } from &#39;vue&#39;</span></span>
<span class="line"><span>const name = ref(&#39;Bill&#39;) // name 是一个 ref 值</span></span>
<span class="line"><span>const obj = shallowReactive({</span></span>
<span class="line"><span>  name</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>setTimeout(() =&gt; {</span></span>
<span class="line"><span>  obj.name.value = &#39;John&#39;</span></span>
<span class="line"><span>}, 1000)</span></span>
<span class="line"><span>setTimeout(() =&gt; {</span></span>
<span class="line"><span>  name.value = &#39;Smith&#39;</span></span>
<span class="line"><span>}, 2000)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面再来看一个例子：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;{{ obj.name.value }}&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref, shallowReactive } from &#39;vue&#39;</span></span>
<span class="line"><span>const name = ref(&#39;Bill&#39;);</span></span>
<span class="line"><span>const stuName = ref(&#39;John&#39;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const obj = shallowReactive({name})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 注意这句代码，意味着和原来的 name 这个 Ref 失去关联</span></span>
<span class="line"><span>obj.name = stuName;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>setTimeout(()=&gt;{</span></span>
<span class="line"><span>  name.value = &#39;Tom&#39;;</span></span>
<span class="line"><span>}, 2000)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>setTimeout(()=&gt;{</span></span>
<span class="line"><span>  stuName.value = &#39;Smith&#39;;</span></span>
<span class="line"><span>}, 4000)</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style lang=&quot;scss&quot; scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>数组和集合里面使用 ref</li></ol><p>如果将 ref 数据作为 reactvie 数组或者集合的一个元素，此时是<strong>不会自动解包的</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 下面这些是官方所给的例子</span></span>
<span class="line"><span>const books = reactive([ref(&#39;Vue 3 Guide&#39;)])</span></span>
<span class="line"><span>// 这里需要 .value</span></span>
<span class="line"><span>console.log(books[0].value)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const map = reactive(new Map([[&#39;count&#39;, ref(0)]]))</span></span>
<span class="line"><span>// 这里需要 .value</span></span>
<span class="line"><span>console.log(map.get(&#39;count&#39;).value)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref, reactive } from &#39;vue&#39;</span></span>
<span class="line"><span>const name = ref(&#39;Bill&#39;)</span></span>
<span class="line"><span>const score = ref(100)</span></span>
<span class="line"><span>const state = reactive({</span></span>
<span class="line"><span>  name,</span></span>
<span class="line"><span>  scores: [score]</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>console.log(state.name) // 会自动解包</span></span>
<span class="line"><span>console.log(state.scores[0]) // 不会自动解包</span></span>
<span class="line"><span>console.log(state.scores[0].value) // 100</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style lang=&quot;scss&quot; scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>在模板中的自动解包</li></ol><p>在模板里面，只有顶级的 ref 才会自动解包。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>    &lt;div&gt;{{ count }}&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;div&gt;{{ object.id }}&lt;/div&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span>const count = ref(0) // 顶级的 Ref 自动解包</span></span>
<span class="line"><span>const object = {</span></span>
<span class="line"><span>  id: ref(1) // 这就是一个非顶级 Ref 不会自动解包</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style lang=&quot;scss&quot; scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的例子，感觉非顶级的 Ref 好像也能够正常渲染出来，仿佛也是自动解包了的。</p><p>但是实际情况并非如此。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>    &lt;div&gt;{{ count + 1 }}&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;div&gt;{{ object.id + 1 }}&lt;/div&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span>const count = ref(0) // 顶级的 Ref 自动解包</span></span>
<span class="line"><span>const object = {</span></span>
<span class="line"><span>  id: ref(1) // 这就是一个非顶级 Ref 不会自动解包</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style lang=&quot;scss&quot; scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如我们在模板中各自加 1 就会发现上面因为已经解包出来了，所以能够正常的进行表达式的计算。</p><p>但是下面因为没有解包，意味着 <a href="http://object.id" target="_blank" rel="noopener noreferrer">object.id</a> 仍然是一个对象，因此最终计算的结果为 [object Object]1</p><p>因此要访问 <a href="http://object.id" target="_blank" rel="noopener noreferrer">object.id</a> 的值，没有自动解包我们就手动访问一下 value</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>    &lt;div&gt;{{ count + 1 }}&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;div&gt;{{ object.id.value + 1 }}&lt;/div&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><ul><li>EOF-</li></ul>`,75)]))}const v=n(l,[["render",p],["__file","Vue02.html.vue"]]),r=JSON.parse('{"path":"/Vue/Vue02.html","title":"响应式基础","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"使用ref","slug":"使用ref","link":"#使用ref","children":[]},{"level":2,"title":"使用 reactive","slug":"使用-reactive","link":"#使用-reactive","children":[]},{"level":2,"title":"使用细节","slug":"使用细节","link":"#使用细节","children":[{"level":3,"title":"reactive局限性","slug":"reactive局限性","link":"#reactive局限性","children":[]},{"level":3,"title":"ref解包细节","slug":"ref解包细节","link":"#ref解包细节","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":8.11,"words":2433},"filePathRelative":"Vue/Vue02.md"}');export{v as comp,r as data};
