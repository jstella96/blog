function solution(n, results) {
    //승패 그래프 만들기(null로 초기화하여 생성) // 이긴사람 번호를 적는다.
    const graph = Array.from(Array(n+1), () => new Array(n+1).fill(null));
    const visited = Array.from(Array(n+1), () => new Array(n+1).fill(false));
    console.log(visited)
   for(const [win, lose]  of results){ //자바스크립트는 Array로 만들어도된다.
        graph[win][lose]  = win;
        graph[lose][win]  = win;
    }
    //기본 그래프를 바탕으로 추가 정보를 체크 할 수 있다!
    for(let i = 1; i <=n ; i++){
        for(let z = 1 ; z<= n; z++){
            if(graph[i][z] != null && !visited[i][z]){
                //bfs 걸어야 힌다!!!! 방문 여부를 따지자~
                let win = graph[i][z];
                let lose = win == i ? z : i;
                recursive(win,lose,graph, visited);
            }
        }
    }
    let map = graph.map( x => x.filter(y  => y ==null))
    let answer = map.filter(x => x.length === 2).length;
    console.log(answer)
    return 0;
}

//추가체크 이긴애를 이긴애가 있어?
//추가체크 진애한테 진애가 있어?
function recursive(win,lose,graph,visited){
    if(visited[win][lose])return;
    visited[win][lose] = true;
    visited[lose][win] = true;
    let winPlayers = getWinPlayer(win,graph);
    let losePlayers = getLosePlayer(lose,graph);
    for(let winPlayer of winPlayers){
        graph[winPlayer][lose] = win;
        graph[lose][winPlayer] = win;
    }
    for(let losePlayer of losePlayers){
        graph[win][losePlayer] = win;
        graph[losePlayer][win] = win;
    }
    for(let winPlayer of winPlayers){
        for(let losePlayer of losePlayers){
            if(graph[winPlayer][losePlayer] != null ){
                console.log('win='+winPlayer)
                console.log('lose='+losePlayer)
                graph[winPlayer][losePlayer] = winPlayer;
                graph[winPlayer][losePlayer] = winPlayer;
                recursive(winPlayer,losePlayer,graph,visited)
            }
        }
    }
}

function getWinPlayer(player,graph){ // player를 이긴 사람 명단 
    return graph[player].filter((item)=> {return item != null && item != player} )
}
function getLosePlayer(player,graph){ //player한테 진 사람 명단
    return graph[player].filter((item)=> {return item != null && item == player} )
}
console.log(solution(5,	[[4, 3], [4, 2], [3, 2], [1, 2], [2, 5]]))