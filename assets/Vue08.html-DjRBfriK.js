import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as i,o as e}from"./app-_9vaDOHR.js";const l={};function t(p,s){return e(),a("div",null,s[0]||(s[0]=[i(`<h1 id="事件处理" tabindex="-1"><a class="header-anchor" href="#事件处理"><span>事件处理</span></a></h1><h2 id="快速入门" tabindex="-1"><a class="header-anchor" href="#快速入门"><span>快速入门</span></a></h2><p>在 Vue 中如果要给元素绑定事件，可以使用内置指令 v-on，使用该指定就可以绑定事件：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;{{ count }}&lt;/div&gt;</span></span>
<span class="line"><span>  &lt;button v-on:click=&quot;add&quot;&gt;+1&lt;/button&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span>const count = ref(0)</span></span>
<span class="line"><span>function add() {</span></span>
<span class="line"><span>  count.value++</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的事件示例非常简单，不过关于事件处理，有各种各样的细节。</p><p><strong>事件处理各种细节</strong></p><ol><li>如果事件相关的处理比较简单，那么可以将事件处理器写成内连的</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;{{ count }}&lt;/div&gt;</span></span>
<span class="line"><span>  &lt;button v-on:click=&quot;count++&quot;&gt;+1&lt;/button&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span>const count = ref(0)</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种内连事件处理器用的比较少，仅在逻辑比较简单的时候可以快速完成事件的书写。</p><ol><li>绑定事件是一个很常见的需求，因此 Vue 也提供了简写形式，通过 @ 符号就可以绑定事件</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;button @click=&quot;count++&quot;&gt;+1&lt;/button&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>在日常开发中，更多的见到的就是简写形式。</p><ol><li>向事件处理器传递参数</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;{{ count }}&lt;/div&gt;</span></span>
<span class="line"><span>  &lt;button @click=&quot;add(&#39;Hello World&#39;)&quot;&gt;+1&lt;/button&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span>const count = ref(0)</span></span>
<span class="line"><span>function add(message) {</span></span>
<span class="line"><span>  count.value++</span></span>
<span class="line"><span>  console.log(message)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>事件对象</li></ol><ul><li>没有传参：事件对象会作为一个额外的参数，自动传入到事件处理器，在事件处理器中，只需要在形参列表中声明一下即可</li><li>如果有传参：这种情况下需要使用一个特殊的变量 $event 来向事件处理器传递事件对象</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;{{ count }}&lt;/div&gt;</span></span>
<span class="line"><span>  &lt;button @click=&quot;add&quot;&gt;+1&lt;/button&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span>const count = ref(0)</span></span>
<span class="line"><span>// 事件对象会自动传入，直接在事件处理器的形参中声明即可</span></span>
<span class="line"><span>function add(event) {</span></span>
<span class="line"><span>  count.value++</span></span>
<span class="line"><span>  console.log(event)</span></span>
<span class="line"><span>  console.log(event.target)</span></span>
<span class="line"><span>  console.log(event.clientX, event.clientY)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;{{ count }}&lt;/div&gt;</span></span>
<span class="line"><span>  &lt;!-- 必须显式的使用 $event 来向事件处理器传递事件对象 --&gt;</span></span>
<span class="line"><span>  &lt;button @click=&quot;add(&#39;Hello World&#39;, $event)&quot;&gt;+1&lt;/button&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span>const count = ref(0)</span></span>
<span class="line"><span>function add(message, event) {</span></span>
<span class="line"><span>  count.value++</span></span>
<span class="line"><span>  console.log(message)</span></span>
<span class="line"><span>  console.log(event)</span></span>
<span class="line"><span>  console.log(event.target)</span></span>
<span class="line"><span>  console.log(event.clientX, event.clientY)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果是箭头函数，写法如下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div&gt;{{ count }}&lt;/div&gt;</span></span>
<span class="line"><span>  &lt;!-- 如果是箭头函数，那么事件对象需要作为参数传入 --&gt;</span></span>
<span class="line"><span>  &lt;!-- 此时参数没有必须是 $event 的限制了 --&gt;</span></span>
<span class="line"><span>  &lt;button @click=&quot;(event) =&gt; add(&#39;Hello World&#39;, event)&quot;&gt;+1&lt;/button&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span>const count = ref(0)</span></span>
<span class="line"><span>function add(message, event) {</span></span>
<span class="line"><span>  count.value++</span></span>
<span class="line"><span>  console.log(message)</span></span>
<span class="line"><span>  console.log(event)</span></span>
<span class="line"><span>  console.log(event.target)</span></span>
<span class="line"><span>  console.log(event.clientX, event.clientY)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修饰符" tabindex="-1"><a class="header-anchor" href="#修饰符"><span>修饰符</span></a></h2><p>之所以会有修饰符，是因为之前在书写原生事件处理的时候，事件处理器中经常会包含诸如阻止冒泡、阻止默认事件等非事件业务的逻辑。有了修饰符之后，可以使用事件修饰符来完成这些非核心的业务处理，让事件处理器更加专注于业务逻辑。</p><p>常见的事件处理器：</p><ul><li>.stop：阻止事件冒泡</li><li>.prevent：阻止默认行为</li><li>.self：只有事件在该元素本身上触发时才触发处理函数（不是在子元素上）</li><li>.capture：改变事件的触发方式，使其在捕获阶段而不是冒泡阶段触发。</li><li>.once：事件只触发一次</li><li>.passive：用于提高页面滚动的性能。</li></ul><p>修饰符的使用也很简答：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;button @click.stop=&quot;handleClick&quot;&gt;点击我&lt;/button&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>下面是一个具体的示例：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;button @click.once=&quot;clickHandle&quot;&gt;click&lt;/button&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>function clickHandle() {</span></span>
<span class="line"><span>  console.log(&#39;你触发了事件&#39;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外需要说一下，事件修饰符是可以连用的，例如现在有这么一个需求，我们希望用户在点击按钮时：</p><ul><li>阻止事件冒泡（.stop）。</li><li>阻止默认行为（.prevent），例如，防止表单提交。</li><li>在捕获阶段触发事件处理器（.capture），确保在任何可能的冒泡前响应。</li><li>事件处理器只触发一次（.once）。</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;button @click.capture.stop.prevent.once&gt;click&lt;/button&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>在连用事件修饰符的时候，修饰符的顺序通常不会影响最终的行为，因为不同的修饰符代表对不同方面的行为的控制，相互是不冲突的。</p><p>除了事件修饰符以外，Vue 还提供了一组按键修饰符，按键修饰符主要是用于检查特点的按钮：</p><ul><li>.enter</li><li>.tab</li><li>.delete (捕获“Delete”和“Backspace”两个按键)</li><li>.esc</li><li>.space</li><li>.up</li><li>.down</li><li>.left</li><li>.right</li><li>.ctrl</li><li>.alt</li><li>.shift</li><li>.meta（不同的系统对应不同的按键）</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;input type=&quot;text&quot; @keyup.enter=&quot;submitText&quot; /&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>function submitText() {</span></span>
<span class="line"><span>  console.log(&#39;你要提交输入的内容&#39;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>按键修饰符也是能够连用，比如上面的例子，我们修改为 alt + enter 是提交</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;input type=&quot;text&quot; @keyup.alt.enter=&quot;submitText&quot; /&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p>Mac 系统中 alt 对应的是 option 按键</p></blockquote><p>有一个特殊的修饰符 .exact ，exact 该单词的含义是“精确、精准” ，该修饰符的作用在于控制触发事件的时候，必须是指定的按键组合，不能够有其他按键。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;button @click.ctrl=&quot;onClick&quot;&gt;A&lt;/button&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>在上面的例子中，指定按下 ctrl 键触发事件，但是假设我现在同时按下 alt 和 ctrl 也会触发事件</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;button @click.ctrl.exact=&quot;onClick&quot;&gt;A&lt;/button&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>添加了 .exact 修饰符之后，表示只有在按下 ctrl 并且没有按下其他按键的时候才会触发事件</p><p>最后还有三个鼠标按键修饰符，用于指定特定的鼠标按键：</p><ul><li>.left</li><li>.right</li><li>.middle</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;button class=&quot;context-menu-button&quot; @contextmenu.prevent.right=&quot;handleRightClick&quot;&gt;</span></span>
<span class="line"><span>    右键点击</span></span>
<span class="line"><span>  &lt;/button&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>function handleRightClick() {</span></span>
<span class="line"><span>  console.log(&#39;你点击了鼠标右键&#39;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>.context-menu-button {</span></span>
<span class="line"><span>  padding: 10px 20px;</span></span>
<span class="line"><span>  cursor: context-menu; /* 显示适当的鼠标指针 */</span></span>
<span class="line"><span>  background-color: #f5f5f5;</span></span>
<span class="line"><span>  border: 1px solid #ccc;</span></span>
<span class="line"><span>  border-radius: 5px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><ul><li>EOF-</li></ul>`,48)]))}const r=n(l,[["render",t],["__file","Vue08.html.vue"]]),v=JSON.parse('{"path":"/Vue/Vue08.html","title":"事件处理","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"快速入门","slug":"快速入门","link":"#快速入门","children":[]},{"level":2,"title":"修饰符","slug":"修饰符","link":"#修饰符","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":4.62,"words":1386},"filePathRelative":"Vue/Vue08.md"}');export{r as comp,v as data};
