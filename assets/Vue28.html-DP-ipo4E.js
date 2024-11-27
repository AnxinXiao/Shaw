import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as e,o as i}from"./app-_9vaDOHR.js";const p={};function l(r,n){return i(),a("div",null,n[0]||(n[0]=[e(`<h1 id="实现响应式系统" tabindex="-1"><a class="header-anchor" href="#实现响应式系统"><span>实现响应式系统</span></a></h1><blockquote><p>笔记记录重要内容。</p></blockquote><p><strong>核心要素</strong></p><p>要实现一个响应式系统，最为核心的有两个部分：</p><ol><li>监听数据的读写</li><li>关联数据和函数</li></ol><p>只要把这两个部分完成了，那么整个响应式系统也就基本成型了。</p><p><strong>监听数据读写</strong></p><ul><li>数据：在 JS 中，能够拦截读写的方式，要么 Object.defineProperty，要么就是 Proxy，这两个方法针对的目标是对象，因此我们这里考虑对对象类型进行监听</li><li>读写：虽然说是监听读写，但是细分下来要监听的行为如下： <ul><li>获取属性：读取</li><li>设置属性：写入</li><li>新增属性：写入</li><li>删除属性：写入</li><li>是否存在某个属性：读取</li><li>遍历属性：读取</li></ul></li></ul><p><strong>拦截后对应的处理</strong></p><p>不同的行为，拦截下来后要做的事情是不一样的。整体来讲分为两大类：</p><ul><li>收集器：针对读取的行为，会触发收集器去收集依赖，所谓收集依赖，其实就是建立数据和函数之间的依赖关系</li><li>触发器：针对写入行为，触发器会工作，触发器所做的事情就是触发数据所关联的所有函数，让这些函数重新执行</li></ul><p>下面是不同行为对应的事情：</p><ul><li>获取属性：收集器</li><li>设置属性：触发器</li><li>新增属性：触发器</li><li>删除属性：触发器</li><li>是否存在某个属性：收集器</li><li>遍历属性：收集器</li></ul><p>总结起来也很简单，<strong>只要涉及到属性的访问，那就是收集器，只要涉及到属性的设置（新增、删除都算设置），那就是触发器</strong>。</p><p><strong>数组中查找对象</strong></p><p>因为在进行代理的时候，是进行了递归代理的，也就是说对象里面成员包含对象的话，也会被代理，这就会导致数组中成员有对象的话，是找不到的。原因很简答，比较的是原始对象和代理对象，自然就找不到。</p><p>解决方案：先正常找，找不到就在原始对象中重新找一遍</p><p><strong>数组改动长度</strong></p><p>关于数组长度的改变，也会有一些问题，如果是隐式的改变长度，不会触发 length 的拦截。</p><p>另外即便是显式的设置 length，这里会涉及到新增和删除，新增情况下的拦截是正常的，但是在删除的情况下，不会触发 DELETE 拦截，因此也需要手动处理。</p><p><strong>自定义是否要收集依赖</strong></p><p>当调用 push、pop、shift 等方法的时候，因为涉及到了 length 属性的变化，会触发依赖收集，这是我们不期望的。</p><p>最好的方式，就是由我们来控制是否要依赖收集。</p><p><strong>关联数据和函数</strong></p><p><strong>依赖收集</strong></p><p>!<a href="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2024-05-29-051604.png" target="_blank" rel="noopener noreferrer">https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2024-05-29-051604.png</a></p><p><strong>实现Effect</strong></p><p>这里直接给出 Effect 实现：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * 用于记录当前活动的 effect</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>export let activeEffect = undefined;</span></span>
<span class="line"><span>export const targetMap = new WeakMap(); // 用来存储对象和其属性的依赖关系</span></span>
<span class="line"><span>const effectStack = [];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 该函数的作用，是执行传入的函数，并且在执行的过程中，收集依赖</span></span>
<span class="line"><span> * @param {*} fn 要执行的函数</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>export function effect(fn) {</span></span>
<span class="line"><span>  const environment = () =&gt; {</span></span>
<span class="line"><span>    try {</span></span>
<span class="line"><span>      activeEffect = environment;</span></span>
<span class="line"><span>      effectStack.push(environment);</span></span>
<span class="line"><span>      cleanup(environment);</span></span>
<span class="line"><span>      return fn();</span></span>
<span class="line"><span>    } finally {</span></span>
<span class="line"><span>      effectStack.pop();</span></span>
<span class="line"><span>      activeEffect = effectStack[effectStack.length - 1];</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  };</span></span>
<span class="line"><span>  environment.deps = [];</span></span>
<span class="line"><span>  environment();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export function cleanup(environment) {</span></span>
<span class="line"><span>  let deps = environment.deps; // 拿到当前环境函数的依赖（是个数组）</span></span>
<span class="line"><span>  if (deps.length) {</span></span>
<span class="line"><span>    deps.forEach((dep) =&gt; {</span></span>
<span class="line"><span>      dep.delete(environment);</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>    deps.length = 0;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>改造track</strong></p><p>之前 track 仅仅只是简单的打印，那么现在就不能是简单打印了，而是进行具体的依赖收集。</p><p>注意依赖收集的时候，需要按照上面的设计一层一层进行查找。</p><p><strong>改造trigger</strong></p><p>trigger 要做的事情也很简单，就是从我们所设计的数据结构里面，一层一层去找，找到对应的依赖函数集合，然后全部执行一次。</p><p>首先我们需要<strong>建立一个设置行为和读取行为之间的映射关系</strong>：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 定义修改数据和触发数据的映射关系</span></span>
<span class="line"><span>const triggerTypeMap = {</span></span>
<span class="line"><span>  [TriggerOpTypes.SET]: [TrackOpTypes.GET],</span></span>
<span class="line"><span>  [TriggerOpTypes.ADD]: [</span></span>
<span class="line"><span>    TrackOpTypes.GET,</span></span>
<span class="line"><span>    TrackOpTypes.ITERATE,</span></span>
<span class="line"><span>    TrackOpTypes.HAS,</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  [TriggerOpTypes.DELETE]: [</span></span>
<span class="line"><span>    TrackOpTypes.GET,</span></span>
<span class="line"><span>    TrackOpTypes.ITERATE,</span></span>
<span class="line"><span>    TrackOpTypes.HAS,</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们前面在建立映射关系的时候，是根据具体的获取信息的行为来建立的映射关系，那么我们获取信息的行为有：</p><ul><li>GET</li><li>HAS</li><li>ITERATE</li></ul><p>这些都是在获取成员信息，而依赖函数就是和这些获取信息的行为进行映射的。</p><p>因此在进行设置操作的时候，需要思考一下当前的设置，会涉及到哪些获取成员的行为，然后才能找出该行为所对应的依赖函数。</p><p><strong>懒执行</strong></p><p>有些时候我们想要实现懒执行，也就是不想要传入 effect 的回调函数自动就执行一次，通过配置项来实现</p><p><strong>添加回调</strong></p><p>有些时候需要由用户来指定是否派发更新，支持用户传入一个回调函数，然后将要依赖的函数作为参数传递回给用户给的回调函数，由用户来决定如何处理。</p><hr><ul><li>EOF-</li></ul>`,46)]))}const d=s(p,[["render",l],["__file","Vue28.html.vue"]]),v=JSON.parse('{"path":"/Vue/Vue28.html","title":"实现响应式系统","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":4.35,"words":1305},"filePathRelative":"Vue/Vue28.md"}');export{d as comp,v as data};
