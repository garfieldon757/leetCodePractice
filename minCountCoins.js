// 贪心
function minCountCoins(coins, amount) {
  // //

  // return checksCount;
};

// DP
function minCounCoinsDP(coins, amount) {
  let solutions = [];

  let sub = -1;
  let tempSub = -1;
  let startFlag = false;
  let iterFlag = false;


  for(let i=0; i <= amount; i++) {
    sub = -1;
    tempSub = -1;

    coins.forEach(coin => {
      if(coin > i) tempSub = -1;
      else if(coin === i) tempSub = 1;
      else if(solutions[coin] === -1 || solutions[i-coin] === -1) {
        tempSub = -1;
      }else{
        tempSub = solutions[coin] + solutions[i-coin];
      }
      
      startFlag = tempSub > 0 && sub === -1;
      iterFlag = tempSub > 0 &&  tempSub < sub;
      if(startFlag || iterFlag)
        sub = tempSub;
    });
    solutions[i] = sub;
  }

  solutions[0] = 0; // 不懂用例的意思...
  return solutions[amount];
}


let coins = [1,2,5];
let P = 11;
console.log(minCounCoinsDP(coins, P));