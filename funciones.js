//Ejercicio 1
console.log("Pizzas con id impar: ")
const idImpar = pizzas.filter(pizza => pizza.id % 2 == 1)
idImpar.forEach(pizza => {console.log(pizza.nombre)})
console.log("-------------------------")

//Ejercicio 2
console.log("¿Hay alguna pizza que valga menos de $600?")
const rta = pizzas.some(pizza => pizza.precio < 600)
if (rta) {console.log("- Si")} else {console.log("- No")} 
console.log("-------------------------")

//Ejercicio 3
console.log("Pizzas con precio: ")
pizzas.forEach((pizza) => console.log("- " + pizza.nombre + ": $" + pizza.precio.toString()))
console.log("-------------------------")

//Ejercicio 4
console.log("Pizzas con sus ingredientes:")
pizzas.forEach(pizza => {
    console.log(`Pizza: ${pizza.nombre}`);
    console.log(`Ingredientes: ${pizza.ingredientes.join(', ')}`);
    console.log('----------------------------------');
})