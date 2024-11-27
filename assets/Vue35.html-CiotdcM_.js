import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as e,o as i}from"./app-_9vaDOHR.js";const l="/assets/image10-DDBrGTS0.png",p={};function d(t,n){return i(),a("div",null,n[0]||(n[0]=[e('<h1 id="组件生命周期" tabindex="-1"><a class="header-anchor" href="#组件生命周期"><span>组件生命周期</span></a></h1><p>官方生命周期图：</p><figure><img src="'+l+`" alt="vue3生命周期" tabindex="0" loading="lazy"><figcaption>vue3生命周期</figcaption></figure><h2 id="完整生命周期" tabindex="-1"><a class="header-anchor" href="#完整生命周期"><span><strong>完整生命周期</strong></span></a></h2><p>这里分为这么几个大的阶段：</p><ol><li>初始化选项式 API</li><li>模板编译</li><li>初始化渲染</li><li>更新组件</li><li>销毁组件</li></ol><p><strong>1. 初始化选项式API</strong></p><p>当渲染器遇到一个组件的时候，首先是<strong>初始化选项式 API</strong>，这里在内部<strong>还会涉及到组件实例对象的创建</strong>。</p><p>在组件实例对象创建的前后，就对应着一组生命周期钩子函数：</p><ul><li>组件实例创建前：setup、beforeCreate</li><li>组件实例创建后：created</li></ul><p><strong>2. 模板编译</strong></p><p>接下来会进入模板编译的阶段，当模板编译的工作结束后，会执行 beforeMount 钩子函数。</p><p><strong>3. 初始化渲染</strong></p><p>接下来是初始化渲染，到了这个阶段，意味着已经生成了真实的 DOM. 完成初始化渲染后会执行 mounted 生命周期方法。</p><p><strong>4. 更新组件</strong></p><p>更新组件时对应着一组生命周期钩子方法：</p><ul><li>更新前：beforeUpdate</li><li>更新后：updated</li></ul><p><strong>5. 销毁组件</strong></p><p>销毁组件时也对应一组生命周期钩子方法：</p><ul><li>销毁前：beforeUnmount</li><li>销毁后：unmounted</li></ul><p>一般在销毁组件时我们会做一些清理工作，例如清除计时器等操作。</p><p>另外需要注意在 Vue3 中生命周期的钩子函数的名字和上面所介绍的生命周期稍微有一些区别：</p><table><thead><tr><th><strong>生命周期名称</strong></th><th><strong>Vue2</strong></th><th><strong>Vue3</strong></th></tr></thead><tbody><tr><td>beforeCreate 阶段</td><td>beforeCreate</td><td>setup</td></tr><tr><td>created 阶段</td><td>created</td><td>setup</td></tr><tr><td>beforeMount 阶段</td><td>beforeMount</td><td>onBeforeMount</td></tr><tr><td>mounted 阶段</td><td>mounted</td><td>onMounted</td></tr><tr><td>beforeUpdate 阶段</td><td>beforeUpdate</td><td>onBeforeUpdate</td></tr><tr><td>updated 阶段</td><td>updated</td><td>onUpdated</td></tr><tr><td>beforeUnmount 阶段</td><td>beforeDestroy</td><td>onBeforeUnmount</td></tr><tr><td>unmounted 阶段</td><td>destoryed</td><td>onUnmounted</td></tr></tbody></table><p>Vue2 和 Vue3 的生命周期钩子方法是可以共存的，这意味着你在一个组件中可以写 mounted 和 onMounted，Vue3 的生命周期钩子函数的执行时机会比 Vue2 对应的生命周期钩子函数要早一些，不过一般没人会这么写。</p><h2 id="生命周期的本质" tabindex="-1"><a class="header-anchor" href="#生命周期的本质"><span><strong>生命周期的本质</strong></span></a></h2><p><strong>所谓生命周期，其实就是在合适的时机调用用户所设置的回调函数</strong>。</p><p>首先需要了解组件实例和组件挂载。假设用户书写了这么一个组件：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>export default {</span></span>
<span class="line"><span>  name: &#39;UserCard&#39;,</span></span>
<span class="line"><span>  props: {</span></span>
<span class="line"><span>    name: String,</span></span>
<span class="line"><span>    email: String,</span></span>
<span class="line"><span>    avatarUrl: String</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  data(){</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      foo: 1</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  mounted() {</span></span>
<span class="line"><span>    // ...</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  render() {</span></span>
<span class="line"><span>    return h(&#39;div&#39;, { class: styles.userCard }, [</span></span>
<span class="line"><span>      h(&#39;img&#39;, {</span></span>
<span class="line"><span>        class: styles.avatar,</span></span>
<span class="line"><span>        src: this.avatarUrl,</span></span>
<span class="line"><span>        alt: &#39;User avatar&#39;</span></span>
<span class="line"><span>      }),</span></span>
<span class="line"><span>      h(&#39;div&#39;, { class: styles.userInfo }, [h(&#39;h2&#39;, this.name), h(&#39;p&#39;, this.email)])</span></span>
<span class="line"><span>    ])</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么这些内容实际上是一个<strong>选项对象</strong>，回头在渲染这个组件的时候，某些信息是会被挂到组件实例上面的。<strong>组件实例本质就是一个对象，该对象维护着组件运行过程中的所有信息</strong>，例如：</p><ul><li>注册到组件的生命周期钩子函数</li><li>组件渲染的子树</li><li>组件是否已经被挂载</li><li>组件自身的状态</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>function mountComponent(vnode, container, anchor) {</span></span>
<span class="line"><span>  // 获取选项对象</span></span>
<span class="line"><span>  const componentOptions = vnode.type;</span></span>
<span class="line"><span>  // 从选项对象上面提取出 render 以及 data</span></span>
<span class="line"><span>  const { render, data } = componentOptions;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 创建响应式数据</span></span>
<span class="line"><span>  const state = reactive(data());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 定义组件实例，一个组件实例本质上就是一个对象，它包含与组件有关的状态信息</span></span>
<span class="line"><span>  const instance = {</span></span>
<span class="line"><span>    // 组件自身的状态数据，即 data</span></span>
<span class="line"><span>    state,</span></span>
<span class="line"><span>    // 一个布尔值，用来表示组件是否已经被挂载，初始值为 false</span></span>
<span class="line"><span>    isMounted: false,</span></span>
<span class="line"><span>    // 组件所渲染的内容，即子树（subTree）</span></span>
<span class="line"><span>    subTree: null,</span></span>
<span class="line"><span>  };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 将组件实例设置到 vnode 上，用于后续更新</span></span>
<span class="line"><span>  vnode.component = instance;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 后面逻辑略...</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是组件挂载：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>function mountComponent(vnode, container, anchor) {</span></span>
<span class="line"><span>  // 前面逻辑略...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  effect(</span></span>
<span class="line"><span>    () =&gt; {</span></span>
<span class="line"><span>      // 调用组件的渲染函数，获得子树</span></span>
<span class="line"><span>      const subTree = render.call(state, state);</span></span>
<span class="line"><span>      // 检查组件是否已经被挂载</span></span>
<span class="line"><span>      if (!instance.isMounted) {</span></span>
<span class="line"><span>        // 初次挂载，调用 patch 函数第一个参数传递 null</span></span>
<span class="line"><span>        patch(null, subTree, container, anchor);</span></span>
<span class="line"><span>        // 重点：将组件实例的 isMounted 设置为 true，这样当更新发生时就不会再次进行挂载操作，</span></span>
<span class="line"><span>        // 而是会执行更新</span></span>
<span class="line"><span>        instance.isMounted = true;</span></span>
<span class="line"><span>      } else {</span></span>
<span class="line"><span>        // 当 isMounted 为 true 时，说明组件已经被挂载，只需要完成自更新即可，</span></span>
<span class="line"><span>        // 所以在调用 patch 函数时，第一个参数为组件上一次渲染的子树，</span></span>
<span class="line"><span>        // 意思是，使用新的子树与上一次渲染的子树进行打补丁操作</span></span>
<span class="line"><span>        patch(instance.subTree, subTree, container, anchor);</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      // 更新组件实例的子树</span></span>
<span class="line"><span>      instance.subTree = subTree;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    { scheduler: queueJob }</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其核心就是根据组件实例的 isMounted 属性来判断该组件是否是初次挂载：</p><ul><li>初次挂载：patch 的第一个参数为 null；会设置组件实例 isMounted 为 true</li><li>非初次挂载：更新组件的逻辑，patch 的第一个参数是组件上一次渲染的子树，从而和新的子树进行 diff 计算</li></ul><p><strong>所谓生命周期，就是在合适的时机执行用户传入的回调函数</strong>。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>function mountComponent(vnode, container, anchor) {</span></span>
<span class="line"><span>  const componentOptions = vnode.type;</span></span>
<span class="line"><span>  // 从组件选项对象中取得组件的生命周期函数</span></span>
<span class="line"><span>  const {</span></span>
<span class="line"><span>    render,</span></span>
<span class="line"><span>    data,</span></span>
<span class="line"><span>    beforeCreate,</span></span>
<span class="line"><span>    created,</span></span>
<span class="line"><span>    beforeMount,</span></span>
<span class="line"><span>    mounted,</span></span>
<span class="line"><span>    beforeUpdate,</span></span>
<span class="line"><span>    updated,</span></span>
<span class="line"><span>  } = componentOptions;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 拿到生命周期钩子函数之后，就会在下面的流程中对应的位置调用这些钩子函数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 在这里调用 beforeCreate 钩子</span></span>
<span class="line"><span>  beforeCreate &amp;&amp; beforeCreate();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const state = reactive(data());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const instance = {</span></span>
<span class="line"><span>    state,</span></span>
<span class="line"><span>    isMounted: false,</span></span>
<span class="line"><span>    subTree: null,</span></span>
<span class="line"><span>  };</span></span>
<span class="line"><span>  vnode.component = instance;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 组件实例已经创建</span></span>
<span class="line"><span>  // 此时在这里调用 created 钩子</span></span>
<span class="line"><span>  created &amp;&amp; created.call(state);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  effect(</span></span>
<span class="line"><span>    () =&gt; {</span></span>
<span class="line"><span>      const subTree = render.call(state, state);</span></span>
<span class="line"><span>      if (!instance.isMounted) {</span></span>
<span class="line"><span>        // 在这里调用 beforeMount 钩子</span></span>
<span class="line"><span>        beforeMount &amp;&amp; beforeMount.call(state);</span></span>
<span class="line"><span>        patch(null, subTree, container, anchor);</span></span>
<span class="line"><span>        instance.isMounted = true;</span></span>
<span class="line"><span>        // 在这里调用 mounted 钩子</span></span>
<span class="line"><span>        mounted &amp;&amp; mounted.call(state);</span></span>
<span class="line"><span>      } else {</span></span>
<span class="line"><span>        // 在这里调用 beforeUpdate 钩子</span></span>
<span class="line"><span>        beforeUpdate &amp;&amp; beforeUpdate.call(state);</span></span>
<span class="line"><span>        patch(instance.subTree, subTree, container, anchor);</span></span>
<span class="line"><span>        // 在这里调用 updated 钩子</span></span>
<span class="line"><span>        updated &amp;&amp; updated.call(state);</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      instance.subTree = subTree;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    { scheduler: queueJob }</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的代码中，首先从组件的选项对象中获取到注册到组件上面的生命周期函数，然后内部会在合适的时机调用它们。</p><h2 id="嵌套结构下的生命周期" tabindex="-1"><a class="header-anchor" href="#嵌套结构下的生命周期"><span><strong>嵌套结构下的生命周期</strong></span></a></h2><p>组件之间是可以进行嵌套的，从而形成一个组件树结构。那么当遇到多组件嵌套的时候，各个组件的生命周期是如何运行的呢？</p><p>实际上非常简单，就是一个递归的过程。</p><p>假设 A 组件下面嵌套了 B 组件，那么渲染 A 的时候会执行 A 的 onBeforeMount，然后是 B 组件的 onBeforeMount，然后 B 正常挂载，执行 B 组件的 mounted，B 渲染完成后，接下来才是 A 的 mounted.</p><ol><li>组件 A：onBeforeMount</li><li>组件 B：onBeforeMount</li><li>组件 B：mounted</li><li>组件 A：mounted</li></ol><p>倘若涉及到组件的销毁，也同样是递归的逻辑。</p><hr><ul><li>EOF-</li></ul>`,46)]))}const v=s(p,[["render",d],["__file","Vue35.html.vue"]]),u=JSON.parse('{"path":"/Vue/Vue35.html","title":"组件生命周期","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"完整生命周期","slug":"完整生命周期","link":"#完整生命周期","children":[]},{"level":2,"title":"生命周期的本质","slug":"生命周期的本质","link":"#生命周期的本质","children":[]},{"level":2,"title":"嵌套结构下的生命周期","slug":"嵌套结构下的生命周期","link":"#嵌套结构下的生命周期","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":5.47,"words":1642},"filePathRelative":"Vue/Vue35.md"}');export{v as comp,u as data};
