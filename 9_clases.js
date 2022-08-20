// Clases

class Programer {

    // Atributos
    name;
    age;

    // Método constructor
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    // Métodos
    saludar() {
        console.log(`Mi nombre es ${this.name}`)
    }
}

// Creando instancias a partir de la clase
const devPaul = new Programer("Paul", 37)
devPaul.saludar()

const devCarlos = new Programer("Carlos", 29)
devCarlos.saludar()

// Herencias

// clase padre
class Animal {

    constructor(name) {
        this.name = name
    }
    speak() {
        console.log(`${this.name} hace un ruido`)
    }
}

//Clase hijo
class Dog extends Animal {

    constructor(name) {
        super(name)
    }

    speak() {
        super.speak()
        console.log(`${this.name} ladra`)
    }
}

const ringoDog = new Dog("Ringo")
ringoDog.speak()
