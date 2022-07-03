import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,o as p,c as e,a as n,b as o,e as c,d as u}from"./app.d6b42b88.js";const l={},i=n("p",null,"\uD574\uB2F9\uD398\uC774\uC9C0\uB294 2022\uB144 3\uC6D4 \uB178\uC158\uC5D0\uC11C \uB9C8\uC774\uADF8\uB808\uC774\uC158 \uB418\uC5C8\uC2B5\uB2C8\uB2E4.",-1),k={href:"https://leetcode.com/problems/top-k-frequent-elements/",target:"_blank",rel:"noopener noreferrer"},r=c("\uBB38\uC81C\uB9C1\uD06C"),d=u(`<h2 id="\u1106\u116E\u11AB\u110C\u1166-\u1109\u1165\u11AF\u1106\u1167\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1106\u116E\u11AB\u110C\u1166-\u1109\u1165\u11AF\u1106\u1167\u11BC" aria-hidden="true">#</a> \uBB38\uC81C \uC124\uBA85</h2><p>\uC815\uC218 \uBC30\uC5F4 <code>nums</code>\uC640 \uC815\uC218 <code>k</code>\uAC00 \uC8FC\uC5B4\uC9C0\uBA74 k\uAC1C\uC758 \uAC00\uC7A5 \uBE48\uBC88\uD55C \uC694\uC18C\uB97C \uBC18\uD658\uD569\uB2C8\uB2E4. \uC5B4\uB5A4 \uC21C\uC11C\uB85C\uB4E0 \uB2F5\uC744 \uBC18\uD658\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><h2 id="\u110B\u1175\u11B8\u110E\u116E\u11AF\u1105\u1167\u11A8-\u110B\u1168\u1109\u1175" tabindex="-1"><a class="header-anchor" href="#\u110B\u1175\u11B8\u110E\u116E\u11AF\u1105\u1167\u11A8-\u110B\u1168\u1109\u1175" aria-hidden="true">#</a> \uC785\uCD9C\uB825 \uC608\uC2DC</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u1106\u116E\u11AB\u110C\u1166-\u1111\u116E\u11AF\u110B\u1175" tabindex="-1"><a class="header-anchor" href="#\u1106\u116E\u11AB\u110C\u1166-\u1111\u116E\u11AF\u110B\u1175" aria-hidden="true">#</a> \uBB38\uC81C \uD480\uC774</h2><p>map\uC5D0 1\uCC28 \uACC4\uC0B0 \uD6C4 \uC815\uB82C\uBC29\uC2DD\uC744 map.get(k) \uB85C \uBC14\uAFD4\uC11C \uC815\uB82C \uD6C4 \uBE80\uB2E4.</p><h2 id="\u1111\u116E\u11AF\u110B\u1175-\u110F\u1169\u1103\u1173" tabindex="-1"><a class="header-anchor" href="#\u1111\u116E\u11AF\u110B\u1175-\u110F\u1169\u1103\u1173" aria-hidden="true">#</a> \uD480\uC774 \uCF54\uB4DC</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">topKFrequent</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span> <span class="token keyword">int</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> answer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">PriorityQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> maxPriorityQueue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PriorityQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>o1<span class="token punctuation">,</span> o2<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>o2<span class="token punctuation">)</span> <span class="token operator">-</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>o1<span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> num <span class="token operator">:</span> nums<span class="token punctuation">)</span><span class="token punctuation">{</span>
            map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span> map<span class="token punctuation">.</span><span class="token function">getOrDefault</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> key <span class="token operator">:</span> map<span class="token punctuation">.</span><span class="token function">keySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          maxPriorityQueue<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span> key <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span> <span class="token punctuation">;</span> i <span class="token operator">&lt;</span> k <span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            answer<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> maxPriorityQueue<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> answer<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function m(v,b){const s=t("ExternalLinkIcon");return p(),e("div",null,[i,n("p",null,[n("a",k,[r,o(s)])]),d])}var y=a(l,[["render",m],["__file","top-k-frequent-elements.html.vue"]]);export{y as default};
