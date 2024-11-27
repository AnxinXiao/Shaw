import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as d,a as t,o as r}from"./app-_9vaDOHR.js";const i={};function a(l,e){return r(),d("div",null,e[0]||(e[0]=[t('<h1 id="promise" tabindex="-1"><a class="header-anchor" href="#promise"><span>Promise</span></a></h1><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank" rel="noopener noreferrer">Promise - JavaScript | MDN</a></p><h2 id="_1-术语" tabindex="-1"><a class="header-anchor" href="#_1-术语"><span>1.术语</span></a></h2><p><code>promise</code>是一个有<code>then</code> 方法的对象或者是函数</p><p><code>thenable</code>是一个有<code>then</code> 方法的对象或者是函数</p><p><code>value</code> 是<code>promise</code>状态成功时的值，也就是<code>resolve</code> 的参数，表示结果的数据</p><p><code>exception</code>是一个使用<code>throw</code>抛出的异常值</p><p><code>reason</code>是表示承诺被拒绝的原因的值</p><h2 id="_2-要求" tabindex="-1"><a class="header-anchor" href="#_2-要求"><span>2.要求</span></a></h2><h3 id="_2-1-promise状态" tabindex="-1"><a class="header-anchor" href="#_2-1-promise状态"><span>2.1.promise状态</span></a></h3><p><code>promise</code>必须处于以下三种状态之一：<code>pedding</code>(待定)，<code>fulfiled</code>（已完成）或<code>rejected</code> (已拒绝)。</p><figure><img src="https://prod-files-secure.s3.us-west-2.amazonaws.com/0a22064a-9355-4b63-8e5e-c72c52f98054/bd65e145-8941-4c0a-984f-4cf5cc7f37ed/image.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><ul><li>当处于<code>pedding</code>时，<code>promise</code>：</li></ul><p>可能会转变为<code>fulfiled</code>或<code>rejected</code>。</p><ul><li>当<code>promise</code>实现时：</li></ul><p>它的状态就不能再改变。</p><p>必须有一个<code>value</code>，并且该<code>value</code>不能改变。</p><ul><li>当被<code>rejected</code>时，<code>promise</code>：</li></ul><p>它的状态就不能再改变。</p><p>必有其<code>reason</code>，且该<code>reason</code>不可改变。</p><p>这里的“不能再改变”是指不可变的身份（即<code>===</code>），但并不意味着深层的不变性。</p><figure><img src="https://prod-files-secure.s3.us-west-2.amazonaws.com/0a22064a-9355-4b63-8e5e-c72c52f98054/e091a27a-3684-4cf8-aa38-d898d06fa311/image.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><ul><li>可以针对任务进行后续处理，完成状态的后续处理称为 <code>onFulfilled</code>，而失败状态的后续处理称为 <code>onRejected</code>。这两个参数都是函数类型，并会在 Promise 变为 <code>fulfilled</code> 或 <code>rejected</code> 状态时被调用。</li></ul><figure><img src="https://prod-files-secure.s3.us-west-2.amazonaws.com/0a22064a-9355-4b63-8e5e-c72c52f98054/c7c2b01f-6583-4a93-ab42-080d6d617aa1/image.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><h3 id="_2-2-then" tabindex="-1"><a class="header-anchor" href="#_2-2-then"><span>2.2.then</span></a></h3><p><code>promise</code>必须提供一种<code>then</code>方法来访问其当前或最终的<code>value</code>或<code>reason</code>。</p><div class="language-jsx line-numbers-mode" data-highlighter="shiki" data-ext="jsx" data-title="jsx" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">promise</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">then</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">onFulfilled</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">onRejected</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol><li><code>onFulfilled</code>和都是<code>onRejected</code>可选参数 <ol><li>如果<code>onFulfilled</code>不是一个函数，则必须将其忽略。</li><li>如果<code>onRejected</code>不是一个函数，则必须将其忽略。</li></ol></li><li>如果<code>onFulfilled</code>是一个函数 <ol><li><code>promise</code>它必须<code>fulfilled</code>后被调用，并以<code>promise</code>的<code>value</code>作为其第一个参数。</li><li><code>promise</code>在<code>fulfilled</code>之前不能调用它。</li><li>它不能被调用多次。</li></ol></li><li>如果<code>onRejected</code>是一个函数 <ol><li><code>promise</code>它必须在被<code>onRejected</code>后被调用，并以<code>promise</code>的<code>reason</code>作为其第一个参数。</li><li><code>promise</code>在被<code>onRejected</code>之前一定不能调用它。</li><li>它不能被调用多次。</li></ol></li><li><code>onFulfilled</code> 和 <code>onRejected</code> 必须在执行上下文栈为空时调用，这意味着它们应该在下一个事件循环中执行。</li><li>then 方法必须返回一个新的 Promise</li></ol><h1 id="promise的静态方法" tabindex="-1"><a class="header-anchor" href="#promise的静态方法"><span><strong>Promise的静态方法</strong></span></a></h1><table><thead><tr><th><strong>方法名</strong></th><th><strong>含义</strong></th></tr></thead><tbody><tr><td><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve" target="_blank" rel="noopener noreferrer">Promise.resolve(data)</a></td><td>直接返回一个完成状态的任务</td></tr><tr><td><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject" target="_blank" rel="noopener noreferrer">Promise.reject(reason)</a></td><td>直接返回一个拒绝状态的任务</td></tr><tr><td><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/all" target="_blank" rel="noopener noreferrer">Promise.all(任务数组)</a></td><td>返回一个任务</td></tr><tr><td>任务数组全部成功则成功</td><td></td></tr><tr><td>任何一个失败则失败</td><td></td></tr><tr><td><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/any" target="_blank" rel="noopener noreferrer">Promise.any(任务数组)</a></td><td>返回一个任务</td></tr><tr><td>任务数组任一成功则成功</td><td></td></tr><tr><td>任务全部失败则失败</td><td></td></tr><tr><td><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled" target="_blank" rel="noopener noreferrer">Promise.allSettled(任务数组)</a></td><td>返回一个任务</td></tr><tr><td>任务数组全部已决则成功</td><td></td></tr><tr><td>该任务不会失败</td><td></td></tr><tr><td><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/race" target="_blank" rel="noopener noreferrer">Promise.race(任务数组)</a></td><td>返回一个任务</td></tr><tr><td>任务数组任一已决则已决，状态和其一致</td><td></td></tr><tr><td></td><td></td></tr></tbody></table>',30)]))}const n=o(i,[["render",a],["__file","JavaScript06.html.vue"]]),p=JSON.parse('{"path":"/JavaScript/JavaScript06.html","title":"Promise","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"1.术语","slug":"_1-术语","link":"#_1-术语","children":[]},{"level":2,"title":"2.要求","slug":"_2-要求","link":"#_2-要求","children":[{"level":3,"title":"2.1.promise状态","slug":"_2-1-promise状态","link":"#_2-1-promise状态","children":[]},{"level":3,"title":"2.2.then","slug":"_2-2-then","link":"#_2-2-then","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":2.47,"words":740},"filePathRelative":"JavaScript/JavaScript06.md"}');export{n as comp,p as data};
