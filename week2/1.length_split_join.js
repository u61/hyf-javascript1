let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log(myString.length);

let space = ' ';
myString = myString.split(',').join(space);

console.log(myString);