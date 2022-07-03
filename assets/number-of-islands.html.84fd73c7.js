import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{r as p,o as t,c as o,a as n,b as e,e as c,d as l}from"./app.d6b42b88.js";const i={},u=n("p",null,"\uD574\uB2F9\uD398\uC774\uC9C0\uB294 2022\uB144 3\uC6D4 \uB178\uC158\uC5D0\uC11C \uB9C8\uC774\uADF8\uB808\uC774\uC158 \uB418\uC5C8\uC2B5\uB2C8\uB2E4.",-1),r={href:"https://leetcode.com/problems/number-of-islands/",target:"_blank",rel:"noopener noreferrer"},k=c("\uBB38\uC81C\uB9C1\uD06C"),d=l(`<h2 id="\u1106\u116E\u11AB\u110C\u1166-\u1109\u1165\u11AF\u1106\u1167\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1106\u116E\u11AB\u110C\u1166-\u1109\u1165\u11AF\u1106\u1167\u11BC" aria-hidden="true">#</a> \uBB38\uC81C \uC124\uBA85</h2><p>1&#39;(\uB545)\uACFC &#39;0&#39;(\uBB3C)\uC758 \uC9C0\uB3C4\uB97C \uB098\uD0C0\uB0B4\uB294 m x n 2D \uC774\uC9C4 \uADF8\uB9AC\uB4DC \uADF8\uB9AC\uB4DC\uAC00 \uC8FC\uC5B4\uC9C0\uBA74 \uC12C\uC758 \uC218\uB97C \uBC18\uD658\uD569\uB2C8\uB2E4. \uC12C\uC740 \uBB3C\uB85C \uB458\uB7EC\uC2F8\uC5EC \uC788\uC73C\uBA70 \uC778\uC811\uD55C \uC721\uC9C0\uB97C \uC218\uD3C9 \uB610\uB294 \uC218\uC9C1\uC73C\uB85C \uC5F0\uACB0\uD558\uC5EC \uD615\uC131\uB429\uB2C8\uB2E4. \uADF8\uB9AC\uB4DC\uC758 \uB124 \uBAA8\uC11C\uB9AC\uAC00 \uBAA8\uB450 \uBB3C\uB85C \uB458\uB7EC\uC2F8\uC5EC \uC788\uB2E4\uACE0 \uAC00\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><h2 id="\u1106\u116E\u11AB\u110C\u1166-\u1111\u116E\u11AF\u110B\u1175" tabindex="-1"><a class="header-anchor" href="#\u1106\u116E\u11AB\u110C\u1166-\u1111\u116E\u11AF\u110B\u1175" aria-hidden="true">#</a> \uBB38\uC81C \uD480\uC774</h2><p>max-area-of-island \uC640 \uAC19\uC740 \uBB38\uC81C dfs\uB97C \uC774\uC6A9\uD574\uC11C \uC12C\uC758 4\uBC29\uD5A5\uC744 \uBC29\uBB38\uD55C\uB2E4. \uC774\uB54C \uBC29\uBB38\uD588\uB358 \uAC83\uC744 \uD45C\uC2DC\uD558\uAE30 \uC704\uD574\uC11C visited\uB97C \uC368\uB3C4 \uB418\uC9C0\uB9CC \uC8FC\uC5B4\uC9C4 grid \uBC30\uC5F4\uC758 \uD574\uB2F9\uAC12\uC744 0\uCC98\uB9AC\uD558\uB294 \uAC83\uB3C4 \uAD1C\uCC2E\uB2E4.</p><h2 id="\u1111\u116E\u11AF\u110B\u1175-\u110F\u1169\u1103\u1173" tabindex="-1"><a class="header-anchor" href="#\u1111\u116E\u11AF\u110B\u1175-\u110F\u1169\u1103\u1173" aria-hidden="true">#</a> \uD480\uC774 \uCF54\uB4DC</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">numIslands</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> grid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">0</span> <span class="token punctuation">;</span>
         <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> grid<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> grid<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">&#39;1&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">DFSMarking</span><span class="token punctuation">(</span>grid<span class="token punctuation">,</span> i<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>\u3150
                count<span class="token operator">++</span><span class="token punctuation">;</span>
                 <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> count<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token class-name">DFSMarking</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> grid<span class="token punctuation">,</span> <span class="token keyword">int</span> i<span class="token punctuation">,</span> <span class="token keyword">int</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> j <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> i <span class="token operator">&gt;=</span>grid<span class="token punctuation">.</span>length <span class="token operator">||</span> j <span class="token operator">&gt;=</span> grid<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length <span class="token operator">||</span> grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token char">&#39;1&#39;</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
        grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token char">&#39;0&#39;</span><span class="token punctuation">;</span>
        <span class="token class-name">DFSMarking</span><span class="token punctuation">(</span>grid<span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">DFSMarking</span><span class="token punctuation">(</span>grid<span class="token punctuation">,</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">DFSMarking</span><span class="token punctuation">(</span>grid<span class="token punctuation">,</span> i<span class="token punctuation">,</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">DFSMarking</span><span class="token punctuation">(</span>grid<span class="token punctuation">,</span> i<span class="token punctuation">,</span> j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function m(v,b){const s=p("ExternalLinkIcon");return t(),o("div",null,[u,n("p",null,[n("a",r,[k,e(s)])]),d])}var f=a(i,[["render",m],["__file","number-of-islands.html.vue"]]);export{f as default};
