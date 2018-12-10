console.log("Arrays can contain different types of date at the same time in JavaScript");
console.log("Here we initialize  an array named 'fav_animals'");
var fav_animals = ["cat", "bird", "fish"];
console.log(fav_animals);
console.log("Here we push a number in it'");
fav_animals.push(5);
console.log(fav_animals);
console.log("Here we push a boolean in it'");
fav_animals.push(true);
console.log(fav_animals);
console.log("They are added as you can see'");

console.log("Let's try to compare infinities");
console.log("Here we initialize 2 variables which the results of '6/0' and '10/0'");
var inf1 = 6/0;
var inf2 =10/0;
console.log(inf1);
console.log(inf2);
console.log("Let's test that with IF statement to see that can JS compare these to values");
console.log("I define a condition; if these two equals that means JS can compare.");
if (inf1 ===  inf2) {
    console.log("JS can compare");
} else {
        console.log("JS couldn't compare");
}
console.log("But I am not sure about comparison always results to true");