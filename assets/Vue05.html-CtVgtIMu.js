import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as i,o as e}from"./app-_9vaDOHR.js";const l={};function p(t,s){return e(),a("div",null,s[0]||(s[0]=[i(`<h1 id="类与样式绑定" tabindex="-1"><a class="header-anchor" href="#类与样式绑定"><span>类与样式绑定</span></a></h1><p>前面有介绍过属性动态绑定数据。有两个属性比较特殊：class 和 style</p><p>这两个用得很多，如果数据那一边使用字符串拼接很容易出错。因此 Vue 针对这两个属性提供了特殊的功能增强。除了字符串的值以外还可以是对象和数组。</p><h2 id="绑定类" tabindex="-1"><a class="header-anchor" href="#绑定类"><span>绑定类</span></a></h2><p><strong>对象语法</strong></p><p>可以给 class 绑定一个对象来切换 class，该对象的键就是要挂上去的样式类，值对应的是一个布尔值，true 表示挂上去，false 表示不挂上去。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div</span></span>
<span class="line"><span>    class=&quot;demo&quot;</span></span>
<span class="line"><span>    :class=&quot;{</span></span>
<span class="line"><span>      active: isActive,</span></span>
<span class="line"><span>      &#39;text-danger&#39;: hasError</span></span>
<span class="line"><span>    }&quot;</span></span>
<span class="line"><span>  &gt;</span></span>
<span class="line"><span>    绑定样式类</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span>const isActive = ref(true)</span></span>
<span class="line"><span>const hasError = ref(false)</span></span>
<span class="line"><span>setTimeout(() =&gt; {</span></span>
<span class="line"><span>  hasError.value = true</span></span>
<span class="line"><span>}, 3000)</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果一个元素要挂的类比较多，那么推荐将对象写到数据里面，不要写到模板里面：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;demo&quot; :class=&quot;classObj&quot;&gt;绑定样式类&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { reactive } from &#39;vue&#39;</span></span>
<span class="line"><span>const classObj = reactive({</span></span>
<span class="line"><span>  active: true,</span></span>
<span class="line"><span>  isFinite: true,</span></span>
<span class="line"><span>  &#39;text-danger&#39;: false</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>setTimeout(() =&gt; {</span></span>
<span class="line"><span>  classObj[&#39;text-danger&#39;] = true</span></span>
<span class="line"><span>}, 3000)</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样做的好处在于模板会比较清爽。</p><p>另外，也可以绑定一个计算属性的样式对象：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;demo&quot; :class=&quot;classObj&quot;&gt;绑定样式类&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref, computed } from &#39;vue&#39;</span></span>
<span class="line"><span>const isActive = ref(true)</span></span>
<span class="line"><span>const error = ref(null)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const classObj = computed(() =&gt; {</span></span>
<span class="line"><span>  return {</span></span>
<span class="line"><span>    active: isActive.value &amp;&amp; !error.value,</span></span>
<span class="line"><span>    &#39;text-danger&#39;: error.value &amp;&amp; error.value.type === &#39;fatal&#39;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>setTimeout(() =&gt; {</span></span>
<span class="line"><span>  error.value = {</span></span>
<span class="line"><span>    type: &#39;fatal&#39;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}, 3000)</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>数组语法</strong></p><p>数组语法中，数组的每一项一般都是一个 ref 值，ref 所对应的就是真实的要挂上去的类</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;demo&quot; :class=&quot;[isActive, error]&quot;&gt;绑定样式类&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span>const isActive = ref(&#39;active&#39;)</span></span>
<span class="line"><span>const error = ref(&#39;text-danger&#39;)</span></span>
<span class="line"><span>setTimeout(() =&gt; {</span></span>
<span class="line"><span>  isActive.value = &#39;normal&#39;</span></span>
<span class="line"><span>}, 3000)</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>数组里面，是支持三目运算表达式的：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div :class=&quot;[isActive ? activeClass : &#39;&#39;, errorClass]&quot;&gt;绑定样式类&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span>const isActive = ref(false)</span></span>
<span class="line"><span>const activeClass = ref(&#39;active&#39;)</span></span>
<span class="line"><span>const errorClass = ref(&#39;text-danger&#39;)</span></span>
<span class="line"><span>setTimeout(() =&gt; {</span></span>
<span class="line"><span>  isActive.value = true</span></span>
<span class="line"><span>}, 3000)</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style lang=&quot;scss&quot; scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外，三目运算表达式可能依赖多个条件，这个时候就会显得该表达式非常冗长，此时可以在数组里面使用嵌套对象的方式：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;div :class=&quot;[{ active: isActive }, errorClass]&quot;&gt;&lt;/div&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="绑定内连样式" tabindex="-1"><a class="header-anchor" href="#绑定内连样式"><span>绑定内连样式</span></a></h2><p>内连样式，也就是 style 的绑定，这个更加需要功能增强。</p><p><strong>对象方式</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div</span></span>
<span class="line"><span>    :style=&quot;{</span></span>
<span class="line"><span>      color: activeColor,</span></span>
<span class="line"><span>      fontSize: fontSize + &#39;px&#39;</span></span>
<span class="line"><span>    }&quot;</span></span>
<span class="line"><span>  &gt;</span></span>
<span class="line"><span>    绑定内连样式</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span>const activeColor = ref(&#39;red&#39;)</span></span>
<span class="line"><span>const fontSize = ref(30)</span></span>
<span class="line"><span>setTimeout(() =&gt; {</span></span>
<span class="line"><span>  activeColor.value = &#39;blue&#39;</span></span>
<span class="line"><span>}, 3000)</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style lang=&quot;scss&quot; scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>style 绑定的是一个对象，对象的键是样式名称，值对应的是 ref 形式的属性值。</p><p>同样可以将 style 所绑定的对象在 script 里面进行声明，这样模板会更加清爽一些</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div :style=&quot;styleObj&quot;&gt;绑定内连样式&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { reactive } from &#39;vue&#39;</span></span>
<span class="line"><span>const styleObj = reactive({</span></span>
<span class="line"><span>  color: &#39;red&#39;,</span></span>
<span class="line"><span>  fontSize: &#39;30px&#39;</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style lang=&quot;scss&quot; scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>数组方式</strong></p><p>数组的方式是结合着上面的对象的形式来使用的，在数组中会绑定多个样式对象：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div :style=&quot;styleArr&quot;&gt;绑定内连样式&lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref, reactive } from &#39;vue&#39;</span></span>
<span class="line"><span>const styleObj = reactive({</span></span>
<span class="line"><span>  color: &#39;red&#39;,</span></span>
<span class="line"><span>  fontSize: &#39;30px&#39;</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>const styleObj2 = reactive({</span></span>
<span class="line"><span>  textDecoration: &#39;underline&#39;</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>const styleArr = ref([styleObj, styleObj2])</span></span>
<span class="line"><span>setTimeout(() =&gt; {</span></span>
<span class="line"><span>  styleArr.value.pop()</span></span>
<span class="line"><span>}, 3000)</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style lang=&quot;scss&quot; scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过数组这种方式，可以非常方便的去操控一组样式。</p><hr><ul><li>EOF-</li></ul>`,32)]))}const r=n(l,[["render",p],["__file","Vue05.html.vue"]]),v=JSON.parse('{"path":"/Vue/Vue05.html","title":"类与样式绑定","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"绑定类","slug":"绑定类","link":"#绑定类","children":[]},{"level":2,"title":"绑定内连样式","slug":"绑定内连样式","link":"#绑定内连样式","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":2.69,"words":808},"filePathRelative":"Vue/Vue05.md"}');export{r as comp,v as data};
