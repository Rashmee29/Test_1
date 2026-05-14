let arry =[10,20,40,30];
let largest = 0;
let secondlargest = 0;
for(let i=0;i<arry.length;i++){
      if (arry[i] > largest) {
        secondlargest = largest;
        largest = arry[i];
    } else if (arry[i] > secondlargest && arry[i] !== largest) {
        secondlargest = arry[i];
    }
}

console.log("Second Largest:", secondlargest);

