import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as i,o as e}from"./app-_9vaDOHR.js";const l={};function p(d,s){return e(),a("div",null,s[0]||(s[0]=[i(`<h1 id="插槽的本质" tabindex="-1"><a class="header-anchor" href="#插槽的本质"><span>插槽的本质</span></a></h1><p>复习插槽的概念：</p><ul><li>子组件：通过 slot 来设置插槽</li><li>父组件：使用子组件时可以往 slot 的位置插入模板内容</li></ul><p>插槽<strong>使用层面</strong>的本质：<strong>父组件向子组件传递模板内容</strong></p><ul><li>默认插槽：拥有默认的一些内容</li><li>具名插槽：给你的插槽取一个名字</li><li>作用域插槽：数据来自于子组件，通过插槽的形式传递给父组件使用</li></ul><p><strong>父组件传递内容的本质</strong></p><p>传递的是一个对象：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>  default: function(){ ... },</span></span>
<span class="line"><span>  xxx: function(){ ... },</span></span>
<span class="line"><span>  xxx: function(){ ... },</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于上面的例子来讲，父组件传递的就是这样的一个对象：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>  default: function(){</span></span>
<span class="line"><span>    // 注意返回值是对应结构的虚拟 DOM</span></span>
<span class="line"><span>    return (</span></span>
<span class="line"><span>         &lt;div class=&quot;card-content&quot;&gt;</span></span>
<span class="line"><span>        &lt;img src=&quot;./assets/landscape.jpeg&quot; alt=&quot;Beautiful landscape&quot; class=&quot;card-image&quot; /&gt;</span></span>
<span class="line"><span>        &lt;p&gt;探索未知的自然风光，记录下每一个令人惊叹的瞬间。加入我们的旅程，一起见证世界的壮丽。&lt;/p&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  header: function(){</span></span>
<span class="line"><span>    return (</span></span>
<span class="line"><span>        &lt;div&gt;摄影作品&lt;/div&gt;</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>父组件向子组件传递过去的东西本质上是函数，通过调用这些函数，能够得到对应结构的虚拟 DOM.</p><p><strong>子组件设置插槽的本质</strong></p><p>其实就是对父组件传递过来的函数进行调用，得到对应的虚拟 DOM.</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const slots = {</span></span>
<span class="line"><span>  default: function(){ ... },</span></span>
<span class="line"><span>  xxx: function(){ ... },</span></span>
<span class="line"><span>  xxx: function(){ ... },</span></span>
<span class="line"><span>}; // 该对象是父组件传递过来的对象</span></span>
<span class="line"><span>slots.default(); // 得到要渲染的虚拟DOM</span></span>
<span class="line"><span>slots.header(); // 得到要渲染的虚拟DOM</span></span>
<span class="line"><span>slots.xxx(); // 得到要渲染的虚拟DOM</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>进行验证</strong></p><p>最后，我们需要对上面的说法进行验证。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>import { defineComponent, h, ref } from &#39;vue&#39;</span></span>
<span class="line"><span>import styles from &#39;./CardComponent.module.css&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default defineComponent({</span></span>
<span class="line"><span>  name: &#39;CardComponent&#39;,</span></span>
<span class="line"><span>  setup(_, { slots }) {</span></span>
<span class="line"><span>    const title = ref(&#39;这是子组件标题222&#39;)</span></span>
<span class="line"><span>    const deaultSlotsVNode = slots.default()</span></span>
<span class="line"><span>    let headerSlotsVnode = null</span></span>
<span class="line"><span>    // 如果传递了header插槽，就调用header插槽</span></span>
<span class="line"><span>    if (slots.header) {</span></span>
<span class="line"><span>      headerSlotsVnode = slots.header({</span></span>
<span class="line"><span>        title: title.value</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 但是要注意，调用了之后，不见得有值，所以要判断一下</span></span>
<span class="line"><span>    if (!headerSlotsVnode.length) {</span></span>
<span class="line"><span>      headerSlotsVnode = h(&#39;div&#39;, null, &#39;默认标题&#39;)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return () =&gt;</span></span>
<span class="line"><span>      h(&#39;div&#39;, { class: styles.card }, [</span></span>
<span class="line"><span>        h(&#39;div&#39;, { class: styles[&#39;card-header&#39;] }, headerSlotsVnode),</span></span>
<span class="line"><span>        h(&#39;div&#39;, { class: styles[&#39;card-body&#39;] }, deaultSlotsVNode)</span></span>
<span class="line"><span>      ])</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><ul><li>EOF-</li></ul>`,19)]))}const r=n(l,[["render",p],["__file","Vue32.html.vue"]]),v=JSON.parse('{"path":"/Vue/Vue32.html","title":"插槽的本质","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":1.73,"words":520},"filePathRelative":"Vue/Vue32.md"}');export{r as comp,v as data};
