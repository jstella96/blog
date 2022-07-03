import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as a,c as i,d as n}from"./app.d6b42b88.js";var s="/blog/assets/data-system.bc2d10a9.png";const t={},d=n(`<blockquote><p>&quot;\uC774\uC81C\uBD80\uD130 \uAC1C\uBC1C\uC790\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uAC1C\uBC1C\uC790\uBFD0\uB9CC \uC544\uB2C8\uB77C \uB370\uC774\uD130 \uC2DC\uC2A4\uD15C \uC124\uACC4\uC790\uC774\uAE30\uB3C4 \uD558\uB2E4&quot;</p></blockquote><h2 id="\u1103\u1166\u110B\u1175\u1110\u1165-\u110C\u116E\u11BC\u1109\u1175\u11B7-\u110B\u1162\u1111\u1173\u11AF\u1105\u1175\u110F\u1166\u110B\u1175\u1109\u1167\u11AB" tabindex="-1"><a class="header-anchor" href="#\u1103\u1166\u110B\u1175\u1110\u1165-\u110C\u116E\u11BC\u1109\u1175\u11B7-\u110B\u1162\u1111\u1173\u11AF\u1105\u1175\u110F\u1166\u110B\u1175\u1109\u1167\u11AB" aria-hidden="true">#</a> \uB370\uC774\uD130 \uC911\uC2EC \uC560\uD50C\uB9AC\uCF00\uC774\uC158</h2><p>\uC624\uB298\uB0A0 \uB9CE\uC740 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC740 <strong>\uACC4\uC0B0 \uC911\uC2EC(compute-intensive)</strong> \uC774 \uC544\uB2CC <strong>\uB370\uC774\uD130 \uC911\uC2EC(data-intensive)</strong> \uC801\uC774\uB2E4. \uC774\uB7EC\uD55C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C \uC131\uB2A5\uC744 \uC81C\uD55C\uD558\uB294 \uC694\uC18C\uB294 CPU\uBCF4\uB2E4\uB294 \uB370\uC774\uD130\uC758 \uC591, \uB370\uC774\uD130\uC758 \uBCF5\uC7A1\uB3C4, \uB370\uC774\uD130\uC758 \uBCC0\uD654 \uC18D\uB3C4\uB2E4. \uC77C\uBC18\uC801\uC73C\uB85C \uC774\uB7F0 \uB370\uC774\uD130 \uC911\uC2EC \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC740 \uACF5\uD1B5\uC73C\uB85C \uC544\uB798\uC640 \uAC19\uC740 \uC694\uC18C\uB4E4\uC744 \uD544\uC694\uB85C \uD55C\uB2E4.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>- \uB370\uC774\uD130\uB97C \uC800\uC7A5 (DB)
- \uC77D\uAE30 \uC18D\uB3C4 \uD5A5\uC0C1\uC744 \uC704\uD574 \uAC12\uC774 \uBE44\uC2FC \uC218\uD589 \uACB0\uACFC\uB97C \uAE30\uC5B5 (\uCE90\uC2DC)
- \uD0A4\uC6CC\uB4DC\uB85C \uB370\uC774\uD130 \uAC80\uC0C9\uD558\uAC70\uB098 \uD544\uD130\uB9C1\uD558\uAC8C \uC81C\uACF5 (\uAC80\uC0C9 \uC0C9\uC778-search index)
- \uBE44\uB3D9\uAE30 \uCC98\uB9AC\uB97C \uC704\uD574\uC11C \uB2E4\uB978 \uD504\uB85C\uC138\uC2A4\uB85C \uBA54\uC2DC\uC9C0 \uC804\uC1A1(\uC2A4\uD2B8\uB9BC \uCC98\uB9AC-stream processing)
- \uC8FC\uAE30\uC801\uC73C\uB85C \uB300\uB7C9\uC758 \uB204\uC801\uB41C \uB370\uC774\uD130\uB97C \uBD84\uC11D(\uC77C\uAD04/\uBC30\uCE58 \uCC98\uB9AC-batch processing)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC624\uB298\uB0A0\uC758 \uB370\uC774\uD130 \uC2DC\uC2A4\uD15C\uC740 \uC131\uACF5\uC801\uC73C\uB85C \uCD94\uC0C1\uD654\uB418\uC5B4\uC788\uC5B4\uC11C \uC704\uC640 \uAC19\uC740 \uB0B4\uC6A9\uC774 \uB2F9\uC5F0\uD558\uAC8C \uB4E4\uB9AC\uAE30\uB3C4 \uD55C\uB2E4. \uADF8\uB7EC\uB098 \uD604\uC2E4\uC740 \uC774\uB860\uB9CC\uD07C \uAC04\uB2E8\uD558\uC9C0 \uC54A\uB2E4. \uB370\uC774\uD130 \uBCA0\uC774\uC2A4 \uC2DC\uC2A4\uD15C \uB610\uD55C \uC800\uB9C8\uB2E4\uC758 \uD2B9\uC131\uC744 \uAC00\uC9C0\uACE0 \uC788\uAE30 \uB54C\uBB38\uC5D0 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uB9CC\uB4E4 \uB54C \uC5B4\uB5A4 \uB3C4\uAD6C\uC640 \uC5B4\uB5A4 \uC811\uADFC \uBC29\uC2DD\uC774 \uC218\uD589 \uC911\uC778 \uC791\uC5C5\uC5D0 \uAC00\uC7A5 \uC801\uD569\uD55C\uC9C0 \uC0DD\uAC01\uD574\uC57C \uD55C\uB2E4. \uC774\uD6C4 \uC774 \uCC45\uC744 \uACF5\uBD80\uD574 \uB098\uAC00\uBA74\uC11C \uB2E4\uC591\uD55C \uB3C4\uAD6C\uC758 \uACF5\uD1B5\uC73C\uB85C \uC9C0\uB2CC \uAC83\uC740 \uBB34\uC5C7\uC778\uC9C0 \uC11C\uB85C \uAD6C\uBCC4\uB418\uB294 \uAC83\uC740 \uBB34\uC5C7\uC778\uC9C0 \uADF8\uB9AC\uACE0 \uC5B4\uB5BB\uAC8C \uADF8\uB7EC\uD55C \uD2B9\uC131\uC744 \uAD6C\uD604\uD588\uB294\uC9C0 \uC54C\uC544\uBCF8\uB2E4.</p><h2 id="\u1103\u1166\u110B\u1175\u1110\u1165-\u1109\u1175\u1109\u1173\u1110\u1166\u11B7\u110B\u1166-\u1103\u1162\u1112\u1161\u11AB-\u1109\u1162\u11BC\u1100\u1161\u11A8" tabindex="-1"><a class="header-anchor" href="#\u1103\u1166\u110B\u1175\u1110\u1165-\u1109\u1175\u1109\u1173\u1110\u1166\u11B7\u110B\u1166-\u1103\u1162\u1112\u1161\u11AB-\u1109\u1162\u11BC\u1100\u1161\u11A8" aria-hidden="true">#</a> \uB370\uC774\uD130 \uC2DC\uC2A4\uD15C\uC5D0 \uB300\uD55C \uC0DD\uAC01</h2><p>\uC77C\uBC18\uC801\uC73C\uB85C \uB370\uC774\uD130\uBCA0\uC774\uC2A4, \uCE90\uC2DC \uB4F1\uC740 \uB370\uC774\uD130 \uC800\uC7A5\uC774\uB780 \uCE21\uBA74\uC5D0\uC11C \uD45C\uBA74\uC801\uC73C\uB85C \uBE44\uC2B7\uD558\uB354\uB77C\uB3C4 \uB9E4\uC6B0 \uB2E4\uB978 \uC811\uADFC \uD328\uD134\uC744 \uAC00\uC9C0\uACE0 \uC788\uC5B4 \uC11C\uB85C \uB2E4\uB978 \uC131\uB2A5 \uD2B9\uC131\uC774 \uC788\uAE30 \uB54C\uBB38\uC5D0 \uAD6C\uD604 \uBC29\uC2DD\uC774 \uB9E4\uC6B0 \uB2E4\uB974\uB2E4.</p><p>\uADF8\uB7F0\uB370 \uC65C \uC774\uB97C \uB370\uC774\uD130 \uC2DC\uC2A4\uD15C\uC774\uB77C\uB294 \uD3EC\uAD04\uC801 \uC6A9\uC5B4\uB85C \uBB36\uC5B4\uC57C \uD560\uAE4C?</p><p>\uCCAB \uBC88\uC9F8\uB85C \uCD5C\uADFC\uC5D0 \uB4F1\uC7A5\uD55C \uB370\uC774\uD130 \uC2DC\uC2A4\uD15C \uB3C4\uAD6C\uB4E4\uC740 \uB2E4\uC591\uD55C \uC0AC\uC6A9 \uC0AC\uB840\uC5D0 \uCD5C\uC801\uD654\uB418\uC5C8\uAE30 \uB54C\uBB38\uC5D0 \uB354 \uC774\uC0C1 \uC804\uD1B5\uC801\uC778 \uBD84\uB958\uC5D0 \uB531 \uB4E4\uC5B4\uB9DE\uC9C0 \uC54A\uB294\uB2E4. \uBA54\uC2DC\uC9C0 \uD050\uB85C \uC0AC\uC6A9\uD558\uB294 \uB370\uC774\uD130 \uC2A4\uD1A0\uC5B4\uC778 \uB808\uB514\uC2A4, \uB370\uC774\uD130 \uBCA0\uC774\uC2A4\uCC98\uB7FC \uC9C0\uC18D\uC131\uC744 \uBCF4\uC7A5\uD558\uB294 \uBA54\uC2DC\uC9C0 \uD050\uC778 \uC544\uD30C\uCE58 \uCE74\uD504\uCE74 \uB4F1\uC744 \uC608\uB85C \uB4E4 \uC218 \uC788\uB2E4. \uBD84\uB958 \uAC04\uC758 \uACBD\uACC4\uAC00 \uD750\uB824\uC9C0\uACE0 \uC788\uB2E4.</p><p>\uB450 \uBC88\uC9F8\uB85C\uB294 \uC810\uC810 \uB354 \uB9CE\uC740 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC774 \uB2E8\uC77C \uB3C4\uAD6C\uB85C\uB294 \uB354 \uC774\uC0C1 \uB370\uC774\uD130 \uCC98\uB9AC\uC640 \uC800\uC7A5 \uBAA8\uB450\uB97C \uB9CC\uC871\uC2DC\uD0AC \uC218 \uC5C6\uB294 \uAD11\uBC94\uC704\uD55C \uC694\uAD6C\uC0AC\uD56D\uC744 \uAC00\uC9C0\uACE0 \uC788\uB2E4, \uB300\uC2E0 \uC791\uC5C5(work)\uC744 \uB2E8\uC77C \uB3C4\uAD6C\uC5D0\uC11C \uD6A8\uC728\uC801\uC73C\uB85C \uC218\uD589\uD560 \uC218 \uC788\uB294 \uD0DC\uC2A4\uD06C(task)\uB85C \uB098\uB204\uACE0 <strong>\uB2E4\uC591\uD55C \uB3C4\uAD6C\uB4E4\uC740 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uCF54\uB4DC\uB97C \uC774\uC6A9\uD574 \uC11C\uB85C \uC5F0\uACB0\uD55C\uB2E4.</strong> \uC608\uB97C \uB4E4\uC5B4 \uC804\uBB38 \uAC80\uC0C9\uC11C\uBC84\uC758 \uACBD\uC6B0 \uBA54\uC778 \uB370\uC774\uD130 \uBCA0\uC774\uC2A4\uC640 \uB3D9\uAE30\uD654\uB41C \uCE90\uC2DC\uB098 \uC0C9\uC778\uC744 \uC720\uC9C0\uD558\uB294 \uAC83\uC740 \uBCF4\uD1B5 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uCF54\uB4DC\uC758 \uCC45\uC784\uC774\uB2E4. \uC544\uB798 \uADF8\uB9BC\uC744 \uBCF4\uC790.</p><p><img src="`+s+`" alt="system_architecture \uC608\uC2DC" loading="lazy"></p><p>\uC774\uB807\uB4EF \uC11C\uBE44\uC2A4 \uC81C\uACF5\uC744 \uC704\uD574 \uAC01 \uB3C4\uAD6C\uB97C \uACB0\uD569\uD560\uB54C API\uB294 \uD074\uB77C\uC774\uC5B8\uD2B8\uAC00 \uBAA8\uB974\uAC8C \uC138\uBD80 \uAD6C\uD604\uC0AC\uD56D\uC744 \uC228\uAE34\uB2E4. <strong>\uC774\uC81C\uBD80\uD130 \uAC1C\uBC1C\uC790\uB294 \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uAC1C\uBC1C\uC790\uBFD0\uB9CC \uC544\uB2C8\uB77C \uB370\uC774\uD130 \uC2DC\uC2A4\uD15C \uC124\uACC4\uC790\uC774\uAE30\uB3C4 \uD558\uB2E4.</strong></p><h2 id="\u1109\u1175\u11AB\u1105\u116C\u1109\u1165\u11BC-\u1112\u116A\u11A8\u110C\u1161\u11BC\u1109\u1165\u11BC-\u110B\u1172\u110C\u1175\u1107\u1169\u1109\u116E\u1109\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1109\u1175\u11AB\u1105\u116C\u1109\u1165\u11BC-\u1112\u116A\u11A8\u110C\u1161\u11BC\u1109\u1165\u11BC-\u110B\u1172\u110C\u1175\u1107\u1169\u1109\u116E\u1109\u1165\u11BC" aria-hidden="true">#</a> \uC2E0\uB8B0\uC131, \uD655\uC7A5\uC131, \uC720\uC9C0\uBCF4\uC218\uC131</h2><p>\uB370\uC774\uD130 \uC2DC\uC2A4\uD15C\uC774\uB098 \uC11C\uBE44\uC2A4\uB97C \uC124\uACC4\uD560 \uB54C \uAE4C\uB2E4\uB85C\uC6B4 \uBB38\uC81C\uAC00 \uB9CE\uC774 \uC0DD\uAE34\uB2E4. \uB0B4\uBD80\uC801\uC73C\uB85C \uBB38\uC81C\uAC00 \uC788\uC5B4\uB3C4 \uB370\uC774\uD130\uB97C \uC815\uD655\uD558\uACE0 \uC644\uC804\uD558\uAC8C \uC720\uC9C0\uD558\uB824\uBA74 \uC5B4\uB5BB\uAC8C \uD574\uC57C \uD560\uAE4C? \uC77C\uAD00\uB418\uAC8C \uC88B\uC740 \uC131\uB2A5\uC740 \uC5B4\uB5BB\uAC8C \uC81C\uACF5\uD560 \uC218 \uC788\uC744\uC9C0? \uBD80\uD558 \uC99D\uAC00\uB97C \uB2E4\uB8E8\uAE30 \uC704\uD574 \uC5B4\uB5BB\uAC8C \uADDC\uBAA8\uB97C \uD655\uC7A5\uD560\uAE4C? \uC11C\uBE44\uC2A4\uB97C \uC704\uD574 \uC88B\uC740 API\uB294 \uC5B4\uB5A4 \uBAA8\uC2B5\uC77C\uAE4C?</p><p>\uC774 \uCC45\uC5D0\uC11C\uB294 \uB300\uBD80\uBD84\uC758 \uC18C\uD504\uD2B8\uC6E8\uC5B4 \uC2DC\uC2A4\uD15C\uC5D0\uC11C \uC911\uC694\uD558\uAC8C \uC5EC\uAE30\uB294 \uC138 \uAC00\uC9C0 \uAD00\uC2EC\uC0AC\uC5D0 \uC911\uC810\uC744 \uB454\uB2E4.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\uC2E0\uB8B0\uC131(Reliability)
\uD558\uD2B8\uC6E8\uC5B4\uB098 \uC18C\uD504\uD2B8\uC6E8\uC5B4 \uACB0\uD568, \uC778\uC801 \uC624\uB958 \uAC19\uC740 \uC5ED\uACBD\uC5D0 \uC9C1\uBA74\uD558\uB354\uB77C\uB3C4 \uC2DC\uC2A4\uD15C\uC740 \uC62C\uBC14\uB974\uAC8C \uB3D9\uC791\uD574\uC57C \uD55C\uB2E4.

\uD655\uC7A5\uC131(Scalability)
\uC2DC\uC2A4\uD15C\uC758 \uB370\uC774\uD130\uC758 \uC591, \uD2B8\uB798\uD53D \uC591, \uBCF5\uC7A1\uB3C4\uAC00 \uC99D\uAC00\uD574\uB3C4 \uC774\uB97C \uCC98\uB9AC\uD560 \uC218 \uC788\uB294 \uC801\uC808\uD55C \uBC29\uBC95\uC774 \uC788\uC5B4\uC57C \uD55C\uB2E4.

\uC720\uC9C0\uBCF4\uC218\uC131(Maintainability)
\uBAA8\uB4E0 \uC0AC\uC6A9\uC790\uAC00 \uC2DC\uC2A4\uD15C \uC0C1\uC5D0\uC11C \uC0DD\uC0B0\uC801\uC73C\uB85C \uC791\uC5C5\uD560 \uC218 \uC788\uAC8C \uD574\uC57C \uD55C\uB2E4.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uAC01 \uB2E8\uC5B4\uB97C \uC774\uD574\uD558\uB294 \uAC83, \uAC1C\uBC1C\uD560 \uB54C \uC774 3\uAC00\uC9C0 \uAD00\uC810\uC5D0\uC11C \uC124\uAC8C \uD558\uACE0 \uAD6C\uD604\uD558\uB294 \uAC83\uC740 \uC88B\uC740 \uAC1C\uBC1C\uC790\uAC00 \uAC16\uCDB0\uC57C \uD558\uB294 \uC790\uC9C8 \uC911\uC5D0 \uD558\uB098\uB77C\uACE0 \uC0DD\uAC01\uD55C\uB2E4. \uAC01 \uB2E8\uC5B4\uC5D0 \uB300\uD55C \uC790\uC138\uD55C \uC124\uBA85\uC740 \uB2E4\uC74C \uD3EC\uC2A4\uD305\uC5D0\uC11C \uACC4\uC18D\uD558\uACA0\uB2E4.</p><h2 id="\u110B\u1169\u1102\u1173\u11AF\u110B\u1174-\u1100\u1169\u11BC\u1107\u116E-\u1112\u1161\u11AB\u1106\u1161\u1103\u1175" tabindex="-1"><a class="header-anchor" href="#\u110B\u1169\u1102\u1173\u11AF\u110B\u1174-\u1100\u1169\u11BC\u1107\u116E-\u1112\u1161\u11AB\u1106\u1161\u1103\u1175" aria-hidden="true">#</a> \uC624\uB298\uC758 \uACF5\uBD80 \uD55C\uB9C8\uB514</h2><p>\uC2DC\uC2A4\uD15C\uC774 \uBCF5\uC7A1\uD574\uC9C8\uC218\uB85D API\uC5D0\uC11C \uCC98\uB9AC\uD560 \uC77C\uC740 \uB9CE\uC544\uC9C4\uB2E4. \uC2E4\uBB34\uC5D0\uC11C \uB370\uC774\uD130\uB97C \uB2E4\uB8E8\uAE30 \uC704\uD574 \uC5B4\uB5A4 \uAE30\uC220\uB4E4\uC774 \uC788\uACE0, \uC774\uB7EC\uD55C \uAE30\uC220\uB4E4\uC774 \uC5B4\uB5BB\uAC8C \uC5F0\uACB0\uB418\uC5B4\uC788\uB294\uC9C0 \uB610 \uAC1C\uBC1C\uC790\uC758 \uC5ED\uD560\uC740 \uBB34\uC5C7\uC778\uC9C0 \uBA38\uB9AC\uB85C \uB300\uB7B5\uC801\uC73C\uB85C \uC54C\uACE0 \uC788\uB358 \uAC83\uC744 \uC774\uB807\uAC8C \uC815\uB9AC\uD574 \uBCFC \uC218 \uC788\uB2E4\uB294 \uAC83\uC740 \uC88B\uC740 \uACF5\uBD80\uC758 \uAE30\uD68C\uC774\uB2E4. \uC544\uC9C1 \uBCF5\uC7A1\uD55C \uC544\uD0A4\uD14D\uCC98\uB294 \uB2E4\uB904\uBCF8 \uC801\uC774 \uC5C6\uC9C0\uB9CC \uC2E4\uBB34\uC5D0\uC11C \uB2E4\uB904\uBCFC \uAE30\uD68C\uAC00 \uC624\uAE38 \uBC14\uB780\uB2E4.</p>`,19),r=[d];function l(c,o){return a(),i("div",null,r)}var u=e(t,[["render",l],["__file","ch0-data-system.html.vue"]]);export{u as default};
