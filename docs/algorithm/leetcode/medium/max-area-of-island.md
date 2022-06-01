---
index: 1
icon: creative
title: Max Area of Island
category:
  - Algorithm
tag:
  - dfs
  - island
---

[문제링크](https://leetcode.com/problems/max-area-of-island/)

## 문제 설명

m x n 이진 행렬 그리드가 제공된다. 섬은 4방향(수평 또는 수직)으로 연결된 1(땅을 나타냄)의 그룹이다.
섬의 면적은 섬에서 값이 1인 셀의 수 일때, 그리드에서 섬의 ​​최대 면적을 반환합니다. 섬이 없으면 0을 반환합니다.
그리드의 네 모서리가 모두 물로 둘러싸여 있다고 가정할 수 있다.

## 문제 풀이

dfs를 이용해서 섬의 4방향에 1이 있을 때마다 면적에 +1을한다.  
한 섬과 연결된 모든 면적의 넓이를 구한 후 각 면적중 최대 면적을 구해서 반환한다.  
이때 갔다왔다 표시하기 위해서 visited를 써도 되지만 주어진 grid 배열의 해당값을 0처리하는 것도 괜찮다.

## 풀이 코드

```java
class Solution {
    public int maxAreaOfIsland(int[][] grid) {
        int max = 0;
        for(int i = 0; i < grid.length; i++) {
            for(int j = 0; j < grid[0].length; j++) {
                max = Math.max(max, dfs(grid, i, j));
            }
        }
        return max;
    }

    int dfs(int[][] grid, int row, int column) {
        if(row < 0 || row >= grid.length || column < 0 || column >= grid[0].length ||  grid[row][column] == 0 ) return 0;

        grid[row][column] = 0;

        return 1+ dfs(grid, row+1, column) + dfs(grid, row-1, column) + dfs(grid, row, column+1) + dfs(grid, row, column-1);
    }
}
```
