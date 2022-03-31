---
index: 1
icon: creative
title: Convert Binary Search Tree to Sorted Doubly Linked List
category:
  - algorithm
tag:
  - binarySearch
  - TreeNode
---

[문제링크](https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/)

## 문제 설명

이진 검색 트리를 제자리에서 정렬된 순환 이중 연결 목록으로 변환합니다. 왼쪽 및 오른쪽 포인터는 이중 연결 목록에서 선행 및 후속 포인터와 동의어로 생각할 수 있습니다. 순환 이중 연결 목록의 경우 첫 번째 요소의 선행 요소가 마지막 요소이고 마지막 요소의 후속 요소가 첫 번째 요소입니다. 우리는 제자리에서 변환을 하고 싶습니다. 변환 후 트리 노드의 왼쪽 포인터는 선행 작업을 가리키고 오른쪽 포인터는 후속 작업을 가리켜야 합니다. 연결 목록의 가장 작은 요소에 대한 포인터를 반환해야 합니다.

## 문제 풀이

## 풀이 코드

```java
class Solution {
    Node prev;
    public Node treeToDoublyList(Node root) {

        if (root == null)
            return null;
        prev = new Node(0, null, null);
        Node temp = prev;
        helper(root);
        System.out.println( temp.right.val);
        prev.right = temp.right;
        temp.right.left = prev;
        return temp.right;
    }

    private void helper(Node root){
        if (root == null)
            return;
        helper(root.left);
        prev.right = root;
        root.left = prev;
        prev = root;
        helper(root.right);
    }
}

```
