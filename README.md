<h1>sg-smseed framework</h1>
<p>sg-smseed makes use of certain HTML elements and CSS properties that require the use of the HTML5 doctype. Include it at the beginning of all your projects.</p>
<h2>Demo and Documentation</h2>
For all usage and documentation please see: <a href="http://cdg2.demopage.jp/html/vietnam/nghia/sg-smdoc/">sg-smseed</a>
<h2>Basic Usage...</h2>
<p>Use the template to build your web mobile.</p>
<h3>HTML5 doctype</h3>
<pre>&lt;!DOCTYPE html&gt;<br />&lt;html dir=&quot;ltr&quot; lang=&quot;ja&quot;&gt;
...  
&lt;/html&gt;</pre>
<p>You can disable zooming capabilities on mobile devices by adding user-scalable=no to the viewport meta tag. This disables zooming, meaning users are only able to scroll, and results in your site feeling a bit more like a native application. Overall, we don't recommend this on every site, so use caution!</p>
<pre>&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=2.0,user-scalable=yes&quot;&gt;</pre>
<h2>Getting started</h2>
<h3>Source code</h3>
<pre>sg-smseed/  
├── common_img/
│   ├── lightbox/
│   │   ├── lightbox-blank.gif
│   │   ├── lightbox-btn-close.gif
│   │   ├── lightbox-btn-next.gif
│   │   ├── lightbox-btn-prev.gif
│   │   └── lightbox-ico-loading.gif
│   ├── ico_arrow.png
│   └── ico_zoom.png
├── css/
│   ├── reset.css
│   ├── base.css
│   ├── top.css
│   ├── content.css
│   └── form.css
├── images/
│   ├── close.png
│   └── open.png
├── js/
│   ├── jquery.min.js
│   ├── common.js
│   └── jquery.lightbox.mod.js
├── sample_page/
│   ├── images/
│   └── index.html
└── index.html</pre>
<h3>Basic template</h3>
<pre>&lt;!DOCTYPE html&gt;
&lt;html dir=&quot;ltr&quot; lang=&quot;ja&quot;&gt;
&lt;head&gt;
&lt;meta charset=&quot;UTF-8&quot;&gt;
&lt;!-- Always force latest IE rendering engine (even in intranet) &amp; Chrome Frame --&gt;
&lt;!--[if IE]&gt;
&lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge,chrome=1&quot;&gt;
&lt;![endif]--&gt;
&lt;meta name=&quot;description&quot; content=&quot;1111111111111111111111&quot;&gt;
&lt;meta name=&quot;keywords&quot; content=&quot;222222222222222222222222&quot;&gt;
&lt;meta name=&quot;robots&quot; content=&quot;INDEX,FOLLOW&quot;&gt;
&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=2.0,user-scalable=yes&quot;&gt;
&lt;meta name=&quot;HandheldFriendly&quot; content=&quot;True&quot;&gt;
&lt;meta name=&quot;MobileOptimized&quot; content=&quot;320&quot;&gt;
&lt;meta name=&quot;format-detection&quot; content=&quot;telephone=no&quot;&gt;
&lt;title&gt;00000000000000000&lt;/title&gt;
&lt;link rel=&quot;canonical&quot; href=&quot;333333333333333333333333/&quot;&gt;
&lt;!-- CSS --&gt;
&lt;link rel=&quot;stylesheet&quot; href=&quot;./css/reset.css&quot;&gt;
&lt;!-- リセット用 --&gt;
&lt;link rel=&quot;stylesheet&quot; href=&quot;./css/base.css&quot;&gt;
&lt;!-- 全体のレイアウト・共通設定用 --&gt;
&lt;link rel=&quot;stylesheet&quot; href=&quot;./css/top.css&quot;&gt;
&lt;!-- トップページの設定用 --&gt;
&lt;!-- JS --&gt;
&lt;script src=&quot;http://ajax.googleapis.com/ajax/libs/jquery/1.8/jquery.min.js&quot;&gt;&lt;/script&gt;&lt;!-- jQueryの読み込み --&gt;
&lt;script&gt;window.jQuery || document.write('&lt;script src=&quot;./js/jquery.min.js&quot;&gt;&lt;\/script&gt;')&lt;/script&gt;&lt;!-- 上記CDNダウン時のフォールバック --&gt;
&lt;/head&gt;
&lt;body id=&quot;pagetop&quot; class=&quot;toppage&quot;&gt;
&lt;div id=&quot;wrapper&quot;&gt;
  &lt;!-- wrapper --&gt;
  &lt;header class=&quot;sg_header&quot;&gt;
    &lt;!-- header --&gt;
 
  &lt;/header&gt;
  &lt;!-- end header --&gt;
  &lt;div class=&quot;sg_main&quot;&gt;
    &lt;!-- main --&gt;
 
  &lt;/div&gt;
  &lt;!-- end main --&gt;
  &lt;footer class=&quot;sg_footer&quot;&gt;
    &lt;!-- footer --&gt;
 
  &lt;/footer&gt;
  &lt;!-- end footer --&gt;
&lt;/div&gt;
&lt;!-- end wrapper --&gt;
&lt;!-- End tn-wrapper --&gt;
&lt;!-- Include all compiled plugins (below), or include individual files as needed --&gt;
&lt;script src=&quot;./js/common.js&quot;&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>
<h2>Version</h2>
<p>1.0.0 - Beta</p>
<h2>Creators</h2>
<p><strong>trungnghia112</strong></p>
<ul>
<li><a href="https://twitter.com/trungnghia112">https://twitter.com/trungnghia112</a></li>
<li><a href="https://github.com/trungnghia112">https://github.com/trungnghia112</a></li>
</ul>