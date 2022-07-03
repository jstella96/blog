---
order: 1 
icon: creative
title: 덤프 풀이1
category: 
  - Aws
tag: 
  - SAA-C02 자격증
editLink: false
---

### 1번
문제 요점 : 암호화가 없는 단일 인스턴스인 Amazon RDS MySQL의 모든 기존 데이터와 새 데이터를 암호화해야 할 때 해당 작업은 어떻게 수행되어야 하나?   
정답 :  C, RDS 인스턴스의 스냅샷을 만든 후 암호화된 스냅샷에서 RDS를 복원한다
공식 문서 링크 : [링크](https://docs.aws.amazon.com/ko_kr/AmazonRDS/latest/UserGuide/Overview.Encryption.html)

### 2번 
문제 요점: 무기한으로 160TB데이터를 저장해야하며, 모든 데이터를 표준 SQL 또는 business intelligence tool을 이용해서 쿼리할 수 있어야 한다. 데이터는 한달에 두 번 이상 쿼리되지 않는다. 이때 가장 비용 효율이 좋은 솔루션은? 

정답: D, Store a subnet of the data in Amazon Redshift, and store the remaining data in Amazon S3. Use Amazon Redshift Spectrum to query the S3 data.

정답 이유:  Redshift vs Athena 이 두개가 데이터 쿼리서비스를 제공하기 때문에 헷갈리는 부분인데, 160TB라는 점에서 S3에 저장된 데이터만을 쿼리하는 Athena보다는  Redshift가 더 적합. 다른 답변에서 언급된 서비스들은 요구사항과 핀트가 맞지 않음

오답 및 키워드  

A :  **Amazon Aurora**란 MySQL 및 PostgreSQL과 호환되는 완전 관리형 관계형 데이터베이스 엔진이다.  [(링크)](https://docs.aws.amazon.com/ko_kr/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html)

B : **AWS Glue란** 데이터 분석, 기계 학습등을 위하여 사용하는 도구로, 여러 데이터 스토어 및 스트림 간에 데이터 통합에 필요한  모든 기능(추출, 분류등)을 제공하는 서비스 

   **Amazon Athena**란 표준 SQL을 사용해 Amazon S3에 저장된 데이터를 간편하게 분석할 수 있는 대화식 쿼리 서비스

C : **EMR(Elastic Map Reduce)란**  하둡등에 사용되는 방대한 데이터 분산 처리 프레임워크, 이름도 map reduce 

공식 문서 링크: [링크](https://docs.aws.amazon.com/ko_kr/redshift/latest/mgmt/welcome.html)

### 3번

문제 요점 :  아마존 로드 밸런서(ALB)가 AWS EC2( Auto scaling )로 트래픽을 전달하고 EC2에서  Amazon RDS에 엑세스 할 수 있도록 하는 아키텍처를 구성하려고 할 때 defence-in-depth approach to the network layout, 보안그룹과 network ACL에만 의존하지 말 것,  인터넷에서 최소한의 라우팅을  충족시키는 네트워크 설계는 ? 

답 B(토론의견),  사이트에 적혀있는 답은 C 

ALB는 트래픽을 받아야하니까 퍼블릭 서브넷에 놓고 RDS는 데이터 베이스니까 프라이빗 서브넷에 놓는게 맞다. 그럼 EC2는 어디에 두는게 보안적으로 맞을까? 프라이빗에 두는게 당연히 보안적으로 더 안전한데 가능한가가 의문. 아래 문서에 그렇게 구성할 수 있는 방법이 나온다.

공식 문서 링크: 
[링크](https://aws.amazon.com/premiumsupport/knowledge-center/public-load-balancer-private-ec2/)