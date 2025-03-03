
const userInputString = prompt(
    "Please enter a list of comma-separated froyo flavors, for example:",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

const froyoArray = userInputString.split(",");

console.log(froyoArray)

function countFlavors(froyoArray){
    let froyoOrder = {};
    for (let i = 0; i < froyoArray.length; i++) {
        if (froyoOrder[froyoArray[i]]) {
            froyoOrder[froyoArray[i]]++; 
        } else {froyoOrder[froyoArray[i]] = 1; 
        }
}
return froyoOrder
}

console.table(countFlavors(froyoArray))



