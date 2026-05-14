let arr = [0, 1, 0, 3, 12];

let j = 0; // position for non-zero elements

for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) { 
        // swap arr[i] with arr[j]
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;

        j++;
    }
}

console.log(arr);

