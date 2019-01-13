//Returns the number of bottles purchased given the input of the money spent
function bottlesPurchased(dollars) {
  return dollars / 2;
}

// Creates an object that takes an input of the bottles you have and gives you the number of
// bottles you can earn if you reedeem them. Also returns the remaining empty caps and bottles
//you have.

function drinkPop(bottleTray) {
  bottleTray.emptyBottles += bottleTray.fullBottles,
  bottleTray.caps += bottleTray.fullBottles,
  bottleTray.bottlesConsumed += bottleTray.fullBottles,
  bottleTray.fullBottles = 0
};
//returns the maximum number of bottles possible to the store
function returnBottles(bottleTray) { 
  let empties = bottleTray.emptyBottles;
  let redeemRate = bottleTray.botReedeemRate;
  if (empties < redeemRate) {
    return false;
  } else {
    let leftOverBottles = empties % redeemRate;
    let returnToStore = empties - leftOverBottles;
    let bottlesEarned = returnToStore / redeemRate;
    bottleTray.emptyBottles = leftOverBottles;
    bottleTray.fullBottles += bottlesEarned;
    bottleTray.earnedFromBottles += bottlesEarned;
    return true;
  }
};
// returns maxmium number of caps to the store
function returnCaps(bottleTray) {
  let caps = bottleTray.caps;
  let redeemRate = bottleTray.capRedeemRate;
  if (caps < redeemRate){
    return false;
  } else {
    let leftOverCaps = caps % redeemRate;
    let returnToStore = caps - leftOverCaps;
    let bottlesEarned = returnToStore / redeemRate;
    bottleTray.caps = leftOverCaps;
    bottleTray.fullBottles += bottlesEarned;
    bottleTray.earnedFromCaps += bottlesEarned;
    return true;
  }
};
function goToStore(bottleTray) {
  let botttleReturnTrue = returnBottles(bottleTray);
  let returnCapsTrue = returnCaps(bottleTray);
  if(botttleReturnTrue || returnCapsTrue) {
    return true;
  } else {
    return false;
  } 
};
function howManyPop(input) {
  const initialBottlesPurchased = bottlesPurchased(input);
  const myPop = {
    fullBottles: initialBottlesPurchased,
    emptyBottles: 0,
    caps: 0,
    bottlesConsumed: 0,
    earnedFromBottles: 0,
    earnedFromCaps: 0,
    botReedeemRate: 2,
    capRedeemRate: 4
  };
  let flag = true;
  do {
    drinkPop(myPop);
    flag = goToStore(myPop);
  } while (flag);

  
console.log('Total Bottles: ', myPop.bottlesConsumed);
console.log('Remaining Bottles:', myPop.emptyBottles);
console.log('Remaining Caps:', myPop.caps);
console.log('Total Earned:');
console.log('Bottles: ', myPop.earnedFromBottles);
console.log('Caps:', myPop.earnedFromCaps);
};

myArgs = process.argv.slice(2);
howManyPop(Number(myArgs));