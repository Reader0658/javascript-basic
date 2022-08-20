// BUCLES (for, while, do while)

let frutas = ["Manzana", "Platanos", "Uvas"]

// for
for(let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}


// while
let numero = 1

while (numero <= 10) {
    console.log(numero)
    
    numero++
}


console.log("__________________________________")


// do while
var numero2 = 6

do {
    console.log(numero2)

    numero2++
} while (numero2 <= 10)



console.log("__________________________________")


// Cancelar bucles con "break" en "for", "while" y "do while".
let x = 0

while (x <= 10) {
    console.log(x)

    if (x == 5) {
        break
    }

    x++
}

console.log("__________________________________")


// Continuar bucles con "continue" en "for", "while" y "do while".
let numeroEvaluado = 0
let multiplo = 5


while (numeroEvaluado <= 15) {
    numeroEvaluado++
    console.log(numeroEvaluado)

    let residuo = numeroEvaluado % multiplo // 5 % 5 = 0

    // console.log("residuo:" + residuo)

    if (residuo !=0) {
        continue
    }

    console.log(`Numeros multiplos de ${multiplo}: ${numeroEvaluado} `)
}