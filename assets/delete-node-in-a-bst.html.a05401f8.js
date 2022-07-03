import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{r as e,o as t,c as p,a as n,b as o,e as c,d as l}from"./app.d6b42b88.js";const i={},u=n("p",null,"\uD574\uB2F9\uD398\uC774\uC9C0\uB294 2022\uB144 3\uC6D4 \uB178\uC158\uC5D0\uC11C \uB9C8\uC774\uADF8\uB808\uC774\uC158 \uB418\uC5C8\uC2B5\uB2C8\uB2E4.",-1),r={href:"https://leetcode.com/problems/delete-node-in-a-bst/",target:"_blank",rel:"noopener noreferrer"},d=c("\uBB38\uC81C\uB9C1\uD06C"),k=l(`<h2 id="\u1106\u116E\u11AB\u110C\u1166-\u1109\u1165\u11AF\u1106\u1167\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1106\u116E\u11AB\u110C\u1166-\u1109\u1165\u11AF\u1106\u1167\u11BC" aria-hidden="true">#</a> \uBB38\uC81C \uC124\uBA85</h2><p>BST\uC640 \uD0A4\uC758 \uB8E8\uD2B8 \uB178\uB4DC \uCC38\uC870\uAC00 \uC8FC\uC5B4\uC9C0\uBA74 BST\uC5D0\uC11C \uC8FC\uC5B4\uC9C4 \uD0A4\uB97C \uAC00\uC9C4 \uB178\uB4DC\uB97C \uC0AD\uC81C\uD569\uB2C8\uB2E4. BST\uC758 \uB8E8\uD2B8 \uB178\uB4DC \uCC38\uC870(\uC5C5\uB370\uC774\uD2B8\uB420 \uC218 \uC788\uC74C)\uB97C \uBC18\uD658\uD569\uB2C8\uB2E4. \uAE30\uBCF8\uC801\uC73C\uB85C \uC0AD\uC81C\uB294 \uB450 \uB2E8\uACC4\uB85C \uB098\uB20C \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><ul><li>\uC81C\uAC70\uD560 \uB178\uB4DC\uB97C \uAC80\uC0C9\uD569\uB2C8\uB2E4.</li><li>\uB178\uB4DC\uAC00 \uBC1C\uACAC\uB418\uBA74 \uB178\uB4DC\uB97C \uC0AD\uC81C\uD569\uB2C8\uB2E4.</li></ul><h2 id="\u1111\u116E\u11AF\u110B\u1175-\u110F\u1169\u1103\u1173" tabindex="-1"><a class="header-anchor" href="#\u1111\u116E\u11AF\u110B\u1175-\u110F\u1169\u1103\u1173" aria-hidden="true">#</a> \uD480\uC774 \uCF54\uB4DC</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * Definition for a binary tree node.
 * public class TreeNode <span class="token punctuation">{</span>
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() <span class="token punctuation">{</span><span class="token punctuation">}</span>
 *     TreeNode(int val) <span class="token punctuation">{</span> this.val = val; <span class="token punctuation">}</span>
 *     TreeNode(int val, TreeNode left, TreeNode right) <span class="token punctuation">{</span>
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     <span class="token punctuation">}</span>
 * <span class="token punctuation">}</span>
 */</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>

    <span class="token comment">// \uAC00\uC7A5 \uD06C\uBA74\uC11C \uAC00\uAE4C\uC6B4 \uD6C4\uACC4\uC790 \uCC3E\uAE30</span>
    <span class="token keyword">public</span> <span class="token class-name">TreeNode</span> <span class="token function">succ</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> curr<span class="token punctuation">)</span><span class="token punctuation">{</span>
        curr <span class="token operator">=</span> curr<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span> curr<span class="token operator">!=</span><span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> curr<span class="token punctuation">.</span>left<span class="token operator">!=</span><span class="token keyword">null</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
            curr <span class="token operator">=</span> curr<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> curr<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// For deleting the node</span>
    <span class="token keyword">public</span> <span class="token class-name">TreeNode</span> <span class="token function">deleteNode</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">,</span> <span class="token keyword">int</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>root<span class="token operator">==</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token operator">&gt;</span>key<span class="token punctuation">)</span><span class="token punctuation">{</span>
            root<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">deleteNode</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token operator">&lt;</span>key<span class="token punctuation">)</span><span class="token punctuation">{</span>
            root<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">deleteNode</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// \uB8E8\uD2B8 \uD0A4 \uAC12\uC774 \uC0AD\uC81C\uD558\uB3C4\uB85D \uC9C0\uC815\uB41C \uAC12\uACFC \uC77C\uCE58\uD558\uB294 \uACBD\uC6B0</span>
        <span class="token comment">//root.val == key</span>
        <span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">return</span> root<span class="token punctuation">.</span>right<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">return</span> root<span class="token punctuation">.</span>left<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">else</span><span class="token punctuation">{</span> <span class="token comment">//\uC591\uCABD\uC774 \uB2E4 \uCC28 \uC788\uC73C\uBA74</span>
                <span class="token class-name">TreeNode</span> succ <span class="token operator">=</span> <span class="token function">succ</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\uD6C4\uACC4\uC790. \uB178\uB4DC</span>
                root<span class="token punctuation">.</span>val <span class="token operator">=</span> succ<span class="token punctuation">.</span>val<span class="token punctuation">;</span>  <span class="token comment">// val\uC740 \uD6C4\uACC4\uC790 \uB178\uB4DC\uC758 val \uC774\uACE0.</span>
                root<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">deleteNode</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> succ<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> root<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function v(m,b){const s=e("ExternalLinkIcon");return t(),p("div",null,[u,n("p",null,[n("a",r,[d,o(s)])]),k])}var y=a(i,[["render",v],["__file","delete-node-in-a-bst.html.vue"]]);export{y as default};
