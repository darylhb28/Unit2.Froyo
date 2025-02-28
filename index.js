
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

function condenseOrder(obj){
    for (let i = 0; i < Array.length; i++) {
        let value = Array[i]
        if (obj[value]) {
            obj[value]++; 
        } else { obj[value] = 1; 
        }
    }
}


