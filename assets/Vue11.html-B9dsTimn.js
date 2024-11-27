import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as i,o as e}from"./app-_9vaDOHR.js";const l={};function p(t,s){return e(),a("div",null,s[0]||(s[0]=[i(`<h1 id="侦听器" tabindex="-1"><a class="header-anchor" href="#侦听器"><span>侦听器</span></a></h1><p>侦听器和计算属性类似，都是依赖响应式数据。不过计算属性是在依赖的数据发生变化的时候，重新做二次计算，不会涉及到副作用的操作。而侦听器则刚好相反，在依赖的数据发生变化的时候，允许做一些副作用的操作，例如更改 DOM、发送异步请求...</p><h2 id="快速入门" tabindex="-1"><a class="header-anchor" href="#快速入门"><span><strong>快速入门</strong></span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>    &lt;h1&gt;智能机器人&lt;/h1&gt;</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>      &lt;input v-model=&quot;question&quot; placeholder=&quot;请输入问题&quot; /&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;div v-if=&quot;loading&quot;&gt;正在加载中...&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;div v-else&gt;{{ answer }}&lt;/div&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref, watch } from &#39;vue&#39;</span></span>
<span class="line"><span>const question = ref(&#39;&#39;) // 存储用户输入的问题，以 ？ 结束</span></span>
<span class="line"><span>const answer = ref(&#39;&#39;) // 存储机器人的回答</span></span>
<span class="line"><span>const loading = ref(false) // 是否正在加载中</span></span>
<span class="line"><span>// 侦听器所对应的回调函数，接收两个参数</span></span>
<span class="line"><span>// 一个是依赖数据的新值，一个是依赖数据的旧值</span></span>
<span class="line"><span>watch(question, async (newValue) =&gt; {</span></span>
<span class="line"><span>  if (newValue.includes(&#39;?&#39;)) {</span></span>
<span class="line"><span>    loading.value = true</span></span>
<span class="line"><span>    answer.value = &#39;思考中....&#39;</span></span>
<span class="line"><span>    try {</span></span>
<span class="line"><span>      const res = await fetch(&#39;https://yesno.wtf/api&#39;)</span></span>
<span class="line"><span>      const result = await res.json()</span></span>
<span class="line"><span>      answer.value = result.answer</span></span>
<span class="line"><span>    } catch (err) {</span></span>
<span class="line"><span>      answer.value = &#39;抱歉，我无法回答您的问题&#39;</span></span>
<span class="line"><span>    } finally {</span></span>
<span class="line"><span>      loading.value = false</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的示例中，watch 就是一个侦听器，侦听 question 这个 ref 状态的变化，每次当 ref 状态发生变化的时候，就会重新执行后面的回调函数，回调函数接收两个参数：</p><ul><li>新的状态值</li><li>旧的状态值</li></ul><p>并且在回调函数中，支持副作用操作。</p><h2 id="各种细节" tabindex="-1"><a class="header-anchor" href="#各种细节"><span><strong>各种细节</strong></span></a></h2><h3 id="_1-侦听的数据源类型" tabindex="-1"><a class="header-anchor" href="#_1-侦听的数据源类型"><span><strong>1. 侦听的数据源类型</strong></span></a></h3><p>除了上面快速入门中演示的侦听 ref 类型的数据以外，还支持侦听一些其他类型的数据。</p><p><strong>计算属性</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>    &lt;input type=&quot;text&quot; v-model=&quot;firstName&quot; placeholder=&quot;first name&quot; /&gt;</span></span>
<span class="line"><span>    &lt;input type=&quot;text&quot; v-model=&quot;lastName&quot; placeholder=&quot;last name&quot; /&gt;</span></span>
<span class="line"><span>    &lt;p&gt;全名：{{ fullName }}&lt;/p&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref, computed, watch } from &#39;vue&#39;</span></span>
<span class="line"><span>const firstName = ref(&#39;John&#39;)</span></span>
<span class="line"><span>const lastName = ref(&#39;Doe&#39;)</span></span>
<span class="line"><span>const fullName = computed(() =&gt; \`\${firstName.value} \${lastName.value}\`)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 设置侦听器</span></span>
<span class="line"><span>watch(fullName, (newVal, oldVal) =&gt; {</span></span>
<span class="line"><span>  console.log(\`new: \${newVal}, old: \${oldVal}\`)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>reactive响应式对象</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>    &lt;input type=&quot;text&quot; v-model=&quot;user.name&quot; placeholder=&quot;name&quot; /&gt;</span></span>
<span class="line"><span>    &lt;input type=&quot;text&quot; v-model=&quot;user.age&quot; placeholder=&quot;age&quot; /&gt;</span></span>
<span class="line"><span>    &lt;p&gt;用户信息：{{ user.name }} - {{ user.age }}&lt;/p&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { reactive, watch } from &#39;vue&#39;</span></span>
<span class="line"><span>const user = reactive({</span></span>
<span class="line"><span>  name: &#39;John&#39;,</span></span>
<span class="line"><span>  age: 18</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 设置侦听器</span></span>
<span class="line"><span>watch(user, () =&gt; {</span></span>
<span class="line"><span>  console.log(&#39;触发了侦听器回调函数&#39;)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Getter函数</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>    &lt;input type=&quot;number&quot; v-model=&quot;count&quot; /&gt;</span></span>
<span class="line"><span>    &lt;p&gt;是否为偶数？{{ isEven() }}&lt;/p&gt;</span></span>
<span class="line"><span>    &lt;div&gt;count2: {{ count2 }}&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;button @click=&quot;count2++&quot;&gt;+1&lt;/button&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref, watch } from &#39;vue&#39;</span></span>
<span class="line"><span>const count = ref(0)</span></span>
<span class="line"><span>const count2 = ref(0)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 注意这个函数本身，是每次重新渲染的时候都会重新执行的</span></span>
<span class="line"><span>function isEven() {</span></span>
<span class="line"><span>  console.log(&#39;isEvent 函数被重新执行了&#39;)</span></span>
<span class="line"><span>  if (count2.value === 5) {</span></span>
<span class="line"><span>    return &#39;this is a test&#39;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return count.value % 2 === 0</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 设置侦听器</span></span>
<span class="line"><span>// 这里侦听的是函数的返回值结果</span></span>
<span class="line"><span>// 如果函数返回值发生变化，就会触发侦听器回调函数</span></span>
<span class="line"><span>watch(isEven, () =&gt; {</span></span>
<span class="line"><span>  console.log(&#39;触发了侦听器回调函数&#39;)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>多个数据源所组成的数组</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>      &lt;input type=&quot;text&quot; v-model=&quot;title&quot; /&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>      &lt;textarea v-model=&quot;description&quot; cols=&quot;30&quot; rows=&quot;10&quot;&gt;&lt;/textarea&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref, watch } from &#39;vue&#39;</span></span>
<span class="line"><span>const title = ref(&#39;&#39;)</span></span>
<span class="line"><span>const description = ref(&#39;&#39;)</span></span>
<span class="line"><span>// 这里侦听的是多个数据源所组成的数组</span></span>
<span class="line"><span>// 数组里面任何一个数据发生变化，都会触发回调函数</span></span>
<span class="line"><span>watch([title, description], () =&gt; {</span></span>
<span class="line"><span>  console.log(&#39;侦听器的回调函数执行了&#39;)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-侦听层次" tabindex="-1"><a class="header-anchor" href="#_2-侦听层次"><span><strong>2. 侦听层次</strong></span></a></h3><p>这个主要是针对 reactive 响应式对象，当侦听的数据源是 reactvie 类型数据的时候，默认是深层次侦听，这意味着哪怕是嵌套的属性值发生变化，侦听器的回调函数也会重新执行。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>    &lt;h1&gt;任务列表&lt;/h1&gt;</span></span>
<span class="line"><span>    &lt;ul&gt;</span></span>
<span class="line"><span>      &lt;li v-for=&quot;task in tasks.list&quot; :key=&quot;task.id&quot;&gt;</span></span>
<span class="line"><span>        {{ task.title }} - {{ task.completed ? &#39;已完成&#39; : &#39;未完成&#39; }}</span></span>
<span class="line"><span>        &lt;button @click=&quot;task.completed = !task.completed&quot;&gt;切换状态&lt;/button&gt;</span></span>
<span class="line"><span>      &lt;/li&gt;</span></span>
<span class="line"><span>    &lt;/ul&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { reactive, watch } from &#39;vue&#39;</span></span>
<span class="line"><span>const tasks = reactive({</span></span>
<span class="line"><span>  list: [</span></span>
<span class="line"><span>    { id: 1, title: &#39;Task 1&#39;, completed: false },</span></span>
<span class="line"><span>    { id: 2, title: &#39;Task 2&#39;, completed: true }</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>watch(tasks, () =&gt; {</span></span>
<span class="line"><span>  console.log(&#39;侦听器触发了！&#39;)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过上面的例子，我们可以看出，当侦听的是 reactive 类型的响应式对象时，是深层次侦听的。</p><p>虽然上面的这个深层次侦听的特性非常的方便，但是当用于大型数据结构的时候，开销也是很大的，因此一定要留意性能，只在必要的时候再使用。</p><p>另外补充一个点，当侦听的是 reactive 对象的时候，不能直接侦听响应式对象的属性值：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const obj = reactive({ count: 0 })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 错误，因为 watch() 得到的参数是一个 number</span></span>
<span class="line"><span>watch(obj.count, (count) =&gt; {</span></span>
<span class="line"><span>  console.log(\`count is: \${count}\`)</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以将上面的例子修改为一个 Getter 函数：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const obj = reactive({ count: 0 })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>watch(()=&gt;obj.count, (count) =&gt; {</span></span>
<span class="line"><span>  console.log(\`count is: \${count}\`)</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-第三个参数" tabindex="-1"><a class="header-anchor" href="#_3-第三个参数"><span><strong>3. 第三个参数</strong></span></a></h3><ul><li>第一个参数：侦听的数据源</li><li>第二个参数：数据发生变化时要执行的回调函数</li><li>第三个参数：选项对象 <ul><li>immediate：true/false <ul><li>默认情况下，watch 对应的回调函数是懒执行的，只有在依赖的数据发生变化时，才会执行回调。</li><li>但是在某些场景中，我们可能期望立即执行一次，例如请求一些初始化数据，这个时候就可以设置该配置项</li></ul></li><li>once：true/false <ul><li>侦听器的回调函数只执行一次</li></ul></li><li>deep：true/false <ul><li>强制转换为深层次侦听器</li><li>什么时候会用到呢？有些时候使用 watch 来侦听一个由计算属性或者 getter 函数返回的对象的时候，默认就不是深层次的侦听</li><li>通过设置 deep 可以让这种情况下的对象侦听，也变成深层次的侦听</li></ul></li></ul></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>    &lt;div v-for=&quot;task in tasks&quot; :key=&quot;task.id&quot; @click=&quot;selectTask(task)&quot;&gt;</span></span>
<span class="line"><span>      {{ task.title }} ({{ task.completed ? &#39;Completed&#39; : &#39;Pending&#39; }})</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;hr /&gt;</span></span>
<span class="line"><span>    &lt;div v-if=&quot;selectedTask&quot;&gt;</span></span>
<span class="line"><span>      &lt;h3&gt;Edit Task&lt;/h3&gt;</span></span>
<span class="line"><span>      &lt;input v-model=&quot;selectedTask.title&quot; placeholder=&quot;Edit title&quot; /&gt;</span></span>
<span class="line"><span>      &lt;label&gt;</span></span>
<span class="line"><span>        &lt;input type=&quot;checkbox&quot; v-model=&quot;selectedTask.completed&quot; /&gt;</span></span>
<span class="line"><span>        Completed</span></span>
<span class="line"><span>      &lt;/label&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { reactive, computed, watch } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const tasks = reactive([</span></span>
<span class="line"><span>  { id: 1, title: &#39;Learn Vue&#39;, completed: false },</span></span>
<span class="line"><span>  { id: 2, title: &#39;Read Documentation&#39;, completed: false },</span></span>
<span class="line"><span>  { id: 3, title: &#39;Build Something Awesome&#39;, completed: false }</span></span>
<span class="line"><span>])</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const selectedId = reactive({ id: null })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 这是一个计算属性</span></span>
<span class="line"><span>const selectedTask = computed(() =&gt; {</span></span>
<span class="line"><span>  return tasks.find((task) =&gt; task.id === selectedId.id)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 侦听的是一个 Getter 函数</span></span>
<span class="line"><span>// 该 Getter 函数返回计算属性的值</span></span>
<span class="line"><span>watch(</span></span>
<span class="line"><span>  () =&gt; selectedTask.value,</span></span>
<span class="line"><span>  () =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;Task details changed&#39;)</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  { deep: true }</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function selectTask(task) {</span></span>
<span class="line"><span>  selectedId.id = task.id</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="watcheffect" tabindex="-1"><a class="header-anchor" href="#watcheffect"><span><strong>watchEffect</strong></span></a></h2><p>watchEffect 相比 watch 而言，能够自动跟踪回调里面的响应式依赖，对比如下：</p><p>watch</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const todoId = ref(1)</span></span>
<span class="line"><span>const data = ref(null)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>watch(</span></span>
<span class="line"><span>  todoId, // 第一个参数需要显式的指定响应式依赖</span></span>
<span class="line"><span>  async () =&gt; {</span></span>
<span class="line"><span>    const response = await fetch(</span></span>
<span class="line"><span>      \`https://jsonplaceholder.typicode.com/todos/\${todoId.value}\`</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>    data.value = await response.json()</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  { immediate: true }</span></span>
<span class="line"><span>)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>watchEffect</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 不再需要显式的指定响应式数据依赖</span></span>
<span class="line"><span>// 在回调函数中用到了哪个响应式数据，该数据就会成为一个依赖</span></span>
<span class="line"><span>watchEffect(async () =&gt; {</span></span>
<span class="line"><span>  const response = await fetch(</span></span>
<span class="line"><span>    \`https://jsonplaceholder.typicode.com/todos/\${todoId.value}\`</span></span>
<span class="line"><span>  )</span></span>
<span class="line"><span>  data.value = await response.json()</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于只有一个依赖项的场景来讲，watchEffect 的收益不大，但是如果涉及到多个依赖项，那么 watchEffect 的好处就体现出来了。</p><p>watchEffect 相比 watch 还有一个特点：如果你需要侦听一个嵌套的数据结构的几个属性，那么 watchEffect 只会侦听回调中用到的属性，而不是递归侦听所有的属性。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>    &lt;h1&gt;团队管理&lt;/h1&gt;</span></span>
<span class="line"><span>    &lt;ul&gt;</span></span>
<span class="line"><span>      &lt;li v-for=&quot;member in team.members&quot; :key=&quot;member.id&quot;&gt;</span></span>
<span class="line"><span>        {{ member.name }} - {{ member.role }} - {{ member.status }}</span></span>
<span class="line"><span>      &lt;/li&gt;</span></span>
<span class="line"><span>    &lt;/ul&gt;</span></span>
<span class="line"><span>    &lt;button @click=&quot;updateLeaderStatus&quot;&gt;切换领导的状态&lt;/button&gt;</span></span>
<span class="line"><span>    &lt;button @click=&quot;updateMemberStatus&quot;&gt;切换成员的状态&lt;/button&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { reactive, watchEffect } from &#39;vue&#39;</span></span>
<span class="line"><span>const team = reactive({</span></span>
<span class="line"><span>  members: [</span></span>
<span class="line"><span>    { id: 1, name: &#39;Alice&#39;, role: &#39;Leader&#39;, status: &#39;Active&#39; },</span></span>
<span class="line"><span>    { id: 2, name: &#39;Bob&#39;, role: &#39;Member&#39;, status: &#39;Inactive&#39; }</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 有两个方法，分别是对 Leader 和 Member 进行状态修改</span></span>
<span class="line"><span>function updateLeaderStatus() {</span></span>
<span class="line"><span>  const leader = team.members.find((me) =&gt; me.role === &#39;Leader&#39;)</span></span>
<span class="line"><span>  // 切换状态</span></span>
<span class="line"><span>  leader.status = leader.status === &#39;Active&#39; ? &#39;Inactive&#39; : &#39;Active&#39;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function updateMemberStatus() {</span></span>
<span class="line"><span>  const member = team.members.find((member) =&gt; member.role === &#39;Member&#39;)</span></span>
<span class="line"><span>  member.status = member.status === &#39;Active&#39; ? &#39;Inactive&#39; : &#39;Active&#39;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 添加一个侦听器</span></span>
<span class="line"><span>watchEffect(() =&gt; {</span></span>
<span class="line"><span>  // 获取到 leader</span></span>
<span class="line"><span>  const leader = team.members.find((me) =&gt; me.role === &#39;Leader&#39;)</span></span>
<span class="line"><span>  // 输出 leader 当前的状态</span></span>
<span class="line"><span>  console.log(&#39;Leader状态:&#39;, leader.status)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="回调触发的时机" tabindex="-1"><a class="header-anchor" href="#回调触发的时机"><span><strong>回调触发的时机</strong></span></a></h2><p>默认情况下，侦听器回调的执行时机在父组件更新 <strong>之后</strong>，所属组件的 DOM 更新 <strong>之前</strong> 被调用。这意味着如果你尝试在回调函数中访问所属组件的 DOM，拿到的是 DOM 更新之前的状态。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>    &lt;button @click=&quot;isShow = !isShow&quot;&gt;显示/隐藏&lt;/button&gt;</span></span>
<span class="line"><span>    &lt;div v-if=&quot;isShow&quot; ref=&quot;divRef&quot;&gt;</span></span>
<span class="line"><span>      &lt;p&gt;this is a test&lt;/p&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;p&gt;上面的高度为：{{ height }} pixels&lt;/p&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref, watch } from &#39;vue&#39;</span></span>
<span class="line"><span>const isShow = ref(false)</span></span>
<span class="line"><span>const height = ref(0) // 存储高度</span></span>
<span class="line"><span>const divRef = ref(null) // 获取元素</span></span>
<span class="line"><span></span></span>
<span class="line"><span>watch(isShow, () =&gt; {</span></span>
<span class="line"><span>  // 获取高度，将高度值给 height</span></span>
<span class="line"><span>  height.value = divRef.value ? divRef.value.offsetHeight : 0</span></span>
<span class="line"><span>  console.log(\`当前获取的高度为：\${height.value}\`)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们期望侦听器的回调在 DOM 更新之后再被调用，那么可以将第三个参数 flush 设置为 post 即可，如下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>watch(</span></span>
<span class="line"><span>  isShow,</span></span>
<span class="line"><span>  () =&gt; {</span></span>
<span class="line"><span>    // 获取高度，将高度值给 height</span></span>
<span class="line"><span>    height.value = divRef.value ? divRef.value.offsetHeight : 0</span></span>
<span class="line"><span>    console.log(\`当前获取的高度为：\${height.value}\`)</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    flush: &#39;post&#39;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="停止侦听器" tabindex="-1"><a class="header-anchor" href="#停止侦听器"><span><strong>停止侦听器</strong></span></a></h2><p>大多数情况下你是不需要关心如何停止侦听器，组件上面所设置的侦听器会在组件被卸载的时候自动停止。</p><p>但是上面所说的自动停止仅限于同步设置侦听器的情况，如果是异步设置的侦听器，那么组件被销毁也不会自动停止：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { watchEffect } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 它会自动停止</span></span>
<span class="line"><span>watchEffect(() =&gt; {})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// ...这个则不会！</span></span>
<span class="line"><span>setTimeout(() =&gt; {</span></span>
<span class="line"><span>  watchEffect(() =&gt; {})</span></span>
<span class="line"><span>}, 100)</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种情况下，就需要手动的去停止侦听器。</p><p>要手动的停止侦听器，就和 setTimeout 或者 setInterval 类似，调用一下返回的函数即可。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const unwatch = watchEffect(() =&gt; {})</span></span>
<span class="line"><span>// 手动停止</span></span>
<span class="line"><span>unwatch();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是一个具体的示例：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>    &lt;button @click=&quot;a++&quot;&gt;+1&lt;/button&gt;</span></span>
<span class="line"><span>    &lt;p&gt;当前 a 的值为：{{ a }}&lt;/p&gt;</span></span>
<span class="line"><span>    &lt;p&gt;{{ message }}&lt;/p&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref, watch } from &#39;vue&#39;</span></span>
<span class="line"><span>const a = ref(1) // 计数器</span></span>
<span class="line"><span>const message = ref(&#39;&#39;) // 消息</span></span>
<span class="line"><span>// 假设我们期望 a 的值到达一定的值之后，停止侦听</span></span>
<span class="line"><span>const unwatch = watch(</span></span>
<span class="line"><span>  a,</span></span>
<span class="line"><span>  (newVal) =&gt; {</span></span>
<span class="line"><span>    // 当值大于 5 的时候，停止侦听</span></span>
<span class="line"><span>    if (newVal &gt; 5) {</span></span>
<span class="line"><span>      unwatch()</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    message.value = \`当前 a 的值为：\${a.value}\`</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  { immediate: true }</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><ul><li>EOF-</li></ul>`,55)]))}const v=n(l,[["render",p],["__file","Vue11.html.vue"]]),r=JSON.parse('{"path":"/Vue/Vue11.html","title":"侦听器","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"快速入门","slug":"快速入门","link":"#快速入门","children":[]},{"level":2,"title":"各种细节","slug":"各种细节","link":"#各种细节","children":[{"level":3,"title":"1. 侦听的数据源类型","slug":"_1-侦听的数据源类型","link":"#_1-侦听的数据源类型","children":[]},{"level":3,"title":"2. 侦听层次","slug":"_2-侦听层次","link":"#_2-侦听层次","children":[]},{"level":3,"title":"3. 第三个参数","slug":"_3-第三个参数","link":"#_3-第三个参数","children":[]}]},{"level":2,"title":"watchEffect","slug":"watcheffect","link":"#watcheffect","children":[]},{"level":2,"title":"回调触发的时机","slug":"回调触发的时机","link":"#回调触发的时机","children":[]},{"level":2,"title":"停止侦听器","slug":"停止侦听器","link":"#停止侦听器","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":8.2,"words":2459},"filePathRelative":"Vue/Vue11.md"}');export{v as comp,r as data};
