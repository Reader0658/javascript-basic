
// TIPO DE DATOS:

// String (Textos)
let myString1 = String("Paul") // Cuando especificas el tipo de dato "Sring"
let myString2 = "Franklin" // Forma standar 
let myString3 = myString1 + " " + myString2 // Forma de concatenar los string (Forma standar)
let mystring4 = myString1.concat(" ").concat(myString2) // Otra forma de concatenar los string, utilizando la palabra "concat"

console.log(myString3)
console.log(mystring4)


// Int (Números enteros)
let myInt1 = Number(50) // Cuando especificas el tipo de dato "Number"
let myInt2 = 60 // Forma standar
let myInt3 = myInt1 + myInt2 // Suma
let myInt4 = myInt1 - myInt2 // Resta
let myInt5 = myInt1 * myInt2 // Multiplicación
let myInt6 = myInt1 / myInt2 // División
let myInt7 = myInt1 % myInt2 // Residuo de la división

console.log(myInt3)
console.log(myInt4)
console.log(myInt5)
console.log(myInt6)
console.log(myInt7)



// Double (Números decimales) 
// El "Double" te permite almacenar cantidad de números grandes y el "float" una cantidad pequeña
let myDouble1 = Number(5.5) // En javascript los decimales también se declarán con eltipo de dato "Number"
let myDouble2 = 6.5 // Forma standar
let myDouble3 = myDouble1 + myDouble2 // Suma
console.log(myDouble3)


// Boolean
let myBoolean1 = Boolean(true) // Cuando especificas el tipo de datos "Boolean"
let myBoolean2 = false // Forma standar
let myBoolean3 = 20 > 18 // Validando valores

console.log(myBoolean3)