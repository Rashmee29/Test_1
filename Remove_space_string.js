let str = "hello rashmi";

let original = "";

for (let i = 0; i < str.length; i++) {

    if (str[i] !== " ") {

        original = original + str[i];
    }
}

console.log(original);