
const userInputString = prompt(
    "Please enter  a list of comma-separated froyo flavors",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

const froyoArray = userInputString.split(",");

console.log(froyoArray)

const froyoOrder = {};

for (let i = 0; i < froyoArray.length; i++) {
    let flavor = froyoArray[i]
    if (froyoOrder[flavor]) {
        froyoOrder[flavor]++; 
    } else { froyoOrder[flavor] = 1; 
    }
}

console.log(froyoOrder)


