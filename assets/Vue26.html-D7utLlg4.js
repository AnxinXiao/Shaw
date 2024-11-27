import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as i,o as e}from"./app-_9vaDOHR.js";const l={};function p(d,s){return e(),a("div",null,s[0]||(s[0]=[i(`<h1 id="响应式的本质" tabindex="-1"><a class="header-anchor" href="#响应式的本质"><span>响应式的本质</span></a></h1><ul><li>依赖收集：所谓依赖收集，其实就是收集的一些函数。因为当数据发生变化的时候，需要重新执行这些函数，因此需要提前收集起来。</li><li>派发更新：所谓派发更新，就是通知被收集了的函数，现在数据已经更新了，你们需要重新执行一遍。</li></ul><p><strong>数据</strong></p><p>当数据发生变换会通知一些函数重新执行，这里的数据指的就是<strong>响应式数据</strong>。</p><p>在 Vue 里面，那就是指：</p><ul><li>ref</li><li>reactive</li><li>props</li><li>computed</li></ul><p>这几种方式所得到的数据就是响应式数据。</p><p><strong>依赖</strong></p><p>谁和谁之间有依赖关系？</p><p><strong>响应式数据</strong>和<strong>函数</strong>之间有依赖关系。<strong>当函数在运行期间用到了响应式数据，那么我们可以称之为两者之间有依赖</strong>。</p><p>但还有一点需要明确，那就是什么是用到？</p><p><strong>所谓用到，是指函数在运行期间出现了读取成员被拦截的情况，这样才算是用到</strong>。</p><p>完整表述：<strong>函数在运行期间，出现了读取响应式数据被拦截的情况，我们就称之为两者之间产生了依赖，这个依赖（也就是一个对应关系）是会被收集的，方便响应式数据发生变化时重新执行对应的函数</strong>。</p><p>练习：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// demo1</span></span>
<span class="line"><span>var a;</span></span>
<span class="line"><span>function foo() {</span></span>
<span class="line"><span>  console.log(a);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 没有依赖关系，a 不是响应式数据</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// demo2</span></span>
<span class="line"><span>var a = ref(1);</span></span>
<span class="line"><span>function foo() {</span></span>
<span class="line"><span>  console.log(a);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 没有依赖关系，虽然用到了响应式数据，但是没有出现读取拦截的情况</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// demo3</span></span>
<span class="line"><span>var a = ref(1);</span></span>
<span class="line"><span>function foo() {</span></span>
<span class="line"><span>  console.log(a.value);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 有依赖关系，foo 依赖 value 属性</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// demo4</span></span>
<span class="line"><span>var a = ref({ b: 1 });</span></span>
<span class="line"><span>const k = a.value;</span></span>
<span class="line"><span>const n = k.b;</span></span>
<span class="line"><span>function foo() {</span></span>
<span class="line"><span>  a;</span></span>
<span class="line"><span>  a.value;</span></span>
<span class="line"><span>  k.b;</span></span>
<span class="line"><span>  n;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 有依赖关系</span></span>
<span class="line"><span>// foo 依赖 a 的 value 属性</span></span>
<span class="line"><span>// foo 依赖 k 的 b 属性</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// demo5</span></span>
<span class="line"><span>var a = ref({ b: 1 });</span></span>
<span class="line"><span>const k = a.value;</span></span>
<span class="line"><span>const n = k.b;</span></span>
<span class="line"><span>function foo() {</span></span>
<span class="line"><span>  a;</span></span>
<span class="line"><span>  k.b;</span></span>
<span class="line"><span>  n;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 有依赖关系</span></span>
<span class="line"><span>// foo 依赖 k 的 b 属性</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// demo6</span></span>
<span class="line"><span>var a = ref({ b: 1 });</span></span>
<span class="line"><span>const k = a.value;</span></span>
<span class="line"><span>const n = k.b;</span></span>
<span class="line"><span>function foo() {</span></span>
<span class="line"><span>  a;</span></span>
<span class="line"><span>  a.value.b</span></span>
<span class="line"><span>  n;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 有依赖关系</span></span>
<span class="line"><span>// foo 依赖 a 的 value 以及 b 属性</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// demo7</span></span>
<span class="line"><span>var a = ref({ b: 1 });</span></span>
<span class="line"><span>const k = a.value;</span></span>
<span class="line"><span>const n = k.b;</span></span>
<span class="line"><span>function foo() {</span></span>
<span class="line"><span>  function fn2(){</span></span>
<span class="line"><span>    a;</span></span>
<span class="line"><span>    a.value.b</span></span>
<span class="line"><span>    n;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  fn2();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 有依赖关系</span></span>
<span class="line"><span>// foo 依赖 a 的 value 以及 b 属性</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总而言之：<strong>只需要判断在函数的运行期间，是否存在读取操作行为的拦截，只要存在这种类型的拦截，那么该函数就和该响应式数据存在依赖关系</strong>。</p><p>不过，有一种情况需要注意，那就是<strong>异步</strong>。<strong>如果在函数的运行期间存在异步代码，那么之后的代码统统不看了</strong>。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// demo8</span></span>
<span class="line"><span>var a = ref({ b: 1 });</span></span>
<span class="line"><span>const k = a.value;</span></span>
<span class="line"><span>const n = k.b;</span></span>
<span class="line"><span>async function foo() {</span></span>
<span class="line"><span>  a;</span></span>
<span class="line"><span>  a.value; // 产生依赖，依赖 value 属性</span></span>
<span class="line"><span>  await 1;</span></span>
<span class="line"><span>  k.b; // 没有依赖，因为它是异步后面的代码</span></span>
<span class="line"><span>  n;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>函数</strong></p><p><strong>函数必须是被监控的函数</strong>。</p><ul><li>effect：这是 Vue3 源码内部的底层实现，后期会介绍</li><li>watchEffect</li><li>watch</li><li>组件渲染函数</li></ul><p>因此最后总结一下：<strong>只有被监控的函数，在它的同步代码运行期间，读取操作被拦截的响应式数据，才会建立依赖关系，建立了依赖关系之后，响应式数据发生变化，对应的函数才会重新执行</strong>。</p><p>练习：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// demo1</span></span>
<span class="line"><span>import { ref, watchEffect } from &quot;vue&quot;;</span></span>
<span class="line"><span>const state = ref({ a: 1 });</span></span>
<span class="line"><span>const k = state.value;</span></span>
<span class="line"><span>const n = k.a;</span></span>
<span class="line"><span>watchEffect(() =&gt; {</span></span>
<span class="line"><span>  // 首先判断依赖关系</span></span>
<span class="line"><span>  console.log(&quot;运行&quot;);</span></span>
<span class="line"><span>  state; // 没有依赖关系产生</span></span>
<span class="line"><span>  state.value; // 会产生依赖关系，依赖 value 属性</span></span>
<span class="line"><span>  state.value.a; // 会产生依赖关系，依赖 value 和 a 属性</span></span>
<span class="line"><span>  n; // 没有依赖关系</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>setTimeout(() =&gt; {</span></span>
<span class="line"><span>  state.value = { a: 3 }; // 要重新运行</span></span>
<span class="line"><span>}, 500);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// demo2</span></span>
<span class="line"><span>import { ref, watchEffect } from &quot;vue&quot;;</span></span>
<span class="line"><span>const state = ref({ a: 1 });</span></span>
<span class="line"><span>const k = state.value;</span></span>
<span class="line"><span>const n = k.a;</span></span>
<span class="line"><span>watchEffect(() =&gt; {</span></span>
<span class="line"><span>  console.log(&quot;运行&quot;);</span></span>
<span class="line"><span>  state;</span></span>
<span class="line"><span>  state.value; // value</span></span>
<span class="line"><span>  state.value.a; // value a</span></span>
<span class="line"><span>  n;</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>setTimeout(() =&gt; {</span></span>
<span class="line"><span>  //   state.value; // 不会重新运行</span></span>
<span class="line"><span>  state.value.a = 1; // 不会重新运行</span></span>
<span class="line"><span>}, 500);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// demo3</span></span>
<span class="line"><span>import { ref, watchEffect } from &quot;vue&quot;;</span></span>
<span class="line"><span>const state = ref({ a: 1 });</span></span>
<span class="line"><span>const k = state.value;</span></span>
<span class="line"><span>const n = k.a;</span></span>
<span class="line"><span>watchEffect(() =&gt; {</span></span>
<span class="line"><span>  console.log(&quot;运行&quot;);</span></span>
<span class="line"><span>  state;</span></span>
<span class="line"><span>  state.value; // value</span></span>
<span class="line"><span>  state.value.a; // value、a</span></span>
<span class="line"><span>  n;</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>setTimeout(() =&gt; {</span></span>
<span class="line"><span>  k.a = 2; // 这里相当于是操作了 proxy 对象的成员 a</span></span>
<span class="line"><span>  // 要重新运行</span></span>
<span class="line"><span>  // 如果将上面的 state.value.a; 这句话注释点，就不会重新运行</span></span>
<span class="line"><span>}, 500);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// demo4</span></span>
<span class="line"><span>import { ref, watchEffect } from &quot;vue&quot;;</span></span>
<span class="line"><span>const state = ref({ a: 1 });</span></span>
<span class="line"><span>const k = state.value;</span></span>
<span class="line"><span>let n = k.a;</span></span>
<span class="line"><span>watchEffect(() =&gt; {</span></span>
<span class="line"><span>  console.log(&quot;运行&quot;);</span></span>
<span class="line"><span>  state;</span></span>
<span class="line"><span>  state.value;</span></span>
<span class="line"><span>  state.value.a;</span></span>
<span class="line"><span>  n;</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>setTimeout(() =&gt; {</span></span>
<span class="line"><span>  n++; // 不会重新运行</span></span>
<span class="line"><span>}, 500);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// demo5</span></span>
<span class="line"><span>import { ref, watchEffect } from &quot;vue&quot;;</span></span>
<span class="line"><span>const state = ref({ a: 1 });</span></span>
<span class="line"><span>const k = state.value;</span></span>
<span class="line"><span>let n = k.a;</span></span>
<span class="line"><span>watchEffect(() =&gt; {</span></span>
<span class="line"><span>  console.log(&quot;运行&quot;);</span></span>
<span class="line"><span>  state;</span></span>
<span class="line"><span>  state.value;</span></span>
<span class="line"><span>  state.value.a;</span></span>
<span class="line"><span>  n;</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>setTimeout(() =&gt; {</span></span>
<span class="line"><span>  state.value.a = 100; // 要重新运行</span></span>
<span class="line"><span>}, 500);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// demo6</span></span>
<span class="line"><span>import { ref, watchEffect } from &quot;vue&quot;;</span></span>
<span class="line"><span>let state = ref({ a: 1 });</span></span>
<span class="line"><span>const k = state.value;</span></span>
<span class="line"><span>let n = k.a;</span></span>
<span class="line"><span>watchEffect(() =&gt; {</span></span>
<span class="line"><span>  console.log(&quot;运行&quot;);</span></span>
<span class="line"><span>  state;</span></span>
<span class="line"><span>  state.value;</span></span>
<span class="line"><span>  state.value.a;</span></span>
<span class="line"><span>  n;</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>setTimeout(() =&gt; {</span></span>
<span class="line"><span>  state = 100; // 不要重新运行</span></span>
<span class="line"><span>}, 500);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// demo7</span></span>
<span class="line"><span>import { ref, watchEffect } from &quot;vue&quot;;</span></span>
<span class="line"><span>const state = ref({ a: 1 });</span></span>
<span class="line"><span>const k = state.value;</span></span>
<span class="line"><span>const n = k.a;</span></span>
<span class="line"><span>watchEffect(() =&gt; {</span></span>
<span class="line"><span>  console.log(&quot;运行&quot;);</span></span>
<span class="line"><span>  state;</span></span>
<span class="line"><span>  state.value; // value 会被收集</span></span>
<span class="line"><span>  n;</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>setTimeout(() =&gt; {</span></span>
<span class="line"><span>  state.value.a = 100; // 不会重新执行</span></span>
<span class="line"><span>}, 500);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// demo8</span></span>
<span class="line"><span>import { ref, watchEffect } from &quot;vue&quot;;</span></span>
<span class="line"><span>let state = ref({ a: 1 });</span></span>
<span class="line"><span>const k = state.value;</span></span>
<span class="line"><span>const n = k.a;</span></span>
<span class="line"><span>watchEffect(() =&gt; {</span></span>
<span class="line"><span>  console.log(&quot;运行&quot;);</span></span>
<span class="line"><span>  state.value.a; // value、a</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>setTimeout(() =&gt; {</span></span>
<span class="line"><span>  state.value = { a: 1 }; // 要重新运行</span></span>
<span class="line"><span>}, 500);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// demo9</span></span>
<span class="line"><span>import { ref, watchEffect } from &quot;vue&quot;;</span></span>
<span class="line"><span>const state = ref({ a: 1 });</span></span>
<span class="line"><span>const k = state.value;</span></span>
<span class="line"><span>const n = k.a;</span></span>
<span class="line"><span>watchEffect(() =&gt; {</span></span>
<span class="line"><span>  console.log(&quot;运行&quot;);</span></span>
<span class="line"><span>  state.value.a = 2; // 注意这里的依赖仅仅只有 value 属性</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>setTimeout(() =&gt; {</span></span>
<span class="line"><span>  //   state.value.a = 100; // 不会重新运行的</span></span>
<span class="line"><span>  state.value = {}; // 要重新运行</span></span>
<span class="line"><span>}, 500);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// demo10</span></span>
<span class="line"><span>import { ref, watchEffect } from &quot;vue&quot;;</span></span>
<span class="line"><span>let state = ref({ a: 1 });</span></span>
<span class="line"><span>const k = state.value;</span></span>
<span class="line"><span>const n = k.a;</span></span>
<span class="line"><span>watchEffect(() =&gt; {</span></span>
<span class="line"><span>  console.log(&quot;运行&quot;);</span></span>
<span class="line"><span>  state;</span></span>
<span class="line"><span>  state.value.a; // value、a</span></span>
<span class="line"><span>  n;</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>setTimeout(() =&gt; {</span></span>
<span class="line"><span>  state.value.a = 2; // 要重新运行</span></span>
<span class="line"><span>}, 500);</span></span>
<span class="line"><span>setTimeout(() =&gt; {</span></span>
<span class="line"><span>  //   k.a = 3; // 要重新运行</span></span>
<span class="line"><span>  k.a = 2; // 因为值没有改变，所以不会重新运行</span></span>
<span class="line"><span>}, 1000);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// demo11</span></span>
<span class="line"><span>import { ref, watchEffect } from &quot;vue&quot;;</span></span>
<span class="line"><span>let state = ref({ a: 1 });</span></span>
<span class="line"><span>const k = state.value;</span></span>
<span class="line"><span>const n = k.a;</span></span>
<span class="line"><span>watchEffect(() =&gt; {</span></span>
<span class="line"><span>  console.log(&quot;运行&quot;);</span></span>
<span class="line"><span>  state.value.a; // value、a</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>setTimeout(() =&gt; {</span></span>
<span class="line"><span>  state.value = { a: 1 }; // 要重新运行</span></span>
<span class="line"><span>}, 500);</span></span>
<span class="line"><span>setTimeout(() =&gt; {</span></span>
<span class="line"><span>  k.a = 3; // 这里不会重新运行，因为前面修改了 state.value，不再是同一个代理对象</span></span>
<span class="line"><span>}, 1000);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// demo12</span></span>
<span class="line"><span>import { ref, watchEffect } from &quot;vue&quot;;</span></span>
<span class="line"><span>let state = ref({ a: 1 });</span></span>
<span class="line"><span>const k = state.value;</span></span>
<span class="line"><span>const n = k.a;</span></span>
<span class="line"><span>watchEffect(() =&gt; {</span></span>
<span class="line"><span>  console.log(&quot;运行&quot;);</span></span>
<span class="line"><span>  state.value.a; // value、a</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>setTimeout(() =&gt; {</span></span>
<span class="line"><span>  state.value = { a: 1 }; // 要重新执行</span></span>
<span class="line"><span>}, 500);</span></span>
<span class="line"><span>setTimeout(() =&gt; {</span></span>
<span class="line"><span>  state.value.a = 2; // 要重新执行</span></span>
<span class="line"><span>}, 1000);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// demo13</span></span>
<span class="line"><span>import { ref, watchEffect } from &quot;vue&quot;;</span></span>
<span class="line"><span>let state = ref({ a: 1 });</span></span>
<span class="line"><span>const k = state.value;</span></span>
<span class="line"><span>const n = k.a;</span></span>
<span class="line"><span>watchEffect(() =&gt; {</span></span>
<span class="line"><span>  console.log(&quot;运行&quot;);</span></span>
<span class="line"><span>  state.value.a; // value、a</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>setTimeout(() =&gt; {</span></span>
<span class="line"><span>  state.value = { a: 1 }; // 重新执行</span></span>
<span class="line"><span>}, 500);</span></span>
<span class="line"><span>setTimeout(() =&gt; {</span></span>
<span class="line"><span>  state.value.a = 1; // 不会重新执行，因为值没有变化</span></span>
<span class="line"><span>}, 1500);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// demo14</span></span>
<span class="line"><span>import { ref, watchEffect } from &quot;vue&quot;;</span></span>
<span class="line"><span>let state = ref({ a: 1 });</span></span>
<span class="line"><span>const k = state.value;</span></span>
<span class="line"><span>const n = k.a;</span></span>
<span class="line"><span>watchEffect(() =&gt; {</span></span>
<span class="line"><span>  console.log(&quot;运行&quot;);</span></span>
<span class="line"><span>  state.value.a; // value、a</span></span>
<span class="line"><span>  k.a; // 返回的 proxy 对象的 a 成员</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>setTimeout(() =&gt; {</span></span>
<span class="line"><span>  state.value = { a: 1 }; // 要重新运行</span></span>
<span class="line"><span>}, 500);</span></span>
<span class="line"><span>setTimeout(() =&gt; {</span></span>
<span class="line"><span>  k.a = 3; // 会重新执行</span></span>
<span class="line"><span>}, 1000);</span></span>
<span class="line"><span>setTimeout(() =&gt; {</span></span>
<span class="line"><span>  state.value.a = 4; // 会重新执行</span></span>
<span class="line"><span>}, 1500);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这节课的最后，我们再对响应式的本质做一个完整的总结：</p><p><strong>所谓响应式，背后其实就是函数和数据的一组映射，当数据发生变化，会将该数据对应的所有函数全部执行一遍。当然这里的数据和函数都是有要求的。数据是响应式数据，函数是被监控的函数。</strong></p><p><strong>收集数据和函数的映射关系在 Vue 中被称之为依赖收集，数据变化通知映射的函数重新执行被称之为派发更新。</strong></p><p>什么时候会产生依赖收集？</p><p><strong>只有被监控的函数，在它的同步代码运行期间，读取操作被拦截的响应式数据，才会建立依赖关系，建立了依赖关系之后，响应式数据发生变化，对应的函数才会重新执行</strong>。</p><hr><ul><li>EOF-</li></ul>`,50)]))}const v=n(l,[["render",p],["__file","Vue26.html.vue"]]),r=JSON.parse('{"path":"/Vue/Vue26.html","title":"响应式的本质","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":6.22,"words":1865},"filePathRelative":"Vue/Vue26.md"}');export{v as comp,r as data};
