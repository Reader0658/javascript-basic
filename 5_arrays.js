// ARRAYS (Tambien los conocen como "lista"

let frutas0 = Array("Platanos", "Manzanas", "Peras") // Cuando se declara el tipo de dato "Array"

// Indices:       0           1          2       3
let frutas = ["Platanos", "Manzanas", "Peras", "Uvas"] // Forma standar

console.log(frutas)

// Accediendo a los valores del array por indice
console.log(frutas[0])

// Modificando los valores del array por indice
frutas[0] = "Platanos Verdes"
console.log(frutas)


// Agregando valores al array
frutas.push("Sandias") // En otros lenguajes es "add" en lugar de "push"
console.log(frutas)


// Eliminando valores al array
frutas.pop() // Elimina el último elemento del array
console.log(frutas)


frutas.shift() // Elimina el primer elemento del array
console.log(frutas)


//delete frutas[1] // Elimina el elemento del array por indice ( Forma antigua o caducada)
frutas.splice(1, 1) // El primer 1 es el indice (posición), el segundo es la cantidad de elementos que eliminará hacia adelante
console.log(frutas)


// RECORRER DATOS:

for(index = 0; index < frutas.length; index++) {  // Forma antigua
    console.log(frutas[index])
}


frutas.forEach(function(fruta) {  // Forma actual reducida con "foreach" donde "fruta" es el elemento.
    console.log(fruta)
}) 


frutas.forEach(function(fruta, index) {  // Forma actual reducida con "foreach" donde "fruta" es el elemento y "index" es la posición del elemento
    // console.log(fruta + " -> " + index)
    // console.log(index+1 + ". " + fruta)
    console.log(`${index + 1}. ${fruta}`)
}) 