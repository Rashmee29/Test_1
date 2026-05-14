// A prime number is a number greater than 1 that is divisible only by 1 and itself.
//You should handle numbers less than or equal to 1 because 0 and 1 are not prime numbers.
function isPrime(num){
    if(num<=1){
        console.log("non prime");
        return;
    }
    for(let i=2;i<num;i++){
        if(num%i===0){
            console.log("non-prime");
            return;
        }
            
        
}
            console.log("prime");
}
isPrime(4);