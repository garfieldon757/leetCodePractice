// BF
function minCountCoinsBF(coins, amount) {
  function subMinCounts(coins, coinIndex, amount) {
    var minCount = Infinity;
    for(var i = 0; i <= parseInt(amount / coins[coinIndex]); i++) {
      if(amount-coins[coinIndex]*i === 0) {
        if(i < minCount) minCount = i;
      }else {
        if(coinIndex === coins.length-1) continue; // exit-point

        var subCount = subMinCounts(coins, coinIndex+1, amount-coins[coinIndex]*i);
        if(subCount + i < minCount) minCount = subCount + i;
      }
    }
    return minCount;
  }
  var minCount = subMinCounts(coins, 0, amount);
  return minCount === Infinity ? -1 : minCount; 
 };

// Greedy
// function minCountCoinsGreedy(coins, amount) {
// };

// merge
function minCountCoinsMerge(coins, amount) {
  function subMinCountCoins(coins, amount) {
    var minCount = Infinity;
    for(var i=1; i<=coins.length; i++) {
      if(coins[i]>amount) continue; // exit-point

      var temp = subMinCountCoins(coins,amount-coins[i]);
      if(temp+1 < minCount) minCount = temp + 1;
    }
  }

  var minCount = subMinCountCoins(coins, amount);
  return minCount===Infinity ? Infinity : minCount;
}

// DP
function minCountCoinsDP(coins, amount) {
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

// DP-opt
function minCountCoinsDPopt(coins, amount) {
  let minCounts = [];
  minCounts[0] = 0;
  for(var i=1; i<=amount; i++) {
    let minCount = Infinity;
    for(var j=0; j<coins.length; j++) {
      if(coins[j]>i) continue; // cut-subTree
      if(minCounts[i-coins[j]]+1 < minCount) {
        minCount = minCounts[i-coins[j]]+1;
      }
    }
    minCounts[i] = minCount;
  }
  return minCounts[amount] === Infinity ? -1 : minCounts[amount];
}

let coins = [1,2,5];
let P = 11;
console.log(minCountCoinsDPopt(coins, P));