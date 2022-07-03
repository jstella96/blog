import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";import{r,o as t,c as n,a,b as s,d as i,e}from"./app.d6b42b88.js";var c="/blog/assets/1.2c9a807f.png",d="/blog/assets/2.bdd11c60.png",p="/blog/assets/3.c724b60b.png",g="/blog/assets/5.c0f4e099.png",_="/blog/assets/6.06b71f9a.png",m="/blog/assets/7.d0a08181.png",b="/blog/assets/8.e64a1cbf.png",h="/blog/assets/10.5d91abd0.png",u="/blog/assets/11.4ab47d30.png",A="/blog/assets/12.7c1ad21d.png",f="/blog/assets/14.01dcc68b.png",y="/blog/assets/15.e2f18e05.png",v="/blog/assets/17.5feb357d.png",z="/blog/assets/18.6ecced1b.png",I="/blog/assets/19.c734390d.png",M="/blog/assets/20.e941164d.png",B="/blog/assets/21.6db9495e.png",k="/blog/assets/22.a3333508.png",S="/blog/assets/24.7bdd4760.png",D="/blog/assets/23.2684557d.png",x="/blog/assets/25.79820d3d.png",N="/blog/assets/26.c695b461.png",E="/blog/assets/27.fb8d851f.png";const R={},w=i('<h2 id="\u1109\u1175\u11AF\u1109\u1173\u11B8-\u1106\u1169\u11A8\u1111\u116D" tabindex="-1"><a class="header-anchor" href="#\u1109\u1175\u11AF\u1109\u1173\u11B8-\u1106\u1169\u11A8\u1111\u116D" aria-hidden="true">#</a> \uC2E4\uC2B5 \uBAA9\uD45C</h2><p>\uAD8C\uD55C \uD14C\uC2A4\uD2B8 : Lambda Function\uC744 \uC0AC\uC6A9\uD558\uC5EC DynamoDB\uC5D0 \uB370\uC774\uD130\uB97C \uC0BD\uC785\uD558\uACE0, \uAC1D\uCCB4\uB97C S3 \uBC84\uD0B7\uC5D0 \uC5C5\uB85C\uB4DC \uD558\uB294 \uC544\uD0A4\uD14D\uCCD0\uB97C \uAD6C\uC131\uD55C\uB2E4. \uC790\uACA9\uC99D\uBA85\uC740 IAM \uC5ED\uD560\uC744 \uC0AC\uC6A9\uD55C\uB2E4.</p><p><strong>\uC0AC\uC6A9\uD558\uB294 \uAE30\uC220</strong></p><ul><li>Amazon Simple Storage Service (Amazon S3) bucket</li><li>Amazon DynamoDB table</li><li>AWS Identity and Access Management (IAM) policy and role</li><li>AWS Lambda function</li></ul><h2 id="_1-s3-bucket-\u1109\u1162\u11BC\u1109\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#_1-s3-bucket-\u1109\u1162\u11BC\u1109\u1165\u11BC" aria-hidden="true">#</a> 1. S3 bucket \uC0DD\uC131</h2><ol><li><p>S3 \uC11C\uBE44\uC2A4\uC5D0\uC11C Create Bucket\uC5D0 \uB4E4\uC5B4\uAC04\uB2E4. Bucket name\uB9CC \uB4F1\uB85D\uD574\uC8FC\uACE0 \uAE30\uBCF8\uC124\uC815\uC73C\uB85C \uC0DD\uC131\uD55C\uB2E4.<br><img src="'+c+'" alt="s3" loading="lazy"></p></li><li><p>\uC18D\uC131(properties) \uD0ED\uC5D0\uC11C ARN\uAC12\uC744 \uC800\uC7A5\uD574\uB17C\uB2E4. \uC774 \uAC12\uC740 \uB2E4\uB978 \uC11C\uBE44\uC2A4\uC5D0\uC11C \uD574\uB2F9 S3\uC5D0 \uC811\uADFC\uD560 \uB54C \uC0AC\uC6A9\uD558\uB294 \uACE0\uC720\uD55C \uAC12\uC774 \uB41C\uB2E4.<br><img src="'+d+'" alt="s3" loading="lazy"></p></li></ol>',6),L={class:"custom-container info"},T=a("p",{class:"custom-container-title"},"ARN\uC774\uB780?",-1),W=a("p",null,[e("Amazon Resource Name\uC758 \uC57D\uC790\uB85C AWS \uB9AC\uC18C\uC2A4\uB97C \uACE0\uC720\uD558\uAC8C \uC2DD\uBCC4\uD558\uB294 \uAC12\uC774\uB2E4."),a("br"),e(" IAM\uC815\uCC45\uC774\uB098 API \uD638\uCD9C \uAC19\uC774 \uBAA8\uB4E0 AWS\uC5D0\uC11C \uB9AC\uC18C\uC2A4\uB97C \uBA85\uD655\uD558\uAC8C \uC9C0\uC815\uD574\uD590 \uD558\uB294\uACBD\uC6B0 ARN \uAC12\uC774 \uD544\uC694\uD558\uB2E4.")],-1),C={href:"https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html",target:"_blank",rel:"noopener noreferrer"},V=e("\uCD9C\uCC98"),F=i('<h2 id="_2-dynamodb-\u1110\u1166\u110B\u1175\u1107\u1173\u11AF-\u1109\u1162\u11BC\u1109\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#_2-dynamodb-\u1110\u1166\u110B\u1175\u1107\u1173\u11AF-\u1109\u1162\u11BC\u1109\u1165\u11BC" aria-hidden="true">#</a> 2. DynamoDB \uD14C\uC774\uBE14 \uC0DD\uC131</h2><ol><li>DynamoDB \uC5D0\uC11C table\uC744 \uC0DD\uC131\uD55C\uB2E4. table name \uACFC partision key\uB9CC \uC785\uB825\uD558\uACE0 \uAE30\uBCF8\uC124\uC815\uC73C\uB85C \uC0DD\uC131\uD55C\uB2E4. <img src="'+p+'" alt="DynamoDB" loading="lazy"></li></ol><h2 id="_3-iam-\u110B\u1167\u11A8\u1112\u1161\u11AF-role-\u1109\u1162\u11BC\u1109\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#_3-iam-\u110B\u1167\u11A8\u1112\u1161\u11AF-role-\u1109\u1162\u11BC\u1109\u1165\u11BC" aria-hidden="true">#</a> 3. IAM \uC5ED\uD560(Role) \uC0DD\uC131</h2><ol><li>s3 \uC640 DynamoDB \uAD8C\uD55C \uAC00\uC9C4 role \uC0DD\uC131, \uBA3C\uC800 roal \uC0DD\uC131\uC5D0 \uB4E4\uC5B4\uAC00\uC11C use case\uB97C lambda\uB85C \uD574\uC900\uB2E4.<br><img src="'+g+'" alt="IAM" loading="lazy"></li><li>permission \uC124\uC815 \uD0ED\uC5D0\uC11C S3\uC640 DynamoDB\uB97C \uC120\uD0DD\uD55C\uB2E4. <img src="'+_+'" alt="IAM" loading="lazy"><img src="'+m+'" alt="IAM" loading="lazy"></li><li>\uC5ED\uD560 \uC774\uB984\uC744 \uC801\uACE0 \uC5ED\uD560\uC744 \uC0DD\uC131\uD55C\uB2E4. <img src="'+b+'" alt="IAM" loading="lazy"></li><li>\uB9CC\uB4E4\uC5B4\uC9C4 \uC5ED\uD560\uC758 ARN\uC744 \uAE30\uB85D\uD574\uB454\uB2E4. <img src="'+h+'" alt="IAM" loading="lazy"></li></ol><h2 id="_4-s3-\u1107\u1165\u110F\u1175\u11BA\u110B\u1174-\u1112\u1169\u110E\u116E\u11AF-\u1112\u1165\u110B\u116D\u11BC-\u1109\u1165\u11AF\u110C\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#_4-s3-\u1107\u1165\u110F\u1175\u11BA\u110B\u1174-\u1112\u1169\u110E\u116E\u11AF-\u1112\u1165\u110B\u116D\u11BC-\u1109\u1165\u11AF\u110C\u1165\u11BC" aria-hidden="true">#</a> 4. s3 \uBC84\uD0B7\uC758 \uD638\uCD9C \uD5C8\uC6A9 \uC124\uC815</h2><p>S3\uC5D0 \uC5D1\uC138\uC2A4 \uD558\uAE30\uC704\uD574\uC11C\uB294 \uB450\uAC00\uC9C0 \uC0AC\uD56D\uC744 \uC124\uC815\uD574\uC918\uC57C\uD55C\uB2E4. IAM\uC744 \uD1B5\uD55C \uC784\uC2DC \uC790\uACA9 \uC99D\uBA85\uC774 \uD544\uC694\uD558\uACE0 \uB610\uD55C \uC811\uADFC\uD558\uB824\uB294 \uBC84\uD0B7 \uC815\uCC45\uC774 \uD638\uCD9C\uC744 \uD5C8\uC6A9\uD574\uC57C\uD55C\uB2E4.</p><ol><li><p>\uC544\uAE4C \uB9CC\uB4E4\uC5B4\uB454 \uBC84\uD0B7\uC5D0\uC11C Bucket police Edit\uC5D0 \uB4E4\uC5B4\uAC04\uB2E4.<br><img src="'+u+'" alt="Bucket police" loading="lazy"></p></li><li><p>Policy generator\uB97C \uC774\uC6A9\uD558\uC5EC \uC815\uCC45\uC744 \uB9CC\uB4E0\uB2E4.<br><img src="'+A+'" alt="Bucket police" loading="lazy"></p></li><li><p>\uC544\uB798 \uAC12\uB4E4 \uC785\uB825\uD55C\uB2E4. principal \uC5D0\uB294 I AM \uC5ED\uD560 ARN\uAC12\uC744 \uB123\uACE0, ARN\uC5D0\uB294 S3 \uBC84\uD0B7\uC758 ARN\uAC12\uC744 \uB123\uC5B4\uC8FC\uBA74 \uB41C\uB2E4<br><img src="'+f+'" alt="Bucket police" loading="lazy"> \uC8FC\uC758 : \uC2E4\uC81C \uC0AC\uC6A9\uD560\uB550 action\uC774 all\uC774 \uC544\uB2CC \uD2B9\uC815 action\uB9CC \uC0AC\uC6A9\uD558\uAC70\uB098 \uD55C\uB2E4.</p></li><li><p>\uB9CC\uB4E4\uC5B4\uC9C4 \uC815\uCC45\uC744 Bucket poicy\uC5D0 \uBD99\uC5EC\uB123\uAE30 \uD574\uC8FC\uACE0 \uC800\uC7A5<br><img src="'+y+'" alt="Bucket police" loading="lazy"><br><img src="'+v+'" alt="Bucket police" loading="lazy"></p></li></ol><h2 id="_5-lambda-function-\u1109\u1162\u11BC\u1109\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#_5-lambda-function-\u1109\u1162\u11BC\u1109\u1165\u11BC" aria-hidden="true">#</a> 5. Lambda Function \uC0DD\uC131</h2><ol><li><p>Lambda \uC11C\uBE44\uC2A4\uC5D0\uC11C create function\uC744 \uC120\uD0DD \uD6C4, \uD574\uB2F9 \uD568\uC218\uC758 \uC774\uB984\uACFC runtime\uC744 \uC124\uC815\uD55C\uB2E4.(\uC0AC\uC6A9\uD558\uB824\uB294 \uD658\uACBD \uC120\uD0DD)<br><img src="'+z+'" alt="IAM" loading="lazy"></p></li><li><p>\uC0AC\uC6A9\uD558\uB294 \uC5ED\uD560 \uC120\uD0DD\uD55C\uB2E4. \uC774 \uC2E4\uC2B5\uC758 \uBAA9\uD45C\uAC00 \uC5ED\uD560\uC774 \uBD80\uC5EC\uD558\uB294 \uAD8C\uD55C\uC744 \uD14C\uC2A4\uD2B8\uD558\uB294 \uAC83\uC778\uB370 \uC774 \uC2E4\uD589 \uC5ED\uD560\uC744 lambda \uD568\uC218\uAC00 \uB9E1\uB294\uB2E4.<br><img src="'+I+'" alt="IAM" loading="lazy"></p></li><li><p>\uD658\uACBD \uBCC0\uC218\uB97C \uC124\uC815\uD558\uB294 \uAC83\uC785\uB2C8\uB2E4. DYNAMODB_TABLE_NAME\uC5D0 2\uBC88\uC5D0\uC11C \uC0DD\uC131\uD55C table \uC774\uB984\uC744 \uB123\uC5B4\uC8FC\uACE0, S3_BUCKET_NAME \uC5D0 1\uBC88\uC5D0\uC11C \uC0DD\uC131\uD55C \uBC84\uD0B7 \uC774\uB984\uC744 \uB123\uC5B4\uC900\uB2E4.<br><img src="'+M+'" alt="IAM" loading="lazy"><img src="'+B+'" alt="IAM" loading="lazy"></p></li><li><p>\uCF54\uB4DC \uC791\uC131, \uD558\uACE0\uC790 \uD558\uB294 \uC791\uC5C5\uC5D0 \uB300\uD55C \uCF54\uB4DC\uB97C \uC791\uC131\uD55C\uB2E4. ex) s3\uC5D0 \uD30C\uC77C\uC744 \uB123\uACE0 dynamoDB\uC5D0 \uB370\uC774\uD130 \uC785\uB825 <img src="'+k+'" alt="IAM" loading="lazy"></p></li><li><p>Deploy\uBC84\uD2BC\uC744 \uB204\uB974\uBA74 \uCF54\uB4DC\uAC00 \uBC30\uD3EC \uB41C\uB2E4.<br><img src="'+S+'" alt="IAM" loading="lazy"></p></li><li><p>\uD568\uC218\uB3D9\uC791\uC744 \uD655\uC778\uD558\uAE30 \uC704\uD574 TEST\uB97C \uD558\uB098\uB9CC\uB4E0\uB2E4. \uD574\uB2F9 \uD568\uC218\uB294 \uC694\uCCAD\uAC12\uC744 \uBC1B\uC9C0 \uC54A\uC73C\uB2C8 \uC774\uB984\uB9CC \uC124\uC815\uD558\uACE0 \uB098\uBA38\uC9C0 \uC124\uC815\uC740 \uADF8\uB300\uB85C \uB450\uACE0 \uC800\uC7A5\uD55C\uB2E4.<br><img src="'+D+'" alt="IAM" loading="lazy"></p></li><li><p>TEST\uB97C \uB204\uB974\uBA74 \uC751\uB2F5\uC774 \uC544\uB798\uCC98\uB7FC \uC624\uACE0 statusCode 200 \uC751\uB2F5\uC774 \uC654\uC73C\uB2C8 \uC815\uC0C1\uC801\uC73C\uB85C \uC694\uAD6C\uC0AC\uD56D\uC744 \uC218\uD589 \uD588\uC74C\uC744 \uC54C \uC218 \uC788\uB2E4.<br><img src="'+x+'" alt="IAM" loading="lazy"></p></li></ol><h2 id="_6-\u1112\u116A\u11A8\u110B\u1175\u11AB-\u1106\u1175\u11BE-\u1106\u1161\u1106\u116E\u1105\u1175" tabindex="-1"><a class="header-anchor" href="#_6-\u1112\u116A\u11A8\u110B\u1175\u11AB-\u1106\u1175\u11BE-\u1106\u1161\u1106\u116E\u1105\u1175" aria-hidden="true">#</a> 6. \uD655\uC778 \uBC0F \uB9C8\uBB34\uB9AC</h2><ol><li>S3 \uC640 DynamoDB\uB85C \uC774\uB3D9\uD558\uC5EC \uC544\uB798\uCC98\uB7FC \uAC12\uC774 \uC815\uC0C1\uC801\uC73C\uB85C \uB4E4\uC5B4\uC654\uC74C\uC744 \uD655\uC778\uD55C\uB2E4. <img src="'+N+'" alt="IAM" loading="lazy"><img src="'+E+'" alt="IAM" loading="lazy"></li><li>\uD574\uB2F9 \uC2E4\uC2B5\uB54C \uC0AC\uC6A9\uD55C AWS \uB9AC\uC18C\uC2A4\uB97C \uAF2D \uC0AD\uC81C\uD574\uC57C\uD55C\uB2E4.\u{1F525}</li></ol><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>',12),P={href:"https://www.coursera.org/learn/aws-certified-solutions-architect-associate",target:"_blank",rel:"noopener noreferrer"},q=e("coursera\uAC15\uC758"),K=a("br",null,null,-1),O={href:"https://aws.amazon.com/ko/faqs/",target:"_blank",rel:"noopener noreferrer"},Q=e("aws FAQ");function U(Y,j){const l=r("ExternalLinkIcon");return t(),n("div",null,[w,a("div",L,[T,W,a("p",null,[a("a",C,[V,s(l)])])]),F,a("p",null,[a("a",P,[q,s(l)]),K,a("a",O,[Q,s(l)])])])}var J=o(R,[["render",U],["__file","domain1-Exercise.html.vue"]]);export{J as default};
