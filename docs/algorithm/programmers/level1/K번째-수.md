---
index: 1
icon: creative
title: K번째 수
category:
  - algorithm
tag:
  - 정렬
---

[문제 링크](https://programmers.co.kr/learn/courses/30/lessons/42748)

## 문제 설명

배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려고 한다.

예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면

1. array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
2. 1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
3. 2에서 나온 배열의 3번째 숫자는 5입니다.

배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

## 입출력 예시

```
Input:
  array: [1, 5, 2, 6, 3, 7, 4]
  commands: [[2, 5, 3], [4, 4, 1], [1, 7, 3]]
Output: [5, 6, 3]
```

## 문제 풀이

문제 그대로 commands를 반복문으로 순회하면서 배열을 자른후 해당 지점의 원소를 구한다. 단순 구현 문제이다.


## 풀이코드 Java

```java
import java.util.Arrays;
class Solution {
    public int[] solution(int[] array, int[][] commands) {
        int len = commands.length;
        int[] answer = new int[len];
        for(int i=0; i<len; i++){
            int[] temp = Arrays.copyOfRange(array, commands[i][0]-1, commands[i][1]);
            Arrays.sort(temp);
            answer[i]=temp[commands[i][2]-1];
        }
        return answer;
    }
}
```

## 풀이 코드 JavaScript 
```js
function solution(array, commands) {
    const answer = [];
    for(let command of commands){
        let [startIndex, endIndex, K] = command;
        let temp = array.slice(startIndex-1, endIndex);
        temp.sort((a, b) => a - b)
        answer.push(temp[K-1])
    }
    return answer;
}
```

* 서브배열 반환 함수: Arrays.copyOfRange(배열,시작인덱스,끝인덱스) /  arr.slice([begin[, end]])
