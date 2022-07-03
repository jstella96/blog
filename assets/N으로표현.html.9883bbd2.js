import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,o as p,c as o,a as n,b as e,e as c,d as i}from"./app.d6b42b88.js";const u={},l=n("p",null,"\uD574\uB2F9\uD398\uC774\uC9C0\uB294 2022\uB144 3\uC6D4 \uB178\uC158\uC5D0\uC11C \uB9C8\uC774\uADF8\uB808\uC774\uC158 \uB418\uC5C8\uC2B5\uB2C8\uB2E4.",-1),r={href:"https://programmers.co.kr/learn/courses/30/lessons/42895",target:"_blank",rel:"noopener noreferrer"},k=c("\uBB38\uC81C \uB9C1\uD06C"),d=i(`<h2 id="\u1106\u116E\u11AB\u110C\u1166-\u1109\u1165\u11AF\u1106\u1167\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1106\u116E\u11AB\u110C\u1166-\u1109\u1165\u11AF\u1106\u1167\u11BC" aria-hidden="true">#</a> \uBB38\uC81C \uC124\uBA85</h2><p>\uC8FC\uC5B4\uC9C4 \uC22B\uC790 <code>N</code>\uACFC \uC0AC\uCE59\uC5F0\uC0B0\uB9CC\uC744 \uC0AC\uC6A9\uD574\uC11C \uD0C0\uAC9F\uC22B\uC790 <code>number</code>\uB97C \uB9CC\uB4E4\uC5B4\uC57C \uD55C\uB2E4. \uC774\uB54C \uAC19\uC740 \uC22B\uC790\uB97C \uC5F0\uC18D\uD574\uC11C \uBD99\uC774\uB294 \uAC83\uB3C4 \uAC00\uB2A5\uD558\uB2E4 \uC774\uB54C <code>N</code>\uC0AC\uC6A9 \uD69F\uC218\uC758 \uCD5C\uC19F\uAC12\uC744 return\uD574\uB77C.</p><h2 id="\u110B\u1175\u11B8\u110E\u116E\u11AF\u1105\u1167\u11A8-\u110B\u1168\u1109\u1175" tabindex="-1"><a class="header-anchor" href="#\u110B\u1175\u11B8\u110E\u116E\u11AF\u1105\u1167\u11A8-\u110B\u1168\u1109\u1175" aria-hidden="true">#</a> \uC785\uCD9C\uB825 \uC608\uC2DC</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input:
    N: 5
    number: 12
Output: 4

Input:
    N: 2
    number: 11
Output: 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u1106\u116E\u11AB\u110C\u1166-\u1111\u116E\u11AF\u110B\u1175" tabindex="-1"><a class="header-anchor" href="#\u1106\u116E\u11AB\u110C\u1166-\u1111\u116E\u11AF\u110B\u1175" aria-hidden="true">#</a> \uBB38\uC81C \uD480\uC774</h2><p>\uD480\uC774\uC2DD\uC744 \uBB38\uC790\uC5F4\uB85C \uB298\uB824\uB098\uAC04\uB2E4. \uD574\uB2F9 \uBB38\uC790\uC5F4 \uD480\uC774\uC2DD\uC744 eval()\uD568\uC218\uB97C \uC0AC\uC6A9\uD574\uC11C \uC22B\uC790\uB85C \uB9CC\uB4E4\uC5B4\uC11C \uD0C0\uAC9F\uC22B\uC790\uC640 \uAC19\uC740\uC9C0 \uBE44\uAD50\uD55C\uB2E4. \uC774\uB807\uAC8C \uD478\uB294 \uC774\uC720\uB294 \uB2E8\uC9C0 \uC0AC\uCE59\uC5F0\uC0B0\uC744 \uC774\uC5B4\uBD99\uC774\uB294 \uAC83 \uBFD0 \uC544\uB2C8\uB77C \uC22B\uC790\uB97C \uC774\uC5B4\uBD99\uC5EC\uC57C\uD558\uB294 \uACBD\uC6B0\uAC00 \uC788\uAE30 \uB54C\uBB38\uC774\uB2E4. \uD480\uC774\uC2DD\uC744 \uB298\uB824\uAC00\uB294 \uBD80\uBD84\uC744 \uC7AC\uADC0\uD568\uC218\uB85C \uCC98\uB9AC\uD574\uC11C \uC22B\uC790\uD558\uB098\uB97C \uCD94\uAC00\uD560 \uB54C \uB9C8\uB2E4 \uAC00\uB2A5\uD55C \uBAA8\uB4E0 \uD480\uC774\uC2DD\uC744 \uD638\uCD9C\uD55C\uB2E4.</p><h2 id="\u1111\u116E\u11AF\u110B\u1175\u110F\u1169\u1103\u1173-javascript" tabindex="-1"><a class="header-anchor" href="#\u1111\u116E\u11AF\u110B\u1175\u110F\u1169\u1103\u1173-javascript" aria-hidden="true">#</a> \uD480\uC774\uCF54\uB4DC JavaScript</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> min <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">solution</span><span class="token punctuation">(</span><span class="token parameter"><span class="token constant">N</span><span class="token punctuation">,</span> number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">tryCalculation</span><span class="token punctuation">(</span><span class="token constant">N</span><span class="token punctuation">,</span> <span class="token constant">N</span><span class="token punctuation">,</span> number<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> min <span class="token operator">&gt;</span> <span class="token number">8</span> <span class="token operator">?</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">:</span> min<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">tryCalculation</span><span class="token punctuation">(</span><span class="token parameter">base<span class="token punctuation">,</span> number<span class="token punctuation">,</span> target<span class="token punctuation">,</span> count</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">&gt;</span> <span class="token number">8</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token comment">//\uBB38\uC790\uC5F4\uB85C \uB9CC\uB4E4\uACE0 \uAC12\uC744 \uBC1B\uC544\uC11C \uBE44\uAD50.</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">eval</span><span class="token punctuation">(</span>base<span class="token punctuation">)</span> <span class="token operator">==</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    min <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>count<span class="token punctuation">,</span> min<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">tryCalculation</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>base<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">+1</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> number<span class="token punctuation">,</span> target<span class="token punctuation">,</span> count <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">tryCalculation</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>base<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-1</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> number<span class="token punctuation">,</span> target<span class="token punctuation">,</span> count <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">tryCalculation</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>base<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">+</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>number<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> number<span class="token punctuation">,</span> target<span class="token punctuation">,</span> count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">tryCalculation</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>base<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>number<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> number<span class="token punctuation">,</span> target<span class="token punctuation">,</span> count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">tryCalculation</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>base<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)*</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>number<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> number<span class="token punctuation">,</span> target<span class="token punctuation">,</span> count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">tryCalculation</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>base<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>number<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> number<span class="token punctuation">,</span> target<span class="token punctuation">,</span> count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">tryCalculation</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>base<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>number<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> number<span class="token punctuation">,</span> target<span class="token punctuation">,</span> count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function m(b,v){const a=t("ExternalLinkIcon");return p(),o("div",null,[l,n("p",null,[n("a",r,[k,e(a)])]),d])}var f=s(u,[["render",m],["__file","N\uC73C\uB85C\uD45C\uD604.html.vue"]]);export{f as default};
