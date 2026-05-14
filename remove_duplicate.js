let arr = [1, 2, 2, 3, 4, 4, 5];

let uniqueArr = [...new Set(arr)];

console.log(uniqueArr);
 
//second example 

let arr1 = [1, 2, 2, 3, 4, 4, 5];

let uniqueArr1 = [];//[1,2]

for (let i = 0; i < arr1.length; i++) {// a[0]=1,a[1]=2,a[2]=2,a[3]=
    if (!uniqueArr1.includes(arr1[i])) {//true,true,false
        uniqueArr1.push(arr1[i]);
    }
}

console.log(uniqueArr1);