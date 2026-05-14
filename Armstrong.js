// An Armstrong number is a number where the sum of the cube of its digits is equal to the original number.
function armstrong(num){
    let original=num;
    let sum=0;
    while(num>0){
      let digit=num%10;
      sum=sum+(digit*digit*digit);
      num=Math.floor(num/10);
    }
    if(sum===original){
        console.log("Armstrong");
    }else{
        console.log("non Armstrong");
    }

    }
    armstrong(122);
