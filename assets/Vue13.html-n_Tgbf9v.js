import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as i,o as e}from"./app-_9vaDOHR.js";const l={};function p(d,s){return e(),a("div",null,s[0]||(s[0]=[i(`<h1 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h1><ul><li>Props</li><li>自定义事件</li><li>插槽</li></ul><p>所谓 Props，其实就是外部在使用组件的时候，向组件传递数据。</p><h2 id="快速入门" tabindex="-1"><a class="header-anchor" href="#快速入门"><span><strong>快速入门</strong></span></a></h2><p>下面我们定义了一个 UserCard.vue 组件：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;user-card&quot;&gt;</span></span>
<span class="line"><span>    &lt;img :src=&quot;user.avatarUrl&quot; alt=&quot;用户头像&quot; class=&quot;avatar&quot; /&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;user-info&quot;&gt;</span></span>
<span class="line"><span>      &lt;h2&gt;{{ user.name }}&lt;/h2&gt;</span></span>
<span class="line"><span>      &lt;p&gt;{{ user.email }}&lt;/p&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>// defineProps 是一个宏，用于声明组件接收哪些 props</span></span>
<span class="line"><span>const user = defineProps({</span></span>
<span class="line"><span>  name: String,</span></span>
<span class="line"><span>  email: String,</span></span>
<span class="line"><span>  avatarUrl: String</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>.user-card {</span></span>
<span class="line"><span>  display: flex;</span></span>
<span class="line"><span>  align-items: center;</span></span>
<span class="line"><span>  background-color: #f9f9f9;</span></span>
<span class="line"><span>  border: 1px solid #e0e0e0;</span></span>
<span class="line"><span>  border-radius: 10px;</span></span>
<span class="line"><span>  padding: 10px;</span></span>
<span class="line"><span>  margin: 10px 0;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.avatar {</span></span>
<span class="line"><span>  width: 60px;</span></span>
<span class="line"><span>  height: 60px;</span></span>
<span class="line"><span>  border-radius: 50%;</span></span>
<span class="line"><span>  margin-right: 15px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.user-info h2 {</span></span>
<span class="line"><span>  margin: 0;</span></span>
<span class="line"><span>  font-size: 20px;</span></span>
<span class="line"><span>  color: #333;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.user-info p {</span></span>
<span class="line"><span>  margin: 5px 0 0;</span></span>
<span class="line"><span>  font-size: 16px;</span></span>
<span class="line"><span>  color: #666;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在该组件中，接收 name、email 以及 avatrUrl 这三个 prop，使用 defineProps 来定义要接收的 props，defineProps 是一个宏，会在代码实际执行之前进行一个替换操作。</p><p>之后 App.vue 作为父组件，在父组件中使用上面的 UserCard.vue 组件（子组件）</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;app-container&quot;&gt;</span></span>
<span class="line"><span>    &lt;!-- 父组件在使用 UserCard 这个组件的时候，向内部传递数据 --&gt;</span></span>
<span class="line"><span>    &lt;UserCard name=&quot;张三&quot; email=&quot;123@gamil.com&quot; avatar-url=&quot;src/assets/yinshi.jpg&quot; /&gt;</span></span>
<span class="line"><span>    &lt;UserCard name=&quot;莉丝&quot; email=&quot;456@gamil.com&quot; avatar-url=&quot;src/assets/jinzhu.jpeg&quot; /&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import UserCard from &#39;./components/UserCard.vue&#39;</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>.app-container {</span></span>
<span class="line"><span>  max-width: 500px;</span></span>
<span class="line"><span>  margin: auto;</span></span>
<span class="line"><span>  padding: 20px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用细节" tabindex="-1"><a class="header-anchor" href="#使用细节"><span><strong>使用细节</strong></span></a></h2><ol><li>命名方面</li></ol><p>组件内部在声明 props 的时候，推荐使用驼峰命名法：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>defineProps({</span></span>
<span class="line"><span>  greetingMessage: String</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;span&gt;{{ greetingMessage }}&lt;/span&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>不过父组件在使用子组件，给子组件传递属性的时候，推荐使用更加贴近 HTML 的书写风格：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;MyComponent greeting-message=&quot;hello&quot; /&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol><li>动态的 Props</li></ol><p>在上面的快速入门示例中，我们传递的都是静态的数据：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;UserCard name=&quot;张三&quot; email=&quot;123@gamil.com&quot; avatar-url=&quot;src/assets/yinshi.jpg&quot; /&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>所谓动态的 Props，指的就是父组件所传递的属性值是和父组件本身的状态绑定在一起的：</p><p>UserCard.vue</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// defineProps 是一个宏，用于声明组件接收哪些 props</span></span>
<span class="line"><span>defineProps({</span></span>
<span class="line"><span>  user: {</span></span>
<span class="line"><span>    type: Object,</span></span>
<span class="line"><span>    required: true</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>App.vue</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;app-container&quot;&gt;</span></span>
<span class="line"><span>    &lt;!-- 父组件在使用 UserCard 这个组件的时候，向内部传递数据 --&gt;</span></span>
<span class="line"><span>    &lt;UserCard :user=&quot;user&quot; /&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;input-group&quot;&gt;</span></span>
<span class="line"><span>      &lt;input type=&quot;text&quot; placeholder=&quot;请输入新的名字&quot; v-model=&quot;newName&quot; /&gt;</span></span>
<span class="line"><span>      &lt;button @click=&quot;changeName&quot;&gt;确定修改&lt;/button&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span>import UserCard from &#39;./components/UserCard.vue&#39;</span></span>
<span class="line"><span>// 父组件所维护的一份数据</span></span>
<span class="line"><span>const user = ref({</span></span>
<span class="line"><span>  name: &#39;张三&#39;,</span></span>
<span class="line"><span>  email: &#39;123@gamil.com&#39;,</span></span>
<span class="line"><span>  avatarUrl: &#39;src/assets/yinshi.jpg&#39;</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>const newName = ref(&#39;&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 根据用户输入的新名字</span></span>
<span class="line"><span>// 更新 user 这个数据</span></span>
<span class="line"><span>function changeName() {</span></span>
<span class="line"><span>  if (newName.value.trim()) {</span></span>
<span class="line"><span>    user.value.name = newName.value</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>.app-container {</span></span>
<span class="line"><span>  max-width: 500px;</span></span>
<span class="line"><span>  margin: auto;</span></span>
<span class="line"><span>  padding: 20px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.input-group {</span></span>
<span class="line"><span>  display: flex;</span></span>
<span class="line"><span>  margin-top: 20px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>input {</span></span>
<span class="line"><span>  flex: 1;</span></span>
<span class="line"><span>  padding: 10px;</span></span>
<span class="line"><span>  margin-right: 10px;</span></span>
<span class="line"><span>  font-size: 16px;</span></span>
<span class="line"><span>  border: 1px solid #ddd;</span></span>
<span class="line"><span>  border-radius: 5px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>button {</span></span>
<span class="line"><span>  padding: 10px 15px;</span></span>
<span class="line"><span>  background-color: #007bff;</span></span>
<span class="line"><span>  color: white;</span></span>
<span class="line"><span>  border: none;</span></span>
<span class="line"><span>  border-radius: 5px;</span></span>
<span class="line"><span>  cursor: pointer;</span></span>
<span class="line"><span>  font-size: 16px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>button:hover {</span></span>
<span class="line"><span>  background-color: #0056b3;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还需要注意一个细节：如果想要向组件传递 <strong>非字符串</strong> 类型的值，例如 number、boolean、array... 必须通过动态 Props 的方式来传递，不然组件内部拿到的是一个字符串。</p><ol><li>单向数据流</li></ol><p>Props 会因为父组件传递的数据的更新而自身发生变化，这种数据的流向是从父组件流向子组件的，这个流向是单向的，这意味着你在子组件中不应该修改父组件传递下来的 Props 数据。</p><p>如果你强行修改，Vue 会在控制台抛出警告：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const props = defineProps([&#39;foo&#39;])</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// ❌ 警告！prop 是只读的！</span></span>
<span class="line"><span>props.foo = &#39;bar&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有些时候，我们期望子组件在局部保存一份父组件传递下来的数据，这种情况下，就在子组件中新定义一个子组件的数据存储 Props 上面的值即可。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>import {ref} from &#39;vue&#39;</span></span>
<span class="line"><span>// defineProps 是一个宏，用于声明组件接收哪些 props</span></span>
<span class="line"><span>const prop = defineProps([&#39;user&#39;, &#39;age&#39;])</span></span>
<span class="line"><span>// 在子组件中，使用 ref 创建一个响应式数据</span></span>
<span class="line"><span>// 值为父组件传递过来的 props 值</span></span>
<span class="line"><span>const age = ref(prop.age)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还有一些时候，可能需要对父组件传递过来的数据进行二次计算，这个也是可以的，前提是在子组件内部自己创建一个计算属性，仅仅使用父组件传递的 props 值来做二次计算。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const props = defineProps([&#39;size&#39;])</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 该 prop 变更时计算属性也会自动更新</span></span>
<span class="line"><span>const normalizedSize = computed(() =&gt; props.size.trim().toLowerCase())</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="校验" tabindex="-1"><a class="header-anchor" href="#校验"><span><strong>校验</strong></span></a></h2><p>子组件在声明 Props 的时候，是可以书写校验要求的，如果父组件在传递值的时候不符合 Props 值的要求，开发阶段 Vue 会在控制台给出警告信息。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>defineProps({</span></span>
<span class="line"><span>  // 基础类型检查</span></span>
<span class="line"><span>  // （给出 \`null\` 和 \`undefined\` 值则会跳过任何类型检查）</span></span>
<span class="line"><span>  propA: Number,</span></span>
<span class="line"><span>  // 多种可能的类型</span></span>
<span class="line"><span>  propB: [String, Number],</span></span>
<span class="line"><span>  // 必传，且为 String 类型</span></span>
<span class="line"><span>  propC: {</span></span>
<span class="line"><span>    type: String,</span></span>
<span class="line"><span>    required: true</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  // Number 类型的默认值</span></span>
<span class="line"><span>  propD: {</span></span>
<span class="line"><span>    type: Number,</span></span>
<span class="line"><span>    default: 100</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  // 对象类型的默认值</span></span>
<span class="line"><span>  propE: {</span></span>
<span class="line"><span>    type: Object,</span></span>
<span class="line"><span>    // 对象或数组的默认值</span></span>
<span class="line"><span>    // 必须从一个工厂函数返回。</span></span>
<span class="line"><span>    // 该函数接收组件所接收到的原始 prop 作为参数。</span></span>
<span class="line"><span>    default(rawProps) {</span></span>
<span class="line"><span>      return { message: &#39;hello&#39; }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  // 自定义类型校验函数</span></span>
<span class="line"><span>  // 在 3.4+ 中完整的 props 作为第二个参数传入</span></span>
<span class="line"><span>  propF: {</span></span>
<span class="line"><span>    validator(value, props) {</span></span>
<span class="line"><span>      // The value must match one of these strings</span></span>
<span class="line"><span>      return [&#39;success&#39;, &#39;warning&#39;, &#39;danger&#39;].includes(value)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  // 函数类型的默认值</span></span>
<span class="line"><span>  propG: {</span></span>
<span class="line"><span>    type: Function,</span></span>
<span class="line"><span>    // 不像对象或数组的默认，这不是一个</span></span>
<span class="line"><span>    // 工厂函数。这会是一个用来作为默认值的函数</span></span>
<span class="line"><span>    default() {</span></span>
<span class="line"><span>      return &#39;Default function&#39;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如我们对上面的 UserCard.vue 添加一个自定义的校验规则：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>defineProps({</span></span>
<span class="line"><span>  user: {</span></span>
<span class="line"><span>    type: Object,</span></span>
<span class="line"><span>    required: true,</span></span>
<span class="line"><span>    // 自定义校验规则</span></span>
<span class="line"><span>    validator: (value) =&gt; {</span></span>
<span class="line"><span>      return value.name &amp;&amp; value.email &amp;&amp; value.avatarUrl</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  age: {</span></span>
<span class="line"><span>    type: [Number, String],</span></span>
<span class="line"><span>    default: 18</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,38)]))}const v=n(l,[["render",p],["__file","Vue13.html.vue"]]),t=JSON.parse('{"path":"/Vue/Vue13.html","title":"Props","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"快速入门","slug":"快速入门","link":"#快速入门","children":[]},{"level":2,"title":"使用细节","slug":"使用细节","link":"#使用细节","children":[]},{"level":2,"title":"校验","slug":"校验","link":"#校验","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":4.58,"words":1375},"filePathRelative":"Vue/Vue13.md"}');export{v as comp,t as data};
