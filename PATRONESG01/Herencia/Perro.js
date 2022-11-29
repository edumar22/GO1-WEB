import Animal from "./Animal.js";

export default class Perro extends Animal{

    constructor(edad, raza){
        super(edad)

        this.raza = raza;
    }

    ladrar(){
        console.log("El perro de la raza "+ this.raza +" ladra.");
    }
   // la clase pero tambien hereda la function comer
} 