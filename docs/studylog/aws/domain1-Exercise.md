---
order: 15
icon: creative
title: Domain1 실습
category: 
  - Aws
tag: 
  - SAA-C02 자격증
editLink: false
---

## 실습 목표
권한 테스트 : Lambda Function을 사용하여  DynamoDB에 데이터를 삽입하고, 객체를 S3 버킷에 업로드 하는 아키텍쳐를 구성한다. 자격증명은 IAM 역할을 사용한다. 

**사용하는 기술**
- Amazon Simple Storage Service (Amazon S3) bucket
- Amazon DynamoDB table
- AWS Identity and Access Management (IAM) policy and role
- AWS Lambda function


## 1. S3 bucket 생성
 1) S3 서비스에서 Create Bucket에 들어간다. Bucket name만 등록해주고 기본설정으로 생성한다.  
 ![s3](./img/domain1/exercise/1.png)    

 2) 속성(properties) 탭에서 ARN값을 저장해논다. 이 값은 다른 서비스에서 해당 S3에 접근할 때 사용하는 고유한 값이 된다.   
 ![s3](./img/domain1/exercise/2.png)

:::info ARN이란?

Amazon Resource Name의 약자로 AWS 리소스를 고유하게 식별하는 값이다.  
IAM정책이나 API 호출 같이 모든 AWS에서 리소스를 명확하게 지정해햐 하는경우 ARN 값이 필요하다.

[출처](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html)
 :::
     
## 2. DynamoDB 테이블 생성
 1) DynamoDB 에서 table을 생성한다. table name 과 partision key만 입력하고 기본설정으로 생성한다. 
 ![DynamoDB](./img/domain1/exercise/3.png)

## 3. IAM 역할(Role) 생성  
1. s3 와 DynamoDB 권한 가진 role 생성, 먼저 roal 생성에 들어가서 use case를 lambda로 해준다.  
![IAM](./img/domain1/exercise/5.png)
2. permission 설정 탭에서 S3와 DynamoDB를 선택한다.
![IAM](./img/domain1/exercise/6.png)
![IAM](./img/domain1/exercise/7.png)
3. 역할 이름을 적고 역할을 생성한다.
![IAM](./img/domain1/exercise/8.png)
4. 만들어진 역할의 ARN을 기록해둔다.
![IAM](./img/domain1/exercise/10.png)


## 4. s3 버킷의 호출 허용 설정  
S3에 엑세스 하기위해서는 두가지 사항을 설정해줘야한다. IAM을 통한 임시 자격 증명이 필요하고 또한 접근하려는 버킷 정책이 호출을 허용해야한다.
1. 아까 만들어둔 버킷에서 Bucket police Edit에 들어간다.  
![Bucket police](./img/domain1/exercise/11.png)
2. Policy generator를 이용하여 정책을 만든다.    
![Bucket police](./img/domain1/exercise/12.png)
3. 아래 값들 입력한다. principal 에는 I AM 역할 ARN값을 넣고, ARN에는 S3 버킷의 ARN값을 넣어주면 된다  
![Bucket police](./img/domain1/exercise/14.png)
주의 :  실제 사용할땐 action이 all이 아닌 특정 action만 사용하거나 한다.  

4. 만들어진 정책을 Bucket poicy에 붙여넣기 해주고 저장  
![Bucket police](./img/domain1/exercise/15.png)   
![Bucket police](./img/domain1/exercise/17.png)   



## 5. Lambda Function 생성


1. Lambda 서비스에서 create function을 선택 후, 해당 함수의 이름과 runtime을 설정한다.(사용하려는 환경 선택)     
![IAM](./img/domain1/exercise/18.png)   
2. 사용하는 역할 선택한다. 이 실습의 목표가 역할이 부여하는 권한을 테스트하는 것인데 이 실행 역할을 lambda 함수가 맡는다.  
![IAM](./img/domain1/exercise/19.png) 
3. 환경 변수를 설정하는 것입니다.  DYNAMODB_TABLE_NAME에 2번에서 생성한 table 이름을 넣어주고, S3_BUCKET_NAME 에 1번에서 생성한 버킷 이름을 넣어준다.    
![IAM](./img/domain1/exercise/20.png) 
![IAM](./img/domain1/exercise/21.png) 
4. 코드 작성, 하고자 하는 작업에 대한 코드를 작성한다. ex) s3에 파일을 넣고 dynamoDB에 데이터 입력
![IAM](./img/domain1/exercise/22.png) 

5. Deploy버튼을 누르면 코드가 배포 된다.   
![IAM](./img/domain1/exercise/24.png) 

6. 함수동작을 확인하기 위해 TEST를 하나만든다. 해당 함수는 요청값을 받지 않으니 이름만 설정하고 나머지 설정은 그대로 두고 저장한다.   
![IAM](./img/domain1/exercise/23.png) 
7. TEST를 누르면 응답이 아래처럼 오고   statusCode 200 응답이 왔으니 정상적으로 요구사항을 수행 했음을 알 수 있다.  
![IAM](./img/domain1/exercise/25.png) 
## 6. 확인 및 마무리
1. S3 와 DynamoDB로 이동하여 아래처럼 값이 정상적으로 들어왔음을 확인한다.
![IAM](./img/domain1/exercise/26.png) 
![IAM](./img/domain1/exercise/27.png) 
2. 해당 실습때 사용한 AWS 리소스를 꼭 삭제해야한다.:fire:


## Reference

[coursera강의](https://www.coursera.org/learn/aws-certified-solutions-architect-associate)  
[aws FAQ](https://aws.amazon.com/ko/faqs/)