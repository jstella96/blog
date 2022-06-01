---
index: 1
icon: creative
title: Find Median from Data Stream
category:
  - Algorithm
tag:
  - heap
---

해당페이지는 2022년 3월 노션에서 마이그레이션 되었습니다.

[문제링크](https://leetcode.com/problems/employee-free-time/)

## 문제 설명

` median`은 정렬된 정수 목록의 중간 값입니다. 목록의 크기가 짝수이면 중간 값이 없고 중앙값은 두 중간 값의 평균입니다.  
MedianFinder 클래스를 구현하시오

- MedianFinder(): MedianFinder 객체를 초기화합니다.
- void addNum(int num): 정수 num을 데이터 구조에 추가합니다.
- double findMedian(): 지금까지 모든 요소의 중앙값을 반환합니다.

## 문제 풀이

PriorityQueue의 정렬조건을 재정의하여 maxHeap,minHeap 두개의 힙을 만든다. add할 때 먼저 한쪽 queue에 넣은 후 다시 poll()하여 반대쪽에 넣는 방식으로 균형을 맞출 수 있다.

## 풀이 코드

```java
import java.util.*;

class MedianFinder {
    private PriorityQueue<Integer> maxHeap; //상단 노드 높은 값

    private PriorityQueue<Integer> minHeap; //상단 노드 작은 값

    public MedianFinder() {
        maxHeap = new PriorityQueue<>(Collections.reverseOrder());
        minHeap = new PriorityQueue<>();
    }

    public void addNum(int num) {
        //min이 기준이면 포인트는 한번씩 번갈아 가면됨.!
        if(maxHeap.size() == minHeap.size()){
           maxHeap.offer(num);
           minHeap.offer(maxHeap.poll());
        }else{
           minHeap.offer(num);
           maxHeap.offer(minHeap.poll());
        }
    }

    public double findMedian() {
        double answer = 0;
        if(maxHeap.size() == minHeap.size()) {
            answer = ((double)(maxHeap.peek() + minHeap.peek()) / 2);
        }else{
            answer = minHeap.peek();
        }
        return answer;
    }
}
```
