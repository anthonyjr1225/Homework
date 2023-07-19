const pizzaToppings = ["sausage", "pepperoni", "cheese", "veggie"]
//console.log(pizzaToppings)

function greetCustomer(){
  let greet = "Welcome to Pizza House, our toppings are: ";
  for (let topping of pizzaToppings){
    greet += topping + ", ";
  }
    return greet;
}
console.log(greetCustomer());


function getPizzaOrder(size, crust, ...toppings) {
  let order = `We have a ${size}, ${crust} crust pizza, with ${toppings}`;
  console.log(order);
  return [size, crust, toppings];
          
}
 
// Prepare Pizza
function preparePizza([size, crust, toppings]){
  console.log("...Cooking pizza");
  return {
    size: size, 
    crust: crust,
    toppings: toppings
  }
}


function servePizza(pizza){
  const message = `Order up! Here's your ${pizza.size}, ${pizza.crust} crust pizza with ${pizza.toppings} Enjoy!`;
  console.log(message);
  return pizza;
}

servePizza(preparePizza(getPizzaOrder("14in", "thick", "sausage", " pepperoni", " cheese.")
));