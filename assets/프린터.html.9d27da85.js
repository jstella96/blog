import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,o as p,c as e,a as n,b as o,e as c,d as i}from"./app.d6b42b88.js";const l={},u=n("p",null,"\uD574\uB2F9\uD398\uC774\uC9C0\uB294 2022\uB144 3\uC6D4 \uB178\uC158\uC5D0\uC11C \uB9C8\uC774\uADF8\uB808\uC774\uC158 \uB418\uC5C8\uC2B5\uB2C8\uB2E4.",-1),r={href:"https://programmers.co.kr/learn/courses/30/lessons/42587",target:"_blank",rel:"noopener noreferrer"},k=c("\uBB38\uC81C \uB9C1\uD06C"),d=i(`<h2 id="\u1106\u116E\u11AB\u110C\u1166-\u1109\u1165\u11AF\u1106\u1167\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1106\u116E\u11AB\u110C\u1166-\u1109\u1165\u11AF\u1106\u1167\u11BC" aria-hidden="true">#</a> \uBB38\uC81C \uC124\uBA85</h2><p>\uC544\uB798\uC640 \uAC19\uC740 \uBC29\uC2DD\uC73C\uB85C \uC778\uC1C4 \uC791\uC5C5\uC744 \uC218\uD589\uD558\uB294 \uD504\uB9B0\uD130\uAC00 \uC788\uB2E4. \uD604\uC7AC \uB300\uAE30\uBAA9\uB85D\uC5D0 \uC788\uB294 \uBB38\uC11C\uC758 \uC911\uC694\uB3C4\uAC00 \uC21C\uC11C\uB300\uB85C \uB2F4\uAE34 \uBC30\uC5F4 <code>priorities</code>\uC640 \uB0B4\uAC00 \uC778\uC1C4\uB97C \uC694\uCCAD\uD55C \uBB38\uC11C\uAC00 \uD604\uC7AC \uB300\uAE30\uBAA9\uB85D\uC758 \uC5B4\uB5A4 \uC704\uCE58\uC5D0 \uC788\uB294\uC9C0\uB97C \uC54C\uB824\uC8FC\uB294 <code>location</code>\uC774 \uC8FC\uC5B4\uC9C8 \uB54C, \uB0B4\uAC00 \uC778\uC1C4\uB97C \uC694\uCCAD\uD55C \uBB38\uC11C\uAC00 \uBA87 \uBC88\uC9F8\uB85C \uC778\uC1C4\uB418\uB294\uC9C0\uB97C \uBC18\uD658\uD558\uB77C.</p><ol><li>\uC778\uC1C4 \uB300\uAE30\uBAA9\uB85D\uC758 \uAC00\uC7A5 \uC55E\uC5D0 \uC788\uB294 \uBB38\uC11C(J)\uB97C \uB300\uAE30\uBAA9\uB85D\uC5D0\uC11C \uAEBC\uB0C5\uB2C8\uB2E4.</li><li>\uB098\uBA38\uC9C0 \uC778\uC1C4 \uB300\uAE30\uBAA9\uB85D\uC5D0\uC11C J\uBCF4\uB2E4 \uC911\uC694\uB3C4\uAC00 \uB192\uC740 \uBB38\uC11C\uAC00 \uD55C \uAC1C\uB77C\uB3C4 \uC874\uC7AC\uD558\uBA74 J\uB97C \uB300\uAE30\uBAA9\uB85D\uC758 \uAC00\uC7A5 \uB9C8\uC9C0\uB9C9\uC5D0 \uB123\uC2B5\uB2C8\uB2E4.</li><li>\uADF8\uB807\uC9C0 \uC54A\uC73C\uBA74 J\uB97C \uC778\uC1C4\uD569\uB2C8\uB2E4.</li></ol><h2 id="\u110B\u1175\u11B8\u110E\u116E\u11AF\u1105\u1167\u11A8-\u110B\u1168\u1109\u1175" tabindex="-1"><a class="header-anchor" href="#\u110B\u1175\u11B8\u110E\u116E\u11AF\u1105\u1167\u11A8-\u110B\u1168\u1109\u1175" aria-hidden="true">#</a> \uC785\uCD9C\uB825 \uC608\uC2DC</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input:
    priorities: [2, 1, 3, 2]
    location: 2
Output: 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u1106\u116E\u11AB\u110C\u1166-\u1111\u116E\u11AF\u110B\u1175" tabindex="-1"><a class="header-anchor" href="#\u1106\u116E\u11AB\u110C\u1166-\u1111\u116E\u11AF\u110B\u1175" aria-hidden="true">#</a> \uBB38\uC81C \uD480\uC774</h2><p><strong>\uD480\uC7741</strong><br> queue\uB97C \uC774\uC6A9\uD558\uC5EC \uD504\uB9B0\uD2B8 \uB300\uAE30\uBAA9\uB85D\uC744 \uB9CC\uB4E4\uACE0, queue \uC548\uC5D0 \uB300\uAE30\uBAA9\uB85D\uC5D0 \uD604\uC7AC \uBCF4\uB2E4 \uC6B0\uC120\uC21C\uC704 \uB192\uC740 \uBB38\uC11C\uAC00 \uC788\uB2E4\uBA74 \uADF8 \uC55E\uC5D0 \uC788\uB294 \uBB38\uC11C\uB4E4\uC744 \uAEBC\uB0B4 \uB4A4\uB85C \uB123\uB294\uB2E4. \uC704 \uD480\uC774\uB294 O(n^2)\uC774 \uAC78\uB9B0\uB2E4.</p><p><strong>\uD480\uC7742</strong><br> \uC2A4\uD130\uB514\uC6D0\uB4E4\uACFC \uC785\uC73C\uB85C\uB9CC \uD480\uC5B4 \uBCF8 \uD480\uC774. \uD480\uC7741\uBCF4\uB2E4 \uC2DC\uAC04\uBCF5\uC7A1\uB3C4\uB294 \uC808\uC57D\uB418\uB098 \uBCF5\uC7A1\uD558\uB2E4.</p><ol><li>map \uC744 \uC774\uC6A9\uD574\uC11C \uC6B0\uC120\uC21C\uC704 \uBCC4\uB85C index\uC640 \uBB38\uC11CId\uB97C \uAC00\uC9C4 \uAC1D\uCCB4\uB97C \uC800\uC7A5 \uD574\uB17C\uB2E4</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>9 : [(A,1), (B,5)]
8 : [(C,5), (F,11)]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\uC6B0\uC120\uC21C\uC704\uAC00 \uB192\uC740 \uAC83 \uBD80\uD130 \uC21C\uCC28 \uC9C4\uD589\uC744 \uD55C\uB2E4.<br> \uB2E4\uC74C \uC6B0\uC120\uC21C\uC704\uB85C \uB118\uC5B4 \uAC14\uC744 \uB54C\uB294 \uC774\uC804\uC6B0\uC120\uC21C\uC704\uC758 \uB9C8\uC9C0\uB9C9 \uC778\uB371\uC2A4\uC758 \uB2E4\uC74C \uAC12\uBD80\uD130 \uC9C4\uD589\uC744 \uD558\uACE0 \uB05D\uB0A0 \uC744 \uB54C \uB2E4\uC2DC \uCC98\uC74C\uBD80\uD130 \uC9C4\uD589\uD55C\uB2E4. \uC774\uB54C \uC774 \uAC12\uC740 \uBC14\uC774\uB108\uB9AC \uC11C\uCE58\uB85C \uCC3E\uB294\uB2E4.<br> \uAC00\uB2A5\uD55C \uC774\uC720\uB294 \uBE44\uB85D \uBB38\uC11C\uC758 \uC21C\uC11C\uAC00 \uBC14\uB00C\uB354\uB77C\uB3C4 \uC6D0 \uC21C\uC5F4\uC774\uAE30 \uB54C\uBB38\uC5D0</li></ol><h2 id="\u1111\u116E\u11AF\u110B\u1175-\u110F\u1169\u1103\u1173-java" tabindex="-1"><a class="header-anchor" href="#\u1111\u116E\u11AF\u110B\u1175-\u110F\u1169\u1103\u1173-java" aria-hidden="true">#</a> \uD480\uC774 \uCF54\uB4DC Java</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">//\uB2E4\uC2DC\uD480\uAE30</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Document</span><span class="token punctuation">{</span>
	<span class="token keyword">int</span> id<span class="token punctuation">;</span>
	<span class="token keyword">int</span> priority<span class="token punctuation">;</span>
	<span class="token keyword">public</span> <span class="token class-name">Document</span><span class="token punctuation">(</span><span class="token keyword">int</span> id<span class="token punctuation">,</span> <span class="token keyword">int</span> priority<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>id<span class="token operator">=</span>id<span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>priority<span class="token operator">=</span>priority<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">solution</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> priorities<span class="token punctuation">,</span> <span class="token keyword">int</span> location<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> answer<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token class-name">Queue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Document</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">Q</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>priorities<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token class-name">Q</span><span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Document</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span>  priorities<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token class-name">Q</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// \uC544\uB798\uC11C \uC5C6\uC560\uB294 \uC791\uC5C5</span>
			<span class="token class-name">Document</span> tmp <span class="token operator">=</span> <span class="token class-name">Q</span><span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">Document</span> x <span class="token operator">:</span> <span class="token class-name">Q</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				<span class="token keyword">if</span><span class="token punctuation">(</span>x<span class="token punctuation">.</span>priority <span class="token operator">&gt;</span> tmp<span class="token punctuation">.</span>priority<span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// \uB300\uAE30\uBAA9\uB85D\uC5D0 \uD604\uC7AC \uBCF4\uB2E4 \uC6B0\uC120\uC21C\uC704 \uB192\uC740 \uBB38\uC11C\uAC00 \uC788\uB2E4.</span>
					<span class="token class-name">Q</span><span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>tmp<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \uB2E4\uC2DC \uB4A4\uB85C \uB123\uB294\uB2E4 .</span>
					tmp<span class="token operator">=</span><span class="token keyword">null</span><span class="token punctuation">;</span>
					<span class="token keyword">break</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span>tmp<span class="token operator">!=</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// \uC5C6\uC73C\uBA74 \uC9C0\uB098\uAC00\uAE30 \uBE60\uC9C0\uACE0</span>
				answer<span class="token operator">++</span><span class="token punctuation">;</span><span class="token comment">// \uC21C\uC11C\uCD94\uAC00</span>
				<span class="token keyword">if</span><span class="token punctuation">(</span>tmp<span class="token punctuation">.</span>id <span class="token operator">==</span> location<span class="token punctuation">)</span> <span class="token keyword">return</span> answer<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> answer<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u1111\u116E\u11AF\u110B\u1175-\u110F\u1169\u1103\u1173-javascript" tabindex="-1"><a class="header-anchor" href="#\u1111\u116E\u11AF\u110B\u1175-\u110F\u1169\u1103\u1173-javascript" aria-hidden="true">#</a> \uD480\uC774 \uCF54\uB4DC JavaScript</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">solution</span><span class="token punctuation">(</span><span class="token parameter">priorities<span class="token punctuation">,</span> location</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> answer <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> prioritiesWithIndex <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  priorities <span class="token operator">=</span> priorities<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>item<span class="token punctuation">,</span> index<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>priorities<span class="token punctuation">.</span>length <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> targetDoc <span class="token operator">=</span> priorities<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> checkResult <span class="token operator">=</span> <span class="token function">check</span><span class="token punctuation">(</span>priorities<span class="token punctuation">,</span> targetDoc<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>checkResult<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      priorities<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>targetDoc<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      answer<span class="token operator">++</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>targetDoc<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> location<span class="token punctuation">)</span> <span class="token keyword">return</span> answer<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> answer<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">check</span><span class="token punctuation">(</span><span class="token parameter">priorities<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> priority <span class="token keyword">of</span> priorities<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>priority<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span> target<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15);function v(m,b){const s=t("ExternalLinkIcon");return p(),e("div",null,[u,n("p",null,[n("a",r,[k,o(s)])]),d])}var y=a(l,[["render",v],["__file","\uD504\uB9B0\uD130.html.vue"]]);export{y as default};
