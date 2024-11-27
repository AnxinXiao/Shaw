import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as e,o as i}from"./app-_9vaDOHR.js";const l={};function p(d,s){return i(),a("div",null,s[0]||(s[0]=[e(`<h1 id="手写computed" tabindex="-1"><a class="header-anchor" href="#手写computed"><span>手写computed</span></a></h1><p><strong>回顾computed的用法</strong></p><p>首先回顾一下 computed 的基本用法：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const state = reactive({</span></span>
<span class="line"><span>  a: 1,</span></span>
<span class="line"><span>  b: 2</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const sum = computed(() =&gt; {</span></span>
<span class="line"><span>  return state.a + state.b</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const firstName = ref(&#39;John&#39;)</span></span>
<span class="line"><span>const lastName = ref(&#39;Doe&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const fullName = computed({</span></span>
<span class="line"><span>  get() {</span></span>
<span class="line"><span>    return firstName.value + &#39; &#39; + lastName.value</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  set(newValue) {</span></span>
<span class="line"><span>    ;[firstName.value, lastName.value] = newValue.split(&#39; &#39;)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>实现computed方法</strong></p><p>首先第一步，我们需要对参数进行归一化，如下所示：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>function normalizeParameter(getterOrOptions) {</span></span>
<span class="line"><span>  let getter, setter;</span></span>
<span class="line"><span>  if (typeof getterOrOptions === &quot;function&quot;) {</span></span>
<span class="line"><span>    getter = getterOrOptions;</span></span>
<span class="line"><span>    setter = () =&gt; {</span></span>
<span class="line"><span>      console.warn(\`Computed property was assigned to but it has no setter.\`);</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>  } else {</span></span>
<span class="line"><span>    getter = getterOrOptions.get;</span></span>
<span class="line"><span>    setter = getterOrOptions.set;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return { getter, setter };</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的方法就是对传入 computed 的参数进行归一化，无论是传递的函数还是对象，统一都转换为对象。</p><p>接下啦就是建立依赖关系，如何建立呢？</p><p>无外乎就是将传入的 getter 函数运行一遍，getter 函数内部的响应式数据和 getter 产生关联：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// value 用于记录计算属性的值，dirty 用于标识是否需要重新计算</span></span>
<span class="line"><span>let value,</span></span>
<span class="line"><span>  dirty = true;</span></span>
<span class="line"><span>// 将 getter 传入 effect，getter 里面的响应式属性就会和 getter 建立依赖关系</span></span>
<span class="line"><span>const effetcFn = effect(getter, {</span></span>
<span class="line"><span>  lazy: true,</span></span>
<span class="line"><span>});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里的 value 用于缓存计算的值，dirty 用于标记数据是否过期，一开始标记为过期方便一开始执行一次计算到最新的值。</p><p>lazy 选项标记为 true，因为计算属性只有在访问的之后，才会进行计算。</p><p>接下来向外部返回一个对象：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const obj = {</span></span>
<span class="line"><span>  // 外部获取计算属性的值</span></span>
<span class="line"><span>  get value() {</span></span>
<span class="line"><span>    if (dirty) {</span></span>
<span class="line"><span>      // 第一次会进来，先计算一次，然后将至缓存起来</span></span>
<span class="line"><span>      value = effetcFn();</span></span>
<span class="line"><span>      dirty = false;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 返回计算出来的值</span></span>
<span class="line"><span>    return value;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  set value(newValue) {</span></span>
<span class="line"><span>    setter(newValue);</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>return obj;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该对象有一个 value 访问器属性，当访问 value 值的时候，会根据当前是否为脏值来决定是否重新计算。</p><p>目前为止，我们的计算属性工作一切正常，但是这种情况，某一个函数依赖计算属性的值，例如渲染函数。那么此时计算属性值的变化，应该也会让渲染函数重新执行才对。例如：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const state = reactive({</span></span>
<span class="line"><span>  a: 1,</span></span>
<span class="line"><span>  b: 2,</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>const sum = computed(() =&gt; {</span></span>
<span class="line"><span>  console.log(&quot;computed&quot;);</span></span>
<span class="line"><span>  return state.a + state.b;</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>effect(() =&gt; {</span></span>
<span class="line"><span>  // 假设这个是渲染函数，依赖了 sum 这个计算属性</span></span>
<span class="line"><span>  console.log(&quot;render&quot;, sum.value);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>state.a++</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果如下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>computed</span></span>
<span class="line"><span>render 3</span></span>
<span class="line"><span>computed</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到 computed 倒是重新执行了，但是渲染函数并没有重新执行。</p><p>怎么办呢？很简单，内部让渲染函数和计算属性的值建立依赖关系即可。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const obj = {</span></span>
<span class="line"><span>  // 外部获取计算属性的值</span></span>
<span class="line"><span>  get value() {</span></span>
<span class="line"><span>    // 相当于计算属性的 value 值和渲染函数之间建立了联系</span></span>
<span class="line"><span>    track(obj, TrackOpTypes.GET, &quot;value&quot;);</span></span>
<span class="line"><span>    // ...</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>    // ...</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>return obj;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>首先在获取依赖属性的值的时候，我们进行依次依赖收集，这样因为渲染函数里面用到了计算属性，因此计算属性 value 值就会和渲染函数产生依赖关系。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const effetcFn = effect(getter, {</span></span>
<span class="line"><span>  lazy: true,</span></span>
<span class="line"><span>  scheduler() {</span></span>
<span class="line"><span>    dirty = true;</span></span>
<span class="line"><span>    // 派发更新，执行和 value 相关的函数，也就是渲染函数。</span></span>
<span class="line"><span>    trigger(obj, TriggerOpTypes.SET, &quot;value&quot;);</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来添加配置项 scheduler，之后无论是 state.a 的变化，还是 state.b 的变化，都会进入到 scheduler，而在 scheduler 中，重新将 dirty 标记为脏数据，然后派发和 value 相关的更新即可。</p><p>完整的代码如下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>import { effect } from &quot;./effect/effect.js&quot;;</span></span>
<span class="line"><span>import track from &quot;./effect/track.js&quot;;</span></span>
<span class="line"><span>import trigger from &quot;./effect/trigger.js&quot;;</span></span>
<span class="line"><span>import { TriggerOpTypes, TrackOpTypes } from &quot;./utils.js&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function normalizeParameter(getterOrOptions) {</span></span>
<span class="line"><span>  let getter, setter;</span></span>
<span class="line"><span>  if (typeof getterOrOptions === &quot;function&quot;) {</span></span>
<span class="line"><span>    getter = getterOrOptions;</span></span>
<span class="line"><span>    setter = () =&gt; {</span></span>
<span class="line"><span>      console.warn(\`Computed property was assigned to but it has no setter.\`);</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>  } else {</span></span>
<span class="line"><span>    getter = getterOrOptions.get;</span></span>
<span class="line"><span>    setter = getterOrOptions.set;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return { getter, setter };</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * @param {*} getterOrOptions 可能是函数，也可能是对象</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>export function computed(getterOrOptions) {</span></span>
<span class="line"><span>  // 1. 第一步，先做参数归一化</span></span>
<span class="line"><span>  const { getter, setter } = normalizeParameter(getterOrOptions);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // value 用于记录计算属性的值，dirty 用于标识是否需要重新计算</span></span>
<span class="line"><span>  let value,</span></span>
<span class="line"><span>    dirty = true;</span></span>
<span class="line"><span>  // 将 getter 传入 effect，getter 里面的响应式属性就会和 getter 建立依赖关系</span></span>
<span class="line"><span>  const effetcFn = effect(getter, {</span></span>
<span class="line"><span>    lazy: true,</span></span>
<span class="line"><span>    scheduler() {</span></span>
<span class="line"><span>      dirty = true;</span></span>
<span class="line"><span>      trigger(obj, TriggerOpTypes.SET, &quot;value&quot;);</span></span>
<span class="line"><span>      console.log(&quot;j&quot;);</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 2. 第二步，返回一个新的对象</span></span>
<span class="line"><span>  const obj = {</span></span>
<span class="line"><span>    // 外部获取计算属性的值</span></span>
<span class="line"><span>    get value() {</span></span>
<span class="line"><span>      track(obj, TrackOpTypes.GET, &quot;value&quot;);</span></span>
<span class="line"><span>      if (dirty) {</span></span>
<span class="line"><span>        // 第一次会进来，先计算一次，然后将至缓存起来</span></span>
<span class="line"><span>        value = effetcFn();</span></span>
<span class="line"><span>        dirty = false;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      // 直接计算出来的值</span></span>
<span class="line"><span>      return value;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    set value(newValue) {</span></span>
<span class="line"><span>      setter(newValue);</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  };</span></span>
<span class="line"><span>  return obj;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><ul><li>EOF-</li></ul>`,31)]))}const c=n(l,[["render",p],["__file","Vue30.html.vue"]]),v=JSON.parse('{"path":"/Vue/Vue30.html","title":"手写computed","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":3.53,"words":1058},"filePathRelative":"Vue/Vue30.md"}');export{c as comp,v as data};
