// create 2 var

let pizzaPlace = "Pizza Party";
let numberOfToppings = 9;

// print the var and types
console.log(typeof pizzaPlace, pizzaPlace);
console.log(typeof numberOfToppings, numberOf);
let sentence = `I went to ${pizzaPlace} and ordered a pizza with ${numberOfToppings} toppings. `
console.log(sentence);

// if( no topping){ then print "out of toppings"}
if(numberOfToppings < 10){
  console.log("Quality, not quantity.");
} else if(numberOfToppings >= 10){
  console.log("A whole lot of pizza.");
}

// Bonus Challenge
for(let i = 1; i <= numberOfToppings; i++){
  if(i % 2 === 0){
    console.log(i);
  }

}
