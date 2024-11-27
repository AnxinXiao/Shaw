import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as i,o as l}from"./app-_9vaDOHR.js";const e={};function p(t,s){return l(),a("div",null,s[0]||(s[0]=[i(`<h1 id="组件插槽" tabindex="-1"><a class="header-anchor" href="#组件插槽"><span>组件插槽</span></a></h1><p>有些时候，我们有这样的需求：父组件需要向子组件传递模板内容，这个时候显然使用前面的 Props 是无法做到的，此时就需要本节课所介绍的插槽。</p><p>要使用插槽非常简单，首先在书写子组件的时候，添加上 slot 相当于就是设置了插槽，回头父组件在使用子组件的时候，在子组件元素之间书写的内容就会被插入到子组件 slot 的地方。</p><h2 id="快速入门" tabindex="-1"><a class="header-anchor" href="#快速入门"><span><strong>快速入门</strong></span></a></h2><p>首先是子组件 Card.vue</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;card&quot;&gt;</span></span>
<span class="line"><span>    &lt;!-- 卡片的头部 --&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;card-header&quot;&gt;</span></span>
<span class="line"><span>      &lt;!-- 具名插槽 --&gt;</span></span>
<span class="line"><span>      &lt;slot name=&quot;header&quot;&gt;&lt;/slot&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;!-- 卡片的内容 --&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;card-body&quot;&gt;</span></span>
<span class="line"><span>      &lt;!-- 默认插槽 --&gt;</span></span>
<span class="line"><span>      &lt;slot&gt;&lt;/slot&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>.card {</span></span>
<span class="line"><span>  border: 1px solid #ccc;</span></span>
<span class="line"><span>  border-radius: 8px;</span></span>
<span class="line"><span>  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);</span></span>
<span class="line"><span>  width: 300px;</span></span>
<span class="line"><span>  margin: 20px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.card-header {</span></span>
<span class="line"><span>  background-color: #f7f7f7;</span></span>
<span class="line"><span>  border-bottom: 1px solid #ececec;</span></span>
<span class="line"><span>  padding: 10px 15px;</span></span>
<span class="line"><span>  font-size: 16px;</span></span>
<span class="line"><span>  font-weight: bold;</span></span>
<span class="line"><span>  border-top-left-radius: 8px;</span></span>
<span class="line"><span>  border-top-right-radius: 8px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.card-body {</span></span>
<span class="line"><span>  padding: 15px;</span></span>
<span class="line"><span>  font-size: 14px;</span></span>
<span class="line"><span>  color: #333;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过 slot 来设置插槽，上面的例子中，设置了两个插槽，一个是名为 header 的具名插槽，另外一个是默认插槽。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;</span></span>
<span class="line"><span>    &lt;Card&gt;</span></span>
<span class="line"><span>      &lt;!-- 中间的内容就会被放入到插槽里面 --&gt;</span></span>
<span class="line"><span>      &lt;template v-slot:header&gt;我的卡片标题&lt;/template&gt;</span></span>
<span class="line"><span>      这是卡片的内容</span></span>
<span class="line"><span>    &lt;/Card&gt;</span></span>
<span class="line"><span>    &lt;Card&gt;</span></span>
<span class="line"><span>      &lt;template v-slot:header&gt;探险摄影&lt;/template&gt;</span></span>
<span class="line"><span>      &lt;div class=&quot;card-content&quot;&gt;</span></span>
<span class="line"><span>        &lt;img src=&quot;./assets/landscape.jpeg&quot; class=&quot;card-image&quot; /&gt;</span></span>
<span class="line"><span>        &lt;p&gt;探索未知的自然风光，记录下每一个令人惊叹的瞬间。加入我们的旅程，一起见证世界的壮丽。&lt;/p&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/Card&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import Card from &#39;./components/Card.vue&#39;</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>.card-image {</span></span>
<span class="line"><span>  width: 100%; /* 让图片宽度充满卡片 */</span></span>
<span class="line"><span>  height: auto; /* 保持图片的原始宽高比 */</span></span>
<span class="line"><span>  border-bottom: 1px solid #ececec; /* 在图片和文本之间添加一条分隔线 */</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>父组件在插入模板内容的时候，可以通过 v-slot 来指定要插入到的具名插槽。如果没有指定，那么内容会被插入到默认插槽里面。</p><h2 id="插槽相关细节" tabindex="-1"><a class="header-anchor" href="#插槽相关细节"><span><strong>插槽相关细节</strong></span></a></h2><ol><li>插槽支持默认内容</li></ol><p>可以在 slot 标签之间写一些默认内容，如果父组件没有提供模板内容，那么会渲染默认内容。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;slot&gt;这是默认插槽的默认值&lt;/slot&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol><li>具名插槽</li></ol><p>插槽是可以有名字的，这意味着可以设置多个插槽，回头父组件可以根据不同的名字选择对应的内容插入到指定的插槽里面。</p><p>父组件在指定名字的时候，使用 v-slot:插槽名</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template v-slot:header&gt;探险摄影&lt;/template&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>这里有一个简写，直接写成 #插槽名</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template #header&gt;探险摄影&lt;/template&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>另外，当组件同时接收默认插槽和具名插槽的时候，位于顶级的非 template 节点的内容会被放入到默认插槽里面。</p><ol><li>父组件在指定插槽名的时候，可以是动态的</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template v-slot:[slotName]&gt;探险摄影&lt;/template&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template #[slotName]&gt;探险摄影&lt;/template&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="作用域" tabindex="-1"><a class="header-anchor" href="#作用域"><span><strong>作用域</strong></span></a></h2><p>首先明确一个点：</p><ul><li>父组件模板中的表达式只能访问父组件的作用域下的数据</li><li>子组件模板中的表达式只能访问子组件的作用域下的数据</li></ul><p>父组件</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;parent&quot;&gt;</span></span>
<span class="line"><span>    &lt;h1&gt;父组件的标题&lt;/h1&gt;</span></span>
<span class="line"><span>    &lt;Card&gt;</span></span>
<span class="line"><span>      &lt;!-- 插槽内容可以访问父组件的数据 --&gt;</span></span>
<span class="line"><span>      &lt;template v-slot:default&gt;</span></span>
<span class="line"><span>        &lt;p&gt;这是父组件的数据：{{ parentData }}&lt;/p&gt;</span></span>
<span class="line"><span>        &lt;!-- 以下行将会导致错误，因为试图在父组件中访问子组件的数据 --&gt;</span></span>
<span class="line"><span>        &lt;p&gt;尝试访问子组件的数据：{{ childData }}&lt;/p&gt;</span></span>
<span class="line"><span>      &lt;/template&gt;</span></span>
<span class="line"><span>    &lt;/Card&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import Card from &#39;@/components/Card.vue&#39;</span></span>
<span class="line"><span>import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 父组件的数据</span></span>
<span class="line"><span>const parentData = ref(&#39;这是父组件的数据&#39;)</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style&gt;</span></span>
<span class="line"><span>.parent {</span></span>
<span class="line"><span>  padding: 20px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>子组件</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;child&quot;&gt;</span></span>
<span class="line"><span>    &lt;h2&gt;子组件的标题&lt;/h2&gt;</span></span>
<span class="line"><span>    &lt;!-- 这里的插槽将展示从父组件传递的内容 --&gt;</span></span>
<span class="line"><span>    &lt;slot&gt;&lt;/slot&gt;</span></span>
<span class="line"><span>    &lt;p&gt;子组件数据：{{ childData }}&lt;/p&gt;</span></span>
<span class="line"><span>    &lt;p&gt;尝试访问父组件数据：{{ parentData }}&lt;/p&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 子组件的数据</span></span>
<span class="line"><span>const childData = ref(&#39;这是子组件的数据&#39;)</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style&gt;</span></span>
<span class="line"><span>.child {</span></span>
<span class="line"><span>  border: 1px solid #ccc;</span></span>
<span class="line"><span>  padding: 20px;</span></span>
<span class="line"><span>  margin-top: 20px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有些时候，我们需要将子组件作用域下的数据通过 <strong>插槽</strong> 传递给父组件，这就涉及到作用域插槽。</p><p>子组件：在设置插槽的时候，添加了一些动态属性</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;!-- &lt;MyComponent&gt; 的模板 --&gt;</span></span>
<span class="line"><span>&lt;div&gt;</span></span>
<span class="line"><span>  &lt;slot :text=&quot;greetingMessage&quot; :count=&quot;1&quot;&gt;&lt;/slot&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>父组件：通过 v-slot 并且将值设置为 slotProps，这样就可以拿到子组件传递过来的数据</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;MyComponent v-slot=&quot;slotProps&quot;&gt;</span></span>
<span class="line"><span>  {{ slotProps.text }} {{ slotProps.count }}</span></span>
<span class="line"><span>&lt;/MyComponent&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如下图所示：</p><p>父组件在接收作用域插槽传递过来的数据的时候，也是能够解构的：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;MyComponent v-slot=&quot;{text, count}&quot;&gt;</span></span>
<span class="line"><span>  {{ text }} {{ count }}</span></span>
<span class="line"><span>&lt;/MyComponent&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是一个关于作用域插槽的实际使用场景：</p><p>子组件通过作用域插槽将数据传递给父组件：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;list-container&quot;&gt;</span></span>
<span class="line"><span>    &lt;ul&gt;</span></span>
<span class="line"><span>      &lt;li v-for=&quot;item in items&quot; :key=&quot;item.id&quot;&gt;</span></span>
<span class="line"><span>        &lt;!-- li 里面渲染什么内容我不知道，通过父组件在使用的时候来指定 --&gt;</span></span>
<span class="line"><span>        &lt;!-- 下面的插槽中，:item=item 就是将子组件的数据传递给父组件的插槽内容 --&gt;</span></span>
<span class="line"><span>        &lt;slot name=&quot;item&quot; :item=&quot;item&quot;&gt;{{ item.defaultText }}&lt;/slot&gt;</span></span>
<span class="line"><span>      &lt;/li&gt;</span></span>
<span class="line"><span>    &lt;/ul&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 子组件的数据，这个数据可能是通过请求得到的</span></span>
<span class="line"><span>const items = ref([</span></span>
<span class="line"><span>  { id: 1, name: &#39;Vue.js&#39;, defaultText: &#39;Vue.js 是一个渐进式 JavaScript 框架。&#39; },</span></span>
<span class="line"><span>  { id: 2, name: &#39;React&#39;, defaultText: &#39;React 是一个用于构建用户界面的 JavaScript 库。&#39; },</span></span>
<span class="line"><span>  { id: 3, name: &#39;Angular&#39;, defaultText: &#39;Angular 是一个开源的 Web 应用框架。&#39; }</span></span>
<span class="line"><span>])</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style&gt;</span></span>
<span class="line"><span>.list-container {</span></span>
<span class="line"><span>  max-width: 300px;</span></span>
<span class="line"><span>  background: #f9f9f9;</span></span>
<span class="line"><span>  border: 1px solid #ccc;</span></span>
<span class="line"><span>  padding: 20px;</span></span>
<span class="line"><span>  border-radius: 8px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ul {</span></span>
<span class="line"><span>  list-style: none;</span></span>
<span class="line"><span>  padding: 0;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>li {</span></span>
<span class="line"><span>  margin-bottom: 10px;</span></span>
<span class="line"><span>  background: #fff;</span></span>
<span class="line"><span>  padding: 10px;</span></span>
<span class="line"><span>  border-radius: 6px;</span></span>
<span class="line"><span>  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>父组件通过 v-slot 来接收到子组件传递过来的数据内容</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;app-container&quot;&gt;</span></span>
<span class="line"><span>    &lt;Card&gt;</span></span>
<span class="line"><span>      &lt;template v-slot=&quot;{ item }&quot;&gt;</span></span>
<span class="line"><span>        &lt;!-- 在父组件中来决定子组件的插槽内容 --&gt;</span></span>
<span class="line"><span>        &lt;h3&gt;{{ item.name }}&lt;/h3&gt;</span></span>
<span class="line"><span>        &lt;p&gt;{{ item.defaultText }}&lt;/p&gt;</span></span>
<span class="line"><span>      &lt;/template&gt;</span></span>
<span class="line"><span>    &lt;/Card&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import Card from &#39;@/components/Card.vue&#39;</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style&gt;</span></span>
<span class="line"><span>.app-container {</span></span>
<span class="line"><span>  padding: 20px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关于上面的例子，官方还有一个叫法：无渲染组件</p><blockquote><p>一些组件可能只包括了逻辑而不需要自己渲染内容，视图输出通过作用域插槽全权交给了消费者组件。我们将这种类型的组件称为无渲染组件。</p></blockquote>`,45)]))}const r=n(e,[["render",p],["__file","Vue16.html.vue"]]),v=JSON.parse('{"path":"/Vue/Vue16.html","title":"组件插槽","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"快速入门","slug":"快速入门","link":"#快速入门","children":[]},{"level":2,"title":"插槽相关细节","slug":"插槽相关细节","link":"#插槽相关细节","children":[]},{"level":2,"title":"作用域","slug":"作用域","link":"#作用域","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":5.27,"words":1582},"filePathRelative":"Vue/Vue16.md"}');export{r as comp,v as data};
