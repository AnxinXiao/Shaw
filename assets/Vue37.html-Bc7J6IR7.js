import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as e,o as i}from"./app-_9vaDOHR.js";const l="/assets/image11-r6DjEA0o.png",p="/assets/image12-CfkdS1m0.png",d={};function c(v,s){return i(),a("div",null,s[0]||(s[0]=[e('<h1 id="keep-alive组件本质" tabindex="-1"><a class="header-anchor" href="#keep-alive组件本质"><span>keep-alive组件本质</span></a></h1><p><strong>keep-alive基本实现</strong></p><p>keep-alive 组件的实现<strong>需要渲染器层面的支持</strong>。当组件需要卸载的时候，不能真的卸载，否则就无法维持组件当前的状态了。</p><p>因此正确的做法是：将需要 keep-alive 的组件搬运到一个<strong>隐藏的容器</strong>里面，从而实现“假卸载”。</p><figure><img src="'+l+'" alt="keep-alive" tabindex="0" loading="lazy"><figcaption>keep-alive</figcaption></figure><p>当 keep-alive 的组件需要重新挂载的时候，也是直接从隐藏的容器里面再次搬运到原来的容器。</p><figure><img src="'+p+`" alt="keep-alive" tabindex="0" loading="lazy"><figcaption>keep-alive</figcaption></figure><p>这个过程其实就对应了组件的两个生命周期：</p><ul><li>activated</li><li>deactivated</li></ul><p>一个最基本的 keep-alive 组件，实现起来并不复杂，代码如下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const KeepAlive = {</span></span>
<span class="line"><span>  // 这是 keepalive 组件独有的属性，用于标识这是一个 keepalive 组件</span></span>
<span class="line"><span>  __isKeepAlive: true,</span></span>
<span class="line"><span>  setup(props, { slots }) {</span></span>
<span class="line"><span>    // 这是一个缓存对象</span></span>
<span class="line"><span>    // key：vnode.type</span></span>
<span class="line"><span>    // value: vnode</span></span>
<span class="line"><span>    const cache = new Map()</span></span>
<span class="line"><span>    // 存储当前 keepalive 组件的实例</span></span>
<span class="line"><span>    const instance = currentInstance;</span></span>
<span class="line"><span>    // 这里从组件实例上面解构出来两个方法，这两个方法实际上是由渲染器注入的</span></span>
<span class="line"><span>    const { move, createElement } = instance.keepAliveCtx;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 创建隐藏容器</span></span>
<span class="line"><span>    const storageContainer = createElement(&quot;div&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 这两个方法所做的事情，就是将组件从页面和隐藏容器之间进行移动</span></span>
<span class="line"><span>    // 这两个方法在渲染器中会被调用</span></span>
<span class="line"><span>    instance._deActivate = (vnode) =&gt; {</span></span>
<span class="line"><span>      move(vnode, storageContainer);</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>    instance._activate = (vnode, container, anchor) =&gt; {</span></span>
<span class="line"><span>      move(vnode, container, anchor);</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return () =&gt; {</span></span>
<span class="line"><span>      // 获取到默认插槽里面的内容</span></span>
<span class="line"><span>      let rawVNode = slots.default();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      // 如果不是对象，说明是非组件的虚拟节点，直接返回</span></span>
<span class="line"><span>      if (typeof rawVNode.type !== &quot;object&quot;) {</span></span>
<span class="line"><span>        return rawVNode;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      // 接下来我们从缓存里面找一下，看当前的组件是否存在于缓存里面</span></span>
<span class="line"><span>      const cachedVNode = cache.get(rawVNode.type);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      if (cachedVNode) {</span></span>
<span class="line"><span>        // 缓存中存在</span></span>
<span class="line"><span>        // 如果缓存中存在，直接使用缓存的组件实例</span></span>
<span class="line"><span>        rawVNode.component = cachedVNode.component;</span></span>
<span class="line"><span>        // 并且挂上一个 keptAlive 属性</span></span>
<span class="line"><span>        rawVNode.keptAlive = true;</span></span>
<span class="line"><span>      } else {</span></span>
<span class="line"><span>        // 缓存中不存在</span></span>
<span class="line"><span>        // 那么就添加到缓存里面，方便下次使用</span></span>
<span class="line"><span>        cache.set(rawVNode.type, rawVNode);</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      // 接下来又挂了一个 shouldKeepAlive 属性</span></span>
<span class="line"><span>      rawVNode.shouldKeepAlive = true;</span></span>
<span class="line"><span>      // 将 keepalive 组件实例也添加到 vnode 上面，后面在渲染器中有用</span></span>
<span class="line"><span>      rawVNode.keepAliveInstance = instance;</span></span>
<span class="line"><span>      return rawVNode;</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>keep-alive 和渲染器是结合得比较深的</strong>，keep-alive 组件<strong>本身并不会渲染额外的什么内容</strong>，它的渲染函数最终只返回需要被 keep-alive 的组件，这样的组件我们可以称之为“内部组件”。</p><p>keep-alive 组件会对这些组件添加一些标记属性，以便渲染器能够根据这些标记属性执行一些特定的逻辑：</p><ul><li>keptAlive：标识内部组件已经被缓存了，这样当内部组件需要重新渲染的时候，渲染器并不会重新挂载它，而是将其激活。</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 渲染器内部代码片段</span></span>
<span class="line"><span>function patch(n1, n2, container, anchor) {</span></span>
<span class="line"><span>  if (n1 &amp;&amp; n1.type !== n2.type) {</span></span>
<span class="line"><span>    unmount(n1);</span></span>
<span class="line"><span>    n1 = null;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const { type } = n2;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  if (typeof type === &quot;string&quot;) {</span></span>
<span class="line"><span>    // 省略部分代码</span></span>
<span class="line"><span>  } else if (type === Text) {</span></span>
<span class="line"><span>    // 省略部分代码</span></span>
<span class="line"><span>  } else if (type === Fragment) {</span></span>
<span class="line"><span>    // 省略部分代码</span></span>
<span class="line"><span>  } else if (typeof type === &quot;object&quot; || typeof type === &quot;function&quot;) {</span></span>
<span class="line"><span>    // component</span></span>
<span class="line"><span>    if (!n1) {</span></span>
<span class="line"><span>      // 如果该组件已经被 KeepAlive，则不会重新挂载它，而是会调用_activate 来激活它</span></span>
<span class="line"><span>      if (n2.keptAlive) {</span></span>
<span class="line"><span>        n2.keepAliveInstance._activate(n2, container, anchor);</span></span>
<span class="line"><span>      } else {</span></span>
<span class="line"><span>        mountComponent(n2, container, anchor);</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>      patchComponent(n1, n2, anchor);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>shouldKeepAlive：该属性会被添加到 vnode 上面，这样当渲染器卸载内部组件的时候，不会真正的去卸载，而是将其移动到隐藏的容器里面</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 渲染器代码片段</span></span>
<span class="line"><span>function unmount(vnode) {</span></span>
<span class="line"><span>  if (vnode.type === Fragment) {</span></span>
<span class="line"><span>    vnode.children.forEach((c) =&gt; unmount(c));</span></span>
<span class="line"><span>    return;</span></span>
<span class="line"><span>  } else if (typeof vnode.type === &quot;object&quot;) {</span></span>
<span class="line"><span>    // vnode.shouldKeepAlive 是一个布尔值，用来标识该组件是否应该 KeepAlive</span></span>
<span class="line"><span>    if (vnode.shouldKeepAlive) {</span></span>
<span class="line"><span>      // 对于需要被 KeepAlive 的组件，我们不应该真的卸载它，而应调该组件的父组件，</span></span>
<span class="line"><span>      // 即 KeepAlive 组件的 _deActivate 函数使其失活</span></span>
<span class="line"><span>      vnode.keepAliveInstance._deActivate(vnode);</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>      unmount(vnode.component.subTree);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  const parent = vnode.el.parentNode;</span></span>
<span class="line"><span>  if (parent) {</span></span>
<span class="line"><span>    parent.removeChild(vnode.el);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>keepAliveInstance：该属性让内部组件持有了 KeepAlive 的组件实例，回头在渲染器中的某些场景下可以通过该属性来访问 KeepAlive 组件实例上面的 _deActivate 以及 _activate。</li></ul><p><strong>include和exclude</strong></p><p>默认情况下，keep-alive 会对所有的“内部组件”进行缓存。</p><p>不过有些时候用户只期望缓存特定的组件，此时可以使用 include 和 exclude.</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;keep-alive include=&quot;TextInput,Counter&quot;&gt;</span></span>
<span class="line"><span>  &lt;component :is=&quot;Component&quot; /&gt;</span></span>
<span class="line"><span>&lt;/keep-alive&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因此 keep-alive 组件需要定义相关的 props：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const KeepAlive = {</span></span>
<span class="line"><span>  __isKeepAlive: true,</span></span>
<span class="line"><span>  props: {</span></span>
<span class="line"><span>    include: RegExp,</span></span>
<span class="line"><span>    exclude: RegExp</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  setup(props, { slots }) {</span></span>
<span class="line"><span>    // ...</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在进入缓存之前，我们需要对该组件是否匹配进行判断：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const KeepAlive = {</span></span>
<span class="line"><span>  __isKeepAlive: true,</span></span>
<span class="line"><span>  props: {</span></span>
<span class="line"><span>    include: RegExp,</span></span>
<span class="line"><span>    exclude: RegExp,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  setup(props, { slots }) {</span></span>
<span class="line"><span>    // 省略部分代码...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return () =&gt; {</span></span>
<span class="line"><span>      let rawVNode = slots.default();</span></span>
<span class="line"><span>      if (typeof rawVNode.type !== &quot;object&quot;) {</span></span>
<span class="line"><span>        return rawVNode;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      const name = rawVNode.type.name;</span></span>
<span class="line"><span>      if (</span></span>
<span class="line"><span>        name &amp;&amp;</span></span>
<span class="line"><span>        ((props.include &amp;&amp; !props.include.test(name)) ||</span></span>
<span class="line"><span>          (props.exclude &amp;&amp; props.exclude.test(name)))</span></span>
<span class="line"><span>      ) {</span></span>
<span class="line"><span>        return rawVNode;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      // 进入缓存的逻辑...</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>缓存管理</strong></p><p>目前为止的缓存实现如下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const cachedVNode = cache.get(rawVNode.type);</span></span>
<span class="line"><span>if (cachedVNode) {</span></span>
<span class="line"><span>  rawVNode.component = cachedVNode.component;</span></span>
<span class="line"><span>  rawVNode.keptAlive = true;</span></span>
<span class="line"><span>} else {</span></span>
<span class="line"><span>  cache.set(rawVNode.type, rawVNode);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>目前缓存的设计，只要缓存不存在，总是会设置新的缓存。这会导致缓存不断的增加，极端情况下会占用大量的内容。</p><p>为了解决这个问题，keep-alive 组件允许用户设置缓存的阀值，当组件缓存数量超过了指定阀值时会对缓存进行修剪</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;keep-alive :max=&quot;3&quot;&gt;</span></span>
<span class="line"><span>  &lt;component :is=&quot;Component&quot; /&gt;</span></span>
<span class="line"><span>&lt;/keep-alive&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因此在设计 keep-alive 组件的时候，新增一个 max 的 props：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const KeepAlive = {</span></span>
<span class="line"><span>  __isKeepAlive: true,</span></span>
<span class="line"><span>  props: {</span></span>
<span class="line"><span>    include: RegExp,</span></span>
<span class="line"><span>    exclude: RegExp,</span></span>
<span class="line"><span>    max: Number</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  setup(props, { slots }) {</span></span>
<span class="line"><span>    // ...</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来需要有一个能够修剪缓存的方法：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>function pruneCacheEntry(key: CacheKey) {</span></span>
<span class="line"><span>  const cached = cache.get(key) as VNode</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 中间逻辑略...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  cache.delete(key)</span></span>
<span class="line"><span>  keys.delete(key)</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后是更新缓存的队列：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const cachedVNode = cache.get(key)</span></span>
<span class="line"><span>if (cachedVNode) {</span></span>
<span class="line"><span>  // 其他逻辑略...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 进入此分支，说明缓存队列里面有，有的话就更新一下顺序</span></span>
<span class="line"><span>  // 保证当前这个在缓存中是最新的</span></span>
<span class="line"><span>  // 先删除，再添加即可</span></span>
<span class="line"><span>  keys.delete(key)</span></span>
<span class="line"><span>  keys.add(key)</span></span>
<span class="line"><span>} else {</span></span>
<span class="line"><span>  // 说明缓存中没有，说明是全新的，先添加再修剪</span></span>
<span class="line"><span>  keys.add(key)</span></span>
<span class="line"><span>  if (max &amp;&amp; keys.size &gt; parseInt(max as string, 10)) {</span></span>
<span class="line"><span>    // 进入此分支，说明当前添加进去的组件缓存已经超过了最大值，进行删除</span></span>
<span class="line"><span>    pruneCacheEntry(keys.values().next().value)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>keep-alive 核心原理就是将内部组件搬运到隐藏容器，以及从隐藏容器搬运回来。因为没有涉及到真正的卸载，所以组件状态也得以保留。</li><li>keep-alive 和渲染器是结合得比较深的，keep-alive 会给内部组件添加一些特殊的标识，这些标识就是给渲染器的用，回头渲染器在挂载和卸载组件的时候，会根据这些标识执行特定的操作。</li><li>include 和 exclude 核心原理就是对内部组件进行一个匹配操作，匹配上了再进入后面的缓存逻辑</li><li>max：添加之前看一下缓存里面有没有缓存过该组件 <ul><li>缓存过：更新到队列最后</li><li>没有缓存过：加入到缓存里面，但是要看一下有没有超过最大值，超过了就需要进行修剪。</li></ul></li></ul>`,39)]))}const u=n(d,[["render",c],["__file","Vue37.html.vue"]]),m=JSON.parse('{"path":"/Vue/Vue37.html","title":"keep-alive组件本质","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":5.85,"words":1754},"filePathRelative":"Vue/Vue37.md"}');export{u as comp,m as data};
