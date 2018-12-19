let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];

console.log(favoriteAnimals);

favoriteAnimals.push("turtle");

console.log(favoriteAnimals);

favoriteAnimals.splice(1, 0, "meerkat");
console.log("New value of the array will start like this: [ 'blowfish', 'meerkat', 'capricorn' .. ");

console.log(favoriteAnimals);

console.log(`The array has a length of: ${favoriteAnimals.length}`);

favoriteAnimals.splice(3,1);

console.log(favoriteAnimals);

console.log(`The item you are looking for is at index: ${favoriteAnimals.indexOf("meerkat")}`);