let arr = "Raashmii";

let output ={};// object (key :value)
for(i=0;i<arr.length;i++){
    if (output[arr[i]]){
        output[arr[i]]=output[arr[i]]+1;

    }else{
        output[arr[i]]=1;
    }
}


console.log(output);