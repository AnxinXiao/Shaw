import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as e,o as i}from"./app-_9vaDOHR.js";const l={};function p(t,s){return i(),a("div",null,s[0]||(s[0]=[e(`<h1 id="组件库介绍" tabindex="-1"><a class="header-anchor" href="#组件库介绍"><span>组件库介绍</span></a></h1><ul><li>函数</li><li>函数库</li><li>类</li><li>类库</li><li>模块</li><li>组件</li><li>组件库</li><li>框架</li><li>....</li></ul><p>这些东西看上去很多，但其实本质上就是代码复用的一种方式。</p><ol><li><p><strong>Vuetify</strong> - Vuetify 是一个广受欢迎的 Vue UI 组件库，提供了广泛的材料设计组件。它非常适合快速开发，拥有丰富的组件和详细的文档。</p><p>官网地址：<a href="https://vuetifyjs.com/en/" target="_blank" rel="noopener noreferrer">https://vuetifyjs.com/en/</a></p></li><li><p><strong>Element Plus</strong> - Element Plus 是 Element UI 的 Vue 3 版本，是一个面向企业级产品的组件库，它提供了一系列可配置的组件和丰富的 API。</p><p>官网地址：<a href="https://element-plus.org/" target="_blank" rel="noopener noreferrer">https://element-plus.org/</a></p></li><li><p><strong>PrimeVue</strong> - PrimeVue 是 PrimeFaces Team 针对 Vue 开发的组件库，它提供了丰富的组件和主题，适合用于各种商业应用。</p><p>官网地址：<a href="https://primevue.org/" target="_blank" rel="noopener noreferrer">https://primevue.org/</a></p></li><li><p><strong>Ant Design Vue</strong> - 这是 Ant Design 的 Vue 实现，特别适合用于企业级应用。它提供了丰富的 Vue 组件，是构建后台应用界面的理想选择。</p><p>官网地址：<a href="https://antdv.com/components/overview" target="_blank" rel="noopener noreferrer">https://antdv.com/components/overview</a></p></li><li><p><strong>Naive UI</strong> - 一个相对较新的 Vue 3 组件库，采用 TypeScript 编写，提供了一套完整的组件，以灵活性和轻量级著称，还被尤雨溪推荐过。</p><p>官网地址：<a href="https://www.naiveui.com/zh-CN/os-theme" target="_blank" rel="noopener noreferrer">https://www.naiveui.com/zh-CN/os-theme</a></p></li><li><p><strong>BootstrapVue</strong> - 尽管 BootstrapVue 最初是为 Vue 2 开发的，但社区已经在为支持 Vue 3 而努力。它将 Bootstrap 的功能与 Vue 的反应性相结合。</p><p>官网地址：<a href="https://bootstrap-vue.org/" target="_blank" rel="noopener noreferrer">https://bootstrap-vue.org/</a></p></li><li><p><strong>Vant</strong> - Vant 是一个轻量级、可靠的移动端 Vue 组件库，由有赞前端团队开发和维护。</p><p>官网地址：<a href="https://vant-ui.github.io/vant/#/en-US" target="_blank" rel="noopener noreferrer">https://vant-ui.github.io/vant/#/en-US</a></p></li></ol><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span><strong>安装</strong></span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>npm install element-plus --save</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>安装完毕后，接下来需要在 Vue 应用中挂载组件库。</p><p>挂载组件库分为两种形式：<strong>全量引入</strong> 和 <strong>按需引入</strong></p><p>全量引入：就是一次性引入整个组件库，配置也很简单，无需考虑哪些组件需要引入。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>import { createApp } from &#39;vue&#39;</span></span>
<span class="line"><span>import App from &#39;./App.vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 导入组件库</span></span>
<span class="line"><span>import ElementPlus from &#39;element-plus&#39;</span></span>
<span class="line"><span>// 导入组件库的样式</span></span>
<span class="line"><span>import &#39;element-plus/dist/index.css&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const app = createApp(App)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.use(ElementPlus).mount(&#39;#app&#39;)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>之后就可以在自己应用里面的任意组件中，使用组件库所提供的组件：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;el-button&gt;Default&lt;/el-button&gt;</span></span>
<span class="line"><span>&lt;el-button type=&quot;primary&quot;&gt;Primary&lt;/el-button&gt;</span></span>
<span class="line"><span>&lt;el-button type=&quot;success&quot;&gt;Success&lt;/el-button&gt;</span></span>
<span class="line"><span>&lt;el-button type=&quot;info&quot;&gt;Info&lt;/el-button&gt;</span></span>
<span class="line"><span>&lt;el-button type=&quot;warning&quot;&gt;Warning&lt;/el-button&gt;</span></span>
<span class="line"><span>&lt;el-button type=&quot;danger&quot;&gt;Danger&lt;/el-button&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果涉及到图标，那么需要额外安装图标相关的库：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>npm install @element-plus/icons-vue</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>安装完毕后，仍然是可以全量进行注册：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 导入组件库的图标</span></span>
<span class="line"><span>import * as ElementPlusIconsVue from &#39;@element-plus/icons-vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const app = createApp(App)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 挂载所有的图标</span></span>
<span class="line"><span>for (const [key, component] of Object.entries(ElementPlusIconsVue)) {</span></span>
<span class="line"><span>  app.component(key, component)</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还有一种方式，就是采用 <strong>按需引入</strong></p><ul><li>优化包的体积</li><li>性能更优</li></ul><p>目前有两个非常方便的插件，让我们彻底告别全量引入，哪怕是学习阶段也可以采用按需引入</p><ul><li>unplugin-vue-components：会自动扫描你的项目文件，找到使用的 Vue 组件，在打包的时候自动引入这些组件，无需手动的 import.</li><li>unplugin-auto-import：按需引入工具函数的插件，它可以自动引入 Vue 相关的工具函数（ref、computed），这些工具函数也就不需要再 import 了</li></ul><p>安装这两个插件：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>npm install -D unplugin-vue-components unplugin-auto-import</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>之后需要在 vite 的配置文件中引入这些插件：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>import AutoImport from &#39;unplugin-auto-import/vite&#39;</span></span>
<span class="line"><span>import Components from &#39;unplugin-vue-components/vite&#39;</span></span>
<span class="line"><span>import { ElementPlusResolver } from &#39;unplugin-vue-components/resolvers&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default defineConfig({</span></span>
<span class="line"><span>  // ...</span></span>
<span class="line"><span>  plugins: [</span></span>
<span class="line"><span>    // ...</span></span>
<span class="line"><span>    AutoImport({</span></span>
<span class="line"><span>      resolvers: [ElementPlusResolver()],</span></span>
<span class="line"><span>    }),</span></span>
<span class="line"><span>    Components({</span></span>
<span class="line"><span>      resolvers: [ElementPlusResolver()],</span></span>
<span class="line"><span>    }),</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>之后就不再需要在 Vue 应用中去挂载所有的组件了：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>import { createApp } from &#39;vue&#39;</span></span>
<span class="line"><span>import App from &#39;./App.vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const app = createApp(App)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.mount(&#39;#app&#39;)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>main.js 重新变得非常的干净了。</p><p>而且这种方式是按需引入，打包后的体积也非常小。</p><h2 id="快速上手" tabindex="-1"><a class="header-anchor" href="#快速上手"><span><strong>快速上手</strong></span></a></h2><p>下面是 ElementPlus 中一个关于表单的示例：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div class=&quot;form-container&quot;&gt;</span></span>
<span class="line"><span>    &lt;el-form :model=&quot;form&quot; :rules=&quot;rules&quot; ref=&quot;formRef&quot; label-width=&quot;100px&quot; class=&quot;user-form&quot;&gt;</span></span>
<span class="line"><span>      &lt;h2 class=&quot;form-title&quot;&gt;用户信息表单&lt;/h2&gt;</span></span>
<span class="line"><span>      &lt;!-- 姓名 --&gt;</span></span>
<span class="line"><span>      &lt;el-form-item label=&quot;姓名：&quot; prop=&quot;name&quot;&gt;</span></span>
<span class="line"><span>        &lt;el-input v-model=&quot;form.name&quot; /&gt;</span></span>
<span class="line"><span>      &lt;/el-form-item&gt;</span></span>
<span class="line"><span>      &lt;!-- 邮箱 --&gt;</span></span>
<span class="line"><span>      &lt;el-form-item label=&quot;邮箱：&quot; prop=&quot;email&quot;&gt;</span></span>
<span class="line"><span>        &lt;el-input v-model=&quot;form.email&quot;&gt;&lt;/el-input&gt;</span></span>
<span class="line"><span>      &lt;/el-form-item&gt;</span></span>
<span class="line"><span>      &lt;!-- 出生日期 --&gt;</span></span>
<span class="line"><span>      &lt;el-form-item label=&quot;出生日期：&quot; prop=&quot;birthday&quot;&gt;</span></span>
<span class="line"><span>        &lt;el-date-picker</span></span>
<span class="line"><span>          v-model=&quot;form.birthday&quot;</span></span>
<span class="line"><span>          type=&quot;date&quot;</span></span>
<span class="line"><span>          placeholder=&quot;选择日期&quot;</span></span>
<span class="line"><span>          :picker-options=&quot;{ firstDayOfWeek: 1 }&quot;</span></span>
<span class="line"><span>          style=&quot;width: 100%&quot;</span></span>
<span class="line"><span>        /&gt;</span></span>
<span class="line"><span>      &lt;/el-form-item&gt;</span></span>
<span class="line"><span>      &lt;!-- 性别 --&gt;</span></span>
<span class="line"><span>      &lt;el-form-item label=&quot;性别：&quot; prop=&quot;gender&quot;&gt;</span></span>
<span class="line"><span>        &lt;el-radio-group v-model=&quot;form.gender&quot;&gt;</span></span>
<span class="line"><span>          &lt;el-radio value=&quot;male&quot;&gt;男&lt;/el-radio&gt;</span></span>
<span class="line"><span>          &lt;el-radio value=&quot;female&quot;&gt;女&lt;/el-radio&gt;</span></span>
<span class="line"><span>        &lt;/el-radio-group&gt;</span></span>
<span class="line"><span>      &lt;/el-form-item&gt;</span></span>
<span class="line"><span>      &lt;!-- 兴趣爱好 --&gt;</span></span>
<span class="line"><span>      &lt;el-form-item label=&quot;兴趣爱好：&quot; prop=&quot;hobbies&quot;&gt;</span></span>
<span class="line"><span>        &lt;el-checkbox-group v-model=&quot;form.hobbies&quot;&gt;</span></span>
<span class="line"><span>          &lt;el-checkbox value=&quot;reading&quot; name=&quot;hobby&quot;&gt;阅读&lt;/el-checkbox&gt;</span></span>
<span class="line"><span>          &lt;el-checkbox value=&quot;music&quot; name=&quot;hobby&quot;&gt;音乐&lt;/el-checkbox&gt;</span></span>
<span class="line"><span>          &lt;el-checkbox value=&quot;sports&quot; name=&quot;hobby&quot;&gt;运动&lt;/el-checkbox&gt;</span></span>
<span class="line"><span>        &lt;/el-checkbox-group&gt;</span></span>
<span class="line"><span>      &lt;/el-form-item&gt;</span></span>
<span class="line"><span>      &lt;el-form-item label=&quot;接收通知：&quot; prop=&quot;notifications&quot;&gt;</span></span>
<span class="line"><span>        &lt;el-switch v-model=&quot;form.notifications&quot;&gt;&lt;/el-switch&gt;</span></span>
<span class="line"><span>      &lt;/el-form-item&gt;</span></span>
<span class="line"><span>      &lt;el-form-item label=&quot;用户评级：&quot; prop=&quot;rating&quot;&gt;</span></span>
<span class="line"><span>        &lt;el-rate v-model=&quot;form.rating&quot;&gt;&lt;/el-rate&gt;</span></span>
<span class="line"><span>      &lt;/el-form-item&gt;</span></span>
<span class="line"><span>      &lt;el-form-item&gt;</span></span>
<span class="line"><span>        &lt;el-button type=&quot;primary&quot; @click=&quot;submitForm&quot;&gt;提交&lt;/el-button&gt;</span></span>
<span class="line"><span>        &lt;el-button @click=&quot;resetForm&quot;&gt;重置&lt;/el-button&gt;</span></span>
<span class="line"><span>      &lt;/el-form-item&gt;</span></span>
<span class="line"><span>    &lt;/el-form&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span>const form = ref({</span></span>
<span class="line"><span>  name: &#39;&#39;,</span></span>
<span class="line"><span>  email: &#39;&#39;,</span></span>
<span class="line"><span>  birthday: &#39;&#39;,</span></span>
<span class="line"><span>  gender: &#39;male&#39;,</span></span>
<span class="line"><span>  hobbies: [],</span></span>
<span class="line"><span>  notifications: false,</span></span>
<span class="line"><span>  rating: 0</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const formRef = ref(null)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const rules = {</span></span>
<span class="line"><span>  // 验证规则是一个数组，因为可以设置多条验证规则</span></span>
<span class="line"><span>  // 每一条验证规则，是一个对象</span></span>
<span class="line"><span>  name: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      required: true,</span></span>
<span class="line"><span>      message: &#39;请输入姓名&#39;,</span></span>
<span class="line"><span>      trigger: &#39;blur&#39;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  email: [</span></span>
<span class="line"><span>    { required: true, message: &#39;请输入您的邮箱&#39;, trigger: &#39;blur&#39; },</span></span>
<span class="line"><span>    { type: &#39;email&#39;, message: &#39;请输入有效的邮箱地址&#39;, trigger: &#39;blur&#39; }</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  birthday: [{ required: true, message: &#39;请选择您的出生日期&#39;, trigger: &#39;change&#39; }],</span></span>
<span class="line"><span>  gender: [{ required: true, message: &#39;请选择您的性别&#39;, trigger: &#39;change&#39; }],</span></span>
<span class="line"><span>  hobbies: [{ required: true, message: &#39;至少选择一个兴趣爱好&#39;, trigger: &#39;change&#39; }],</span></span>
<span class="line"><span>  rating: [{ required: true, message: &#39;请评价用户等级&#39;, trigger: &#39;change&#39; }]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 提交表单</span></span>
<span class="line"><span>function submitForm() {</span></span>
<span class="line"><span>  // 提交表单的时候，需要看一下表单是否验证通过</span></span>
<span class="line"><span>  formRef.value.validate((valid) =&gt; {</span></span>
<span class="line"><span>    // 自动传入一个参数，这个参数是一个布尔值，代表表单是否验证通过</span></span>
<span class="line"><span>    if (valid) {</span></span>
<span class="line"><span>      // 验证通过</span></span>
<span class="line"><span>      console.log(&#39;表单验证通过&#39;)</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>      // 验证不通过</span></span>
<span class="line"><span>      console.log(&#39;表单验证不通过&#39;)</span></span>
<span class="line"><span>      return false</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>.form-container {</span></span>
<span class="line"><span>  display: flex;</span></span>
<span class="line"><span>  justify-content: center;</span></span>
<span class="line"><span>  align-items: center;</span></span>
<span class="line"><span>  min-height: 100vh;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.user-form {</span></span>
<span class="line"><span>  width: 600px;</span></span>
<span class="line"><span>  border: 1px solid #eee;</span></span>
<span class="line"><span>  padding: 20px;</span></span>
<span class="line"><span>  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>.form-title {</span></span>
<span class="line"><span>  text-align: center;</span></span>
<span class="line"><span>  margin-bottom: 20px;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="国际化" tabindex="-1"><a class="header-anchor" href="#国际化"><span><strong>国际化</strong></span></a></h2><p>在 ElementPlus 组件库中，默认采用的是英语。</p><p>如果想要使用其他的语言，那么同样是稍微配置一下就可以了</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>import { createApp } from &#39;vue&#39;</span></span>
<span class="line"><span>import App from &#39;./App.vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import ElementPlus from &#39;element-plus&#39;</span></span>
<span class="line"><span>import zhCn from &#39;element-plus/es/locale/lang/zh-cn&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const app = createApp(App)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app</span></span>
<span class="line"><span>  .use(ElementPlus, {</span></span>
<span class="line"><span>    locale: zhCn</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>  .mount(&#39;#app&#39;)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是上面的这种配置方式，就变成全量引入了，这意味着打包的时候，会将所有的组件都打包进去。</p><p>如果想要采用按需引入的方式，需要借助 ConfigProvider 组件</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>	&lt;ElConfigProvider :locale=&quot;locale&quot;&gt;</span></span>
<span class="line"><span>  	&lt;!-- 其他组件 --&gt;</span></span>
<span class="line"><span>	&lt;/ElConfigProvider&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ElConfigProvider } from &#39;element-plus&#39;</span></span>
<span class="line"><span>// 引入的是中文语言包</span></span>
<span class="line"><span>import zhCn from &#39;element-plus/es/locale/lang/zh-cn&#39;</span></span>
<span class="line"><span>const locale = ref(zhCn)</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><ul><li>EOF-</li></ul>`,40)]))}const c=n(l,[["render",p],["__file","Vue20.html.vue"]]),u=JSON.parse('{"path":"/Vue/Vue20.html","title":"组件库介绍","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"快速上手","slug":"快速上手","link":"#快速上手","children":[]},{"level":2,"title":"国际化","slug":"国际化","link":"#国际化","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":5.66,"words":1699},"filePathRelative":"Vue/Vue20.md"}');export{c as comp,u as data};
