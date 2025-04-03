// 1. Problem:Create an array containing different types of teas.
let teas = ["Oolong tea",  "Herbal tea", "Green tea", "Black tea", "Herbal tea", "Yellow teas",]
// console.log(teas);

// 2. Problem: Add "Chamomile Tea" from the list of teas.
teas.push("Chamomile tea")
// console.log(teas);

// 3. Problem: Remove "Oolong tea" from the list of teas.
const t = teas.indexOf("Oolong tea");
teas.splice(t, 1)
// console.log(t);
 

teas.pop(teas[0])
// console.log(teas);
// 4. Problem: Filter the list to only include teas that are caffeinated.
const caffeinatedTeas = teas.filter((tea) => tea !== "Herbal tea")
// console.log(caffeinatedTeas);

// 5. Problem: Sort the list of teas in alphabetical order.
const shortTea = teas.shortTea 
// console.log(shortTea);


// 6. Problem: Use a for loop to print each type of tea in the array.

// 7. Problem: Use a for loop to count how many teas are caffeinated (excluding
//"Herbal Tea").
// console.log(teas.length);

let teaCount = 0;
let i = 0;
// console.log(teas[i]);

for (i; i < teas.length; i++) {
    if (teas[i] !== "Herbal tea" ) {
        teaCount++;  
    }
}

// console.log(teaCount);

// 8. Problem: Use a for loop to create a new array with all tea names in uppercase.
const upperTeas = [];
for (let i = 0; i < teas.length; i++) {
    upperTeas.push(teas[i].toUpperCase())
}
// console.log(upperTeas);
// console.log(teas);

let allTeas = ["Oolong tea",  "Herbal tea", "Green tea", "Black tea", "Herbal tea", "Yellow teas",]

// 9. Problem: Use a for loop to find the tea name with the most character.
for (let i = 0; i < allTeas.length; i++) {
    
    console.log(allTeas.length);
}

// let a = "kkjjk dsfgbv"
// console.log( a.length);
