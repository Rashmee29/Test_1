let str = "rraash";
function firstNonRepeating(str){
     for(i=0;0<str.length;i++){
        let char = str[i];
        if(str.indexOf(char)=== str.lastIndexOf(char)){
            return char;
        }
        
     }
}
console.log(firstNonRepeating(str));