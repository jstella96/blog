---
index: 1
icon: creative
title: Week 1 실습
category:
  - aws
editLink: false
---

실습 1: 복원력을 갖춘 아키텍처 설계

주의 :
해당 연습에는 AWS 계정에 연결된 요금이 있습니다. 이 연습에서는 다음 리소스를만듭니다.

- Amazon Simple Storage Service (Amazon S3) bucket
- Amazon DynamoDB table
- AWS Identity and Access Management (IAM) policy and role
- AWS Lambda function

Exercise 1: Testing permissions(테스트 권한)
시나리오: AWS로 작업한다는 것은 서비스가 서로 통합되는 방식에 익숙해야 함을 의미합니다. 다음 챌린지에서는 테스트 항목을 DynamoDB 테이블에 삽입하고 테스트 객체를 S3 버킷에 업로드하는 Lambda 함수를 사용하여 아키텍처를 생성합니다. Lambda 함수는 자격 증명에 대해 IAM 역할을 사용합니다. S3 버킷, DynamoDB 테이블 및 Lambda 함수가 모두 함께 작동하도록 올바르게 구성되었는지 확인해야 합니다.

기술 지식 전제 조건
다음 작업은 요구 사항임을 기억하십시오. 그들은 단계가 아닙니다. 요청된 리소스를 생성하고 연결하는 방법을 알고 있어야 합니다. 시험과 유사하게 사용할 구성 요소 이름이 제공됩니다. 시험의 요구 사항을 충족하려면 해당되는 경우 제공된 리소스 이름을 사용하는 것이 중요합니다.
