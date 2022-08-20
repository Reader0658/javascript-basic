
// Funciones con ES5 (ECMA Script)


// Función simple
function saludar() {
    console.log("Hello world")
}

saludar()
saludar()
saludar()


// Funciones con parámetros
function saludarPorNombre(nombre) {
    console.log("Hola " + nombre)
}

saludarPorNombre("Carlos")
saludarPorNombre("Paul")
saludarPorNombre("Charles")
saludarPorNombre("Elvis")


// Función con varios parámetros.
function pintarSuma(a, b) {
    console.log(a + b)
}

pintarSuma(5, 5)
pintarSuma(666, 5)


// Función con un valor de retorno.
function sumar(a, b) {
    return a + b
}

let resultadoSuma = sumar(6, 6)
console.log(resultadoSuma)


// Función que llama a otras funciones.
function pintarTodosLosSaludos() {
    saludarPorNombre("Elvis")
    saludarPorNombre("Paul")
    saludarPorNombre("Charles")
    saludarPorNombre("Carlos")
    console.log("______________")

}

pintarTodosLosSaludos()
pintarTodosLosSaludos()
pintarTodosLosSaludos()
pintarTodosLosSaludos()


// Función multiplicar con ES6 (Generalmente se usa eb fronted)
function multiplicar(a, b) {
    return a * b
}

console.log(multiplicar(6, 6))


// Función multiplicar con ES6 (Generalmente se usa en backend. En fronted se usa con librerias)
const multiplicar2 = (a, b) => a * b

console.log(multiplicar2(5, 5))