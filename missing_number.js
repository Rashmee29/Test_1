let arry=[1,2,3,5];
let n=5;
let exceptSum = (n*(n+1))/2;
let actualSum=0;
for (let i=0;i<arry.length;i++){
     actualSum+=arry[i];
}
console.log(actualSum);
console.log(exceptSum);

 let missing = exceptSum - actualSum;
 console.log("Missing",missing);
