---
index: 1
icon: creative
title: H-Index
category:
  - algorithm
tag:
  - 정렬
---

[문제 링크](https://programmers.co.kr/learn/courses/30/lessons/42747)

## 문제 설명

H-Index는 과학자의 생산성과 영향력을 나타내는 지표입니다. 어느 과학자의 H-Index를 나타내는 값인 h를 구하려고 합니다. 위키백과1에 따르면, H-Index는 다음과 같이 구합니다.

어떤 과학자가 발표한 논문 n편 중, h번 이상 인용된 논문이 h편 이상이고 나머지 논문이 h번 이하 인용되었다면 h의 최댓값이 이 과학자의 H-Index입니다.

어떤 과학자가 발표한 논문의 인용 횟수를 담은 배열 citations가 매개변수로 주어질 때, 이 과학자의 H-Index를 return 하도록 solution 함수를 작성해주세요.

## 입출력 예시

```answers
Input: [3, 0, 6, 1, 5]
Output:	3
```

## 문제 풀이

주어진 논문 인용 횟수를 담은 배열 `citations`을 오름차순으로 정렬 한 후  
"h번 이상 인용된 논문이 h편 이상" 이 부분을 만족시키는 부분을 찾는다. 오름차순 정렬이므로 가장 먼저 찾아진 값이 답이다.

## 풀이코드

```java
import java.util.*;
class Solution {
    public int solution(int[] citations) {
        int max = 0;//최대값 업데이트
        Arrays.sort(citations);//먼저 오름차순으로 정렬.
         for(int i = 0; i < citations.length; i++){
              // 이 지점이 최대값의 지점 더 갈 필요가 없음.
             if( citations[i] >= (citations.length - i)  ){
                 max = citations.length - i;
                 break;
             }
        }
        return max;
        //정렬하면 1
    }
}
```
