let str = "Hi my name is rashmi";

str = str.split(" ");

let original = "";

for (let i = str.length - 1; i >= 0; i--) {

    original = original + str[i] + (i != 0 ? " " : "");
}

console.log(original);