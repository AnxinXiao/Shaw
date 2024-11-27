import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as e,o as i}from"./app-_9vaDOHR.js";const l={};function p(t,s){return i(),a("div",null,s[0]||(s[0]=[e(`<h1 id="计算属性" tabindex="-1"><a class="header-anchor" href="#计算属性"><span>计算属性</span></a></h1><p>模板表达式：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>&lt;span&gt;Name: {{ author.name }}&lt;/span&gt;</span></span>
<span class="line"><span>  &lt;p&gt;Has published books:&lt;/p&gt;</span></span>
<span class="line"><span>  &lt;span&gt;{{ author.books.length &gt; 0 ? &#39;Yes&#39; : &#39;No&#39; }}&lt;/span&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { reactive } from &#39;vue&#39;</span></span>
<span class="line"><span>const author = reactive({</span></span>
<span class="line"><span>  name: &#39;John Doe&#39;,</span></span>
<span class="line"><span>  books: [&#39;Vue 2 - Advanced Guide&#39;, &#39;Vue 3 - Basic Guide&#39;, &#39;Vue 4 - The Mystery&#39;]</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style lang=&quot;scss&quot; scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的例子中，我们之所以要使用模板表达式，是因为要渲染的数据和模板之间，并非简单的对应关系，需要进行二次处理之后，才能够在模板上使用。</p><p>虽然在上面的例子中，使用模板表达式能够解决上面的需求（对数据做二次处理的需求），但是也存在一些问题：</p><ol><li>因为只能写表达式，不能够写语句，所以这意味着无法支持复杂的运算</li><li>将计算逻辑写在模板里面，模板显得非常的臃肿</li><li>相同的计算逻辑要在模板中出现多次，难以维护，计算逻辑理应是能够复用的</li></ol><p>因此，正因为有上面的这些问题，所以计算属性登场了。</p><h2 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用"><span><strong>基本使用</strong></span></a></h2><p>基本使用代码如下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;span&gt;Name: {{ author.name }}&lt;/span&gt;</span></span>
<span class="line"><span>  &lt;p&gt;Has published books:&lt;/p&gt;</span></span>
<span class="line"><span>  &lt;span&gt;{{ isPublishBook }}&lt;/span&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { reactive, computed } from &#39;vue&#39;</span></span>
<span class="line"><span>const author = reactive({</span></span>
<span class="line"><span>  name: &#39;John Doe&#39;,</span></span>
<span class="line"><span>  books: [&#39;Vue 2 - Advanced Guide&#39;, &#39;Vue 3 - Basic Guide&#39;, &#39;Vue 4 - The Mystery&#39;]</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const isPublishBook = computed(() =&gt; {</span></span>
<span class="line"><span>  // 在计算属性里面，我们就对数据进行二次处理</span></span>
<span class="line"><span>  return author.books.length &gt; 0 ? &#39;Yes&#39; : &#39;No&#39;</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 计算属性也是响应式，当依赖的数据发生变化，那么计算属性也会重新计算</span></span>
<span class="line"><span>setTimeout(() =&gt; {</span></span>
<span class="line"><span>  author.books = []</span></span>
<span class="line"><span>}, 2000)</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style lang=&quot;scss&quot; scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结一下，计算属性一般就是对响应式数据进行二次计算，返回一个计算属性的 ref，该 ref 可以在模板中使用。如果所依赖的响应式数据发生了变化，那么该计算属性会重新进行计算。</p><h2 id="可写计算属性" tabindex="-1"><a class="header-anchor" href="#可写计算属性"><span><strong>可写计算属性</strong></span></a></h2><p>一般来讲，计算属性就是对某个响应式数据进行二次计算，之后在模板中读取计算属性的值，这是绝大多数的场景下的使用，因此计算属性默认也就是只读模式。</p><p>但是，计算属性是支持可写的模式，需要往 computed 方法中传递一个对象，该对象中有对应的 getter 和 setter：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;span&gt;name:{{ fullName }}&lt;/span&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref, computed } from &#39;vue&#39;</span></span>
<span class="line"><span>const firstName = ref(&#39;Xie&#39;)</span></span>
<span class="line"><span>const lastName = ref(&#39;Jie&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const fullName = computed({</span></span>
<span class="line"><span>  // 在读取计算属性值的时候会触发</span></span>
<span class="line"><span>  get() {</span></span>
<span class="line"><span>    return firstName.value + &#39; &#39; + lastName.value</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  // 在设置计算属性值的时候会触发</span></span>
<span class="line"><span>  set(newName) {</span></span>
<span class="line"><span>    ;[firstName.value, lastName.value] = newName.split(&#39; &#39;)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 接下来可能因为某种原因，要设置计算属性</span></span>
<span class="line"><span>setTimeout(() =&gt; {</span></span>
<span class="line"><span>  // 这里就涉及到了设置计算属性</span></span>
<span class="line"><span>  fullName.value = &#39;Zhang San&#39;</span></span>
<span class="line"><span>}, 3000)</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style lang=&quot;scss&quot; scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践"><span><strong>最佳实践</strong></span></a></h2><ol><li>Getter 不应该有副作用</li></ol><p>现实生活中，也有使用“副作用”这个词的场景。</p><p>现实生活中的副作用指的就是“不期待的效果，但是它发生了”。</p><p>程序中的副作用也是类似的意思：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>function effect(){</span></span>
<span class="line"><span>  document.body.innerText = &#39;hello&#39;;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的例子中，effect 函数内部修改了 document.body 的值，这就直接或者间接影响了其他函数（可能也需要读取 document.body 的值）的执行结果，这个时候我们就称 effect 函数是有副作用。</p><p>再比如，一个函数修改了全局变量，也是一个副作用操作：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>let val = 1;</span></span>
<span class="line"><span>function effect(){</span></span>
<span class="line"><span>  val = 2; // 修改全局变量，产生副作用</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>常见的副作用操作还有很多：</p><ul><li>调用系统 I/O 的 API</li><li>发送网络请求</li><li>在函数体内修改外部变量的值</li><li>使用 console.log 等方法进行输出</li><li>调用存在副作用的函数</li></ul><p>回到 Vue 中的计算属性，一个计算属性的声明中应该描述的是根据一个值派生另外一个值，不应该改变其他的状态，也不应该在 getter 中做诸如异步请求、更改DOM一类的操作。</p><ol><li>避免直接修改计算属性的值</li></ol><p>绝大多数场景下，都应该是读取计算属性的值，而非设置计算属性的值。</p><blockquote><p>从计算属性返回的值是派生状态。可以把它看作是一个“临时快照”，每当源状态发生变化时，就会创建一个新的快照。更改快照是没有意义的，因此计算属性的返回值应该被视为只读的，并且永远不应该被更改——应该更新它所依赖的源状态以触发新的计算。</p></blockquote><h2 id="计算属性和方法" tabindex="-1"><a class="header-anchor" href="#计算属性和方法"><span><strong>计算属性和方法</strong></span></a></h2><p>除了计算属性以外，我们还可以定义方法：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;span&gt;Name: {{ author.name }}&lt;/span&gt;</span></span>
<span class="line"><span>  &lt;p&gt;Has published books:&lt;/p&gt;</span></span>
<span class="line"><span>  &lt;span&gt;{{ isPublishBook() }}&lt;/span&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { reactive } from &#39;vue&#39;</span></span>
<span class="line"><span>const author = reactive({</span></span>
<span class="line"><span>  name: &#39;John Doe&#39;,</span></span>
<span class="line"><span>  books: [&#39;Vue 2 - Advanced Guide&#39;, &#39;Vue 3 - Basic Guide&#39;, &#39;Vue 4 - The Mystery&#39;]</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function isPublishBook() {</span></span>
<span class="line"><span>  return author.books.length &gt; 0 ? &#39;Yes&#39; : &#39;No&#39;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style lang=&quot;scss&quot; scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>计算属性依赖于响应式数据，然后对响应式数据进行二次计算。只有在响应式数据发生变化的时候，才会重新计算，换句话说，计算属性会缓存所计算的值。</p><p>而方法在重新渲染的时候，每次都是重新调用。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;button v-on:click=&quot;a++&quot;&gt;A++&lt;/button&gt;</span></span>
<span class="line"><span>  &lt;button v-on:click=&quot;b++&quot;&gt;B++&lt;/button&gt;</span></span>
<span class="line"><span>  &lt;p&gt;computedA: {{ computedA }}&lt;/p&gt;</span></span>
<span class="line"><span>  &lt;p&gt;computedB: {{ computedB }}&lt;/p&gt;</span></span>
<span class="line"><span>  &lt;p&gt;methodA: {{ methodA() }}&lt;/p&gt;</span></span>
<span class="line"><span>  &lt;p&gt;methodB: {{ methodB() }}&lt;/p&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref, computed } from &#39;vue&#39;</span></span>
<span class="line"><span>const a = ref(1)</span></span>
<span class="line"><span>const b = ref(1)</span></span>
<span class="line"><span>// 创建两个计算属性，分别依赖 a 和 b</span></span>
<span class="line"><span>const computedA = computed(() =&gt; {</span></span>
<span class="line"><span>  console.log(&#39;计算属性A重新计算了&#39;)</span></span>
<span class="line"><span>  return a.value + 1</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>const computedB = computed(() =&gt; {</span></span>
<span class="line"><span>  console.log(&#39;计算属性B重新计算了&#39;)</span></span>
<span class="line"><span>  return b.value + 1</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>function methodA() {</span></span>
<span class="line"><span>  console.log(&#39;methodA执行了&#39;)</span></span>
<span class="line"><span>  return a.value + 1</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>function methodB() {</span></span>
<span class="line"><span>  console.log(&#39;methodB执行了&#39;)</span></span>
<span class="line"><span>  return b.value + 1</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style lang=&quot;scss&quot; scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最佳实践，当需要对数据进行二次计算的时候，就是使用计算属性即可。方法一般是和事件相关联，作为事件的事件处理方法来使用。</p><hr><ul><li>EOF-</li></ul>`,39)]))}const r=n(l,[["render",p],["__file","Vue04.html.vue"]]),v=JSON.parse('{"path":"/Vue/Vue04.html","title":"计算属性","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"基本使用","slug":"基本使用","link":"#基本使用","children":[]},{"level":2,"title":"可写计算属性","slug":"可写计算属性","link":"#可写计算属性","children":[]},{"level":2,"title":"最佳实践","slug":"最佳实践","link":"#最佳实践","children":[]},{"level":2,"title":"计算属性和方法","slug":"计算属性和方法","link":"#计算属性和方法","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":4.9,"words":1471},"filePathRelative":"Vue/Vue04.md"}');export{r as comp,v as data};
