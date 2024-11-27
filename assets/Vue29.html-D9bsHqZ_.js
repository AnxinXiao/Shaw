import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as e,o as i}from"./app-_9vaDOHR.js";const l={};function p(c,s){return i(),a("div",null,s[0]||(s[0]=[e(`<h1 id="图解effect" tabindex="-1"><a class="header-anchor" href="#图解effect"><span>图解Effect</span></a></h1><p>effect 方法的作用：就是将 <strong>函数</strong> 和 <strong>数据</strong> 关联起来。</p><p>回忆 watchEffect</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>import { ref, watchEffect } from &quot;vue&quot;;</span></span>
<span class="line"><span>const state = ref({ a: 1 });</span></span>
<span class="line"><span>const k = state.value;</span></span>
<span class="line"><span>const n = k.a;</span></span>
<span class="line"><span>// 这里就会整理出 state.value、state.value.a</span></span>
<span class="line"><span>watchEffect(() =&gt; {</span></span>
<span class="line"><span>  console.log(&quot;运行&quot;);</span></span>
<span class="line"><span>  state;</span></span>
<span class="line"><span>  state.value;</span></span>
<span class="line"><span>  state.value.a;</span></span>
<span class="line"><span>  n;</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>setTimeout(() =&gt; {</span></span>
<span class="line"><span>  state.value = { a: 3 }; // 要重新运行，因为是对 value 的写入操作</span></span>
<span class="line"><span>}, 500);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>effect函数的设计：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 原始对象</span></span>
<span class="line"><span>const data = {</span></span>
<span class="line"><span>  a: 1,</span></span>
<span class="line"><span>  b: 2,</span></span>
<span class="line"><span>  c: 3,</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>// 产生一个代理对象</span></span>
<span class="line"><span>const state = new Proxy(data, { ... });</span></span>
<span class="line"><span>effect(() =&gt; {</span></span>
<span class="line"><span>  console.log(state.a);</span></span>
<span class="line"><span>});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的代码中，向 effect 方法传入的回调函数中，访问了 state 的 a 成员，然后我们期望 a 这个成员和这个回调函数建立关联。</p><p>第一版实现如下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>let activeEffect = null; // 记录当前的函数</span></span>
<span class="line"><span>const depsMap = new Map(); // 保存依赖关系</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function track(target, key) {</span></span>
<span class="line"><span>  // 建立依赖关系</span></span>
<span class="line"><span>  if (activeEffect) {</span></span>
<span class="line"><span>    let deps = depsMap.get(key); // 根据属性值去拿依赖的函数集合</span></span>
<span class="line"><span>    if (!deps) {</span></span>
<span class="line"><span>      deps = new Set(); // 创建一个新的集合</span></span>
<span class="line"><span>      depsMap.set(key, deps); // 将集合存入 depsMap</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 将依赖的函数添加到集合里面</span></span>
<span class="line"><span>    deps.add(activeEffect);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  console.log(depsMap);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function trigger(target, key) {</span></span>
<span class="line"><span>  // 这里面就需要运行依赖的函数</span></span>
<span class="line"><span>  const deps = depsMap.get(key);</span></span>
<span class="line"><span>  if (deps) {</span></span>
<span class="line"><span>    deps.forEach((effect) =&gt; effect());</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 原始对象</span></span>
<span class="line"><span>const data = {</span></span>
<span class="line"><span>  a: 1,</span></span>
<span class="line"><span>  b: 2,</span></span>
<span class="line"><span>  c: 3,</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>// 代理对象</span></span>
<span class="line"><span>const state = new Proxy(data, {</span></span>
<span class="line"><span>  get(target, key) {</span></span>
<span class="line"><span>    track(target, key); // 进行依赖收集</span></span>
<span class="line"><span>    return target[key];</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  set(target, key, value) {</span></span>
<span class="line"><span>    target[key] = value;</span></span>
<span class="line"><span>    trigger(target, key); // 派发更新</span></span>
<span class="line"><span>    return true;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * @param {*} fn 回调函数</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>function effect(fn) {</span></span>
<span class="line"><span>  activeEffect = fn;</span></span>
<span class="line"><span>  fn();</span></span>
<span class="line"><span>  activeEffect = null;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>effect(() =&gt; {</span></span>
<span class="line"><span>  // 这里在访问 a 成员时，会触发 get 方法，进行依赖收集</span></span>
<span class="line"><span>  console.log(&#39;执行函数&#39;)</span></span>
<span class="line"><span>  console.log(state.a);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>state.a = 10;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第一版实现，<strong>每个属性对应一个 Set 集合</strong>，该集合里面是所依赖的函数，所有属性与其对应的依赖函数集合形成一个 map 结构，如下图所示：</p><p>!<a href="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2024-05-30-005612.png" target="_blank" rel="noopener noreferrer">https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2024-05-30-005612.png</a></p><p>activeEffect 起到一个中间变量的作用，临时存储这个回调函数，等依赖收集完成后，再将这个临时变量设置为空即可。</p><p>!<a href="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2024-05-30-010642.png" target="_blank" rel="noopener noreferrer">https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2024-05-30-010642.png</a></p><p><strong>问题一</strong>：每一次运行回调函数的时候，都应该确定新的依赖关系。</p><p>稍作修改：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>effect(() =&gt; {</span></span>
<span class="line"><span>  if (state.a === 1) {</span></span>
<span class="line"><span>    state.b;</span></span>
<span class="line"><span>  } else {</span></span>
<span class="line"><span>    state.c;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  console.log(&quot;执行了函数&quot;);</span></span>
<span class="line"><span>});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的代码中，两次运行回调函数，所建立的依赖关系应该是不一样的：</p><ul><li>第一次：a、b</li><li>第二次：a、c</li></ul><p>第一次运行依赖如下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Map(1) { &#39;a&#39; =&gt; Set(1) { [Function (anonymous)] } }</span></span>
<span class="line"><span>Map(2) {</span></span>
<span class="line"><span>  &#39;a&#39; =&gt; Set(1) { [Function (anonymous)] },</span></span>
<span class="line"><span>  &#39;b&#39; =&gt; Set(1) { [Function (anonymous)] }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>执行了函数</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>!<a href="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2024-05-30-011134.png" target="_blank" rel="noopener noreferrer">https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2024-05-30-011134.png</a></p><p>执行 state.a = 100</p><p>依赖关系变为了：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Map(1) { &#39;a&#39; =&gt; Set(1) { [Function (anonymous)] } }</span></span>
<span class="line"><span>Map(2) {</span></span>
<span class="line"><span>  &#39;a&#39; =&gt; Set(1) { [Function (anonymous)] },</span></span>
<span class="line"><span>  &#39;b&#39; =&gt; Set(1) { [Function (anonymous)] }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>执行了函数</span></span>
<span class="line"><span>Map(2) {</span></span>
<span class="line"><span>  &#39;a&#39; =&gt; Set(1) { [Function (anonymous)] },</span></span>
<span class="line"><span>  &#39;b&#39; =&gt; Set(1) { [Function (anonymous)] }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>Map(2) {</span></span>
<span class="line"><span>  &#39;a&#39; =&gt; Set(1) { [Function (anonymous)] },</span></span>
<span class="line"><span>  &#39;b&#39; =&gt; Set(1) { [Function (anonymous)] }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>执行了函数</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当 a 的值修改为 100 后，依赖关系应该重新建立，也就是说：</p><ul><li>第一次运行：建立 a、b 依赖</li><li>第二次运行：建立 a、c 依赖</li></ul><p>那么现在 a 的值明明已经变成 100 了，为什么重新执行回调函数的时候，没有重新建立依赖呢？</p><p>原因也很简单，如下图所示：</p><p>!<a href="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2024-05-30-012138.png" target="_blank" rel="noopener noreferrer">https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2024-05-30-012138.png</a></p><p><strong>第一次建立依赖关系的时候，是将依赖函数赋值给 activeEffect，最终是通过 activeEffect 这个中间变量将依赖函数添加进依赖列表的</strong>。依赖函数执行完毕后，activeEffect 就设置为了 null，之后 a 成员的值发生改变，重新运行的是回调函数，但是 activeEffect 的值依然是 null，这就会导致 track 中依赖收集的代码根本进不去：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>function track(target, key) {</span></span>
<span class="line"><span>  if (activeEffect) {</span></span>
<span class="line"><span>    // ...</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>怎么办呢？也很简单，<strong>我们在收集依赖的时候，不再是仅仅收集回调函数，而是收集一个包含 activeEffect 的环境</strong>，继续改造 effect：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>function effect(fn) {</span></span>
<span class="line"><span>  const environment = () =&gt; {</span></span>
<span class="line"><span>    activeEffect = environment;</span></span>
<span class="line"><span>    fn();</span></span>
<span class="line"><span>    activeEffect = null;</span></span>
<span class="line"><span>  };</span></span>
<span class="line"><span>  environment();</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里 activeEffect 对应的值，不再是像之前那样是回调函数，而是一整个 environment 包含环境信息的函数，这样当重新执行依赖的函数的时候，执行的也就是这个环境函数，而环境函数的第一行就是 activeEffect 赋值，这样就能够正常的进入到依赖收集环节。</p><p>如下图所示：</p><p>!<a href="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2024-05-30-012752.png" target="_blank" rel="noopener noreferrer">https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2024-05-30-012752.png</a></p><p>**问题二：**旧的依赖没有删除</p><p>解决方案：在执行 fn 方法之前，先调用了一个名为 cleanup 的方法，该方法的作用就是用来清除依赖。</p><p>该方法代码如下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>function cleanup(environment) {</span></span>
<span class="line"><span>  let deps = environment.deps; // 拿到当前环境函数的依赖（是个数组）</span></span>
<span class="line"><span>  if (deps.length) {</span></span>
<span class="line"><span>    deps.forEach((dep) =&gt; {</span></span>
<span class="line"><span>      dep.delete(environment);</span></span>
<span class="line"><span>      if (dep.size === 0) {</span></span>
<span class="line"><span>        for (let [key, value] of depsMap) {</span></span>
<span class="line"><span>          if (value === dep) {</span></span>
<span class="line"><span>            depsMap.delete(key);</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>    deps.length = 0;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>具体结构如下图所示：</p><p>!<a href="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2024-05-30-014306.png" target="_blank" rel="noopener noreferrer">https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2024-05-30-014306.png</a></p><p><strong>测试多个依赖函数</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>effect(() =&gt; {</span></span>
<span class="line"><span>  if (state.a === 1) {</span></span>
<span class="line"><span>    state.b;</span></span>
<span class="line"><span>  } else {</span></span>
<span class="line"><span>    state.c;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  console.log(&quot;执行了函数1&quot;);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>effect(() =&gt; {</span></span>
<span class="line"><span>  console.log(state.c);</span></span>
<span class="line"><span>  console.log(&quot;执行了函数2&quot;);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>state.a = 2;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>effect(() =&gt; {</span></span>
<span class="line"><span>  if (state.a === 1) {</span></span>
<span class="line"><span>    state.b;</span></span>
<span class="line"><span>  } else {</span></span>
<span class="line"><span>    state.c;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  console.log(&quot;执行了函数1&quot;);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>effect(() =&gt; {</span></span>
<span class="line"><span>  console.log(state.a);</span></span>
<span class="line"><span>  console.log(state.c);</span></span>
<span class="line"><span>  console.log(&quot;执行了函数2&quot;);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>state.a = 2;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解决无限循环问题：</p><p>在 track 函数中，每次 state.a 被访问时，都会重新添加当前的 activeEffect 到依赖集合中。而在 trigger 函数中，当 state.a 被修改时，会触发所有依赖 state.a 的 effect 函数，这些 effect 函数中又会重新访问 state.a，从而导致了无限循环。具体来讲：</p><ol><li>初始执行 effect 时，state.a 的值为 1，因此第一个 effect 会访问 state.b，第二个 effect 会访问 state.a 和 state.c。</li><li>state.a 被修改为 2 时，trigger 函数会触发所有依赖 state.a 的 effect 函数。</li><li>第二个 effect 函数被触发后，会访问 state.a，这时 track 函数又会把当前的 activeEffect 添加到 state.a 的依赖集合中。</li><li>因为 state.a 的值被修改，会再次触发 trigger，导致第二个 effect 函数再次执行，如此循环往复，导致无限循环。</li></ol><p>要解决这个问题，可以在 trigger 函数中添加一些机制来防止重复触发同一个 effect 函数，比如使用一个 Set 来记录已经触发过的 effect 函数：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>function trigger(target, key) {</span></span>
<span class="line"><span>  const deps = depsMap.get(key);</span></span>
<span class="line"><span>  if (deps) {</span></span>
<span class="line"><span>    const effectsToRun = new Set(deps); // 复制一份集合，防止在执行过程中修改原集合</span></span>
<span class="line"><span>    effectsToRun.forEach((effect) =&gt; effect());</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>测试嵌套函数</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>effect(() =&gt; {</span></span>
<span class="line"><span>  effect(() =&gt; {</span></span>
<span class="line"><span>    state.a</span></span>
<span class="line"><span>    console.log(&quot;执行了函数2&quot;);</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>  state.b;</span></span>
<span class="line"><span>  console.log(&quot;执行了函数1&quot;);</span></span>
<span class="line"><span>});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>会发现所建立的依赖又不正常了：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Map(1) { &#39;a&#39; =&gt; Set(1) { [Function: environment] { deps: [Array] } } }</span></span>
<span class="line"><span>执行了函数2</span></span>
<span class="line"><span>Map(1) { &#39;a&#39; =&gt; Set(1) { [Function: environment] { deps: [Array] } } }</span></span>
<span class="line"><span>执行了函数1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>究其原因，是目前的函数栈有问题，当执行到内部的 effect 函数时，会将 activeEffect 设置为 null，如下图所示：</p><p>!<a href="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2024-05-30-023612.png" target="_blank" rel="noopener noreferrer">https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2024-05-30-023612.png</a></p><p>解决方案：模拟函数栈的形式。</p><hr><ul><li>EOF-</li></ul>`,59)]))}const r=n(l,[["render",p],["__file","Vue29.html.vue"]]),v=JSON.parse('{"path":"/Vue/Vue29.html","title":"图解Effect","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":5.66,"words":1699},"filePathRelative":"Vue/Vue29.md"}');export{r as comp,v as data};
