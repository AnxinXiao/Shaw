import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as e,o as l}from"./app-_9vaDOHR.js";const i={};function p(d,s){return l(),a("div",null,s[0]||(s[0]=[e(`<h1 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期"><span>生命周期</span></a></h1><h2 id="理解什么是生命周期" tabindex="-1"><a class="header-anchor" href="#理解什么是生命周期"><span>理解什么是生命周期</span></a></h2><p>生命周期是组件（目前我们接触到的就是 App.vue 这个根组件）从创建到最终销毁所经历的一系列过程。在这个过程中设置了一些特殊的时间点，开发者可以在这些特殊的时间点，设置一些函数，这样的函数称之为钩子🪝函数，必须把开发者设置的钩子函数执行完毕后，才能继续走后面的流程。</p><p>这就让开发者有机会在特定的时段执行自己的业务逻辑代码。</p><p>完整的生命周期图如下：</p><p>!<a href="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2024-04-12-031421.png" target="_blank" rel="noopener noreferrer">https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2024-04-12-031421.png</a></p><h2 id="快速入门" tabindex="-1"><a class="header-anchor" href="#快速入门"><span>快速入门</span></a></h2><p>目前我们没有必要将上面所有的生命周期钩子函数都完全理解，先学习一个即可。</p><p>目前我们需要掌握的就是 mounted，mounted 对应的钩子函数为 onMounted，该钩子函数会在完成了初始化渲染并且创建和插入了 DOM 节点之后被触发，这意味着在当前的这个时间节点，你是可以访问真实的 DOM 元素的。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>    &lt;h1&gt;用户列表&lt;/h1&gt;</span></span>
<span class="line"><span>    &lt;ul v-if=&quot;!loading&quot;&gt;</span></span>
<span class="line"><span>      &lt;li v-for=&quot;(user, index) in users&quot; :key=&quot;index&quot;&gt;{{ user.name }} - {{ user.email }}&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;/ul&gt;</span></span>
<span class="line"><span>    &lt;div v-if=&quot;loading&quot;&gt;加载中...&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;div v-if=&quot;error&quot;&gt;出错啦！&lt;/div&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref, onMounted } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const users = ref([])</span></span>
<span class="line"><span>const loading = ref(false)</span></span>
<span class="line"><span>const error = ref(null)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>onMounted(async () =&gt; {</span></span>
<span class="line"><span>  // 一般来讲，我们会在此生命周期钩子方法中请求数据</span></span>
<span class="line"><span>  loading.value = true</span></span>
<span class="line"><span>  try {</span></span>
<span class="line"><span>    const res = await fetch(&#39;https://jsonplaceholder.typicode.com/users&#39;)</span></span>
<span class="line"><span>    if (res.ok) {</span></span>
<span class="line"><span>      users.value = await res.json()</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>      throw new Error(&#39;请求失败&#39;)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  } catch (err) {</span></span>
<span class="line"><span>    error.value = err.message</span></span>
<span class="line"><span>  } finally {</span></span>
<span class="line"><span>    // 无论是出错也好，还是正常请求到了数据，都需要将 loading 状态改为 false</span></span>
<span class="line"><span>    loading.value = false</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完整的生命周期钩子方法：<a href="https://cn.vuejs.org/api/composition-api-lifecycle.html" target="_blank" rel="noopener noreferrer">https://cn.vuejs.org/api/composition-api-lifecycle.html</a></p><h2 id="vue2中的生命周期" tabindex="-1"><a class="header-anchor" href="#vue2中的生命周期"><span>Vue2中的生命周期</span></a></h2><p>注意，Vue3中是支持Vue2的生命周期方法的，毕竟之前 Vue2 的选项式API的写法是作为一种风格继续存在于Vue3中的。</p><p>Vue2以前的那些生命周期方法和Vue3是共存的，只不过名字有一些不一样，例如上面的 mounted 阶段对应的钩子方法：</p><ul><li>Vue3：onMounted</li><li>Vue2：mounted</li></ul><p>另外就是执行的时机也会有一些不同，假设 Vue2 和 Vue3 同一个生命周期周设置了两种形式的钩子方法，Vue3 的钩子方法的执行时机会早于 Vue2 的钩子方法。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;Vue2 和 Vue3 钩子函数执行时机对比&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import { onMounted } from &#39;vue&#39;</span></span>
<span class="line"><span>// 这里使用选项时API风格</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  mounted() {</span></span>
<span class="line"><span>    console.log(&#39;执行Vue2的钩子函数&#39;)</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  setup() {</span></span>
<span class="line"><span>    // 使用setup函数</span></span>
<span class="line"><span>    onMounted(() =&gt; {</span></span>
<span class="line"><span>      console.log(&#39;执行Vue3的onMounted函数&#39;)</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的这个点稍微有一个印象即可。真实开发中是<strong>不可能</strong>两个版本的生命周期钩子方法混着使用的。</p><hr><ul><li>EOF-</li></ul>`,20)]))}const r=n(i,[["render",p],["__file","Vue10.html.vue"]]),u=JSON.parse('{"path":"/Vue/Vue10.html","title":"生命周期","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"理解什么是生命周期","slug":"理解什么是生命周期","link":"#理解什么是生命周期","children":[]},{"level":2,"title":"快速入门","slug":"快速入门","link":"#快速入门","children":[]},{"level":2,"title":"Vue2中的生命周期","slug":"vue2中的生命周期","link":"#vue2中的生命周期","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":2.41,"words":723},"filePathRelative":"Vue/Vue10.md"}');export{r as comp,u as data};
