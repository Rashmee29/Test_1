// The Two Sum problem means finding two numbers in an array whose sum equals the target value.ex=Array = [2, 7, 11, 15] Target = 9

function twoSum(arr,target){
    for(let i=0;i<arr.length;i++){
        for(j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]===target){
                return[i,j];
            }
        }
    }
}
console.log(twoSum([2,7,11,2],9));
  