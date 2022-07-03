import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c as r,d as e}from"./app.d6b42b88.js";const o={},n=e('<div class="custom-container tip"><p class="custom-container-title">GOAL</p><p>Q. \uAE30\uC544 \uC0C1\uD0DC\uC758 \uAC1C\uB150\uACFC \uBC1C\uC0DD\uC6D0\uC778\uC740?<br> Q. \uAE30\uC544 \uC0C1\uD0DC\uC758 \uD574\uACB0\uBC29\uBC95\uC740?</p></div><p>\uD574\uB2F9\uD398\uC774\uC9C0\uB294 2022\uB144 3\uC6D4 \uB178\uC158\uC5D0\uC11C \uB9C8\uC774\uADF8\uB808\uC774\uC158 \uB418\uC5C8\uC2B5\uB2C8\uB2E4.</p><h2 id="\u1100\u1175\u110B\u1161\u1109\u1161\u11BC\u1110\u1162-starvation" tabindex="-1"><a class="header-anchor" href="#\u1100\u1175\u110B\u1161\u1109\u1161\u11BC\u1110\u1162-starvation" aria-hidden="true">#</a> \uAE30\uC544\uC0C1\uD0DC(Starvation)</h2><p><strong>\uAE30\uC544\uC0C1\uD0DC:</strong> \uC6B0\uC120\uC21C\uC704, \uC120\uC810 \uB4F1\uC73C\uB85C \uB0AE\uC740 \uC21C\uC704\uC758 \uD504\uB85C\uC138\uC2A4\uAC00 \uC790\uC6D0\uC744 \uD560\uB2F9\uBC1B\uC9C0 \uBABB\uD574 \uC2E4\uD589\uB418\uC9C0 \uBABB\uD558\uACE0 \uACC4\uC18D\uD574\uC11C \uB300\uAE30\uD558\uACE0 \uC788\uB294 \uC0C1\uD669<br><strong>\uBC1C\uC0DD\uC6D0\uC778:</strong> \uAD50\uCC29\uC0C1\uD0DC\uAC00 \uC790\uC6D0\uC744 \uC790\uC720\uB86D\uAC8C \uD560\uB2F9\uD55C \uC790\uC6D0\uC758 \uBD80\uC871\uC758 \uACB0\uACFC\uB77C\uBA74 \uAE30\uC544\uC0C1\uD0DC\uB294 \uC791\uC5C5\uC774 \uACB0\uCF54 \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uB294 \uC790\uC6D0\uC744 \uACC4\uC18D \uAE30\uB2E4\uB9AC\uB294 \uACB0\uACFC(\uAD50\uCC29\uC0C1\uD0DC)\uB97C \uC608\uBC29\uD558\uB824\uACE0 \uC790\uC6D0\uC744 \uD560\uB2F9\uD560 \uB54C \uBC1C\uC0DD(\uAE30\uB2E4\uB9BC)\uD558\uB294 \uACB0\uACFC\uC774\uB2E4.</p><h2 id="\u1100\u1175\u110B\u1161\u1109\u1161\u11BC\u1110\u1162-\u1112\u1162\u1100\u1167\u11AF\u110E\u1162\u11A8" tabindex="-1"><a class="header-anchor" href="#\u1100\u1175\u110B\u1161\u1109\u1161\u11BC\u1110\u1162-\u1112\u1162\u1100\u1167\u11AF\u110E\u1162\u11A8" aria-hidden="true">#</a> \uAE30\uC544\uC0C1\uD0DC \uD574\uACB0\uCC45</h2><p>\uC624\uB798 \uAE30\uB2E4\uB9B0 \uD504\uB85C\uC138\uC2A4\uC758 \uC6B0\uC120 \uC21C\uC704\uB97C \uB192\uC5EC\uC900\uB2E4. (aging \uAE30\uBC95)<br> \uD504\uB85C\uC138\uC2A4 \uC6B0\uC120 \uC21C\uC704\uB97C \uC218\uC2DC\uB85C \uBCC0\uACBD\uD574\uC11C \uAC01 \uD504\uB85C\uC138\uC2A4\uAC00 \uB192\uC740 \uC6B0\uC120 \uC21C\uC704\uB97C \uAC00\uC9C8 \uAE30\uD68C\uB97C \uC900\uB2E4<br> \uC6B0\uC120\uC21C\uC704\uAC00 \uC544\uB2CC \uC694\uCCAD \uC21C\uC11C\uB300\uB85C \uCC98\uB9AC\uD558\uB294 \uC694\uCCAD\uD050 \uC0AC\uC6A9(FIFO)</p><h2 id="\u1100\u116D\u110E\u1161\u11A8\u1109\u1161\u11BC\u1110\u1162-deadlock-vs-\u1100\u1175\u110B\u1161\u1109\u1161\u11BC\u1110\u1162-starvation" tabindex="-1"><a class="header-anchor" href="#\u1100\u116D\u110E\u1161\u11A8\u1109\u1161\u11BC\u1110\u1162-deadlock-vs-\u1100\u1175\u110B\u1161\u1109\u1161\u11BC\u1110\u1162-starvation" aria-hidden="true">#</a> \uAD50\uCC29\uC0C1\uD0DC(Deadlock) vs \uAE30\uC544\uC0C1\uD0DC(Starvation)</h2><p>\uAD50\uCC29\uC0C1\uD0DC(Deadlock)\uB294 \uD504\uB85C\uC138\uC2A4\uAC00 \uC790\uC6D0\uC744 \uC5BB\uC9C0 \uBABB\uD574 \uB2E4\uC74C \uCC98\uB9AC\uB97C \uBABB\uD558\uB294 \uC0C1\uD0DC<br> \uAE30\uC544\uC0C1\uD0DC(Starvation)\uB294 \uD504\uB85C\uC138\uC2A4\uAC00 \uC6D0\uD558\uB294 \uC790\uC6D0\uC744 \uACC4\uC18D \uD560\uB2F9\uBC1B\uC9C0 \uBABB\uD558\uB294 \uC0C1\uD0DC</p>',8),s=[n];function i(c,d){return t(),r("div",null,s)}var l=a(o,[["render",i],["__file","ch10-\uAE30\uC544\uC0C1\uD0DC.html.vue"]]);export{l as default};
