import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{r as e,o as t,c as p,a as n,b as o,e as c,d as l}from"./app.d6b42b88.js";const i={},u=n("p",null,"\uD574\uB2F9\uD398\uC774\uC9C0\uB294 2022\uB144 3\uC6D4 \uB178\uC158\uC5D0\uC11C \uB9C8\uC774\uADF8\uB808\uC774\uC158 \uB418\uC5C8\uC2B5\uB2C8\uB2E4.",-1),r={href:"https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",target:"_blank",rel:"noopener noreferrer"},k=c("\uBB38\uC81C\uB9C1\uD06C"),d=l(`<h2 id="\u1106\u116E\u11AB\u110C\u1166-\u1109\u1165\u11AF\u1106\u1167\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1106\u116E\u11AB\u110C\u1166-\u1109\u1165\u11AF\u1106\u1167\u11BC" aria-hidden="true">#</a> \uBB38\uC81C \uC124\uBA85</h2><p>\uC9C1\uB82C\uD654\uB294 \uB370\uC774\uD130 \uAD6C\uC870 \uB610\uB294 \uAC1C\uCCB4\uB97C \uBE44\uD2B8 \uC2DC\uD000\uC2A4\uB85C \uBCC0\uD658\uD558\uC5EC \uD30C\uC77C \uB610\uB294 \uBA54\uBAA8\uB9AC \uBC84\uD37C\uC5D0 \uC800\uC7A5\uD558\uAC70\uB098 \uB124\uD2B8\uC6CC\uD06C \uC5F0\uACB0 \uB9C1\uD06C\uB97C \uD1B5\uD574 \uC804\uC1A1\uD558\uC5EC \uB098\uC911\uC5D0 \uB3D9\uC77C\uD558\uAC70\uB098 \uB2E4\uB978 \uCEF4\uD4E8\uD130 \uD658\uACBD\uC5D0\uC11C \uC7AC\uAD6C\uC131\uD558\uB294 \uD504\uB85C\uC138\uC2A4\uC785\uB2C8\uB2E4. \uC774\uC9C4 \uD2B8\uB9AC\uB97C \uC9C1\uB82C\uD654 \uBC0F \uC5ED\uC9C1\uB82C\uD654\uD558\uB294 \uC54C\uACE0\uB9AC\uC998\uC744 \uC124\uACC4\uD569\uB2C8\uB2E4. \uC9C1\uB82C\uD654/\uC5ED\uC9C1\uB82C\uD654 \uC54C\uACE0\uB9AC\uC998\uC774 \uC791\uB3D9\uD558\uB294 \uBC29\uC2DD\uC5D0\uB294 \uC81C\uD55C\uC774 \uC5C6\uC2B5\uB2C8\uB2E4. \uC774\uC9C4 \uD2B8\uB9AC\uB97C \uBB38\uC790\uC5F4\uB85C \uC9C1\uB82C\uD654\uD560 \uC218 \uC788\uACE0 \uC774 \uBB38\uC790\uC5F4\uC744 \uC6D0\uB798 \uD2B8\uB9AC \uAD6C\uC870\uB85C \uC5ED\uC9C1\uB82C\uD654\uD560 \uC218 \uC788\uB294\uC9C0 \uD655\uC778\uD558\uAE30\uB9CC \uD558\uBA74 \uB429\uB2C8\uB2E4.</p><h2 id="\u1106\u116E\u11AB\u110C\u1166-\u1111\u116E\u11AF\u110B\u1175" tabindex="-1"><a class="header-anchor" href="#\u1106\u116E\u11AB\u110C\u1166-\u1111\u116E\u11AF\u110B\u1175" aria-hidden="true">#</a> \uBB38\uC81C \uD480\uC774</h2><p>queue\uB97C \uC0AC\uC6A9\uD574 \uC791\uC5C5\uD574\uC57C\uD558\uB294 \uB178\uB4DC\uB97C \uC21C\uCC28\uC801\uC73C\uB85C \uB123\uC5B4\uB193\uACE0, \uC791\uC5C5\uACB0\uACFC\uB85C result\uB9CC\uB4E0\uB2E4. \uB514\uCF54\uB529\uC2DC\uC5D0 \uD050\uC5D0 \uB123\uC740\uAC70 \uB2E4\uC2DC \uC6D0\uC0C1\uBCF5\uAD6C \uD55C\uB2E4.</p><h2 id="\u1111\u116E\u11AF\u110B\u1175-\u110F\u1169\u1103\u1173" tabindex="-1"><a class="header-anchor" href="#\u1111\u116E\u11AF\u110B\u1175-\u110F\u1169\u1103\u1173" aria-hidden="true">#</a> \uD480\uC774 \uCF54\uB4DC</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * Definition for a binary tree node.
 * public class TreeNode <span class="token punctuation">{</span>
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) <span class="token punctuation">{</span> val = x; <span class="token punctuation">}</span>
 * <span class="token punctuation">}</span>
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Codec</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">serialize</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">&quot;#&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> root<span class="token punctuation">.</span>val <span class="token operator">+</span> <span class="token string">&quot;,&quot;</span> <span class="token operator">+</span> <span class="token function">serialize</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;,&quot;</span> <span class="token operator">+</span> <span class="token function">serialize</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">TreeNode</span> <span class="token function">deserialize</span><span class="token punctuation">(</span><span class="token class-name">String</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Queue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> queue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;,&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token function">helper</span><span class="token punctuation">(</span>queue<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token class-name">TreeNode</span> <span class="token function">helper</span><span class="token punctuation">(</span><span class="token class-name">Queue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> queue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> s <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;#&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">TreeNode</span> root <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        root<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">helper</span><span class="token punctuation">(</span>queue<span class="token punctuation">)</span><span class="token punctuation">;</span>
        root<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">helper</span><span class="token punctuation">(</span>queue<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> root<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Your Codec object will be instantiated and called as such:</span>
<span class="token comment">// Codec ser = new Codec();</span>
<span class="token comment">// Codec deser = new Codec();</span>
<span class="token comment">// TreeNode ans = deser.deserialize(ser.serialize(root));</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function v(m,b){const s=e("ExternalLinkIcon");return t(),p("div",null,[u,n("p",null,[n("a",r,[k,o(s)])]),d])}var g=a(i,[["render",v],["__file","serialize-and-deserialize-binary-tree.html.vue"]]);export{g as default};
