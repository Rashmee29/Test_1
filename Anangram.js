// Both strings contain the same characters with the same frequency, just in a different order.

let str1 = "listen";
let str2 = "silent";

function isAnagram(s1, s2) {
    // remove spaces + lowercase
    s1 = s1.replace(/\s/g, "").toLowerCase();
    s2 = s2.replace(/\s/g, "").toLowerCase();

    if (s1.length !== s2.length) return false;

    return s1.split("").sort().join("") === s2.split("").sort().join("");
}

console.log(isAnagram(str1, str2));