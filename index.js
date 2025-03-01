
const userInputString = prompt(
    "Please enter a list of comma-separated froyo flavors, for example:",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

const froyoArray = userInputString.split(",");

console.log(froyoArray)

function countFlavors(froyoArray){
    let froyoOrder = {};
    for (let i = 0; i < froyoArray.length; i++) {
        let flavor = froyoArray[i]
        if (froyoOrder[flavor]) {
            froyoOrder[flavor]++; 
        } else { froyoOrder[flavor] = 1; 
        }
}
return froyoOrder
}

const froyoOrder = countFlavors(froyoArray)

console.table(froyoOrder)



