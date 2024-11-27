import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as e,o as l}from"./app-_9vaDOHR.js";const i={};function p(t,s){return l(),a("div",null,s[0]||(s[0]=[e(`<h1 id="表单处理" tabindex="-1"><a class="header-anchor" href="#表单处理"><span>表单处理</span></a></h1><h2 id="表单元素的数据绑定" tabindex="-1"><a class="header-anchor" href="#表单元素的数据绑定"><span>表单元素的数据绑定</span></a></h2><p>下面是一个文本框和数据进行绑定的例子：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;input type=&quot;text&quot; :value=&quot;textContent&quot; @input=&quot;(e) =&gt; (textContent = e.target.value)&quot; /&gt;</span></span>
<span class="line"><span>  &lt;p&gt;你当前输入的内容为：{{ textContent }}&lt;/p&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span>const textContent = ref(&#39;&#39;)</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的例子我们让文本库和 ref 数据进行了绑定，用户在输入内容的时候，会去更新 textContent 这个 ref 数据，而 ref 数据的变化又会影响文本框本身的 value 值。这其实就是一个双向绑定的例子。</p><p>上面的例子虽然实现了双向绑定，但是写起来比较麻烦，因此 Vue 提供了一个内置的指令 v-model</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;input type=&quot;text&quot; v-model=&quot;textContent&quot; /&gt;</span></span>
<span class="line"><span>  &lt;p&gt;你当前输入的内容为：{{ textContent }}&lt;/p&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span>const textContent = ref(&#39;&#39;)</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的例子使用了 v-model 来进行双向绑定，textContent 的变化会影响文本框的值，文本框的值也会影响 textContent.</p><p>使用 v-model 的好处在于：</p><ol><li>简化了书写</li><li>根据所使用的元素自动的选择对应的属性以及事件组合 <ul><li>input 或者 textarea，元素会绑定 input 事件，绑定的值是 value</li><li>如果是单选框或者复选框，背后绑定的事件是 change 事件，绑定的值 checked</li><li>select 下拉列表绑定的也是 change 事件，绑定的值是 value</li></ul></li></ol><p><strong>文本域</strong></p><p>文本域就是多行文本，对应的标签为 textarea</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;textarea cols=&quot;30&quot; rows=&quot;10&quot; v-model=&quot;textContent&quot;&gt;&lt;/textarea&gt;</span></span>
<span class="line"><span>  &lt;p&gt;你当前输入的内容为：{{ textContent }}&lt;/p&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span>const textContent = ref(&#39;&#39;)</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>复选框</strong></p><p>单一的复选框，可以使用 v-model 去绑定一个 ref 类型的布尔值，布尔值为 true 表示选择中，false 表示未选中</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;input type=&quot;checkbox&quot; v-model=&quot;checked&quot; /&gt;</span></span>
<span class="line"><span>  &lt;button @click=&quot;checked = !checked&quot;&gt;切换选中&lt;/button&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span>const checked = ref(true)</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的例子中，布尔值 true 是选中，false 是未选中，但是这个真假值是可以自定义：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;input type=&quot;checkbox&quot; v-model=&quot;checked&quot; :true-value=&quot;customTrue&quot; :false-value=&quot;customFalse&quot; /&gt;</span></span>
<span class="line"><span>  &lt;button @click=&quot;toggle&quot;&gt;切换选中&lt;/button&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span>const checked = ref(&#39;yes&#39;)</span></span>
<span class="line"><span>// 现在相当于是自定义什么值是选中，什么值是未选中</span></span>
<span class="line"><span>// 之前是默认true是选中，false是未选中</span></span>
<span class="line"><span>// 现在是yes是选中，no是未选中</span></span>
<span class="line"><span>const customTrue = ref(&#39;yes&#39;)</span></span>
<span class="line"><span>const customFalse = ref(&#39;no&#39;)</span></span>
<span class="line"><span>function toggle() {</span></span>
<span class="line"><span>  checked.value === &#39;yes&#39; ? (checked.value = &#39;no&#39;) : (checked.value = &#39;yes&#39;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有些时候我们有多个复选框，这个时候，可以将多个复选框绑定到同一个数组或者集合的值：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;div v-for=&quot;(item, index) in arr&quot; :key=&quot;index&quot;&gt;</span></span>
<span class="line"><span>    &lt;label for=&quot;item.id&quot;&gt;{{ item.title }}&lt;/label&gt;</span></span>
<span class="line"><span>    &lt;input type=&quot;checkbox&quot; v-model=&quot;hobby&quot; :id=&quot;item.id&quot; :value=&quot;item.value&quot; /&gt;</span></span>
<span class="line"><span>  &lt;/div&gt;</span></span>
<span class="line"><span>  &lt;p&gt;{{ message }}&lt;/p&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref, computed } from &#39;vue&#39;</span></span>
<span class="line"><span>const hobby = ref([])</span></span>
<span class="line"><span>const arr = ref([</span></span>
<span class="line"><span>  { id: &#39;swim&#39;, title: &#39;游泳&#39;, value: &#39;游个泳&#39; },</span></span>
<span class="line"><span>  { id: &#39;run&#39;, title: &#39;跑步&#39;, value: &#39;跑个步&#39; },</span></span>
<span class="line"><span>  { id: &#39;game&#39;, title: &#39;游戏&#39;, value: &#39;玩个游戏&#39; },</span></span>
<span class="line"><span>  { id: &#39;music&#39;, title: &#39;音乐&#39;, value: &#39;听个音乐&#39; },</span></span>
<span class="line"><span>  { id: &#39;movie&#39;, title: &#39;电影&#39;, value: &#39;看个电影&#39; }</span></span>
<span class="line"><span>])</span></span>
<span class="line"><span>const message = computed(() =&gt; {</span></span>
<span class="line"><span>  // 根据 hobby 的值进行二次计算</span></span>
<span class="line"><span>  if (hobby.value.length === 0) return &#39;请选择爱好&#39;</span></span>
<span class="line"><span>  else return \`您选择了\${hobby.value.join(&#39;、&#39;)}\`</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的例子中，checkbox 所绑定的数据不再是一个布尔值，而是一个数组（集合），那么当该复选框被选中的时候，该复选框所对应的值就会被加入到数组里面。</p><p><strong>单选框</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;label for=&quot;male&quot;&gt;男&lt;/label&gt;</span></span>
<span class="line"><span>  &lt;input type=&quot;radio&quot; id=&quot;male&quot; v-model=&quot;gender&quot; value=&quot;男&quot; /&gt;</span></span>
<span class="line"><span>  &lt;label for=&quot;female&quot;&gt;女&lt;/label&gt;</span></span>
<span class="line"><span>  &lt;input type=&quot;radio&quot; id=&quot;female&quot; v-model=&quot;gender&quot; value=&quot;女&quot; /&gt;</span></span>
<span class="line"><span>  &lt;label for=&quot;secret&quot;&gt;保密&lt;/label&gt;</span></span>
<span class="line"><span>  &lt;input type=&quot;radio&quot; id=&quot;secret&quot; v-model=&quot;gender&quot; value=&quot;保密&quot; /&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span>const gender = ref(&#39;保密&#39;)</span></span>
<span class="line"><span>setTimeout(() =&gt; {</span></span>
<span class="line"><span>  gender.value = &#39;男&#39;</span></span>
<span class="line"><span>}, 3000)</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的例子演示了单选框如何进行双向绑定，哪一个单选框被选中取决于 gender 的值。</p><p><strong>下拉列表</strong></p><p>下拉列表在进行双向绑定的时候，v-model 是写在 select 标签上面：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;!-- 下拉列表列表是单选的话，v-model 绑定的值是一个字符串，这个字符串是 option 的 value 值 --&gt;</span></span>
<span class="line"><span>  &lt;select v-model=&quot;hometown1&quot;&gt;</span></span>
<span class="line"><span>    &lt;option value=&quot;&quot; disabled&gt;请选择&lt;/option&gt;</span></span>
<span class="line"><span>    &lt;option v-for=&quot;(item, index) in hometownList&quot; :key=&quot;index&quot; :value=&quot;item.key&quot;&gt;</span></span>
<span class="line"><span>      {{ item.value }}</span></span>
<span class="line"><span>    &lt;/option&gt;</span></span>
<span class="line"><span>  &lt;/select&gt;</span></span>
<span class="line"><span>  &lt;p&gt;您选择的家乡为：{{ hometown1 }}&lt;/p&gt;</span></span>
<span class="line"><span>  &lt;!-- 如果下拉列表是多选的话，v-model 绑定的值是一个数组，这个数组是 option 的 value 值组成的数组 --&gt;</span></span>
<span class="line"><span>  &lt;select v-model=&quot;hometown2&quot; multiple&gt;</span></span>
<span class="line"><span>    &lt;option value=&quot;&quot; disabled&gt;请选择&lt;/option&gt;</span></span>
<span class="line"><span>    &lt;option v-for=&quot;(item, index) in hometownList&quot; :key=&quot;index&quot; :value=&quot;item.key&quot;&gt;</span></span>
<span class="line"><span>      {{ item.value }}</span></span>
<span class="line"><span>    &lt;/option&gt;</span></span>
<span class="line"><span>  &lt;/select&gt;</span></span>
<span class="line"><span>  &lt;p&gt;您选择的家乡为：{{ hometown2 }}&lt;/p&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span>const hometown1 = ref(&#39;&#39;)</span></span>
<span class="line"><span>const hometown2 = ref([])</span></span>
<span class="line"><span>const hometownList = ref([</span></span>
<span class="line"><span>  { key: &#39;成都&#39;, value: &#39;成都&#39; },</span></span>
<span class="line"><span>  { key: &#39;帝都&#39;, value: &#39;北京&#39; },</span></span>
<span class="line"><span>  { key: &#39;魔都&#39;, value: &#39;上海&#39; },</span></span>
<span class="line"><span>  { key: &#39;妖都&#39;, value: &#39;广州&#39; },</span></span>
<span class="line"><span>  { key: &#39;陪都&#39;, value: &#39;重庆&#39; }</span></span>
<span class="line"><span>])</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意下拉列表根据是单选还是多选，v-model 所绑定的值的类型不一样，单选绑定字符串，多选绑定数组。</p><h2 id="表单相关修饰符" tabindex="-1"><a class="header-anchor" href="#表单相关修饰符"><span>表单相关修饰符</span></a></h2><ul><li>lazy：默认情况下，v-model 会在每次 input 事件触发时就更新数据，lazy 修饰符可以改为 change 事件触发后才更新数据</li><li>number：将用户输入的内容从字符串转为 number 类型</li><li>trim：去除输入的内容的两端的空格</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;!-- lazy修饰符演示 --&gt;</span></span>
<span class="line"><span>  &lt;input type=&quot;text&quot; v-model.lazy=&quot;mess1&quot; /&gt;</span></span>
<span class="line"><span>  &lt;p&gt;你输入的是：{{ mess1 }}&lt;/p&gt;</span></span>
<span class="line"><span>  &lt;p&gt;类型为{{ typeof mess1 }}&lt;/p&gt;</span></span>
<span class="line"><span>  &lt;p&gt;长度为{{ mess1.length }}&lt;/p&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &lt;!-- number修饰符演示 --&gt;</span></span>
<span class="line"><span>  &lt;input type=&quot;text&quot; v-model.number=&quot;mess2&quot; /&gt;</span></span>
<span class="line"><span>  &lt;p&gt;你输入的是：{{ mess2 }}&lt;/p&gt;</span></span>
<span class="line"><span>  &lt;p&gt;类型为{{ typeof mess2 }}&lt;/p&gt;</span></span>
<span class="line"><span>  &lt;p&gt;长度为{{ mess2.length }}&lt;/p&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &lt;!-- trim修饰符演示 --&gt;</span></span>
<span class="line"><span>  &lt;input type=&quot;text&quot; v-model.trim=&quot;mess3&quot; /&gt;</span></span>
<span class="line"><span>  &lt;p&gt;你输入的是：{{ mess3 }}&lt;/p&gt;</span></span>
<span class="line"><span>  &lt;p&gt;类型为{{ typeof mess3 }}&lt;/p&gt;</span></span>
<span class="line"><span>  &lt;p&gt;长度为{{ mess3.length }}&lt;/p&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span>const mess1 = ref(&#39;&#39;)</span></span>
<span class="line"><span>const mess2 = ref(&#39;&#39;)</span></span>
<span class="line"><span>const mess3 = ref(&#39;&#39;)</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><ul><li>EOF-</li></ul>`,33)]))}const v=n(i,[["render",p],["__file","Vue09.html.vue"]]),u=JSON.parse('{"path":"/Vue/Vue09.html","title":"表单处理","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"表单元素的数据绑定","slug":"表单元素的数据绑定","link":"#表单元素的数据绑定","children":[]},{"level":2,"title":"表单相关修饰符","slug":"表单相关修饰符","link":"#表单相关修饰符","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":4.74,"words":1422},"filePathRelative":"Vue/Vue09.md"}');export{v as comp,u as data};
