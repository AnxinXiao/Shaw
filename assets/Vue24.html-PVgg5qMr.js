import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as e,o as i}from"./app-_9vaDOHR.js";const l={};function p(d,s){return i(),a("div",null,s[0]||(s[0]=[e(`<h1 id="数据拦截的本质" tabindex="-1"><a class="header-anchor" href="#数据拦截的本质"><span>数据拦截的本质</span></a></h1><h2 id="数据拦截的方式" tabindex="-1"><a class="header-anchor" href="#数据拦截的方式"><span><strong>数据拦截的方式</strong></span></a></h2><p><strong>什么是拦截？</strong></p><p>你想像一下你在路上开着车，从地点 A 前往地点 B. 本来能够一路畅通无阻，顺顺利利的到达地点 B，但是因为你路上不小心违反了交规，例如不小心开着远光灯一路前行，此时就会被警察拦截下来，对你进行批评教育加罚款。（满满的血泪史😢）</p><p>这就是现实生活中的拦截，<strong>在你做一件事情的中途将你打断，从而能够做一些额外的事情</strong>。</p><p><strong>数据拦截</strong></p><p>所谓数据拦截，无外乎就是你在对数据进行操作，例如读数据、写数据的时候</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const obj = {name : &quot;张三&quot;};</span></span>
<span class="line"><span>obj.name; // 正常读数据，直接就读了</span></span>
<span class="line"><span>obj.name = &quot;李四&quot;; // 正常写数据，直接就写了</span></span>
<span class="line"><span>obj.age = 18;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们需要<strong>一种机制，在读写操作的中途进行一个打断，从而方便做一些额外的事情</strong>。这种机制我们就称之为数据拦截。</p><p>这种拦截打断的场景其实有很多，比如 Vue 或者 React 里面的生命周期钩子方法，这种钩子方法本质上也是一种拦截，在组件从初始化到正常渲染的时间线里，设置了几个拦截点，从而方便开发者做一些额外的事情。</p><p><strong>JS中的数据拦截</strong></p><p>接下来我们来看一下 JS 中能够实现数据拦截的方式有哪些？</p><p>目前来讲，主要的方式有两种：</p><ol><li>Object.defineProperty：对应 Vue1.x、2.x 响应式</li><li>Proxy：对应 Vue3.x 响应式</li></ol><p>简单复习一下这两个 API.</p><ol><li>Object.defineProperty</li></ol><p>这是 Object 上面的一个静态方法，用于<strong>给一个对象添加新的属性</strong>，除此之外<strong>还能够对该属性进行更为详细的配置</strong>。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Object.defineProperty(obj, prop, descriptor)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>obj ：要定义属性的对象</li><li>prop：一个字符串或 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol" target="_blank" rel="noopener noreferrer"><code>Symbol</code></a>，指定了要定义或修改的属性键。</li><li>descriptor：属性描述符。</li></ul><p>重点其实是在属性描述符，这个参数是一个对象，可以描述的信息有：</p><ul><li>value 设置属性值，默认值为 undefined.</li><li>writable 设置属性值是否可写，默认值为 false.</li><li>enumerable 设置属性是否可枚举，默认为 false.</li><li>configurable 是否可以配置该属性，默认值为 false. 这里的配置主要是针对这么一些点： <ul><li>该属性的类型是否能在数据属性和访问器属性之间更改</li><li>该属性是否能删除</li><li>描述符的其他属性是否能被更改</li></ul></li><li>get 取值函数，默认为 undefined.</li><li>set 存值函数，默认为 undefined</li></ul><p>数据属性：value、writable</p><p>访问器属性：getter、setter</p><p>数据属性和访问器属性默认是互斥。</p><p>也就是说，默认情况下，使用 Object.defineProperty( ) 添加的属性是不可写、不可枚举和不可配置的。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>function Student() {</span></span>
<span class="line"><span>  let stuName = &quot;张三&quot;;</span></span>
<span class="line"><span>  Object.defineProperty(this, &quot;name&quot;, {</span></span>
<span class="line"><span>    get() {</span></span>
<span class="line"><span>      return stuName;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    set(value) {</span></span>
<span class="line"><span>      if (!isNaN(value)) {</span></span>
<span class="line"><span>        stuName = &quot;张三&quot;;</span></span>
<span class="line"><span>      } else {</span></span>
<span class="line"><span>        stuName = value;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>const stu = new Student();</span></span>
<span class="line"><span>console.log(stu.name);</span></span>
<span class="line"><span>stu.name = &quot;李四&quot;;</span></span>
<span class="line"><span>console.log(stu.name);</span></span>
<span class="line"><span>stu.name = 100;</span></span>
<span class="line"><span>console.log(stu.name);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>Proxy</li></ol><p>另外一种方式是使用 Proxy. 这是 ES6 新提供的一个 API，通过<strong>创建代理对象的方式来实现拦截</strong>。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const p = new Proxy(target, handler)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>target : 目标对象，可以是任何类型的对象，包括数组，函数。</li><li>handler: 定义代理对象的行为。</li><li>返回值：返回的就是一个代理对象，之后外部对属性的读写都是针对代理对象来做的</li></ul><p>!<a href="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2024-03-27-071734.png" target="_blank" rel="noopener noreferrer">https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2024-03-27-071734.png</a></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>function Student() {</span></span>
<span class="line"><span>  const obj = {</span></span>
<span class="line"><span>    name: &quot;张三&quot;,</span></span>
<span class="line"><span>  };</span></span>
<span class="line"><span>  return new Proxy(obj, {</span></span>
<span class="line"><span>    get(obj, prop) {</span></span>
<span class="line"><span>      return obj[prop] + &quot;是个好学生&quot;;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    set(obj, prop, value) {</span></span>
<span class="line"><span>      if (!isNaN(value)) {</span></span>
<span class="line"><span>        obj[prop] = &quot;张三&quot;;</span></span>
<span class="line"><span>      } else {</span></span>
<span class="line"><span>        obj[prop] = value;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>const stu = new Student(); // stu 拿到的就是代理对象</span></span>
<span class="line"><span>console.log(stu.name); // 张三是个好学生</span></span>
<span class="line"><span>stu.name = &quot;李四&quot;;</span></span>
<span class="line"><span>console.log(stu.name); // 李四是个好学生</span></span>
<span class="line"><span>stu.name = 100;</span></span>
<span class="line"><span>console.log(stu.name); // 张三是个好学生</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="两者共同点" tabindex="-1"><a class="header-anchor" href="#两者共同点"><span><strong>两者共同点</strong></span></a></h2><p><strong>1. 都可以针对对象成员拦截</strong></p><p>无论使用哪一种方式，都能拦截读取操作</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const obj = {};</span></span>
<span class="line"><span>let _data = &quot;这是一些数据&quot;;</span></span>
<span class="line"><span>Object.defineProperty(obj, &quot;data&quot;, {</span></span>
<span class="line"><span>  get() {</span></span>
<span class="line"><span>    console.log(&quot;读取data的操作被拦截了&quot;);</span></span>
<span class="line"><span>    return _data;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>console.log(obj.data);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const obj = {</span></span>
<span class="line"><span>  data: &quot;这是一些数据&quot;,</span></span>
<span class="line"><span>  name: &quot;张三&quot;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>const p = new Proxy(obj, {</span></span>
<span class="line"><span>  get(obj, prop) {</span></span>
<span class="line"><span>    console.log(\`\${prop}的读取操作被拦截了\`);</span></span>
<span class="line"><span>    return obj[prop];</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>console.log(p.data);</span></span>
<span class="line"><span>console.log(p.name);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>两者都可以拦截写入操作：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const obj = {};</span></span>
<span class="line"><span>let _data = &quot;这是一些数据&quot;;</span></span>
<span class="line"><span>Object.defineProperty(obj, &quot;data&quot;, {</span></span>
<span class="line"><span>  get() {</span></span>
<span class="line"><span>    console.log(&quot;读取data的操作被拦截了&quot;);</span></span>
<span class="line"><span>    return _data;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  set(value){</span></span>
<span class="line"><span>    console.log(&quot;设置data的操作被拦截了&quot;);</span></span>
<span class="line"><span>    _data = value;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>obj.data = &quot;这是新的数据&quot;;</span></span>
<span class="line"><span>console.log(obj.data);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const obj = {</span></span>
<span class="line"><span>  data: &quot;这是一些数据&quot;,</span></span>
<span class="line"><span>  name: &quot;张三&quot;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>const p = new Proxy(obj, {</span></span>
<span class="line"><span>  get(obj, prop) {</span></span>
<span class="line"><span>    console.log(\`\${prop}的读取操作被拦截了\`);</span></span>
<span class="line"><span>    return obj[prop];</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  set(obj, prop, value) {</span></span>
<span class="line"><span>    // 前面相当于是拦截下这个操作后，我们要做的额外的操作</span></span>
<span class="line"><span>    console.log(\`\${prop}的设置操作被拦截了\`);</span></span>
<span class="line"><span>    // 后面就是真实的操作</span></span>
<span class="line"><span>    obj[prop] = value;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span>p.data = &quot;这是新的数据&quot;;</span></span>
<span class="line"><span>p.name = &quot;李四&quot;;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2. 都可以实现深度拦截</strong></p><p>两者在实现深度拦截的时候，需要自己书写递归来实现，但是总而言之是能够实现深度拦截的。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const data = {</span></span>
<span class="line"><span>  level1: {</span></span>
<span class="line"><span>    level2: {</span></span>
<span class="line"><span>      value: 100,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function deepDefineProperty(obj) {</span></span>
<span class="line"><span>  for (let key in obj) {</span></span>
<span class="line"><span>    // 首先判断是否是自身属性以及是否为对象</span></span>
<span class="line"><span>    if (obj.hasOwnProperty(key) &amp;&amp; typeof obj[key] === &quot;object&quot;) {</span></span>
<span class="line"><span>      // 递归处理</span></span>
<span class="line"><span>      deepDefineProperty(obj[key]);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 缓存一下属性值</span></span>
<span class="line"><span>    let _value = obj[key];</span></span>
<span class="line"><span>    Object.defineProperty(obj, key, {</span></span>
<span class="line"><span>      get() {</span></span>
<span class="line"><span>        console.log(\`读取\${key}属性\`);</span></span>
<span class="line"><span>        return _value;</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      set(value) {</span></span>
<span class="line"><span>        console.log(\`设置\${key}属性\`);</span></span>
<span class="line"><span>        _value = value;</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      configurable: true,</span></span>
<span class="line"><span>      enumerable: true,</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>deepDefineProperty(data);</span></span>
<span class="line"><span>console.log(data.level1.level2.value);</span></span>
<span class="line"><span>console.log(&quot;----------------&quot;);</span></span>
<span class="line"><span>data.level1.level2.value = 200;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>function deepProxy(obj) {</span></span>
<span class="line"><span>  return new Proxy(obj, {</span></span>
<span class="line"><span>    get(obj, prop) {</span></span>
<span class="line"><span>      console.log(\`读取了\${prop}属性\`);</span></span>
<span class="line"><span>      if (typeof obj[prop] === &quot;object&quot;) {</span></span>
<span class="line"><span>        // 递归的再次进行代理</span></span>
<span class="line"><span>        return deepProxy(obj[prop]);</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      return obj[prop];</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    set(obj, prop, value) {</span></span>
<span class="line"><span>      console.log(\`设置了\${prop}属性\`);</span></span>
<span class="line"><span>      if (typeof value === &quot;object&quot;) {</span></span>
<span class="line"><span>        return deepProxy(value);</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      obj[prop] = value;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>const proxyData = deepProxy(data);</span></span>
<span class="line"><span>console.log(proxyData.level1.level2.value);</span></span>
<span class="line"><span>console.log(&quot;----------------&quot;);</span></span>
<span class="line"><span>proxyData.level1.level2.value = 200;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="两者差异点" tabindex="-1"><a class="header-anchor" href="#两者差异点"><span><strong>两者差异点</strong></span></a></h2><p><strong>1. 拦截的广度</strong></p><p>Vue3 的响应式，从原本的 Object.defineProperty 替换为了 Proxy.</p><p>之所以替换，就是因为<strong>两者在进行拦截的时候，无论是拦截的目标还是能够拦截的行为，都是不同的</strong>：</p><ul><li>Object.defineProperty 是<strong>针对对象特定属性</strong>的<strong>读写操作</strong>进行拦截</li><li>Proxy 则是<strong>针对一整个对象</strong>的<strong>多种操作</strong>，包括<strong>属性的读取、赋值、属性的删除、属性描述符的获取和设置、原型的查看、函数调用等行为</strong>能够进行拦截。</li></ul><p>如果是使用 Object.defineProperty ，一旦后期给对象新增属性，是无法拦截到的，因为 Object.defineProperty 在设置拦截的时候是针对的特定属性，所以新增的属性无法被拦截。</p><p>但是 Proxy 就不一样，它是针对整个对象，后期哪怕新增属性也能够被拦截到。</p><p>另外，相比 Object.defineProperty，Proxy 能够拦截的行为也更多</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>function deepProxy(obj) {</span></span>
<span class="line"><span>  return new Proxy(obj, {</span></span>
<span class="line"><span>    get(obj, prop) {</span></span>
<span class="line"><span>      console.log(\`读取了\${prop}属性\`);</span></span>
<span class="line"><span>      if (typeof obj[prop] === &quot;object&quot;) {</span></span>
<span class="line"><span>        // 递归的再次进行代理</span></span>
<span class="line"><span>        return deepProxy(obj[prop]);</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      return obj[prop];</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    set(obj, prop, value) {</span></span>
<span class="line"><span>      console.log(\`设置了\${prop}属性\`);</span></span>
<span class="line"><span>      if (typeof value === &quot;object&quot;) {</span></span>
<span class="line"><span>        return deepProxy(value);</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      obj[prop] = value;</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    deleteProperty(obj, prop) {</span></span>
<span class="line"><span>      console.log(\`删除了\${prop}属性\`);</span></span>
<span class="line"><span>      delete obj[prop];</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    getPrototypeOf(obj) {</span></span>
<span class="line"><span>      console.log(&quot;拦截获取原型&quot;);</span></span>
<span class="line"><span>      return Object.getPrototypeOf(obj);</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    setPrototypeOf(obj, proto) {</span></span>
<span class="line"><span>      console.log(&quot;拦截设置原型&quot;);</span></span>
<span class="line"><span>      return Object.setPrototypeOf(obj, proto);</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>理解了上面的差异点之后，你就能够完全理解 Vue2 的响应式会有什么样的缺陷：</p><p>!<a href="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2024-05-17-025746.png" target="_blank" rel="noopener noreferrer">https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2024-05-17-025746.png</a></p><p><strong>2. 性能上的区别</strong></p><p>接下来是性能方面的区别，究竟哪种方式的性能更高呢？</p><p><strong>大多数情况下，Proxy 是高效的</strong>，但是不能完全断定 Proxy 就一定比 Object.defineProperty 效率高，因为这还是得看具体的场景。</p><p>如果你<strong>需要拦截的操作类型较少，且主要集中在某些特定属性上，那么 Object.defineProperty 可能提供更好的性能</strong>。</p><ul><li>但是只针对某个特定属性的拦截场景较少，一般都是需要针对一个对象的所有属性进行拦截</li><li>此时如果需要拦截的对象结构复杂（如需要递归到嵌套对象）或者需要拦截的操作种类繁多，那么使用这种方式就会变得复杂且效率低下。</li></ul><p>如果你需要全面地拦截对象的各种操作，那么 Proxy 能提供更强大和灵活的拦截能力，尽管可能有一些轻微的性能开销。</p><hr><ul><li>EOF-</li></ul>`,63)]))}const t=n(l,[["render",p],["__file","Vue24.html.vue"]]),o=JSON.parse('{"path":"/Vue/Vue24.html","title":"数据拦截的本质","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"数据拦截的方式","slug":"数据拦截的方式","link":"#数据拦截的方式","children":[]},{"level":2,"title":"两者共同点","slug":"两者共同点","link":"#两者共同点","children":[]},{"level":2,"title":"两者差异点","slug":"两者差异点","link":"#两者差异点","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":6.97,"words":2090},"filePathRelative":"Vue/Vue24.md"}');export{t as comp,o as data};
