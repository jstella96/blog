import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,o as l,c as o,a,b as r,d as n,e as i}from"./app.d6b42b88.js";var c="/blog/assets/99.aaee768f.png",d="/blog/assets/1.99b20fdd.png",p="/blog/assets/2.00d45778.png",g="/blog/assets/3.0f9c5100.png",_="/blog/assets/4.915ab115.png",h="/blog/assets/5.27a6ffdf.png",b="/blog/assets/6.b0ca8917.png",m="/blog/assets/7.b89e2b9e.png",u="/blog/assets/8.a8656666.png",v="/blog/assets/9.1e2d8ed6.png",f="/blog/assets/12.65683f4b.png",y="/blog/assets/13.26a29f38.png",C="/blog/assets/14.a59f4f21.png",z="/blog/assets/15.8e4354aa.png",x="/blog/assets/16.d5546495.png",V="/blog/assets/18.0a38f188.png",P="/blog/assets/20.77fa9161.png",E="/blog/assets/21.5108437a.png",w="/blog/assets/22.088baea5.png",I="/blog/assets/23.6244ea3b.png",R="/blog/assets/28.45ddedd5.png";const k={},A=n('<h2 id="\u1109\u1175\u11AF\u1109\u1173\u11B8-\u1106\u1169\u11A8\u1111\u116D-\u1102\u1166\u1110\u1173\u110B\u116F\u110F\u1173-\u1109\u1162\u11BC\u1109\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1109\u1175\u11AF\u1109\u1173\u11B8-\u1106\u1169\u11A8\u1111\u116D-\u1102\u1166\u1110\u1173\u110B\u116F\u110F\u1173-\u1109\u1162\u11BC\u1109\u1165\u11BC" aria-hidden="true">#</a> \uC2E4\uC2B5 \uBAA9\uD45C : \uB124\uD2B8\uC6CC\uD06C \uC0DD\uC131</h2><p>2\uAC1C\uC758 \uD37C\uBE14\uB9AD \uC11C\uBE0C\uB137\uACFC 2\uAC1C\uC758 \uD504\uB77C\uC774\uBE57 \uC11C\uBE0C\uB137\uC774 \uC788\uB294 Amazon Virtual Private Cloud(VPC)\uB97C \uC0DD\uC131\uD55C \uB2E4\uC74C \uD37C\uBE14\uB9AD \uC11C\uBE0C\uB137\uC5D0\uC11C EC2 \uC778\uC2A4\uD134\uC2A4\uB97C \uC2DC\uC791\uD569\uB2C8\uB2E4.</p><p><strong>\uC0AC\uC6A9\uD558\uB294 \uAE30\uC220 \uBC0F \uAC1C\uB150</strong></p><ul><li>Amazon Virtual Private Cloud(VPC)</li><li>Amazon Elastic Compute Cloud(EC2)</li><li>subnets</li><li>gateway</li><li>security group</li><li>route table</li></ul><h2 id="_1-vpc-\u1109\u1162\u11BC\u1109\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#_1-vpc-\u1109\u1162\u11BC\u1109\u1165\u11BC" aria-hidden="true">#</a> 1. VPC \uC0DD\uC131</h2><ol><li><p>vpc\uD0D0\uC0C9 \uBA54\uB274\uBC14 \uC5D0\uC11C <code>your VPCs</code>\uB97C \uD074\uB9AD\uD569\uB2C8\uB2E4. \uB124\uD2B8\uC6CC\uD06C \uC124\uC815\uC740 \uC804\uBD80 \uC774 \uD0D0\uC0C9\uBA54\uB274\uBC14 \uC548\uC5D0\uC11C \uC774\uB8E8\uC5B4\uC9D1\uB2C8\uB2E4.<br><img src="'+c+'" alt="vpc" loading="lazy"></p></li><li><p>vpc\uB97C \uB9CC\uB4ED\uB2C8\uB2E4. \uC774\uB984\uACFC CIDR \uBC94\uC704\uB97C \uC9C0\uC815\uD569\uB2C8\uB2E4.(ex. \uC774\uB984: lab2, CIDR:10.0.0.0/16 )<br><img src="'+d+'" alt="vpc" loading="lazy"></p></li></ol><h2 id="_2-subnet-\u1109\u1162\u11BC\u1109\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#_2-subnet-\u1109\u1162\u11BC\u1109\u1165\u11BC" aria-hidden="true">#</a> 2. Subnet \uC0DD\uC131</h2><ol><li>VPC\uC5D0 \uD37C\uBE14\uB9AD 2\uAC1C, \uD504\uB77C\uC774\uBE57 2\uAC1C \uCD1D 4\uAC1C\uC758 \uC11C\uBE0C\uB137\uC744 \uB9CC\uB4E4\uC5B4\uC57C \uD569\uB2C8\uB2E4. \uC11C\uBE0C\uB137 \uD0ED\uC73C\uB85C \uB4E4\uC5B4\uAC00 \uB300\uC0C1 VPC\uB97C \uC120\uD0DD\uD569\uB2C8\uB2E4.<br><img src="'+p+'" alt="vpc" loading="lazy"></li><li>\uD37C\uBE14\uB9AD \uC11C\uBE0C\uB137 1\uC744 \uB9CC\uB4ED\uB2C8\uB2E4. CIDR: 10.0.1.0/24<br><img src="'+g+'" alt="vpc" loading="lazy"></li><li>\uD37C\uBE14\uB9AD \uC11C\uBE0C\uB137 2\uC744 \uB9CC\uB4ED\uB2C8\uB2E4. CIDR: 10.0.2.0/24<br><img src="'+_+'" alt="vpc" loading="lazy"></li><li>\uD504\uB77C\uC774\uBE57 \uC11C\uBE0C\uB137 1\uC744 \uB9CC\uB4ED\uB2C8\uB2E4. CIDR: 10.0.3.0/24<br><img src="'+h+'" alt="vpc" loading="lazy"></li><li>\uD504\uB77C\uC774\uBE57 \uC11C\uBE0C\uB137 2\uC744 \uB9CC\uB4ED\uB2C8\uB2E4. CIDR: 10.0.4.0/24<br><img src="'+b+'" alt="vpc" loading="lazy"></li></ol><h2 id="_3-internet-gateway-\u1109\u1162\u11BC\u1109\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#_3-internet-gateway-\u1109\u1162\u11BC\u1109\u1165\u11BC" aria-hidden="true">#</a> 3. internet gateway \uC0DD\uC131</h2><p>\uADF8 \uB2E4\uC74C\uC73C\uB85C \uD574\uC57C \uD560 \uC77C\uC740 \uC778\uD130\uB137 \uAC8C\uC774\uD2B8\uC6E8\uC774\uB97C \uB9CC\uB4DC\uB294 \uAC83\uC785\uB2C8\uB2E4.</p><ol><li><p>\uC778\uD130\uB137 \uAC8C\uC774\uD2B8\uC6E8\uC774 \uC0DD\uC131 \uD654\uBA74\uC5D0 \uB4E4\uC5B4\uAC00 \uC774\uB984\uC744 \uC9C0\uC815\uD558\uACE0 \uC0DD\uC131\uD569\uB2C8\uB2E4.<br><img src="'+m+'" alt="vpc" loading="lazy"></p></li><li><p>\uADF8\uB7EC\uB098 \uC544\uC9C1 \uC5F0\uACB0\uB41C vpc\uAC00 \uC5C6\uC5B4\uC11C \uC0C1\uD0DC\uAC00 <code>detached</code> \uC785\uB2C8\uB2E4. action\uC758 <code>attach to VPC</code>\uB97C \uD074\uB9AD\uD558\uC5EC VPC\uC5D0 \uC5F0\uACB0\uD569\uB2C8\uB2E4.<br><img src="'+u+'" alt="vpc" loading="lazy"><br><img src="'+v+'" alt="vpc" loading="lazy"></p></li></ol><h2 id="_4-configuring-the-route-table" tabindex="-1"><a class="header-anchor" href="#_4-configuring-the-route-table" aria-hidden="true">#</a> 4. Configuring the route table</h2><ol><li><p>\uD604\uC7AC\uB294 \uC778\uD130\uB137 \uD2B8\uB798\uD53D\uC774 VPC\uB85C \uD750\uB97C \uC218 \uC788\uC9C0\uB9CC \uC774 \uC778\uD130\uB137 \uD2B8\uB798\uD53D\uC774 \uD37C\uBE14\uB9AD \uC11C\uBE0C\uB137\uC5D0\uB9CC \uB3C4\uB2EC\uD558\uB3C4\uB85D \uD5C8\uC6A9\uD558\uB294 \uACBD\uB85C\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. \uB77C\uC6B0\uD305 \uD14C\uC774\uBE14\uB85C \uC774\uB3D9\uD558\uC5EC VPC\uB97C \uC120\uD0DD\uD569\uB2C8\uB2E4. \uADF8\uB7EC\uBA74 \uC790\uB3D9\uC73C\uB85C \uC0DD\uC131\uB41C \uAE30\uBCF8 \uB77C\uC6B0\uD305 \uD14C\uC774\uBE14\uC744 \uD655\uC778 \uD560 \uC218 \uC788\uB294\uB370. \uC774\uAC83\uC740 \uADF8\uB300\uB85C \uB461\uB2C8\uB2E4. \uC5EC\uAE30\uC5D0 \uC778\uD130\uB137 \uAC8C\uC774\uD2B8\uC6E8\uC774 \uACBD\uB85C\uB97C \uCD94\uAC00\uD558\uBA74 \uACF5\uAC1C \uBC0F \uBE44\uACF5\uAC1C\uAC00 \uC788\uB294 \uBAA8\uB4E0 \uC11C\uBE0C\uB137\uC5D0 \uC801\uC6A9\uB418\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.<br><img src="'+f+'" alt="vpc" loading="lazy"></p></li><li><p>public-subnet-route-table\uB77C\uB294 \uC774\uB984\uC73C\uB85C \uC0C8 \uB77C\uC6B0\uD305 \uD14C\uC774\uBE14\uC744 \uB9CC\uB4ED\uB2C8\uB2E4. \uADF8 \uD6C4 \uB77C\uC6B0\uD305 \uD14C\uC774\uBE14\uC744 \uC120\uD0DD\uD55C \uB2E4\uC74C Routes - Edit\uB97C \uD074\uB9AD\uD569\uB2C8\uB2E4.<br><img src="'+y+'" alt="vpc" loading="lazy"></p></li><li><p>destination\uC744 <code>0.0.0.0/0</code>\uB85C \uD569\uB2C8\uB2E4. \uC774\uAC8C \uC778\uD130\uB137 \uD2B8\uB798\uD53D\uC785\uB2C8\uB2E4. \uADF8\uB9AC\uACE0 \uD574\uB2F9 \uD2B8\uB798\uD53D\uC744 \uC778\uD130\uB137 \uAC8C\uC774\uD2B8 \uC6E8\uC774\uB85C \uB77C\uC6B0\uD305\uD558\uB3C4\uB85D \uC124\uC815\uD569\uB2C8\uB2E4.<br><img src="'+C+'" alt="vpc" loading="lazy"><img src="'+z+'" alt="vpc" loading="lazy"></p></li><li><p>\uC774\uC81C \uB77C\uC6B0\uD305 \uD14C\uC774\uBE14\uC774 \uC0DD\uACBC\uC2B5\uB2C8\uB2E4. \uADF8\uB7EC\uB098 \uC774 \uB77C\uC6B0\uD305 \uD14C\uC774\uBE14\uC774 \uC544\uC9C1 \uC544\uBB34 \uAC83\uB3C4 \uC5F0\uACB0\uB418\uC5B4 \uC788\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uAE30\uBCF8 \uD398\uC774\uC9C0\uC5D0\uC11C \uD655\uC778\uD558\uBA74 \uC0C8 \uB77C\uC6B0\uD305 \uD14C\uC774\uBE14\uC774 \uC544\uC9C1 \uAE30\uBCF8 \uB77C\uC6B0\uD305 \uD14C\uC774\uBE14\uC774 \uC544\uB2C8\uB77C\uB294 \uAC83\uC744 \uC54C \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC5EC\uAE30\uC5D0\uC11C <code>subnet associations</code> \uD56D\uBAA9\uC744 \uD074\uB9AD\uD558\uBA74 \uD604\uC7AC \uC11C\uBE0C\uB137 \uC5F0\uACB0\uC774 \uC5C6\uC74C\uC744 \uC54C \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB530\uB77C\uC11C \uC774 \uB77C\uC6B0\uD305 \uD14C\uC774\uBE14\uC740 \uD604\uC7AC \uC0AC\uC6A9\uB418\uC9C0 \uC54A\uACE0 \uC788\uC2B5\uB2C8\uB2E4.<br><img src="'+x+'" alt="vpc" loading="lazy"></p></li><li><p>\uC11C\uBE0C\uB137 \uC5F0\uACB0 \uD3B8\uC9D1\uC744 \uD074\uB9AD\uD55C \uB2E4\uC74C \uC5EC\uAE30\uC5D0\uC11C \uD37C\uBE14\uB9AD \uC11C\uBE0C\uB137 1\uACFC 2\uB97C \uC120\uD0DD\uD558\uACE0 \uC800\uC7A5\uD569\uB2C8\uB2E4.<br><img src="'+V+'" alt="vpc" loading="lazy"></p></li></ol><h2 id="_5-creating-the-ec2-instance-and-security-group" tabindex="-1"><a class="header-anchor" href="#_5-creating-the-ec2-instance-and-security-group" aria-hidden="true">#</a> 5. Creating the EC2 instance and security group</h2><p>\uC774\uC81C \uB77C\uC6B0\uD305 \uD14C\uC774\uBE14\uACFC \uC5F0\uACB0\uB41C \uB450 \uAC1C\uC758 \uC11C\uBE0C\uB137\uC774 \uC788\uC73C\uBA70 EC2 \uC778\uC2A4\uD134\uC2A4\uB97C \uC774\uB7EC\uD55C \uD37C\uBE14\uB9AD \uC11C\uBE0C\uB137 \uC911 \uD558\uB098\uB85C \uC0DD\uC131\uD558\uACA0\uC2B5\uB2C8\uB2E4.</p><ol><li>\uC778\uC2A4\uD134\uC2A4 \uC0DD\uC131\uC744 \uB204\uB978 \uD6C4 Amazon Linux 2 AMI\uB97C \uC120\uD0DD\uD569\uB2C8\uB2E4.<br><img src="'+P+'" alt="vpc" loading="lazy"></li><li>\uC778\uC2A4\uD134\uC2A4 \uC720\uD615\uC744 t2.micro\uB85C \uC120\uD0DD\uD569\uB2C8\uB2E4.<br><img src="'+E+'" alt="vpc" loading="lazy"></li><li>VPC\uB97C \uC120\uD0DD\uD558\uACE0 \uD37C\uBE14\uB9AD \uC11C\uBE0C\uB137\uC740 1,2 \uB458 \uC911 \uC544\uBB34\uAC70\uB098 \uD558\uB098 \uC120\uD0DD\uD569\uB2C8\uB2E4. \uD37C\uBE14\uB9AD IP \uC790\uB3D9 \uD560\uB2F9\uC744 \uD65C\uC131\uD654\uB85C \uBCC0\uACBD\uD569\uB2C8\uB2E4.<br><img src="'+w+'" alt="vpc" loading="lazy"></li><li>security group \uBCF4\uC548\uADF8\uB8F9 \uC124\uC815\uC740 HTTP \uB610\uB294 HTTPS\uC758 \uD2B8\uB798\uD53D\uC744 \uD5C8\uC6A9\uD558\uB3C4\uB85D \uAD6C\uC131\uD558\uC5EC \uBE0C\uB77C\uC6B0\uC800\uC640 \uAC1C\uBC29\uD615 \uC778\uD130\uB137\uC5D0\uC11C \uC561\uC138\uC2A4\uD560 \uC218 \uC788\uB3C4\uD569\uB2C8\uB2E4.<br><img src="'+I+'" alt="vpc" loading="lazy"></li></ol><h2 id="_6-vpc-dns-hostnames-\u1109\u1165\u11AF\u110C\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#_6-vpc-dns-hostnames-\u1109\u1165\u11AF\u110C\u1165\u11BC" aria-hidden="true">#</a> 6. vpc dns hostnames \uC124\uC815</h2><ol><li>\uC544\uB798\uC640 \uAC19\uC774 vpc\uC124\uC815\uC5D0 \uAC00\uC11C dns hostname \uC124\uC815\uC744 <code>Enable</code>\uB85C \uC218\uC815\uD569\uB2C8\uB2E4. <img src="'+R+'" alt="vpc" loading="lazy"></li></ol><h2 id="\u1106\u1161\u1106\u116E\u1105\u1175" tabindex="-1"><a class="header-anchor" href="#\u1106\u1161\u1106\u116E\u1105\u1175" aria-hidden="true">#</a> \uB9C8\uBB34\uB9AC</h2><p>\uC544\uC9C1 \uC5F0\uACB0\uC774 \uC131\uACF5\uC801\uC73C\uB85C \uB418\uC5C8\uB294\uC9C0 \uD655\uC778 \uD560 \uBC29\uBC95\uC740 \uC5C6\uC2B5\uB2C8\uB2E4. ec2\uC5D0 \uC811\uC18D\uD558\uC5EC \uD558\uB098\uC758 \uC11C\uBC84\uB97C \uAD6C\uB3D9\uC2DC\uD0A4\uACE0, ec2\uC758 <code>public dns address</code> \uC8FC\uC18C\uB85C \uC811\uADFC\uC774 \uB418\uB294\uC9C0 \uD655\uC778\uD569\uB2C8\uB2E4.</p><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>',21),D={href:"https://www.coursera.org/learn/aws-certified-solutions-architect-associate",target:"_blank",rel:"noopener noreferrer"},T=i("coursera\uAC15\uC758"),N=a("br",null,null,-1),B={href:"https://aws.amazon.com/ko/faqs/",target:"_blank",rel:"noopener noreferrer"},L=i("aws FAQ");function S(H,q){const e=t("ExternalLinkIcon");return l(),o("div",null,[A,a("p",null,[a("a",D,[T,r(e)]),N,a("a",B,[L,r(e)])])])}var Q=s(k,[["render",S],["__file","domain2-Exercise.html.vue"]]);export{Q as default};
