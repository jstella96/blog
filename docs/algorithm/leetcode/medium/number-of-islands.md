---
order: 1
icon: creative
title: Number of Islands
category:
  - Algorithm
tag:
  - DFS
  - island
---

해당페이지는 2022년 3월 노션에서 마이그레이션 되었습니다.

[문제링크](https://leetcode.com/problems/number-of-islands/)

## 문제 설명

1'(땅)과 '0'(물)의 지도를 나타내는 m x n 2D 이진 그리드 그리드가 주어지면 섬의 수를 반환합니다. 섬은 물로 둘러싸여 있으며 인접한 육지를 수평 또는 수직으로 연결하여 형성됩니다. 그리드의 네 모서리가 모두 물로 둘러싸여 있다고 가정할 수 있습니다.

## 문제 풀이

max-area-of-island 와 같은 문제
dfs를 이용해서 섬의 4방향을 방문한다. 이때 방문했던 것을 표시하기 위해서 visited를 써도 되지만 주어진 grid 배열의 해당값을 0처리하는 것도 괜찮다.

## 풀이 코드

```java
class Solution {
    public int numIslands(char[][] grid) {
        int count = 0 ;
         for(int i = 0; i < grid.length; i++) {
            for(int j = 0; j < grid[0].length; j++) {
                if (grid[i][j] == '1') {
                DFSMarking(grid, i, j);ㅐ
                count++;
                 }
            }
        }
        return count;
    }

    private void DFSMarking(char[][] grid, int i, int j) {
        if (i < 0 || j < 0 || i >=grid.length || j >= grid[0].length || grid[i][j] != '1') return;
        grid[i][j] = '0';
        DFSMarking(grid, i + 1, j);
        DFSMarking(grid, i - 1, j);
        DFSMarking(grid, i, j + 1);
        DFSMarking(grid, i, j - 1);
    }

}
```
