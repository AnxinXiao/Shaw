import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,a,o as t}from"./app-_9vaDOHR.js";const n={};function l(r,e){return t(),s("div",null,e[0]||(e[0]=[a('<h1 id="网格布局" tabindex="-1"><a class="header-anchor" href="#网格布局"><span>网格布局</span></a></h1><p>CSS 网格布局引入了二维网格布局系统，可用于布局页面主要的区域或小型用户界面元素。</p><p>我们通过将容器设置为 <code>grid</code> 或 <code>in-line grid</code> 的 display属性来实现 CSS 网格容器属性。</p><h3 id="grid-template-column-属性" tabindex="-1"><a class="header-anchor" href="#grid-template-column-属性"><span><strong>Grid-template-column 属性</strong></span></a></h3><p>这是一个用于设置每列宽度的属性。它还可以定义要为项目设置的列数。</p><p>例如：</p><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">grid-template-column</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">: 100px auto 100px;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>上面的代码显示我们有三列。第一列和第三列占用屏幕宽度的 100 像素，而第二列占用屏幕的剩余宽度（自动）。</p><h3 id="grid-template-row-属性" tabindex="-1"><a class="header-anchor" href="#grid-template-row-属性"><span><strong>Grid-template-row 属性</strong></span></a></h3><p>row 属性来设置每列的高度。你还可以使用它来定义要在项目中设置的行数。</p><p>例如：</p><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">grid-template-row</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">: 50px 50px;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>上面的代码显示我们总共有两行，这两行高 <code>50px</code>。</p><blockquote><p>[!NOTE]</p><p>我们还可以通过简单地使用 <code>gird-template</code> 将 <code>column</code> 和 <code>row</code> 属性一次性分配给我们的 HTML 代码。<code>Grid-template</code> 是表示 <code>grid-template column</code> 和 <code>grid-template-row</code> 的另一种方式。</p></blockquote><p>例如：</p><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> grid-template</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">: 50px 50px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> / 100</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">px auto 100px;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>要使用 <code>grid-template</code> 属性，你必须先将值分配给行，然后再分配列的值，就像上面的代码一样。 <code>50px 50px</code> 用于行，而 <code>100px auto 100px</code> 用于列。</p><figure><img src="https://anxinshaw.us.kg/image21.png" alt="CSS-GRID-2" tabindex="0" loading="lazy"><figcaption>CSS-GRID-2</figcaption></figure><h3 id="column-gap-属性" tabindex="-1"><a class="header-anchor" href="#column-gap-属性"><span><strong>Column-gap 属性</strong></span></a></h3><p>用于在容器中的两列或多列之间分配一个空间。你可以通过使用 <code>column-gap</code> 属性并给它一个值来做到这一点。</p><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">column-gap</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">: 20px;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="https://anxinshaw.us.kg/image22.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="justify-content-属性-align-content-属性-和上文中flex布局相同" tabindex="-1"><a class="header-anchor" href="#justify-content-属性-align-content-属性-和上文中flex布局相同"><span><strong>Justify-content 属性 &amp; <strong>Align-content 属性 和上文中flex布局相同</strong></strong></span></a></h3><p>最后，一个用来学<a href="https://cssgridgarden.com/" target="_blank" rel="noopener noreferrer">flex的布局网站</a></p>',24)]))}const p=i(n,[["render",l],["__file","CSS03.html.vue"]]),c=JSON.parse('{"path":"/HTML_CSS/CSS/CSS03.html","title":"网格布局","lang":"zh-CN","frontmatter":{},"headers":[{"level":3,"title":"Grid-template-column 属性","slug":"grid-template-column-属性","link":"#grid-template-column-属性","children":[]},{"level":3,"title":"Grid-template-row 属性","slug":"grid-template-row-属性","link":"#grid-template-row-属性","children":[]},{"level":3,"title":"Column-gap 属性","slug":"column-gap-属性","link":"#column-gap-属性","children":[]},{"level":3,"title":"Justify-content 属性 & Align-content 属性 和上文中flex布局相同","slug":"justify-content-属性-align-content-属性-和上文中flex布局相同","link":"#justify-content-属性-align-content-属性-和上文中flex布局相同","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":1.4,"words":419},"filePathRelative":"HTML&CSS/CSS/CSS03.md"}');export{p as comp,c as data};
