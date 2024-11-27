import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as i,o as e}from"./app-_9vaDOHR.js";const l={};function p(t,s){return e(),a("div",null,s[0]||(s[0]=[i(`<h1 id="模板的本质" tabindex="-1"><a class="header-anchor" href="#模板的本质"><span>模板的本质</span></a></h1><ul><li>渲染函数</li><li>模板编译</li><li>编译的时机</li></ul><h2 id="渲染函数" tabindex="-1"><a class="header-anchor" href="#渲染函数"><span><strong>渲染函数</strong></span></a></h2><p>渲染函数（ h ）调用后会返回虚拟 DOM 节点</p><p>文档地址：<a href="https://cn.vuejs.org/api/render-function.html#h" target="_blank" rel="noopener noreferrer">https://cn.vuejs.org/api/render-function.html#h</a></p><p>实际上，Vue 里面的单文件组件是会被一个 <strong>模板编译器</strong> 进行编译的，编译后的结果并不存在什么模板，而是会把模板编译为渲染函数的形式。</p><p>这意味着我们完全可以使用纯 JS 来书写组件，文件的内部直接调用渲染函数来描述你的组件视图。</p><p>例如我们之前写过的 UserCard 这个组件，完全可以改写成纯 JS 的形式：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>import { defineComponent, h } from &#39;vue&#39;</span></span>
<span class="line"><span>import styles from &#39;./UserCard.module.css&#39;</span></span>
<span class="line"><span>export default defineComponent({</span></span>
<span class="line"><span>  name: &#39;UserCard&#39;,</span></span>
<span class="line"><span>  props: {</span></span>
<span class="line"><span>    name: String,</span></span>
<span class="line"><span>    email: String,</span></span>
<span class="line"><span>    avatarUrl: String</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  setup(props) {</span></span>
<span class="line"><span>    // 下面我们使用了渲染函数的形式来描述了原本在模板中所描述的视图结构</span></span>
<span class="line"><span>    return () =&gt;</span></span>
<span class="line"><span>      h(</span></span>
<span class="line"><span>        &#39;div&#39;,</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>          class: styles.userCard</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        [</span></span>
<span class="line"><span>          h(&#39;img&#39;, {</span></span>
<span class="line"><span>            class: styles.avatar,</span></span>
<span class="line"><span>            src: props.avatarUrl,</span></span>
<span class="line"><span>            alt: &#39;User avatar&#39;</span></span>
<span class="line"><span>          }),</span></span>
<span class="line"><span>          h(</span></span>
<span class="line"><span>            &#39;div&#39;,</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>              class: styles.userInfo</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            [h(&#39;h2&#39;, props.name), h(&#39;p&#39;, props.email)]</span></span>
<span class="line"><span>          )</span></span>
<span class="line"><span>        ]</span></span>
<span class="line"><span>      )</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>.userCard {</span></span>
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
<span class="line"><span>.userInfo h2 {</span></span>
<span class="line"><span>  margin: 0;</span></span>
<span class="line"><span>  font-size: 20px;</span></span>
<span class="line"><span>  color: #333;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.userInfo p {</span></span>
<span class="line"><span>  margin: 5px 0 0;</span></span>
<span class="line"><span>  font-size: 16px;</span></span>
<span class="line"><span>  color: #666;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>甚至也可以使用 Vue2 经典的 options API 的语法来写：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>import styles from &#39;./UserCard.module.css&#39;</span></span>
<span class="line"><span>import { h } from &#39;vue&#39;</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  name: &#39;UserCard&#39;,</span></span>
<span class="line"><span>  props: {</span></span>
<span class="line"><span>    name: String,</span></span>
<span class="line"><span>    email: String,</span></span>
<span class="line"><span>    avatarUrl: String</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  render() {</span></span>
<span class="line"><span>    return h(</span></span>
<span class="line"><span>      &#39;div&#39;,</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        class: styles.userCard</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      [</span></span>
<span class="line"><span>        h(&#39;img&#39;, {</span></span>
<span class="line"><span>          class: styles.avatar,</span></span>
<span class="line"><span>          src: this.avatarUrl,</span></span>
<span class="line"><span>          alt: &#39;User avatar&#39;</span></span>
<span class="line"><span>        }),</span></span>
<span class="line"><span>        h(</span></span>
<span class="line"><span>          &#39;div&#39;,</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            class: styles.userInfo</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          [h(&#39;h2&#39;, this.name), h(&#39;p&#39;, this.email)]</span></span>
<span class="line"><span>        )</span></span>
<span class="line"><span>      ]</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>至此我们就知道了，Vue 里面之所以提供模板的方式，是为了让开发者在描述视图的时候，更加的轻松。Vue 在运行的时候本身是不需要什么模板的，它只需要渲染函数，调用这些渲染函数后所得到的虚拟 DOM.</p><p>作为一个框架的设计者，你必须要思考：你是框架少做一些，让用户的心智负担更重一些，还是说你的框架多做一些，让用户的心智负担更少一些。</p><h2 id="模板的编译" tabindex="-1"><a class="header-anchor" href="#模板的编译"><span><strong>模板的编译</strong></span></a></h2><p><strong>单文件组件中所书写的模板，对于模板编译器来讲，就是普通的字符串。</strong></p><p>模板内容：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>    &lt;h1 :id=&quot;someId&quot;&gt;Hello&lt;/h1&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于模板编译器来讲，仅仅是一串字符串：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&#39;&lt;template&gt;&lt;div&gt;&lt;h1 :id=&quot;someId&quot;&gt;Hello&lt;/h1&gt;&lt;/div&gt;&lt;/template&gt;&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>模板编译器需要对上面的字符串进行操作，最终生成的结果：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>function render(){</span></span>
<span class="line"><span>  return h(&#39;div&#39;, [</span></span>
<span class="line"><span>    h(&#39;h1&#39;, {id: someId}, &#39;Hello&#39;)</span></span>
<span class="line"><span>  ])</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>模板编译器在对模板字符串进行编译的时候，是一点一点转换而来的，整个过程：</p><p>!<a href="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2023-11-13-015532.png" target="_blank" rel="noopener noreferrer">https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2023-11-13-015532.png</a></p><ul><li>解析器：负责将模板字符串解析为对应的模板AST</li><li>转换器：负责将模板AST转换为 JS AST</li><li>生成器：将 JS AST 生成最终的渲染函数</li></ul><p>每一个部件都依赖于上一个部件的执行结果。</p><p>假设有这么一段模板：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;div&gt;</span></span>
<span class="line"><span>    &lt;p&gt;Vue&lt;/p&gt;</span></span>
<span class="line"><span>  &lt;p&gt;React&lt;/p&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于模板编译器来讲，就是一段字符串：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&quot;&lt;div&gt;&lt;p&gt;Vue&lt;/p&gt;&lt;p&gt;React&lt;/p&gt;&lt;/div&gt;&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>首先是解析器，拿到这串字符串，对这个字符串进行解析，得到一个一个的 token.</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[</span></span>
<span class="line"><span>  {&quot;type&quot;: &quot;tag&quot;,&quot;name&quot;: &quot;div&quot;},</span></span>
<span class="line"><span>  {&quot;type&quot;: &quot;tag&quot;,&quot;name&quot;: &quot;p&quot;},</span></span>
<span class="line"><span>  {&quot;type&quot;: &quot;text&quot;,&quot;content&quot;: &quot;Vue&quot;},</span></span>
<span class="line"><span>  {&quot;type&quot;: &quot;tagEnd&quot;,&quot;name&quot;: &quot;p&quot;},</span></span>
<span class="line"><span>  {&quot;type&quot;: &quot;tag&quot;,&quot;name&quot;: &quot;p&quot;},</span></span>
<span class="line"><span>  {&quot;type&quot;: &quot;text&quot;,&quot;content&quot;: &quot;React&quot;},</span></span>
<span class="line"><span>  {&quot;type&quot;: &quot;tagEnd&quot;,&quot;name&quot;: &quot;p&quot;},</span></span>
<span class="line"><span>  {&quot;type&quot;: &quot;tagEnd&quot;,&quot;name&quot;: &quot;div&quot;}</span></span>
<span class="line"><span>]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来解析器还需要根据所得到的 token 来生成抽象语法树（模板的AST）</p><p>转换出来的 AST：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;type&quot;: &quot;Root&quot;,</span></span>
<span class="line"><span>  &quot;children&quot;: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      &quot;type&quot;: &quot;Element&quot;,</span></span>
<span class="line"><span>      &quot;tag&quot;: &quot;div&quot;,</span></span>
<span class="line"><span>      &quot;children&quot;: [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>          &quot;type&quot;: &quot;Element&quot;,</span></span>
<span class="line"><span>          &quot;tag&quot;: &quot;p&quot;,</span></span>
<span class="line"><span>          &quot;children&quot;: [</span></span>
<span class="line"><span>              {</span></span>
<span class="line"><span>                &quot;type&quot;: &quot;Text&quot;,</span></span>
<span class="line"><span>                &quot;content&quot;: &quot;Vue&quot;</span></span>
<span class="line"><span>              }</span></span>
<span class="line"><span>          ]</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>          &quot;type&quot;: &quot;Element&quot;,</span></span>
<span class="line"><span>          &quot;tag&quot;: &quot;p&quot;,</span></span>
<span class="line"><span>          &quot;children&quot;: [</span></span>
<span class="line"><span>              {</span></span>
<span class="line"><span>                &quot;type&quot;: &quot;Text&quot;,</span></span>
<span class="line"><span>                &quot;content&quot;: &quot;React&quot;</span></span>
<span class="line"><span>              }</span></span>
<span class="line"><span>          ]</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      ]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>至此解析器的工作就完成了。</p><p>接下来就是转换器登场，它需要将上一步得到的模板 AST 转换为 JS AST：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;type&quot;: &quot;FunctionDecl&quot;,</span></span>
<span class="line"><span>  &quot;id&quot;: {</span></span>
<span class="line"><span>      &quot;type&quot;: &quot;Identifier&quot;,</span></span>
<span class="line"><span>      &quot;name&quot;: &quot;render&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;params&quot;: [],</span></span>
<span class="line"><span>  &quot;body&quot;: [</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>          &quot;type&quot;: &quot;ReturnStatement&quot;,</span></span>
<span class="line"><span>          &quot;return&quot;: {</span></span>
<span class="line"><span>              &quot;type&quot;: &quot;CallExpression&quot;,</span></span>
<span class="line"><span>              &quot;callee&quot;: {&quot;type&quot;: &quot;Identifier&quot;, &quot;name&quot;: &quot;h&quot;},</span></span>
<span class="line"><span>              &quot;arguments&quot;: [</span></span>
<span class="line"><span>                  { &quot;type&quot;: &quot;StringLiteral&quot;, &quot;value&quot;: &quot;div&quot;},</span></span>
<span class="line"><span>                  {&quot;type&quot;: &quot;ArrayExpression&quot;,&quot;elements&quot;: [</span></span>
<span class="line"><span>                        {</span></span>
<span class="line"><span>                            &quot;type&quot;: &quot;CallExpression&quot;,</span></span>
<span class="line"><span>                            &quot;callee&quot;: {&quot;type&quot;: &quot;Identifier&quot;, &quot;name&quot;: &quot;h&quot;},</span></span>
<span class="line"><span>                            &quot;arguments&quot;: [</span></span>
<span class="line"><span>                                {&quot;type&quot;: &quot;StringLiteral&quot;, &quot;value&quot;: &quot;p&quot;},</span></span>
<span class="line"><span>                                {&quot;type&quot;: &quot;StringLiteral&quot;, &quot;value&quot;: &quot;Vue&quot;}</span></span>
<span class="line"><span>                            ]</span></span>
<span class="line"><span>                        },</span></span>
<span class="line"><span>                        {</span></span>
<span class="line"><span>                            &quot;type&quot;: &quot;CallExpression&quot;,</span></span>
<span class="line"><span>                            &quot;callee&quot;: {&quot;type&quot;: &quot;Identifier&quot;, &quot;name&quot;: &quot;h&quot;},</span></span>
<span class="line"><span>                            &quot;arguments&quot;: [</span></span>
<span class="line"><span>                                {&quot;type&quot;: &quot;StringLiteral&quot;, &quot;value&quot;: &quot;p&quot;},</span></span>
<span class="line"><span>                                {&quot;type&quot;: &quot;StringLiteral&quot;, &quot;value&quot;: &quot;React&quot;}</span></span>
<span class="line"><span>                            ]</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                    ]</span></span>
<span class="line"><span>                  }</span></span>
<span class="line"><span>              ]</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后就是生成器，根据上一步所得到的 JS AST，生成具体的 JS 代码：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>function render () {</span></span>
<span class="line"><span>	return h(&#39;div&#39;, [h(&#39;p&#39;, &#39;Vue&#39;), h(&#39;p&#39;, &#39;React&#39;)])</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是一个模板编译器大致的结构：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>function compile(template){</span></span>
<span class="line"><span>  // 1. 解析器</span></span>
<span class="line"><span>  const ast = parse(template)</span></span>
<span class="line"><span>  // 2. 转换器：将模板 AST 转换为 JS AST</span></span>
<span class="line"><span>  transform(ast)</span></span>
<span class="line"><span>  // 3. 生成器</span></span>
<span class="line"><span>  const code = genrate(ast)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return code;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="编译的时机" tabindex="-1"><a class="header-anchor" href="#编译的时机"><span><strong>编译的时机</strong></span></a></h2><p>整体来讲会有两种情况：</p><ol><li>运行时编译</li><li>预编译</li></ol><p><strong>1. 运行时编译</strong></p><p>例如下面的代码，是直接通过 CDN 的方式引入的 Vue</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>  &lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot; /&gt;</span></span>
<span class="line"><span>    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot; /&gt;</span></span>
<span class="line"><span>    &lt;title&gt;Document&lt;/title&gt;</span></span>
<span class="line"><span>    &lt;style&gt;</span></span>
<span class="line"><span>      .user-card {</span></span>
<span class="line"><span>        display: flex;</span></span>
<span class="line"><span>        align-items: center;</span></span>
<span class="line"><span>        background-color: #f9f9f9;</span></span>
<span class="line"><span>        border: 1px solid #e0e0e0;</span></span>
<span class="line"><span>        border-radius: 10px;</span></span>
<span class="line"><span>        padding: 10px;</span></span>
<span class="line"><span>        margin: 10px 0;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      .avatar {</span></span>
<span class="line"><span>        width: 60px;</span></span>
<span class="line"><span>        height: 60px;</span></span>
<span class="line"><span>        border-radius: 50%;</span></span>
<span class="line"><span>        margin-right: 15px;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      .user-info h2 {</span></span>
<span class="line"><span>        margin: 0;</span></span>
<span class="line"><span>        font-size: 20px;</span></span>
<span class="line"><span>        color: #333;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      .user-info p {</span></span>
<span class="line"><span>        margin: 5px 0 0;</span></span>
<span class="line"><span>        font-size: 16px;</span></span>
<span class="line"><span>        color: #666;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    &lt;/style&gt;</span></span>
<span class="line"><span>  &lt;/head&gt;</span></span>
<span class="line"><span>  &lt;body&gt;</span></span>
<span class="line"><span>    &lt;!-- 书写模板 --&gt;</span></span>
<span class="line"><span>    &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span>      &lt;user-card :name=&quot;name&quot; :email=&quot;email&quot; :avatar-url=&quot;avatarUrl&quot; /&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;template id=&quot;user-card-template&quot;&gt;</span></span>
<span class="line"><span>      &lt;div class=&quot;user-card&quot;&gt;</span></span>
<span class="line"><span>        &lt;img :src=&quot;avatarUrl&quot; alt=&quot;User avatar&quot; class=&quot;avatar&quot; /&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;user-info&quot;&gt;</span></span>
<span class="line"><span>          &lt;h2&gt;{{ name }}&lt;/h2&gt;</span></span>
<span class="line"><span>          &lt;p&gt;{{ email }}&lt;/p&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;script src=&quot;https://unpkg.com/vue@3/dist/vue.global.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>    &lt;script&gt;</span></span>
<span class="line"><span>      const { createApp } = Vue;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      const UserCard = {</span></span>
<span class="line"><span>        name: &quot;UserCard&quot;,</span></span>
<span class="line"><span>        props: {</span></span>
<span class="line"><span>          name: String,</span></span>
<span class="line"><span>          email: String,</span></span>
<span class="line"><span>          avatarUrl: String,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        template: &quot;#user-card-template&quot;,</span></span>
<span class="line"><span>      };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      createApp({</span></span>
<span class="line"><span>        components: {</span></span>
<span class="line"><span>          UserCard,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        data() {</span></span>
<span class="line"><span>          return {</span></span>
<span class="line"><span>            name: &quot;John Doe&quot;,</span></span>
<span class="line"><span>            email: &quot;john@example&quot;,</span></span>
<span class="line"><span>            avatarUrl: &quot;./yinshi.jpg&quot;,</span></span>
<span class="line"><span>          };</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>      }).mount(&quot;#app&quot;);</span></span>
<span class="line"><span>    &lt;/script&gt;</span></span>
<span class="line"><span>  &lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的例子中，也会涉及到模板代码以及模板的编译，那么此时的模板编译就是在运行时进行的。</p><p><strong>2. 预编译</strong></p><p>预编译是发生在工程化环境下面。</p><p>所谓预编译，指的是工程打包过程中就完成了模板的编译工作，浏览器拿到的是打包后的代码，是完全没有模板的。</p><p>这里推荐一个插件：vite-plugin-inspect</p><p>安装该插件后在 vite.config.js 配置文件中简单配置一下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// vite.config.js</span></span>
<span class="line"><span>import Inspect from &#39;vite-plugin-inspect&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  plugins: [</span></span>
<span class="line"><span>    Inspect()</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>之后就可以在 <a href="http://localhost:5173/__inspect/" target="_blank" rel="noopener noreferrer">http://localhost:5173/__inspect/</a> 里面看到每一个组件编译后的结果。</p><hr><ul><li>EOF-</li></ul>`,58)]))}const r=n(l,[["render",p],["__file","Vue22.html.vue"]]),u=JSON.parse('{"path":"/Vue/Vue22.html","title":"模板的本质","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"渲染函数","slug":"渲染函数","link":"#渲染函数","children":[]},{"level":2,"title":"模板的编译","slug":"模板的编译","link":"#模板的编译","children":[]},{"level":2,"title":"编译的时机","slug":"编译的时机","link":"#编译的时机","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":4.92,"words":1475},"filePathRelative":"Vue/Vue22.md"}');export{r as comp,u as data};
