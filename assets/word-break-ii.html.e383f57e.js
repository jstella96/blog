import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,o as p,c as o,a as n,b as e,e as c,d as u}from"./app.d6b42b88.js";const l={},i=n("p",null,"\uD574\uB2F9\uD398\uC774\uC9C0\uB294 2022\uB144 3\uC6D4 \uB178\uC158\uC5D0\uC11C \uB9C8\uC774\uADF8\uB808\uC774\uC158 \uB418\uC5C8\uC2B5\uB2C8\uB2E4.",-1),k={href:"https://leetcode.com/problems/word-break-ii/",target:"_blank",rel:"noopener noreferrer"},r=c("\uBB38\uC81C\uB9C1\uD06C"),d=u(`<h2 id="\u1106\u116E\u11AB\u110C\u1166-\u1109\u1165\u11AF\u1106\u1167\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1106\u116E\u11AB\u110C\u1166-\u1109\u1165\u11AF\u1106\u1167\u11BC" aria-hidden="true">#</a> \uBB38\uC81C \uC124\uBA85</h2><p>\uBB38\uC790\uC5F4 <code>s</code>\uC640 \uBB38\uC790\uC5F4 \uBC30\uC5F4 <code>wordDict</code>\uAC00 \uC8FC\uC5B4\uC84C\uC744 \uB54C, \uBB38\uC790\uC5F4 s\uC5D0 \uACF5\uBC31\uC744 \uCD94\uAC00\uD558\uC5EC \uAC01 \uB2E8\uC5B4\uAC00 \uC720\uD6A8\uD55C \uC0AC\uC804 \uB2E8\uC5B4\uC778 \uBB38\uC7A5\uC744 \uAD6C\uC131\uD560 \uC218 \uC788\uB2E4. \uAC00\uB2A5\uD55C \uBAA8\uB4E0 \uBB38\uC7A5\uC744 \uC784\uC758\uC758 \uC21C\uC11C\uB85C \uBC18\uD658\uD574\uB77C. \uC0AC\uC804\uC5D0 \uC788\uB294 \uB3D9\uC77C\uD55C \uB2E8\uC5B4\uB294 \uBD84\uD560\uC5D0\uC11C \uC5EC\uB7EC \uBC88 \uC7AC\uC0AC\uC6A9\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><h2 id="\u1106\u116E\u11AB\u110C\u1166-\u110B\u1168\u1109\u1175" tabindex="-1"><a class="header-anchor" href="#\u1106\u116E\u11AB\u110C\u1166-\u110B\u1168\u1109\u1175" aria-hidden="true">#</a> \uBB38\uC81C \uC608\uC2DC</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: s = &quot;catsanddog&quot;, wordDict = [&quot;cat&quot;,&quot;cats&quot;,&quot;and&quot;,&quot;sand&quot;,&quot;dog&quot;]
Output: [&quot;cats and dog&quot;,&quot;cat sand dog&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u1111\u116E\u11AF\u110B\u1175-\u110F\u1169\u1103\u1173" tabindex="-1"><a class="header-anchor" href="#\u1111\u116E\u11AF\u110B\u1175-\u110F\u1169\u1103\u1173" aria-hidden="true">#</a> \uD480\uC774 \uCF54\uB4DC</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token function">wordBreak</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">,</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> dict<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\uB9C8\uC9C0\uB9C9 \uB2E8\uC5B4\uAC00 \uD3EC\uD568 \uB418\uB0D0 \uC548\uB418\uB0D0\uB97C \uAC80\uC99D.&quot;&quot; \uC5C6\uC73C\uBA74\uBE48\uAC12\uC774\uC9C0. \uC81C\uAC70 \uB300\uC0C1.</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> j<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>dict<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">else</span><span class="token punctuation">{</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>j <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
                    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token comment">//\uD575\uC2EC cat \uC77C\uB584. cats \uC77C\uB54C. cat\uC774\uBA74 send \uC77C\uB54C. \uB791,. 2,,3 \uAC1C\uBA74 \uADF8\uAC83\uB3C4 \uD3EC\uD568</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>dict<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> strs <span class="token operator">=</span> <span class="token function">wordBreak</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span>s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>dict<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>strs<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span>
                    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">Iterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> it <span class="token operator">=</span> strs<span class="token punctuation">.</span><span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>it<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">)</span>
                    <span class="token punctuation">{</span>
                        result<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&quot; &quot;</span><span class="token operator">+</span>it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>dict<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span> result<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\uB9C8\uC9C0\uB9C9 \uB2E8\uC5B4 \uC704\uD574.</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function m(v,b){const s=t("ExternalLinkIcon");return p(),o("div",null,[i,n("p",null,[n("a",k,[r,e(s)])]),d])}var h=a(l,[["render",m],["__file","word-break-ii.html.vue"]]);export{h as default};
