import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{r as p,o as t,c as o,a as n,b as c,e,d as u}from"./app.d6b42b88.js";const l={},k=n("p",null,"\uD574\uB2F9\uD398\uC774\uC9C0\uB294 2022\uB144 3\uC6D4 \uB178\uC158\uC5D0\uC11C \uB9C8\uC774\uADF8\uB808\uC774\uC158 \uB418\uC5C8\uC2B5\uB2C8\uB2E4.",-1),i={href:"https://programmers.co.kr/learn/courses/30/lessons/81302",target:"_blank",rel:"noopener noreferrer"},r=e("\uBB38\uC81C \uB9C1\uD06C"),m=u(`<h2 id="\u1106\u116E\u11AB\u110C\u1166-\u1109\u1165\u11AF\u1106\u1167\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1106\u116E\u11AB\u110C\u1166-\u1109\u1165\u11AF\u1106\u1167\u11BC" aria-hidden="true">#</a> \uBB38\uC81C \uC124\uBA85</h2><ul><li>\uB300\uAE30\uC2E4\uC740 5\uAC1C\uC774\uBA70, \uAC01 \uB300\uAE30\uC2E4\uC740 5x5 \uD06C\uAE30\uC785\uB2C8\uB2E4.</li><li>\uAC70\uB9AC\uB450\uAE30\uB97C \uC704\uD558\uC5EC \uC751\uC2DC\uC790\uB4E4 \uB07C\uB9AC\uB294 \uB9E8\uD574\uD2BC \uAC70\uB9AC\uAC00 2 \uC774\uD558\uB85C \uC549\uC9C0 \uB9D0\uC544 \uC8FC\uC138\uC694.</li><li>\uB2E8 \uC751\uC2DC\uC790\uAC00 \uC549\uC544\uC788\uB294 \uC790\uB9AC \uC0AC\uC774\uAC00 \uD30C\uD2F0\uC158\uC73C\uB85C \uB9C9\uD600 \uC788\uC744 \uACBD\uC6B0\uC5D0\uB294 \uD5C8\uC6A9\uD569\uB2C8\uB2E4.</li></ul><p>\uC790\uB9AC\uC5D0 \uC549\uC544\uC788\uB294 \uC751\uC2DC\uC790\uB4E4\uC758 \uC815\uBCF4\uC640 \uB300\uAE30\uC2E4 \uAD6C\uC870\uB97C \uB300\uAE30\uC2E4\uBCC4\uB85C \uB2F4\uC740 2\uCC28\uC6D0 \uBB38\uC790\uC5F4 \uBC30\uC5F4 places\uAC00 \uB9E4\uAC1C\uBCC0\uC218\uB85C \uC8FC\uC5B4\uC9D1\uB2C8\uB2E4. \uAC01 \uB300\uAE30\uC2E4\uBCC4\uB85C \uAC70\uB9AC\uB450\uAE30\uB97C \uC9C0\uD0A4\uACE0 \uC788\uC73C\uBA74 1\uC744, \uD55C \uBA85\uC774\uB77C\uB3C4 \uC9C0\uD0A4\uC9C0 \uC54A\uACE0 \uC788\uC73C\uBA74 0\uC744 \uBC30\uC5F4\uC5D0 \uB2F4\uC544 return \uD558\uB3C4\uB85D solution \uD568\uC218\uB97C \uC644\uC131\uD574 \uC8FC\uC138\uC694.</p><h2 id="\u1106\u116E\u11AB\u110C\u1166-\u1111\u116E\u11AF\u110B\u1175" tabindex="-1"><a class="header-anchor" href="#\u1106\u116E\u11AB\u110C\u1166-\u1111\u116E\u11AF\u110B\u1175" aria-hidden="true">#</a> \uBB38\uC81C \uD480\uC774</h2><p>\uAD6C\uD604\uBB38\uC81C\uC774\uB2E4. check \uD568\uC218\uB97C \uB9CC\uB4E4\uC5B4\uC11C, \uAC01 \uB300\uAE30\uC2E4\uC758 \uC88C\uC11D\uC744 \uD55C\uAC1C\uC529 \uBB38\uC81C\uC5D0 \uC8FC\uC5B4\uC9C4 \uC870\uAC74\uB300\uB85C \uB9DE\uB294\uC9C0 \uCCB4\uD06C\uD55C\uB2E4. \uC0AC\uB78C\uACFC \uC0AC\uB78C\uC0AC\uC774\uC5D0 \uD30C\uD2F0\uC158 \uC874\uC7AC \uD558\uBA74 ok, \uD55C\uC0AC\uB78C \uAE30\uC900\uC73C\uB85C -&gt; \uC0AC\uBC29\uC5D0 \uD30C\uD2F0\uC158 \uC788\uC73C\uBA74 ok, \uC0AC\uB78C\uC774 \uC544\uB2CC\uAC74 pass</p><h2 id="\u1111\u116E\u11AF\u110B\u1175\u110F\u1169\u1103\u1173" tabindex="-1"><a class="header-anchor" href="#\u1111\u116E\u11AF\u110B\u1175\u110F\u1169\u1103\u1173" aria-hidden="true">#</a> \uD480\uC774\uCF54\uB4DC</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">solution</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> places<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> len <span class="token operator">=</span> places<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> answer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>len<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> room <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> z <span class="token operator">=</span> <span class="token number">0</span> <span class="token punctuation">;</span> z <span class="token operator">&lt;</span>  places<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> z<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                room<span class="token punctuation">[</span>z<span class="token punctuation">]</span> <span class="token operator">=</span> places<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>z<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            answer<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">dfs</span><span class="token punctuation">(</span>room<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> answer<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token class-name">Boolean</span> <span class="token function">check</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> room<span class="token punctuation">,</span> <span class="token keyword">int</span> row<span class="token punctuation">,</span> <span class="token keyword">int</span> column<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>room<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>column<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;P&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">// \uC0AC\uB78C\uC544\uB2CC\uAC74 pass</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span><span class="token punctuation">(</span>row <span class="token operator">!=</span> <span class="token number">4</span> <span class="token operator">&amp;&amp;</span> room<span class="token punctuation">[</span>row<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>column<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;P&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>row <span class="token operator">!=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> room<span class="token punctuation">[</span>row<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>column<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;P&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>column <span class="token operator">!=</span> <span class="token number">4</span> <span class="token operator">&amp;&amp;</span> room<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>column<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;P&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>column <span class="token operator">!=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> room<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>column<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;P&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span><span class="token punctuation">(</span>row <span class="token operator">!=</span> <span class="token number">4</span> <span class="token operator">&amp;&amp;</span> column <span class="token operator">!=</span> <span class="token number">4</span>  <span class="token operator">&amp;&amp;</span> room<span class="token punctuation">[</span>row<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>column<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;P&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span> <span class="token operator">!</span>room<span class="token punctuation">[</span>row<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>column<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;X&quot;</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token operator">!</span>room<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>column<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;X&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>row <span class="token operator">!=</span> <span class="token number">4</span> <span class="token operator">&amp;&amp;</span> column <span class="token operator">!=</span> <span class="token number">0</span>  <span class="token operator">&amp;&amp;</span> room<span class="token punctuation">[</span>row<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>column<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;P&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span> <span class="token operator">!</span>room<span class="token punctuation">[</span>row<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>column<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;X&quot;</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token operator">!</span>room<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>column<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;X&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>row <span class="token operator">!=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> column <span class="token operator">!=</span> <span class="token number">4</span>  <span class="token operator">&amp;&amp;</span> room<span class="token punctuation">[</span>row<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>column<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;P&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span> <span class="token operator">!</span>room<span class="token punctuation">[</span>row<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>column<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;X&quot;</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token operator">!</span>room<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>column<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;X&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>row <span class="token operator">!=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> column <span class="token operator">!=</span> <span class="token number">0</span>  <span class="token operator">&amp;&amp;</span> room<span class="token punctuation">[</span>row<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>column<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;P&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span> <span class="token operator">!</span>room<span class="token punctuation">[</span>row<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>column<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;X&quot;</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token operator">!</span>room<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>column<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;X&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span><span class="token punctuation">(</span>row <span class="token operator">&lt;</span> <span class="token number">3</span> <span class="token operator">&amp;&amp;</span> room<span class="token punctuation">[</span>row<span class="token operator">+</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span>column<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;P&quot;</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>room<span class="token punctuation">[</span>row<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>column<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;X&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>row <span class="token operator">&gt;</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> room<span class="token punctuation">[</span>row<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span>column<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;P&quot;</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>room<span class="token punctuation">[</span>row<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>column<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;X&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>column <span class="token operator">&lt;</span> <span class="token number">3</span> <span class="token operator">&amp;&amp;</span> room<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>column<span class="token operator">+</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;P&quot;</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>room<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>column<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;X&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>column <span class="token operator">&gt;</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> room<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>column<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;P&quot;</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>room<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>column<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;X&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">int</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> room<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> r <span class="token operator">=</span> <span class="token number">0</span> <span class="token punctuation">;</span> r <span class="token operator">&lt;</span> <span class="token number">5</span> <span class="token punctuation">;</span> r<span class="token operator">++</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> c <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> c <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> c <span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token class-name">Boolean</span> ch <span class="token operator">=</span> <span class="token function">check</span><span class="token punctuation">(</span>room<span class="token punctuation">,</span> r<span class="token punctuation">,</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>ch<span class="token punctuation">)</span><span class="token punctuation">{</span>
                   <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function d(b,v){const s=p("ExternalLinkIcon");return t(),o("div",null,[k,n("p",null,[n("a",i,[r,c(s)])]),m])}var q=a(l,[["render",d],["__file","\uAC70\uB9AC\uB450\uAE30-\uD655\uC778\uD558\uAE30.html.vue"]]);export{q as default};
