import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as e,o as i}from"./app-_9vaDOHR.js";const l={};function p(t,s){return i(),a("div",null,s[0]||(s[0]=[e(`<h1 id="虚拟dom本质" tabindex="-1"><a class="header-anchor" href="#虚拟dom本质"><span>虚拟DOM本质</span></a></h1><ul><li>DOM工作原理</li><li>虚拟DOM本质</li><li>为什么要需要虚拟DOM</li></ul><h2 id="dom工作原理" tabindex="-1"><a class="header-anchor" href="#dom工作原理"><span><strong>DOM工作原理</strong></span></a></h2><p>大家思考一个问题：我们写的代码是 JS 代码，但是浏览器引擎是 C++ 写的</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const div = document.createElement(&quot;div&quot;);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>浏览器引擎（C++）拿到你这个 JS 代码是如何处理的？</p><p>这里介绍一个东西：Web Interface Definition Language，WebIDL，翻译成中文“Web接口定义语言”。这里就是定义浏览器和 JS 之间如何进行通信，换句话说，浏览器（C++实现的）所提供的一些功能（本地功能）如何能够被 JS 调用。</p><p>通过 WebIDL，<strong>浏览器开发者</strong> 可以描述哪些类和方法能够被 JS 访问，以及这些方法应该如何映射到 JS 中的对象和方法。</p><p>假设现在有如下的 WebIDL 定义，用于创建 DOM 元素：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>interface Document {</span></span>
<span class="line"><span>    Element createElement(DOMString localName);</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里就定义了一个 Document 的接口，该接口内部有一个 createElement，用来创建 DOM 元素的。</p><p>接下来 <strong>浏览器开发者</strong> 接下来使用 C++ 来实现这个接口：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>class Document {</span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span>    // 实现了上面的接口，定义了具体如何来创建 DOM 元素</span></span>
<span class="line"><span>    Element* createElement(const std::string&amp; tagName) {</span></span>
<span class="line"><span>        return new Element(tagName);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来的步骤非常重要，需要生成绑定代码（绑定层），绑定了 JS 如何调用这个 C++ 方法：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 这个绑定代码是由 WebIDL 编译器自动生成</span></span>
<span class="line"><span>// 这就是 JS 到 C++ 的绑定</span></span>
<span class="line"><span>// 换句话说，这段绑定代码决定了 JS 开发者可以调用哪些方法从而来调用上面的 C++ 方法</span></span>
<span class="line"><span>void Document_createElement(const v8::FunctionCallbackInfo&lt;v8::Value&gt;&amp; args) {</span></span>
<span class="line"><span>    v8::Isolate* isolate = args.GetIsolate();</span></span>
<span class="line"><span>    v8::HandleScope handle_scope(isolate);</span></span>
<span class="line"><span>    Document* document = Unwrap&lt;Document&gt;(args.Holder());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    v8::String::Utf8Value utf8_value(isolate, args[0]);</span></span>
<span class="line"><span>    std::string localName(*utf8_value);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    Element* element = document-&gt;createElement(localName);</span></span>
<span class="line"><span>    v8::Local&lt;v8::Value&gt; result = WrapElement(isolate, element);</span></span>
<span class="line"><span>    args.GetReturnValue().Set(result);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有了绑定代码之后，接下来需要在 JS 引擎里面注册：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 将上面的绑定代码注册到 JS 引擎里面</span></span>
<span class="line"><span>void RegisterDocument(v8::Local&lt;v8::Object&gt; global, v8::Isolate* isolate) {</span></span>
<span class="line"><span>    v8::Local&lt;v8::FunctionTemplate&gt; tmpl = v8::FunctionTemplate::New(isolate);</span></span>
<span class="line"><span>    tmpl-&gt;InstanceTemplate()-&gt;Set(isolate, &quot;createElement&quot;, Document_createElement);</span></span>
<span class="line"><span>    global-&gt;Set(v8::String::NewFromUtf8(isolate, &quot;Document&quot;), tmpl-&gt;GetFunction());</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Web 开发者</strong>在进行开发的时候，可以在 JS 文件中书写如下的代码：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const i = 1;</span></span>
<span class="line"><span>document.createElement(&quot;div&quot;);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>首先是 JS 引擎来执行 JS 代码，第一句是 JS 引擎完全能搞定的。第二句 JS 引擎发现你要创建 DOM 节点，会将其识别为一个 API 调用，然后向浏览器底层（渲染引擎）发出请求，由浏览器底层（渲染引擎）负责来创建这个 DOM 元素。浏览器底层创建完 DOM 元素之后，还需要给你最初的调用端返回一个结果，所谓最初的调用端，也就是 JS 代码中调用 DOM API 的地方。</p><p>如下图所示：</p><p>!<a href="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2024-04-29-075748.png" target="_blank" rel="noopener noreferrer">https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2024-04-29-075748.png</a></p><p>平时我们所指的真实 DOM，究竟是在指什么？</p><p>指的就是浏览器底层已经调用过 C++ 对应的 API 了</p><p>假设你在 JS 层面</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>document.appendChild(&quot;div&quot;);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>那么浏览器底层在调用对应的 C++ 代码的时候，还会涉及到浏览器重新渲染的相关内容，这又是一个很大的话题。</p><h2 id="虚拟dom本质-1" tabindex="-1"><a class="header-anchor" href="#虚拟dom本质-1"><span><strong>虚拟DOM本质</strong></span></a></h2><p>最初虚拟 DOM 是由 React 团队提出的：</p><blockquote><p>虚拟 DOM 是一种编程概念。在这个概念里， UI 以一种理想化的，或者说“虚拟的”表现形式被保存于内存中。</p></blockquote><p>理论上来讲，无论你用什么样的结构，只要你将文档的结构能够展示出来，你的这种结构就是一种虚拟 DOM. 虽然理论是美好的，但实际上也只有 JS 对象适合干这个事情。</p><p>在 Vue 中，可以通过一个名叫 h 的函数，该函数的调用结果就是返回虚拟 DOM.</p><p>文档地址：<a href="https://cn.vuejs.org/api/render-function.html#h" target="_blank" rel="noopener noreferrer">https://cn.vuejs.org/api/render-function.html#h</a></p><p>下面是一个简单的示例：</p><p>父组件 App.vue</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;app-container&quot;&gt;</span></span>
<span class="line"><span>    &lt;h1&gt;这是App组件&lt;/h1&gt;</span></span>
<span class="line"><span>    &lt;Child name=&quot;李四&quot; email=&quot;123@qq.com&quot; /&gt;</span></span>
<span class="line"><span>    &lt;component :is=&quot;vnode&quot; /&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { h } from &#39;vue&#39;</span></span>
<span class="line"><span>import Child from &#39;@/components/Child.vue&#39;</span></span>
<span class="line"><span>const vnode = h(Child, {</span></span>
<span class="line"><span>  name: &#39;李四&#39;,</span></span>
<span class="line"><span>  email: &#39;123@qq.com&#39;</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>console.log(&#39;vnode:&#39;, vnode)</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>.app-container {</span></span>
<span class="line"><span>  width: 400px;</span></span>
<span class="line"><span>  border: 1px solid;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>子组件 Child.vue</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;child-container&quot;&gt;</span></span>
<span class="line"><span>    &lt;h3&gt;这是子组件&lt;/h3&gt;</span></span>
<span class="line"><span>    &lt;p&gt;姓名：{{ name }}&lt;/p&gt;</span></span>
<span class="line"><span>    &lt;p&gt;email：{{ email }}&lt;/p&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>defineProps({</span></span>
<span class="line"><span>  name: String,</span></span>
<span class="line"><span>  email: String</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>.child-container {</span></span>
<span class="line"><span>  width: 200px;</span></span>
<span class="line"><span>  height: 200px;</span></span>
<span class="line"><span>  border: 1px solid;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过上面的例子，我们可以得出一个结论：虚拟 DOM 的本质就是普通的 JS 对象。</p><h2 id="为什么需要使用虚拟dom" tabindex="-1"><a class="header-anchor" href="#为什么需要使用虚拟dom"><span><strong>为什么需要使用虚拟DOM</strong></span></a></h2><p>先来回顾早期的开发模式。</p><p>在最早期的时候，前端是通过手动操作 DOM 节点来编写代码的。</p><p>创建节点：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 创建一个新的&lt;div&gt;元素</span></span>
<span class="line"><span>var newDiv = document.createElement(&quot;div&quot;);</span></span>
<span class="line"><span>// 给这个新的&lt;div&gt;添加一些文本内容</span></span>
<span class="line"><span>var newContent = document.createTextNode(&quot;Hello, World!&quot;);</span></span>
<span class="line"><span>// 把文本内容添加到&lt;div&gt;中</span></span>
<span class="line"><span>newDiv.appendChild(newContent);</span></span>
<span class="line"><span>// 最后，把这个新的&lt;div&gt;添加到body中</span></span>
<span class="line"><span>document.body.appendChild(newDiv);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更新节点：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 假设我们有一个已存在的元素ID为&#39;myElement&#39;</span></span>
<span class="line"><span>var existingElement = document.getElementById(&quot;myElement&quot;);</span></span>
<span class="line"><span>// 更新文本内容</span></span>
<span class="line"><span>existingElement.textContent = &quot;Updated content here!&quot;;</span></span>
<span class="line"><span>// 更新属性，例如改变样式</span></span>
<span class="line"><span>existingElement.style.color = &quot;red&quot;;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>删除节点：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 假设我们要删除ID为&#39;myElement&#39;的元素</span></span>
<span class="line"><span>var elementToRemove = document.getElementById(&quot;myElement&quot;);</span></span>
<span class="line"><span>// 获取父节点</span></span>
<span class="line"><span>var parent = elementToRemove.parentNode;</span></span>
<span class="line"><span>// 从父节点中移除这个元素</span></span>
<span class="line"><span>parent.removeChild(elementToRemove);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>插入节点：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 创建新节点</span></span>
<span class="line"><span>var newNode = document.createElement(&quot;div&quot;);</span></span>
<span class="line"><span>newNode.textContent = &quot;这是新的文本内容&quot;;</span></span>
<span class="line"><span>// 假设我们想把这个新节点插入到id为&#39;myElement&#39;的元素前面</span></span>
<span class="line"><span>var referenceNode = document.getElementById(&quot;myElement&quot;);</span></span>
<span class="line"><span>referenceNode.parentNode.insertBefore(newNode, referenceNode);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码，如果从编程范式的角度来看，是属于 <strong>命令式编程</strong>，这种命令式编程的性能一定是最高的。</p><p>这意味着，假如你要创建一个 div 的 DOM 节点，没有什么比 document.createElement(&quot;div&quot;) 这句代码的性能还要高。</p><p>虽然上面的方式是性能最高的，但是在实际开发中，开发者往往倾向于更加方便的方式。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span>  &lt;!-- 需求：往这个节点内部添加一些其他的节点 --&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果是采用传统的操作 DOM 节点的方式：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 获取app节点</span></span>
<span class="line"><span>var app = document.getElementById(&quot;app&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 创建外层div</span></span>
<span class="line"><span>var messageDiv = document.createElement(&quot;div&quot;);</span></span>
<span class="line"><span>messageDiv.className = &quot;message&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 创建info子div</span></span>
<span class="line"><span>var infoDiv = document.createElement(&quot;div&quot;);</span></span>
<span class="line"><span>infoDiv.className = &quot;info&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 创建span元素并添加到infoDiv</span></span>
<span class="line"><span>var nameSpan = document.createElement(&quot;span&quot;);</span></span>
<span class="line"><span>nameSpan.textContent = &quot;张三&quot;;</span></span>
<span class="line"><span>infoDiv.appendChild(nameSpan);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var dateSpan = document.createElement(&quot;span&quot;);</span></span>
<span class="line"><span>dateSpan.textContent = &quot;2024.5.6&quot;;</span></span>
<span class="line"><span>infoDiv.appendChild(dateSpan);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 将infoDiv添加到messageDiv</span></span>
<span class="line"><span>messageDiv.appendChild(infoDiv);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 创建并添加&lt;p&gt;</span></span>
<span class="line"><span>var p = document.createElement(&quot;p&quot;);</span></span>
<span class="line"><span>p.textContent = &quot;这是一堂讲解虚拟DOM的课&quot;;</span></span>
<span class="line"><span>messageDiv.appendChild(p);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 创建btn子div</span></span>
<span class="line"><span>var btnDiv = document.createElement(&quot;div&quot;);</span></span>
<span class="line"><span>btnDiv.className = &quot;btn&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 创建a元素并添加到btnDiv</span></span>
<span class="line"><span>var removeBtn = document.createElement(&quot;a&quot;);</span></span>
<span class="line"><span>removeBtn.href = &quot;#&quot;;</span></span>
<span class="line"><span>removeBtn.className = &quot;removeBtn&quot;;</span></span>
<span class="line"><span>removeBtn.setAttribute(&quot;_id&quot;, &quot;1&quot;);</span></span>
<span class="line"><span>removeBtn.textContent = &quot;删除&quot;;</span></span>
<span class="line"><span>btnDiv.appendChild(removeBtn);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 将btnDiv添加到messageDiv</span></span>
<span class="line"><span>messageDiv.appendChild(btnDiv);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 将构建的messageDiv添加到app中</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果使用 innerHTML 的方式：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>var app = document.getElementById(&quot;app&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.innerHTML += \`</span></span>
<span class="line"><span>  &lt;div class=&quot;message&quot;&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;info&quot;&gt;</span></span>
<span class="line"><span>      &lt;span&gt;张三&lt;/span&gt;</span></span>
<span class="line"><span>      &lt;span&gt;2024.5.6&lt;/span&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;p&gt;这是一堂讲解虚拟DOM的课&lt;/p&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;btn&quot;&gt;</span></span>
<span class="line"><span>      &lt;a href=&quot;#&quot; class=&quot;removeBtn&quot; _id=&quot;1&quot;&gt;删除&lt;/a&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;\`;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>虽然第一种方式性能最高，但是写起来 Web开发者 的心智负担也很高。</p><p>因此 Web开发者往往选择第二种，虽然性能要差一些，但是心智负担也没有那么高，写起来轻松一些。</p><p>为什么第二种性能要差一些？差在哪里？</p><p>原因很简单，第二种方式涉及到了两个层面的计算：</p><ol><li>解析字符串（JS层面）</li><li>创建对应的 DOM 节点（DOM 层面）</li></ol><p>实际上使用虚拟 DOM 也涉及到两个层面的计算：</p><ol><li>创建 JS 对象（虚拟DOM，属于 JS 层面）</li><li>根据 JS 对象创建对应的 DOM 节点（DOM 层面）</li></ol><p>这里我们不需要考虑同属于 JS 层面的计算，解析字符串和创建 JS 对象究竟谁快谁慢。只需要知道不同层面的计算，JS 层面的计算和 DOM 层面的计算，速度是完全不同的。</p><p>JS 层面创建 1千万个对象：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>console.time(&quot;time&quot;);</span></span>
<span class="line"><span>const arr = [];</span></span>
<span class="line"><span>for(let i=0;i&lt;10000000;i++){</span></span>
<span class="line"><span>  let div = {</span></span>
<span class="line"><span>    tag : &quot;div&quot;</span></span>
<span class="line"><span>  };</span></span>
<span class="line"><span>  arr.push(div);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.timeEnd(&quot;time&quot;);</span></span>
<span class="line"><span>// 平均在几百毫秒左右</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>DOM 层面创建 1千万个对象：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>console.time(&quot;time&quot;);</span></span>
<span class="line"><span>const arr = [];</span></span>
<span class="line"><span>for(let i=0;i&lt;10000000;i++){</span></span>
<span class="line"><span>  arr.push(document.createElement(&quot;div&quot;));</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>console.timeEnd(&quot;time&quot;);</span></span>
<span class="line"><span>// 平均在几千毫秒</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>到目前为止，我们完全了解了 JS 层面的计算和 DOM 层面的计算，速度完全不一样。</p><p>接下来我们来看一下虚拟 DOM 真实的解决的问题。</p><p>实际上无论使用虚拟 DOM 还是 innerHTML，在初始化的时候性能是相差无几的。虚拟 DOM 发挥威力的时候，实际上是在更新的时候。</p><p>来看一个例子：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;body&gt;</span></span>
<span class="line"><span>  &lt;button id=&quot;updateButton&quot;&gt;更新内容&lt;/button&gt;</span></span>
<span class="line"><span>  &lt;div id=&quot;content&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>  &lt;script src=&quot;script.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span>&lt;/body&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 通过 innerHTML 来更新 content 里面的内容</span></span>
<span class="line"><span>document.addEventListener(&quot;DOMContentLoaded&quot;, function () {</span></span>
<span class="line"><span>  const contentDiv = document.getElementById(&quot;content&quot;);</span></span>
<span class="line"><span>  const updateButton = document.getElementById(&quot;updateButton&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  updateButton.addEventListener(&quot;click&quot;, function () {</span></span>
<span class="line"><span>    const currentTime = new Date().toTimeString().split(&quot; &quot;)[0]; // 获取当前时间</span></span>
<span class="line"><span>    contentDiv.innerHTML = \`</span></span>
<span class="line"><span>        &lt;div class=&quot;message&quot;&gt;</span></span>
<span class="line"><span>            &lt;div class=&quot;info&quot;&gt;</span></span>
<span class="line"><span>                &lt;span&gt;张三&lt;/span&gt;</span></span>
<span class="line"><span>                &lt;span&gt;\${currentTime}&lt;/span&gt;</span></span>
<span class="line"><span>            &lt;/div&gt;</span></span>
<span class="line"><span>            &lt;p&gt;这是一堂讲解虚拟DOM的课&lt;/p&gt;</span></span>
<span class="line"><span>            &lt;div class=&quot;btn&quot;&gt;</span></span>
<span class="line"><span>                &lt;a href=&quot;#&quot; class=&quot;removeBtn&quot; _id=&quot;1&quot;&gt;删除&lt;/a&gt;</span></span>
<span class="line"><span>            &lt;/div&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;\`;</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的例子中，我们使用的是 innerHTML 来更新，这里涉及到的计算层面如下：</p><ol><li>销毁所有旧的 DOM（DOM 层面）</li><li>解析新的字符串（JS 层面）</li><li>重新创建所有 DOM 节点（DOM 层面）</li></ol><p>如果使用虚拟 DOM，那么只有两个层面的计算：</p><ol><li>使用 diff 计算出更新的节点（JS 层面）</li><li>更新必要的 DOM 节点（DOM 层面）</li></ol><p>因此，总结一下，平时所说的虚拟DOM“快”，是有前提的：</p><ul><li>首先看你和谁进行比较 <ul><li>如果是和原生 JS 操作 DOM 进行对比，那么虚拟 DOM 性能肯定更低而非更高，因为你多了一层计算</li></ul></li><li>其次就算你和 innerHTML 进行比较 <ul><li>初始化渲染的时候两者之间的差距并不大</li><li>虚拟 DOM 是在更新的时候相比 innerHTML 性能更高</li></ul></li></ul><p>最后总结一句话：使用虚拟 DOM 是为了防止组件在 <strong>重渲染</strong> 时导致的性能恶化。</p><p>接下来，关于虚拟 DOM 咱们进行一个更深层次思考，虚拟 DOM 还有哪些好处？</p><ol><li>跨平台性</li></ol><p>虚拟 DOM 实际上是增加一层抽象层，相当于和原本的底层操作 DOM 进行解藕。这个其实就是设计原则里面的依赖倒置原则：</p><blockquote><p>高层模块不应依赖于低层模块（实际的底层操作DOM）的实现细节，两者都应依赖于抽象（虚拟DOM层）</p></blockquote><p>加一层的好处在于，底层模块是可以随时替换的。使用抽象层（虚拟DOM层）来描述 UI 的结构，回头可以通过不同的渲染引擎来进行渲染，而不是局限于浏览器平台。</p><ol><li>框架更加灵活</li></ol><p>Reactv15 升级到 Reactv16 后，架构层面有了非常大的变化，从 Stack 架构升级到了 Fiber 架构，React 内部实际上发生了翻天覆地的变化，但是对开发者的入侵是极小的，开发者基本上感受不到变化，仍然可以使用以前的开发方式进行开发。</p><p>因为 React 有虚拟 DOM 这个中间层，就将开发者的代码和框架内部的架构解藕了。架构的变化只是依赖于不同的虚拟 DOM 而已，回头开发者的代码会被编译为对应结构的虚拟 DOM.</p><p>目前有一些新的框架：Svelte、Solid.js 这一类框架提出了无虚拟 DOM 的概念。这一类框架直接将组件编译为命令式代码，而不是在运行时通过比较虚拟 DOM 来更新真实 DOM. 因此这一类框架在 <strong>性能</strong> 方面一定是优于虚拟 DOM 类的框架的。</p><p>包括 Vue 目前也在积极推出无虚拟 DOM 版本，简称“蒸汽模式”：<a href="https://github.com/vuejs/core-vapor" target="_blank" rel="noopener noreferrer">https://github.com/vuejs/core-vapor</a></p><hr><ul><li>EOF-</li></ul>`,95)]))}const r=n(l,[["render",p],["__file","Vue21.html.vue"]]),v=JSON.parse('{"path":"/Vue/Vue21.html","title":"虚拟DOM本质","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"DOM工作原理","slug":"dom工作原理","link":"#dom工作原理","children":[]},{"level":2,"title":"虚拟DOM本质","slug":"虚拟dom本质-1","link":"#虚拟dom本质-1","children":[]},{"level":2,"title":"为什么需要使用虚拟DOM","slug":"为什么需要使用虚拟dom","link":"#为什么需要使用虚拟dom","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":9.95,"words":2985},"filePathRelative":"Vue/Vue21.md"}');export{r as comp,v as data};
