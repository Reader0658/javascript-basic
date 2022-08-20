// SENTENCIA SWITCH:

let pais = "Canada"

switch (pais) {
    case "Perú":
    case "Chile":
    case "Argentina":
    case "Uruguay":
        console.log("Se habla español") 
        break
    case "EEUU":
    case "Canada":
        console.log("Se habla inglés")
        break
    default:
        console.log("El pais no esta registrado")               
}


// Ejemplo práctico

// DNI -> 1
// CE -> 2
// PASAPORTE -> 3

var idDocumento = 1
var nombreDocumento = ""

switch (idDocumento) {
    case 1:
        nombreDocumento = "DNI"
        break
    case 2:
        nombreDocumento = "CARNET DE EXTRANJERIA"
        break
    case 3:
        nombreDocumento = "PASAPORTE" 
        break
    default:
        nombreDocumento = "Documento desconocido"            
}

console.log("Mi documento es: " + nombreDocumento)