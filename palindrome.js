//A string is the palindrome if it the read same from forward or backward 
let str="Madam";
function isPalindromeString(str){
      // convert to lowercase to handle case sensitivity
let reversed =  str.toLowerCase().split('').reverse().join('');

if(str.toLowerCase()===reversed){
    console.log("It is the palindrome");
}else{
 console.log("Not palindrome");
}
}
isPalindromeString(str);

//Or(without use function ) 


let str1 = "racecar";

// convert to lowercase
let original = str1.toLowerCase();
let reversed = "";

// reverse manually using loop
for (let i = original.length - 1; i >= 0; i--) {
    reversed += original[i];
}

// check palindrome
if (original === reversed) {
    console.log("It is a palindrome string");
} else {
    console.log("Not a palindrome string");
}

//number palindrome 
let num = 121;

let originalNum = num;
let reversedNum = 0;

// reverse number using loop
while (num > 0) {
    let digit = num % 10;
    reversedNum = reversedNum * 10 + digit;
    num = Math.floor(num / 10);//math.floor mean to remove the decimal part provide only interegr .
}

// check palindrome
if (originalNum === reversedNum) {
    console.log("It is a palindrome number");
} else {
    console.log("Not a palindrome number");
}

// or (using function in number palindrome )

function isPalindrome(num) {
    let str = num.toString();
    let reversed = str.split('').reverse().join('');

    console.log(str === reversed ? "Palindrome" : "Not Palindrome");
}

isPalindrome(121);






