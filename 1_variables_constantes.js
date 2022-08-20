// VARIABLES (Son conocidas tambien como "mutables" porque pueden cambiar de valor.)

// Forma antigua "var"
var miString = "Hello world" // string
var miNumeroEnero = 9 // entero
var miNumeroDecimal = 8.5 // deciaml
var miBoolean = false // boolean: false ó true

// Forma actual "let"
let miString2 = "Hello world" // string
let miNumeroEnero2 = 9 // entero
let miNumeroDecimal2 = 8.5 // deciaml
let miBoolean2 = false // boolean: false ó true

// Modificando el valor de una variable:
let miTexto = "Mi nombre es Paul"

console.log(miTexto)

// Cambiando valor
miTexto = "Ahora mi nombre es Franklin"

console.log(miTexto)



// CONSTANTES

// Se declara con la palabre "const"
const miConstanteString = "Casa"
const miConstanteEntero = 85
const miConstanteDecimal = 8.5
const miConstanteBoolean = false

// Intentando cambiando valor -> Saldrá error, poruqe no se puede asignar un valor nuevo
// miConstanteEntero = 90
console.log(miConstanteEntero)