function solution(prices) {

    const originLen = prices.length;
    const stack = [];
    const answer = [];
    prices = prices.map((item,idx)=>[item,idx])
    for([nowPrice, nowIndex] of prices){
        while(stack.length!= 0 && nowPrice < stack[stack.length-1][0] ){
            let [prevPrice, prevIndex] = stack.pop();
            answer[prevIndex] = nowIndex - prevIndex;
        }
        stack.push([nowPrice, nowIndex]);
    }
    while(stack.length != 0){
        [price, index] = stack.pop();
        answer[index] = originLen - 1  - index;
    }

    return answer; 
}

console.log(solution([1,2,3,2,3]))