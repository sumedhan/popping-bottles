//Returns the number of bottles purchased given the input of the money spent
function bottlesPurchased(dollars) {
  return dollars / 2;
}

// Creates an object that takes an input of the bottles you have and gives you the number of
// bottles you can earn if you reedeem them. Also returns the remaining empty caps and bottles
//you have.

function drinkPop(bottleTray) {
  bottleTray.emptyBottles = bottleTray.fullBottles,
  bottleTray.caps = bottleTray.fullBottles,
  bottleTray.fullBottles = 0
};
//returns the maximum number of bottles it can
function returnBottles(bottleTray) { 
  let emptiesToReturn = bottleTray.emptyBottles;
  bottleTray.emptyBottles = emptiesToReturn % bottleTray.botReedeemRate;
  emptiesToReturn -= emptiesToReturn % bottleTray.botReedeemRate;
  bottleTray.fullBottles += emptiesToReturn / bottleTray.botReedeemRate;
};
function returnCaps(bottleTray) {
  let capsToReturn = bottleTray.caps;
  bottleTray.caps = capsToReturn % bottleTray.capRedeemRate;
  capsToReturn -= capsToReturn % bottleTray.capRedeemRate;
  
  bottleTray.fullBottles += capsToReturn / bottleTray.capRedeemRate;
};
function goToStore(bottleTray) {
  returnBottles(bottleTray);
  returnCaps(bottleTray);
};
function findNumOfBottles (input) {
  const initialBottlesPurchased = bottlesPurchased(input);
  const bottles = {
    fullBottles: initialBottlesPurchased,
    emptyBottles: 0,
    caps: 0,
    botReedeemRate: 2,
    capRedeemRate: 4
  };
  drinkPop(bottles);
  console.log(bottles);

  // object to store value of bottles and methods 
  
};

myArgs = process.argv.slice(2);
findNumOfBottles(Number(myArgs));