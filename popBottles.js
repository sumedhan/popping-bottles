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
  if (emptiesToReturn < bottleTray.botReedeemRate) {
    return false;
  }
  else {
    
  return true;
  }
};
// returns maxmium number of caps to the store
function returnCaps(bottleTray) {
  let capsToReturn = bottleTray.caps;
  if (capsToReturn < bottleTray.capRedeemRate){
    return false;
  } else {
  bottleTray.caps = capsToReturn % bottleTray.capRedeemRate;
  capsToReturn -= capsToReturn % bottleTray.capRedeemRate;
  bottleTray.fullBottles += capsToReturn / bottleTray.capRedeemRate;
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
function findNumOfBottles (input) {
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
    console.log(myPop);
    flag = goToStore(myPop);
    console.log(myPop);
  } while (flag);

  // object to store value of bottles and methods 
  
};

myArgs = process.argv.slice(2);
findNumOfBottles(Number(myArgs));