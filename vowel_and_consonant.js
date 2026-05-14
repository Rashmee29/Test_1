let str="Rashmi Devi";
let vowels = 0;
let consonants = 0;

str = str.toLowerCase(); // case-insensitive

for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    if (ch >= 'a' && ch <= 'z') { // only alphabets
        if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
            vowels++;
        } else {
            consonants++;
        }
    }
}

console.log("Vowels:", vowels);
console.log("Consonants:", consonants);

// Using includes() (short way)
let str1="Hello my computer";
let vowels1= 0;
let consonants1= 0;

let vowelList = "aeiou";
str1= str1.toLowerCase();

for (let ch of str) {
    if (ch >= 'a' && ch <= 'z') {
        if (vowelList.includes(ch)) {
            vowels++;
        } else {
            consonants++;
        }
    }
}

console.log("Vowels:", vowels);
console.log("Consonants:", consonants);