import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as e,o as i}from"./app-_9vaDOHR.js";const l={};function p(c,s){return i(),a("div",null,s[0]||(s[0]=[e(`<h1 id="响应式相关api" tabindex="-1"><a class="header-anchor" href="#响应式相关api"><span>响应式相关API</span></a></h1><ul><li>ref 相关：toRef、toRefs、unRef</li><li>只读代理：readonly</li><li>判断相关：isRef、isReactive、isProxy、isReadonly</li><li>3.3新增API：toValue</li></ul><h2 id="ref相关" tabindex="-1"><a class="header-anchor" href="#ref相关"><span><strong>ref相关</strong></span></a></h2><p>toRef：基于响应式对象的某一个属性，将其转换为 ref 值</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>import { reactive, toRef } from &#39;vue&#39;</span></span>
<span class="line"><span>const state = reactive({</span></span>
<span class="line"><span>  count: 0</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>const countRef = toRef(state, &#39;count&#39;)</span></span>
<span class="line"><span>// 这里其实就等价于 ref(state.count)</span></span>
<span class="line"><span>console.log(countRef)</span></span>
<span class="line"><span>console.log(countRef.value)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>import { reactive, isReactive, toRef } from &#39;vue&#39;</span></span>
<span class="line"><span>const state = reactive({</span></span>
<span class="line"><span>  count: {</span></span>
<span class="line"><span>    value: 0</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>console.log(isReactive(state)) // true</span></span>
<span class="line"><span>console.log(isReactive(state.count)) // true</span></span>
<span class="line"><span>const countRef = toRef(state, &#39;count&#39;)</span></span>
<span class="line"><span>// 相当于 ref(state.count)</span></span>
<span class="line"><span>console.log(countRef)</span></span>
<span class="line"><span>console.log(countRef.value)</span></span>
<span class="line"><span>console.log(countRef.value.value)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>toRefs：将一个响应式对象转为一个普通对象，普通对象的每一个属性对应的是一个 ref 值</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>import { reactive, toRefs } from &#39;vue&#39;</span></span>
<span class="line"><span>const state = reactive({</span></span>
<span class="line"><span>  count: 0,</span></span>
<span class="line"><span>  message: &#39;hello&#39;</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>const stateRefs = toRefs(state)</span></span>
<span class="line"><span>console.log(stateRefs) // {count: RefImpl, message: RefImpl}</span></span>
<span class="line"><span>console.log(stateRefs.count.value)</span></span>
<span class="line"><span>console.log(stateRefs.message.value)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>unRef: 如果参数给的是一个 ref 值，那么就返回内部的值，如果不是 ref，那么就返回参数本身</p><p>这个 API 实际上是一个语法糖： val = isRef(val) ? val.value : val</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>import { ref, unref } from &#39;vue&#39;</span></span>
<span class="line"><span>const countRef = ref(10)</span></span>
<span class="line"><span>const normalValue = 20</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(unref(countRef)) // 10</span></span>
<span class="line"><span>console.log(unref(normalValue)) // 20</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="只读代理" tabindex="-1"><a class="header-anchor" href="#只读代理"><span><strong>只读代理</strong></span></a></h2><p>接收一个对象（不论是响应式的还是普通的）或者一个 ref，返回一个原来值的只读代理。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>import { ref, readonly } from &#39;vue&#39;</span></span>
<span class="line"><span>const count = ref(0)</span></span>
<span class="line"><span>const count2 = readonly(count) // 相当于创建了一个 count 的只读版本</span></span>
<span class="line"><span>count.value++;</span></span>
<span class="line"><span>count2.value++; // 会给出警告</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在某些场景下，我们就是希望一些数据只能读取不能修改</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const rawConfig = {</span></span>
<span class="line"><span>  apiEndpoint: &#39;https://api.example.com&#39;,</span></span>
<span class="line"><span>  timeout: 5000</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>// 例如在这个场景下，我们就期望这个配置对象是不能够修改的</span></span>
<span class="line"><span>const config = readonly(rawConfig)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="判断相关" tabindex="-1"><a class="header-anchor" href="#判断相关"><span><strong>判断相关</strong></span></a></h2><p>isRef 和 isReactive</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>import { ref, shallowRef, reactive, shallowReactive, isRef, isReactive } from &#39;vue&#39;</span></span>
<span class="line"><span>const obj = {</span></span>
<span class="line"><span>  a:1,</span></span>
<span class="line"><span>  b:2,</span></span>
<span class="line"><span>  c: {</span></span>
<span class="line"><span>    d:3,</span></span>
<span class="line"><span>    e:4</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>const state1 = ref(obj)</span></span>
<span class="line"><span>const state2 = shallowRef(obj)</span></span>
<span class="line"><span>const state3 = reactive(obj)</span></span>
<span class="line"><span>const state4 = shallowReactive(obj)</span></span>
<span class="line"><span>console.log(isRef(state1)) // true</span></span>
<span class="line"><span>console.log(isRef(state2)) // true</span></span>
<span class="line"><span>console.log(isRef(state1.value.c)) // false</span></span>
<span class="line"><span>console.log(isRef(state2.value.c)) // false</span></span>
<span class="line"><span>console.log(isReactive(state1.value.c)) // true</span></span>
<span class="line"><span>console.log(isReactive(state2.value.c)) // false</span></span>
<span class="line"><span>console.log(isReactive(state3)) // true</span></span>
<span class="line"><span>console.log(isReactive(state4)) // true</span></span>
<span class="line"><span>console.log(isReactive(state3.c)) // true</span></span>
<span class="line"><span>console.log(isReactive(state4.c)) // false</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>isProxy: 检查一个对象是否由 reactive、readonly、shallowReactive、shallowReadonly 创建的代理</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>import { reactive, readonly, shallowReactive, shallowReadonly, isProxy } from &#39;vue&#39;</span></span>
<span class="line"><span>// 创建 reactive 代理对象</span></span>
<span class="line"><span>const reactiveObject = reactive({ message: &#39;Hello&#39; })</span></span>
<span class="line"><span>// 创建 readonly 代理对象</span></span>
<span class="line"><span>const readonlyObject = readonly({ message: &#39;Hello&#39; })</span></span>
<span class="line"><span>// 创建 shallowReactive 代理对象</span></span>
<span class="line"><span>const shallowReactiveObject = shallowReactive({ message: &#39;Hello&#39; })</span></span>
<span class="line"><span>// 创建 shallowReadonly 代理对象</span></span>
<span class="line"><span>const shallowReadonlyObject = shallowReadonly({ message: &#39;Hello&#39; })</span></span>
<span class="line"><span>// 创建普通对象</span></span>
<span class="line"><span>const normalObject = { message: &#39;Hello&#39; }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(isProxy(reactiveObject)) // true</span></span>
<span class="line"><span>console.log(isProxy(readonlyObject)) // true</span></span>
<span class="line"><span>console.log(isProxy(shallowReactiveObject)) // true</span></span>
<span class="line"><span>console.log(isProxy(shallowReadonlyObject)) // true</span></span>
<span class="line"><span>console.log(isProxy(normalObject)) // false</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-3新增api" tabindex="-1"><a class="header-anchor" href="#_3-3新增api"><span><strong>3.3新增API</strong></span></a></h2><p>toValue</p><p>这个 API 和前面介绍的 unref 比较相似</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>import { ref, toValue } from &#39;vue&#39;</span></span>
<span class="line"><span>const countRef = ref(10)</span></span>
<span class="line"><span>const normalValue = 20</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(toValue(countRef)) // 10</span></span>
<span class="line"><span>console.log(toValue(normalValue)) // 20</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>toValue 相比 unref 更加灵活一些，它支持传入 getter 函数，并且返回函数的执行结果</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>import { ref, toValue } from &#39;vue&#39;</span></span>
<span class="line"><span>const countRef = ref(10)</span></span>
<span class="line"><span>const normalValue = 20</span></span>
<span class="line"><span>const getter = ()=&gt;30;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(toValue(countRef)) // 10</span></span>
<span class="line"><span>console.log(toValue(normalValue)) // 20</span></span>
<span class="line"><span>console.log(toValue(getter)) // 30</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><ul><li>EOF-</li></ul>`,29)]))}const r=n(l,[["render",p],["__file","Vue03.html.vue"]]),o=JSON.parse('{"path":"/Vue/Vue03.html","title":"响应式相关API","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"ref相关","slug":"ref相关","link":"#ref相关","children":[]},{"level":2,"title":"只读代理","slug":"只读代理","link":"#只读代理","children":[]},{"level":2,"title":"判断相关","slug":"判断相关","link":"#判断相关","children":[]},{"level":2,"title":"3.3新增API","slug":"_3-3新增api","link":"#_3-3新增api","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":2.35,"words":705},"filePathRelative":"Vue/Vue03.md"}');export{r as comp,o as data};
