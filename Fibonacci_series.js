//The Fibonacci series is a sequence where each number is the sum of the previous two numbers.
function fibonacciSeries(n){
     let a=0 ;
     let b=1;
     for(let i=0;i<n;i++ ){
        console.log(a);
        let next=a+b;
        a=b;
        b=next;
     }

}
fibonacciSeries(10);
   
