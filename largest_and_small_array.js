let arr=[12,33,45,50];
//console.log(Math.max(...arr));
//console.log(Math.min(...arr));
let largest = arr[0];
let small = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }

    if (arr[i] < small) {
        small = arr[i];
    }
}

console.log("largest:", largest);
console.log("small:", small);