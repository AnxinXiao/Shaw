import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as i,o as e}from"./app-_9vaDOHR.js";const l={};function p(d,s){return e(),a("div",null,s[0]||(s[0]=[i(`<h1 id="组件v-model" tabindex="-1"><a class="header-anchor" href="#组件v-model"><span>组件v-model</span></a></h1><p>父传子通过 Props，子传父通过自定义事件。</p><p>v-model 是 Vue 中的一个内置指令，除了可以做表单元素的双向绑定以外，还可以用在组件上面，从而成为父组件和子组件数据传输的桥梁。</p><h2 id="快速上手" tabindex="-1"><a class="header-anchor" href="#快速上手"><span><strong>快速上手</strong></span></a></h2><p>App.vue</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;app-container&quot;&gt;</span></span>
<span class="line"><span>    &lt;h1&gt;请对本次服务评分：&lt;/h1&gt;</span></span>
<span class="line"><span>    &lt;!-- &lt;Rating @update-rating=&quot;handleRating&quot; :rating /&gt; --&gt;</span></span>
<span class="line"><span>    &lt;Rating v-model=&quot;rating&quot; /&gt;</span></span>
<span class="line"><span>    &lt;p v-if=&quot;rating &gt; 0&quot;&gt;你当前的评价为 {{ rating }} 颗星&lt;/p&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span>import Rating from &#39;./components/Rating.vue&#39;</span></span>
<span class="line"><span>// 这是父组件维护的数据</span></span>
<span class="line"><span>const rating = ref(0)</span></span>
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
<span class="line"><span>&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Rating.vue</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;rating-container&quot;&gt;</span></span>
<span class="line"><span>    &lt;span v-for=&quot;star in 5&quot; :key=&quot;star&quot; class=&quot;star&quot; @click=&quot;setStar(star)&quot;&gt;</span></span>
<span class="line"><span>      {{ model &gt;= star ? &#39;★&#39; : &#39;☆&#39; }}</span></span>
<span class="line"><span>    &lt;/span&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>const model = defineModel()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function setStar(newStar) {</span></span>
<span class="line"><span>  model.value = newStar</span></span>
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
<span class="line"><span>&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的例子中， 仍然是一个宏，并且这个宏是从 3.4 才开始支持的。</p><p>defineModel 没有破坏单向数据流的规则，因为它的底层仍然是使用的 Props 和 emits，编译器在进行编译的时候，会将 defineModel 这个宏展开为：</p><ul><li>一个名为 modelValue 的 prop</li><li>一个名为 update:modelValue 的事件</li></ul><p>如果你是 3.4 版本之前，那么得按照这种方式来使用：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>// 接收父组件传递下来的 Props</span></span>
<span class="line"><span>const props = defineProps([&#39;modelValue&#39;])</span></span>
<span class="line"><span>// 触发父组件的事件</span></span>
<span class="line"><span>const emit = defineEmits([&#39;update:modelValue&#39;])</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;input</span></span>
<span class="line"><span>    :value=&quot;props.modelValue&quot;</span></span>
<span class="line"><span>    @input=&quot;emit(&#39;update:modelValue&#39;, $event.target.value)&quot;</span></span>
<span class="line"><span>  /&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于 v-model 返回的是一个 ref 值，这个值可以再次和子组件的表单元素进行双向绑定：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;input type=&quot;text&quot; v-model=&quot;model&quot; /&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="相关细节" tabindex="-1"><a class="header-anchor" href="#相关细节"><span><strong>相关细节</strong></span></a></h2><ol><li>defineModel支持简单的验证</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 使 v-model 必填</span></span>
<span class="line"><span>const model = defineModel({ required: true })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 提供一个默认值</span></span>
<span class="line"><span>const model = defineModel({ default: 0 })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 指定类型</span></span>
<span class="line"><span>const model = defineModel({ type: String })</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>父组件在使用子组件的时候，v-model 可以传递一个参数</li></ol><p>父组件</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;!-- 传递给子组件的状态是 bookTitle，而这里的 title 相当于是给当前的 v-model 命名 --&gt;</span></span>
<span class="line"><span>&lt;MyComponent v-model:title=&quot;bookTitle&quot; /&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>回头在子组件中：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;!-- MyComponent.vue --&gt;</span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>// 接收名为 title 的 v-model 绑定值</span></span>
<span class="line"><span>const title = defineModel(&#39;title&#39;)</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;input type=&quot;text&quot; v-model=&quot;title&quot; /&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当绑定多个 v-model 的时候，那么就需要命名了：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;!-- 父组件传递多个 v-model绑定值，这个时候就需要命名了 --&gt;</span></span>
<span class="line"><span>&lt;UserName</span></span>
<span class="line"><span>  v-model:first-name=&quot;first&quot;</span></span>
<span class="line"><span>  v-model:last-name=&quot;last&quot;</span></span>
<span class="line"><span>/&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>// 子组件通过命名来指定要获取哪一个 v-model 绑定值</span></span>
<span class="line"><span>const firstName = defineModel(&#39;firstName&#39;)</span></span>
<span class="line"><span>const lastName = defineModel(&#39;lastName&#39;)</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;input type=&quot;text&quot; v-model=&quot;firstName&quot; /&gt;</span></span>
<span class="line"><span>  &lt;input type=&quot;text&quot; v-model=&quot;lastName&quot; /&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当使用了名字之后，验证就书写成第二个参数即可</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const title = defineModel(&#39;title&#39;, { required: true })</span></span>
<span class="line"><span>const count = defineModel(&quot;count&quot;, { type: Number, default: 0 })</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>使用 v-model 和子组件进行通信的时候，也可以使用修饰符</li></ol><p>父组件</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;MyComponent v-model.capitalize=&quot;myText&quot; /&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>回头子组件通过解构的方式能够拿到修饰符</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>const [model, modifiers] = defineModel()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(modifiers) // { capitalize: true }</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;input type=&quot;text&quot; v-model=&quot;model&quot; /&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>虽然拿到了修饰符，但是该修饰符没有任何功能，需要子组件这边自己来实现，实现了对应的功能之后，实际上对应的就是对子组件修改父组件数据时的一种限制。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>const [model, modifiers] = defineModel({</span></span>
<span class="line"><span>  set(value) {</span></span>
<span class="line"><span>    // 如果父组件书写了 capitalize 修饰符</span></span>
<span class="line"><span>    // 那么子组件在修改状态的时候，会走 setter</span></span>
<span class="line"><span>    // 在 setter 中就可以对子组件所设置的值进行一个限制</span></span>
<span class="line"><span>    if (modifiers.capitalize) {</span></span>
<span class="line"><span>      return value.charAt(0).toUpperCase() + value.slice(1)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return value</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;input type=&quot;text&quot; v-model=&quot;model&quot; /&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里我们以前面的星级评分为例：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const [model, modifiers] = defineModel({</span></span>
<span class="line"><span>  required: true,</span></span>
<span class="line"><span>  // 这个就是一个 setter，回头子组件在修改值的时候，就会走这个 setter</span></span>
<span class="line"><span>  set(value) {</span></span>
<span class="line"><span>    console.log(value)</span></span>
<span class="line"><span>    if (modifiers.number) {</span></span>
<span class="line"><span>      if (isNaN(value)) {</span></span>
<span class="line"><span>        value = 0</span></span>
<span class="line"><span>      } else {</span></span>
<span class="line"><span>        value = Number(value)</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      if (value &lt; 0) {</span></span>
<span class="line"><span>        value = 0</span></span>
<span class="line"><span>      } else if (value &gt; 5) {</span></span>
<span class="line"><span>        value = 5</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      return value</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><ul><li>EOF-</li></ul>`,39)]))}const r=n(l,[["render",p],["__file","Vue15.html.vue"]]),v=JSON.parse('{"path":"/Vue/Vue15.html","title":"组件v-model","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"快速上手","slug":"快速上手","link":"#快速上手","children":[]},{"level":2,"title":"相关细节","slug":"相关细节","link":"#相关细节","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":3.34,"words":1001},"filePathRelative":"Vue/Vue15.md"}');export{r as comp,v as data};
