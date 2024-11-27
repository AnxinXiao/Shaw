import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as e,o as i}from"./app-_9vaDOHR.js";const l={};function p(t,s){return i(),a("div",null,s[0]||(s[0]=[e(`<h1 id="v-model的本质" tabindex="-1"><a class="header-anchor" href="#v-model的本质"><span>v-model的本质</span></a></h1><p>v-model的用法，总结起来就是两个场景：</p><ol><li>表单元素和响应式数据双向绑定</li><li>父子组件传递数据</li></ol><p><strong>和表单元素绑定</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>    &lt;p&gt;输入的内容为：{{ message }}&lt;/p&gt;</span></span>
<span class="line"><span>    &lt;input type=&quot;text&quot; v-model=&quot;message&quot; placeholder=&quot;请输入内容&quot; /&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span>const message = ref(&#39;Hello&#39;)</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style&gt;</span></span>
<span class="line"><span>input {</span></span>
<span class="line"><span>  padding: 8px;</span></span>
<span class="line"><span>  margin-top: 10px;</span></span>
<span class="line"><span>  border: 1px solid #ccc;</span></span>
<span class="line"><span>  border-radius: 4px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的示例中，input 元素和 message 这个响应式数据做了双向绑定。</p><p>input 元素所输入的值会影响 message 这个响应式数据的值；message 响应式数据的改变也会影响 input 元素。</p><p><strong>和子组件进行绑定</strong></p><p>App.vue</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;app-container&quot;&gt;</span></span>
<span class="line"><span>    &lt;h1&gt;请给产品打分：&lt;/h1&gt;</span></span>
<span class="line"><span>    &lt;!-- 通过 v-model 将父组件的状态值传递给子组件 --&gt;</span></span>
<span class="line"><span>    &lt;RatingComponent v-model=&quot;rating&quot;/&gt;</span></span>
<span class="line"><span>    &lt;p v-if=&quot;rating &gt; 0&quot;&gt;您的评分：{{ rating }}/5&lt;/p&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span>import RatingComponent from &#39;@/components/RatingComponent.vue&#39;</span></span>
<span class="line"><span>const rating = ref(3) // 评分的状态值</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style&gt;</span></span>
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
<span class="line"><span>&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>RatingComponent.vue</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;rating-container&quot;&gt;</span></span>
<span class="line"><span>    &lt;span v-for=&quot;star in 5&quot; :key=&quot;star&quot; class=&quot;star&quot; @click=&quot;setRating(star)&quot;&gt;</span></span>
<span class="line"><span>      {{ model &gt;= star ? &#39;★&#39; : &#39;☆&#39; }}</span></span>
<span class="line"><span>    &lt;/span&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>// 接收父组件通过 v-model 传递过来的状态</span></span>
<span class="line"><span>const model = defineModel()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function setRating(newRating) {</span></span>
<span class="line"><span>  // 通过 $emit 方法将新的评分值传递给父组件</span></span>
<span class="line"><span>  // emit(&#39;update:modelValue&#39;, newRating);</span></span>
<span class="line"><span>  model.value = newRating</span></span>
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
<span class="line"><span>&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>父组件通过 v-model 将自身的数据传递给子组件，子组件通过 defineModel 来拿到父组件传递过来的数据。拿到这个数据之后，不仅可以使用这个数据，还可以修改这个数据。</p><p><strong>v-model 的本质</strong></p><p>通过 vite-plugin-inspect 插件的编译结果来进行分析验证。</p><p>首先我们分析第一个场景，和表单元素的双向绑定，编译结果如下：</p><p>!<a href="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2024-05-27-044828.png" target="_blank" rel="noopener noreferrer">https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2024-05-27-044828.png</a></p><p>从编译结果我们可以看出，v-model 会被展开为一个名为 onUpdate:modelValue 的自定义事件，该事件对应的事件处理函数：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>$event =&gt; ($setup.message) = $event;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>这就解释了为什么输入框输入的值的时候，会影响响应式数据。</p><p>而输入框的 value 本身又是和 $setup.message 绑定在一起的，$setup.message 一变化，就会导致渲染函数重新执行，从而看到输入框里面的内容发生了变化。</p><p>接下来分析第二个场景，在子组件上面使用 v-model，编译结果如下：</p><p>App.vue</p><p>!<a href="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2024-05-27-045319.png" target="_blank" rel="noopener noreferrer">https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2024-05-27-045319.png</a></p><p>这里会向子组件传递一个名为 modelValue 的 props，props 对应的值就是 $setup.rating，这正是父组件上面的状态。</p><p>除此之外向子组件也传递了一个名为 onUpdate:modelValue 的自定义事件，该事件所对应的事件处理函数：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 该事件处理函数负责的事情：</span></span>
<span class="line"><span>// 就是将接收到的值更新组件本身的数据 rating</span></span>
<span class="line"><span>$event =&gt; ($setup.rating) = $event;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>RatingComponent.vue</p><p>!<a href="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2024-05-27-045928.png" target="_blank" rel="noopener noreferrer">https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2024-05-27-045928.png</a></p><p>对于子组件来讲，就可以通过 modelValue 这个props 来拿到父组件传递过来的数据，并且可以在模板中使用该数据。</p><p>当更新数据的时候，就去触发父组件传递过来的 onUpdate:modelValue 自定义事件，并且将新的值传递过去。</p><p>至此，你对官网的这句话：</p><blockquote><p>defineModel 是一个便利宏。编译器将其展开为以下内容：</p><ul><li>一个名为 <code>modelValue</code> 的 prop，本地 ref 的值与其同步；</li><li>一个名为 <code>update:modelValue</code> 的事件，当本地 ref 的值发生变更时触发。</li></ul></blockquote><p>有些时候在子组件上面使用 v-model 的时候，可以使用具名的 v-model，此时展开的 props 和自定义事件的名称会有所不同。</p><p>!<a href="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2024-05-27-050918.png" target="_blank" rel="noopener noreferrer">https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2024-05-27-050918.png</a></p><ul><li>Props：modelValue ---&gt; title</li><li>自定义事件：update:modelValue ---&gt; update:title</li></ul><hr><ul><li>EOF-</li></ul>`,38)]))}const r=n(l,[["render",p],["__file","Vue33.html.vue"]]),v=JSON.parse('{"path":"/Vue/Vue33.html","title":"v-model的本质","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":3.25,"words":976},"filePathRelative":"Vue/Vue33.md"}');export{r as comp,v as data};
