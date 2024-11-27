import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as e,o as i}from"./app-_9vaDOHR.js";const l={};function p(d,n){return i(),a("div",null,n[0]||(n[0]=[e(`<h1 id="key的本质" tabindex="-1"><a class="header-anchor" href="#key的本质"><span>key的本质</span></a></h1><p>在关系型数据库中，有一个 primary key 的概念，这个其实和这里的 key 有一定的相似性。</p><p>!<a href="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2024-05-25-100513.png" target="_blank" rel="noopener noreferrer">https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2024-05-25-100513.png</a></p><p>在关系型数据库中，<strong>primary key 用于标记这条数据的唯一性</strong>，因此在上表中只有 id 这个字段能够作为主键，另外 3 个字段都不行。</p><p>那么为什么需要对一条数据做唯一性标识呢？那就是<strong>方便精准的查找</strong>。这就好比现实生活中的身份证号，所有人都是独一无二的，你名字可能相同、年龄、性别这些都可能相同，而身份证号则是每个人的一个唯一标识，能够精准找到这个人。</p><p>Vue 中的 key，道理就是一样的，key 其实也是用来做唯一标识，谁的唯一标识呢，就是<strong>虚拟节点 VNode 的唯一标识</strong>。</p><p><strong>不采用复用策略</strong></p><p>假设更新前的虚拟 DOM 为：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const oldVNode = {</span></span>
<span class="line"><span>  type: &#39;div&#39;,</span></span>
<span class="line"><span>  children: [</span></span>
<span class="line"><span>    {type: &#39;p&#39;, children: &#39;1&#39;},</span></span>
<span class="line"><span>    {type: &#39;p&#39;, children: &#39;2&#39;},</span></span>
<span class="line"><span>    {type: &#39;p&#39;, children: &#39;3&#39;},</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;div&gt;</span></span>
<span class="line"><span>  &lt;p&gt;1&lt;/p&gt;</span></span>
<span class="line"><span>  &lt;p&gt;2&lt;/p&gt;</span></span>
<span class="line"><span>  &lt;p&gt;3&lt;/p&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更新后的虚拟 DOM 为：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const newVNode = {</span></span>
<span class="line"><span>  type: &#39;div&#39;,</span></span>
<span class="line"><span>  children: [</span></span>
<span class="line"><span>    {type: &#39;p&#39;, children: &#39;4&#39;},</span></span>
<span class="line"><span>    {type: &#39;p&#39;, children: &#39;5&#39;},</span></span>
<span class="line"><span>    {type: &#39;p&#39;, children: &#39;6&#39;},</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果完全不采用复用策略，那么当更新子节点的时候，需要执行 6 次 DOM 操作。</p><p>!<a href="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2024-05-26-151420.png" target="_blank" rel="noopener noreferrer">https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2024-05-26-151420.png</a></p><ul><li>卸载所有旧的子节点，需要 3 次 DOM 的删除操作</li><li>挂载所有新的子节点，需要 3 次 DOM 的添加操作</li></ul><p>通过观察我们发现，VNode 的变化，仅仅是 p 元素的子节点（文本节点）发生变化，p 元素本身其实没有任何的变化。因此最为理想的做法是更新这个 3 个 p 元素的文本节点内容，这样只会涉及到 3 次 DOM 操作，性能提升一倍。</p><p><strong>采用复用策略</strong></p><ol><li>先考虑更新前后长度不变、类型不变的情况</li></ol><p>这里可以写出如下的伪代码：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>function patchChildren(n1, n2, container){</span></span>
<span class="line"><span>  if(typeof n2.children === &#39;string&#39;){</span></span>
<span class="line"><span>    // 说明该节点的子节点就是文本节点</span></span>
<span class="line"><span>    // ...</span></span>
<span class="line"><span>  } else if(Array.isArray(n2.children)){</span></span>
<span class="line"><span>    // 说明该节点的子节点也是数组</span></span>
<span class="line"><span>    const oldChildren = n1.children; // 旧的子节点数组</span></span>
<span class="line"><span>    const newChildren = n2. children; // 新的子节点数组</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 目前假设长度没有变化</span></span>
<span class="line"><span>    for(let i = 0; i &lt; oldChildren.length; i++){</span></span>
<span class="line"><span>      // 对文本子节点进行更新</span></span>
<span class="line"><span>      patch(oldChildren[i], newChildren[i])</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  } else {</span></span>
<span class="line"><span>    // 其他情况</span></span>
<span class="line"><span>    // ...</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li><p>考虑长度发生变化的情况</p><ul><li>对于新节点更多的情况，那就需要<strong>挂载新的节点</strong></li></ul><p>!<a href="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2024-05-26-153701.png" target="_blank" rel="noopener noreferrer">https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2024-05-26-153701.png</a></p><ul><li>对于新节点变少的情况，那就需要<strong>卸载多余的旧节点</strong></li></ul><p>!<a href="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2024-05-26-153533.png" target="_blank" rel="noopener noreferrer">https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2024-05-26-153533.png</a></p></li></ol><p>因此我们的伪代码会发生一些变化：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>function patchChildren(n1, n2, container){</span></span>
<span class="line"><span>  if(typeof n2.children === &#39;string&#39;){</span></span>
<span class="line"><span>    // 说明该节点的子节点就是文本节点</span></span>
<span class="line"><span>    // ...</span></span>
<span class="line"><span>  } else if(Array.isArray(n2.children)){</span></span>
<span class="line"><span>    // 说明该节点的子节点也是数组</span></span>
<span class="line"><span>    const oldChildren = n1.children; // 旧的子节点数组</span></span>
<span class="line"><span>    const newChildren = n2. children; // 新的子节点数组</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 存储一下新旧节点的长度</span></span>
<span class="line"><span>    const oldLen = oldChildren.length; // 旧子节点数组长度</span></span>
<span class="line"><span>    const newLen = newChildren.length; // 新子节点数组长度</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 接下来先找这一组长度的公共值，也就是最小值</span></span>
<span class="line"><span>    const commonLength = Math.min(oldLen, newLen);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 先遍历最小值，把该处理的节点先跟新</span></span>
<span class="line"><span>    for(let i = 0; i &lt; commonLength; i++){</span></span>
<span class="line"><span>      // 对文本子节点进行更新</span></span>
<span class="line"><span>      patch(oldChildren[i], newChildren[i])</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 然后接下来处理长度不同的情况</span></span>
<span class="line"><span>    if(newLen &gt; oldLen){</span></span>
<span class="line"><span>      // 新节点多，那么就做新节点的挂载</span></span>
<span class="line"><span>      for(let i = commonLength; i &lt; newLen; i++){</span></span>
<span class="line"><span>        patch(null, newChildren[i], container);</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    } else if(oldLen &gt; newLen){</span></span>
<span class="line"><span>      // 旧节点多，做旧节点的卸载</span></span>
<span class="line"><span>      for(let i = commonLength; i &lt; oldLen; i++){</span></span>
<span class="line"><span>        unmount(oldChildren[i]);</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  } else {</span></span>
<span class="line"><span>    // 其他情况</span></span>
<span class="line"><span>    // ...</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>考虑类型发生变化</li></ol><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const oldVNode = {</span></span>
<span class="line"><span>  type: &#39;div&#39;,</span></span>
<span class="line"><span>  children: [</span></span>
<span class="line"><span>    {type: &#39;p&#39;, children: &#39;1&#39;},</span></span>
<span class="line"><span>    {type: &#39;div&#39;, children: &#39;2&#39;},</span></span>
<span class="line"><span>    {type: &#39;span&#39;, children: &#39;3&#39;},</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const newVNode = {</span></span>
<span class="line"><span>  type: &#39;div&#39;,</span></span>
<span class="line"><span>  children: [</span></span>
<span class="line"><span>    {type: &#39;span&#39;, children: &#39;3&#39;},</span></span>
<span class="line"><span>    {type: &#39;p&#39;, children: &#39;1&#39;},</span></span>
<span class="line"><span>    {type: &#39;div&#39;, children: &#39;2&#39;},</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>按照目前上面的设计，当遇到这种情况的时候，通通不能复用，又回到最初的情况，需要 6 次 DOM 的操作。</p><p>但是我们稍作观察，会发现上面的例子中仅仅是元素标签移动了位置，因此最理想的情况是移动 DOM 即可，这样也能达到对 DOM 节点的复用。</p><p>这里涉及到一个问题：如何确定是同一个类型能够复用的节点？</p><p>如果仅仅只是判断 VNode 的 type 值是否相同，这种方式并不可靠！</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const oldVNode = {</span></span>
<span class="line"><span>  type: &#39;div&#39;,</span></span>
<span class="line"><span>  children: [</span></span>
<span class="line"><span>    {type: &#39;p&#39;, children: &#39;3&#39;},</span></span>
<span class="line"><span>    {type: &#39;div&#39;, children: &#39;2&#39;},</span></span>
<span class="line"><span>    {type: &#39;p&#39;, children: &#39;1&#39;},</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const newVNode = {</span></span>
<span class="line"><span>  type: &#39;div&#39;,</span></span>
<span class="line"><span>  children: [</span></span>
<span class="line"><span>    {type: &#39;p&#39;, children: &#39;1&#39;},</span></span>
<span class="line"><span>    {type: &#39;p&#39;, children: &#39;3&#39;},</span></span>
<span class="line"><span>    {type: &#39;div&#39;, children: &#39;2&#39;},</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这种情况下，没有办法很好的有一个对应关系，因为有多种相同类型的节点。</p><p>!<a href="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2024-05-27-002244.png" target="_blank" rel="noopener noreferrer">https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2024-05-27-002244.png</a></p><p><strong>加入key标识</strong></p><p>key 相当于给每一个 VNode 一个身份证号，通过这个身份证号就可以找到唯一的那个 VNode，而非多个。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const oldVNode = {</span></span>
<span class="line"><span>  type: &#39;div&#39;,</span></span>
<span class="line"><span>  children: [</span></span>
<span class="line"><span>    {type: &#39;p&#39;, children: &#39;3&#39;, key: 1},</span></span>
<span class="line"><span>    {type: &#39;div&#39;, children: &#39;2&#39;, key: 2},</span></span>
<span class="line"><span>    {type: &#39;p&#39;, children: &#39;1&#39;, key: 3},</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const newVNode = {</span></span>
<span class="line"><span>  type: &#39;div&#39;,</span></span>
<span class="line"><span>  children: [</span></span>
<span class="line"><span>    {type: &#39;p&#39;, children: &#39;1&#39;, key: 3},</span></span>
<span class="line"><span>    {type: &#39;p&#39;, children: &#39;3&#39;, key: 1},</span></span>
<span class="line"><span>    {type: &#39;div&#39;, children: &#39;2&#39;, key: 2},</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>!<a href="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2024-05-27-002600.png" target="_blank" rel="noopener noreferrer">https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2024-05-27-002600.png</a></p><p>因此，在实际的判断中，如果 VNode 的 type 属性和 key 属性都相同，那么就说明是同一组映射，并且在新旧节点中都出现了，那么就可以进行 DOM 节点的复用。</p><blockquote><p>哪怕没有 key，我在旧节点中找到一个类型相同的，就复用该 DOM 节点，这样的设计不行么？</p></blockquote><p>实际上，在没有 key 的情况下，Vue 内部采用的就是这样的复用策略，这种策略在 Vue 中被称之为“就地更新”策略。这种策略默认是高效的，<strong>但是这种复用策略仅仅是保证 DOM 节点的类型对上了</strong>，如果节点本身还依赖<strong>子组件状态或者临时 DOM 状态</strong>，由于这种复用策略没有精准的对上号，因此会涉及到子组件状态或者临时 DOM 状态的还原。</p><p>举个例子，假设旧节点是三个男生，新节点也是三个男生</p><p>!<a href="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2024-05-27-010403.png" target="_blank" rel="noopener noreferrer">https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2024-05-27-010403.png</a></p><p>如果不考虑其他的因素，只考虑是否是男生，然后简单的把名字变一下，那么这种就地复用的策略是非常高效。</p><p>但是很多时候依赖子组件状态或者临时的 DOM 状态：</p><p>!<a href="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2024-05-27-011310.png" target="_blank" rel="noopener noreferrer">https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2024-05-27-011310.png</a></p><p>在这种情况下，就地复用的策略反而是低效的，因为涉及到子组件状态或者临时的 DOM 状态的恢复。</p><p>因此在这个时候，最好的方式就是加上 key，让新旧节点能够精准的对应上。</p><p>!<a href="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2024-05-27-011647.png" target="_blank" rel="noopener noreferrer">https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2024-05-27-011647.png</a></p><p>还有一点需要注意，那就是 <strong>避免使用下标来作为 key 值</strong>。使用下标作为 key 值时，如果列表中的元素顺序发生变化，Vue 会复用错误的元素，导致不必要的 DOM 更新和渲染错误。</p><p>例如，当你在列表中插入或删除元素时，使用下标会使得每个元素的 key 发生变化，导致 Vue 不能正确识别元素，从而导致状态和数据的不一致。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 初始状态</span></span>
<span class="line"><span>[{ id: 1, text: &#39;Item 1&#39; }, { id: 2, text: &#39;Item 2&#39; }, { id: 3, text: &#39;Item 3&#39; }]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 删除第二个元素后的状态</span></span>
<span class="line"><span>[{ id: 1, text: &#39;Item 1&#39; }, { id: 3, text: &#39;Item 3&#39; }]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这种情况下，如果使用下标作为 key 值，当删除第二个元素后，第三个元素的下标会从 2 变为 1，这会使 Vue 误以为原本的第三个元素和第二个元素是同一个，从而导致错误的更新。</p><p>key 本质上就是给 VNode 节点做唯一性标识，算是 VNode 的一个身份证号。</p><p>特别是在渲染列表时。key 的作用主要有以下几点：</p><ol><li><strong>高效的更新：</strong> key 帮助 Vue 识别哪些元素是变化的、哪些是新的、哪些是需要被移除的。 <ul><li>在没有 key 的情况下，Vue 会尽量复用已有元素，而不管它们的实际内容是否发生了变化，这可能导致不必要的更新或者错误的更新。</li><li>通过使用 key，Vue 可以准确地知道哪些元素发生了变化，从而高效地更新 DOM。</li></ul></li><li><strong>确保元素的唯一性：</strong> key 属性需要是唯一的，这样每个元素在列表中都可以被唯一标识。这避免了在元素移动、插入或删除时出现混淆，确保 Vue 可以正确地追踪每个元素。</li><li><strong>提升渲染性能：</strong> 使用 key 可以显著提升列表渲染的性能。因为 Vue 能通过 key 快速定位到需要更新的元素，而不是重新渲染整个列表。尤其在处理大型列表时，使用 key 可以避免大量不必要的 DOM 操作，提升应用的响应速度。</li></ol><hr><ul><li>EOF-</li></ul>`,59)]))}const t=s(l,[["render",p],["__file","Vue38.html.vue"]]),v=JSON.parse('{"path":"/Vue/Vue38.html","title":"key的本质","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":7.6,"words":2281},"filePathRelative":"Vue/Vue38.md"}');export{t as comp,v as data};
