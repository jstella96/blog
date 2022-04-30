---
index: 1
icon: creative
title: N으로 표현
category:
  - algorithm
tag:
  - DFS
---

[문제 링크](https://programmers.co.kr/learn/courses/30/lessons/42895)

## 문제 설명


## 입출력 예시



## 문제 풀이



## 풀이코드 JavaScript

```js
let min = 10;
function solution(N, number) {
    //문자열로 만들고 값을 받아서 비교 , 완전 브루트포스로 풀었음 ㅠㅠ풀이 고쳐야함
    // bfs 형태 문제에 약하니 보완할 것!
    make(N,N,number,1)
    return min > 8 ? -1: min;
}

function make(base ,number, target, count){

    if(count > 8)return;
    if(eval(base) == target){ min = Math.min(count,min) };
    make(`${base}+1`,number,target, count + 2)
    make(`${base}-1`,number,target, count + 2)
    make(`${base}+${number}`,number,target, count + 1)
    make(`${base}-${number}`,number,target, count + 1)
    make(`(${base})*${number}`,number,target, count + 1)
    make(`(${base})/${number}`,number,target, count + 1)
    make(`${base}${number}`, number,target, count + 1)
}
```
