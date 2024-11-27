import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as i,o as e}from"./app-_9vaDOHR.js";const l={};function p(d,s){return e(),a("div",null,s[0]||(s[0]=[i(`<h1 id="自定义事件" tabindex="-1"><a class="header-anchor" href="#自定义事件"><span>自定义事件</span></a></h1><p>自定义事件的核心思想，子组件传递数据给父组件。</p><p>另外，父组件传递给子组件的数据，子组件不能去改，此时子组件也可以通过自定义事件的形式，去通知父组件，让父组件即时的更新数据。</p><h2 id="快速上手" tabindex="-1"><a class="header-anchor" href="#快速上手"><span><strong>快速上手</strong></span></a></h2><p>这里以评分组件为例：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;rating-container&quot;&gt;</span></span>
<span class="line"><span>    &lt;span v-for=&quot;star in 5&quot; :key=&quot;star&quot; class=&quot;star&quot; @click=&quot;setStar(star)&quot;&gt;</span></span>
<span class="line"><span>      {{ rating &gt;= star ? &#39;★&#39; : &#39;☆&#39; }}</span></span>
<span class="line"><span>    &lt;/span&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span>const rating = ref(0) // 表示几颗星</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const emits = defineEmits([&#39;update-rating&#39;])</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function setStar(newStar) {</span></span>
<span class="line"><span>  rating.value = newStar</span></span>
<span class="line"><span>  // 我们需要将最新的星星状态的值传递给父组件</span></span>
<span class="line"><span>  // 触发父组件的 update-rating 事件</span></span>
<span class="line"><span>  emits(&#39;update-rating&#39;, rating.value)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>.rating-container {</span></span>
<span class="line"><span>  display: flex;</span></span>
<span class="line"><span>  font-size: 24px;</span></span>
<span class="line"><span>  cursor: pointer;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.star {</span></span>
<span class="line"><span>  margin-right: 5px;</span></span>
<span class="line"><span>  color: gold;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.star:hover {</span></span>
<span class="line"><span>  color: orange;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的评分组件中，我们需要将子组件 rating 的状态值传递给父组件，通过触发父组件所绑定的 update-rating 事件来进行传递。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;app-container&quot;&gt;</span></span>
<span class="line"><span>    &lt;h1&gt;请对本次服务评分：&lt;/h1&gt;</span></span>
<span class="line"><span>    &lt;Rating @update-rating=&quot;handleRating&quot; /&gt;</span></span>
<span class="line"><span>    &lt;p v-if=&quot;rating &gt; 0&quot;&gt;你当前的评价为 {{ rating }} 颗星&lt;/p&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span>import Rating from &#39;./components/Rating.vue&#39;</span></span>
<span class="line"><span>const rating = ref(0)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function handleRating(newRating) {</span></span>
<span class="line"><span>  // 更新父组件的数据就可以了</span></span>
<span class="line"><span>  rating.value = newRating</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>.app-container {</span></span>
<span class="line"><span>  max-width: 600px;</span></span>
<span class="line"><span>  margin: auto;</span></span>
<span class="line"><span>  text-align: center;</span></span>
<span class="line"><span>  font-family: Arial, sans-serif;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>p {</span></span>
<span class="line"><span>  font-size: 18px;</span></span>
<span class="line"><span>  color: #333;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>父组件在使用子组件的时候，就为子组件绑定了自定义事件，本例中是 update-rating 事件，当子组件触发该事件时，就会执行该事件所对应的事件处理函数 handleRating. 事件处理函数的形参就能够接收到子组件传递过来的数据。</p><h2 id="事件相关细节" tabindex="-1"><a class="header-anchor" href="#事件相关细节"><span><strong>事件相关细节</strong></span></a></h2><p>在组件的模板中，可以直接使用 $emit 去触发自定义事件。例如上面的评分的组件例子，可以这么写：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;span v-for=&quot;star in 5&quot; :key=&quot;star&quot; class=&quot;star&quot; @click=&quot;$emit(&#39;update-rating&#39;, star)&quot;&gt;</span></span>
<span class="line"><span>  {{ rating &gt;= star ? &#39;★&#39; : &#39;☆&#39; }}</span></span>
<span class="line"><span>&lt;/span&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>和前面所介绍的 Props 类似，自定义事件也是支持校验的。这里的校验主要是对子组件要传递给父组件的值进行校验。</p><p>要添加校验，需要书写为对象的形式，对象的键是事件名，值是校验函数，校验函数所接收的参数就是 emit 触发事件时要传递给父组件的参数，需要返回一个布尔值来说明传递的值是否通过了校验。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>const emit = defineEmits({</span></span>
<span class="line"><span>  // 没有校验</span></span>
<span class="line"><span>  click: null,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 校验 submit 事件</span></span>
<span class="line"><span>  submit: ({ email, password }) =&gt; {</span></span>
<span class="line"><span>    if (email &amp;&amp; password) {</span></span>
<span class="line"><span>      return true</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>      console.warn(&#39;Invalid submit event payload!&#39;)</span></span>
<span class="line"><span>      return false</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function submitForm(email, password) {</span></span>
<span class="line"><span>  emit(&#39;submit&#39;, { email, password })</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如还是拿刚才的评分组件来举例：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>defineProps([&#39;rating&#39;])</span></span>
<span class="line"><span>const emits = defineEmits({</span></span>
<span class="line"><span>  &#39;update-rating&#39;: (value) =&gt; {</span></span>
<span class="line"><span>    if (value &lt; 1 || value &gt; 5) {</span></span>
<span class="line"><span>      console.warn(&#39;传递的值有问题！！！&#39;)</span></span>
<span class="line"><span>      return false</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return true</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function setStar(newStar) {</span></span>
<span class="line"><span>  // 我们需要将最新的星星状态的值传递给父组件</span></span>
<span class="line"><span>  // 触发父组件的 update-rating 事件</span></span>
<span class="line"><span>  emits(&#39;update-rating&#39;, 100)</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><ul><li>EOF-</li></ul>`,19)]))}const r=n(l,[["render",p],["__file","Vue14.html.vue"]]),v=JSON.parse('{"path":"/Vue/Vue14.html","title":"自定义事件","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"快速上手","slug":"快速上手","link":"#快速上手","children":[]},{"level":2,"title":"事件相关细节","slug":"事件相关细节","link":"#事件相关细节","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":2.48,"words":745},"filePathRelative":"Vue/Vue14.md"}');export{r as comp,v as data};
