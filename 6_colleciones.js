//  Colecciones por llave - La más usada es "Map"

let numeros = new Map()
numeros. set("uno", "one")
numeros. set("cuatro", "four")
numeros. set("once", "eleven")

console.log(numeros)


// Obteniendo elementos mediante en método "get" y declarando la llave.
console.log(numeros.get("cuatro"))

// Obtener el tamaño de colección
console.log(numeros.size)

// Recorrer elementos de la colección
for (let numero of numeros) {
    console.log(numero)
}

// Recorrer elmentos de la colección de forma separada por: llave y valor
for (const [key, value] of numeros){
    console.log(`Llave: ${key} - Valor: ${value}`)
}

// Eliminar un elemento de colección
numeros.delete("cuatro")
console.log(numeros)

//Para verificar si en la colección existe un elemento. Se usa "has" que devuelve un valor de tipo "boolean".
let existe = numeros.has("cuatro")
console.log("Existe elemento: " + existe)

// Limpiar colección
numeros.clear()
console.log(numeros.size)