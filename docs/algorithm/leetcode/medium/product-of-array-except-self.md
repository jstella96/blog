---
index: 1
icon: creative
title: Product of Array Except Self
category:
  - Algorithm
tag: false
---

[문제링크](https://leetcode.com/problems/product-of-array-except-self/)

## 문제 설명

정수 배열 `nums`가 주어지면 answer[i]가 nums[i]를 제외한 `nums`의 모든 요소의 곱과 같도록 배열 응답을 반환합니다.
나누기 연산을 사용하지 않고 O(n) 시간에 실행되는 알고리즘을 작성해야 합니다.

## 입출력 예시

```
Input: nums = [1,2,3,4]
Output: [24,12,8,6]
```

## 문제 풀이

투 포인터 문제! 왼쪽 오른쪽으로 곱한값을 곱해주면 된다.

## 풀이 코드

```java
class Solution {
    public int[] productExceptSelf(int[] nums) {

        int len = nums.length;
        int[] answer = new int[len];
        int leftPoint = 1;
        int rightPoint = 1;

        for(int i = 0 ; i < len ; i++){
            answer[i] =  leftPoint;
            leftPoint *= nums[i];
        }

        for(int z = len-1 ; z > -1 ; z--){
            answer[z] = answer[z] * rightPoint;
            rightPoint *= nums[z];
        }

        return answer;
    }
}
```
