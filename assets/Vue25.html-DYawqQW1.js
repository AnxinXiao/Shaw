import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as e,o as i}from"./app-_9vaDOHR.js";const l={};function p(d,s){return i(),a("div",null,s[0]||(s[0]=[e(`<h1 id="响应式数据的本质" tabindex="-1"><a class="header-anchor" href="#响应式数据的本质"><span>响应式数据的本质</span></a></h1><p>什么是响应式数据？其实就是<strong>被拦截的对象</strong>。</p><p>当对象被拦截后，针对对象的各种操作也就能够被拦截下来，从而让我们有机会做一些额外的事情。因此只要是被拦截了对象，就可以看作是一个响应式数据。</p><p>在 Vue3 中，创建响应式数据的方式，有 <strong>ref</strong> 和 <strong>reactive</strong> 两种，<strong>这两个 API 的背后，就是就是针对对象添加拦截</strong>。</p><p>在 JS 中，要实现数据拦截，要么是 Object.defineProperty，要么是 Proxy，而这两者都是针对<strong>对象</strong>来进行操作的。</p><p>ref 以及 reactive 源码：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>class RefImpl&lt;T&gt; {</span></span>
<span class="line"><span>  private _value: T</span></span>
<span class="line"><span>  private _rawValue: T</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  public dep?: Dep = undefined</span></span>
<span class="line"><span>  public readonly __v_isRef = true</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  constructor(</span></span>
<span class="line"><span>    value: T,</span></span>
<span class="line"><span>    public readonly __v_isShallow: boolean,</span></span>
<span class="line"><span>  ) {</span></span>
<span class="line"><span>    this._rawValue = __v_isShallow ? value : toRaw(value)</span></span>
<span class="line"><span>    // 有可能是原始值，有可能是 reactive 返回的 proxy</span></span>
<span class="line"><span>    this._value = __v_isShallow ? value : toReactive(value)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  get value() {</span></span>
<span class="line"><span>    // 收集依赖 略</span></span>
<span class="line"><span>    return this._value</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  set value(newVal) {</span></span>
<span class="line"><span>    // 略</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 判断是否是对象，是对象就用 reactive 来处理，否则返回原始值</span></span>
<span class="line"><span>export const toReactive = &lt;T extends unknown&gt;(value: T): T =&gt;</span></span>
<span class="line"><span>  isObject(value) ? reactive(value) : value</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 回忆 ref 的用法</span></span>
<span class="line"><span>const state = ref(5);</span></span>
<span class="line"><span>state.value;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>function createReactiveObject(</span></span>
<span class="line"><span>  target: Target,</span></span>
<span class="line"><span>  isReadonly: boolean,</span></span>
<span class="line"><span>  baseHandlers: ProxyHandler&lt;any&gt;,</span></span>
<span class="line"><span>  collectionHandlers: ProxyHandler&lt;any&gt;,</span></span>
<span class="line"><span>  proxyMap: WeakMap&lt;Target, any&gt;,</span></span>
<span class="line"><span>) {</span></span>
<span class="line"><span>  // ...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 创建 Proxy 代理对象</span></span>
<span class="line"><span>  const proxy = new Proxy(</span></span>
<span class="line"><span>    target,</span></span>
<span class="line"><span>    targetType === TargetType.COLLECTION ? collectionHandlers : baseHandlers,</span></span>
<span class="line"><span>  )</span></span>
<span class="line"><span>  proxyMap.set(target, proxy)</span></span>
<span class="line"><span>  return proxy</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export function reactive(target: object) {</span></span>
<span class="line"><span>  // ...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return createReactiveObject(</span></span>
<span class="line"><span>    target,</span></span>
<span class="line"><span>    false,</span></span>
<span class="line"><span>    mutableHandlers,</span></span>
<span class="line"><span>    mutableCollectionHandlers,</span></span>
<span class="line"><span>    reactiveMap,</span></span>
<span class="line"><span>  )</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从源码中我们就可以看出，<strong>ref 和 reactive 在实现响应式上面的策略是有所不同</strong>：</p><ul><li>ref：使用 Object.defineProperty + Proxy 方式</li><li>reactive：使用 Proxy 方式</li></ul><p>这节课还有一个非常重要的知识点，就是要 <strong>学会判断某个操作是否会产生拦截</strong>。因为只有产生拦截，才会有后续的依赖收集和派发更新一类的操作。</p><p>简单复习上节课的知识，有两个 API 能够实现拦截：</p><ol><li>Object.defineProperty <ul><li>特定的属性的读取</li><li>特定的属性的赋值</li></ul></li><li>操作 Proxy 代理对象的成员 <ul><li>读取</li><li>赋值</li><li>新增</li><li>删除</li></ul></li></ol><p>测试题目：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// demo1</span></span>
<span class="line"><span>let state = ref(1);</span></span>
<span class="line"><span>state; // 不会拦截</span></span>
<span class="line"><span>console.log(state); // 不会拦截</span></span>
<span class="line"><span>console.log(state.value); // 会拦截，因为访问了 value 属性</span></span>
<span class="line"><span>console.log(state.a); // 不会拦截</span></span>
<span class="line"><span>state.a = 3; // 不会拦截</span></span>
<span class="line"><span>state.value = 3; // 会拦截</span></span>
<span class="line"><span>delete state.value; // 不会拦截</span></span>
<span class="line"><span>state = 3; // 不会拦截</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// demo2</span></span>
<span class="line"><span>let state = ref({ a: 1 });</span></span>
<span class="line"><span>state; // 不会拦截</span></span>
<span class="line"><span>console.log(state); // 不会拦截</span></span>
<span class="line"><span>console.log(state.value); // 会拦截</span></span>
<span class="line"><span>console.log(state.a); // 不会拦截</span></span>
<span class="line"><span>console.log(state.value.a); // 会拦截，拦截到 value 和 a 属性的 get 操作</span></span>
<span class="line"><span>state.a = 3; // 不会拦截</span></span>
<span class="line"><span>state.value.a = 3; // 会拦截，value 的 get 操作，a 属性的 set 操作</span></span>
<span class="line"><span>delete state.value.a; // 会拦截，value 的 get 操作，a 属性的 delete 操作</span></span>
<span class="line"><span>state.value = 3; // 会拦截，value 的 set 操作</span></span>
<span class="line"><span>delete state.value; // 不会拦截</span></span>
<span class="line"><span>state = 3; // 不会拦截</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// demo3</span></span>
<span class="line"><span>let state = reactive({});</span></span>
<span class="line"><span>state; // 不会拦截</span></span>
<span class="line"><span>console.log(state); // 不会拦截</span></span>
<span class="line"><span>console.log(state.a); // 会拦截</span></span>
<span class="line"><span>state.a = 3; // 会拦截</span></span>
<span class="line"><span>state.a = {</span></span>
<span class="line"><span>  b: {</span></span>
<span class="line"><span>    c: 3,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>}; // 会拦截，拦截到 a 属性的 set 操作</span></span>
<span class="line"><span>console.log(&quot;-------------&quot;);</span></span>
<span class="line"><span>console.log(state.a.b.c); // 会拦截</span></span>
<span class="line"><span>delete state.a.b; // 会拦截 a 是 get 操作，b 是 delete 操作</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// demo4</span></span>
<span class="line"><span>const state = ref({ a: 1 });</span></span>
<span class="line"><span>const k = state.value;</span></span>
<span class="line"><span>console.log(&quot;-------------&quot;);</span></span>
<span class="line"><span>console.log(k); // 不会拦截，k 相当于是一个 proxy 对象，没有针对成员进行操作</span></span>
<span class="line"><span>k.a = 3; // 会拦截，因为 k 是一个 proxy 对象，对 k 的成员进行操作会触发代理的 set 操作</span></span>
<span class="line"><span>const n = k.a; // 会拦截，因为访问了 k 的成员 a，会触发代理的 get 操作</span></span>
<span class="line"><span>console.log(&quot;-------------&quot;);</span></span>
<span class="line"><span>console.log(n);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// demo5</span></span>
<span class="line"><span>const arr = reactive([1, 2, 3]);</span></span>
<span class="line"><span>arr; // 不会拦截</span></span>
<span class="line"><span>arr.length; // 会拦截</span></span>
<span class="line"><span>arr[0]; // 会拦截，拦截 0 的 get 操作</span></span>
<span class="line"><span>arr[0] = 3; // 会拦截，拦截 0 的 set 操作</span></span>
<span class="line"><span>arr.push(4); // 会被拦截</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再次强调，<strong>一定要学会去判断针对一个对象进行操作的时候，是否会发生拦截，这一点非常重要</strong>‼️</p><hr><ul><li>EOF-</li></ul>`,22)]))}const t=n(l,[["render",p],["__file","Vue25.html.vue"]]),v=JSON.parse('{"path":"/Vue/Vue25.html","title":"响应式数据的本质","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":3.18,"words":954},"filePathRelative":"Vue/Vue25.md"}');export{t as comp,v as data};
