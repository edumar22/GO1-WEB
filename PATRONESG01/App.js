//import Animal from "./Herencia/Animal.js";
//import Perro from "./Herencia/Perro.js";

//const animal = new Animal(15);
//animal.comer();
//const calvin =new Perro (7,"pitbull")
//calvin.comer();
//calvin.ladrar();


import Servicio from "./Servicio.js";
import Avion from "./Avion.js";
import ServicioAereo from "./ServicioAereo.js";
//Nuestra aplicacion de mensajeria

const servicioTerrestre = new Servicio()
//servicioTerrestre.generarId()//cuando se le coloca contructor alos servicios ya no se nececita esta linea 
const servicioTerrestre2 = new Servicio()
const servicioAereo = new ServicioAereo();
//servicioAereo.generarId();
const servicioAereo2 = new ServicioAereo();
//const ford = servicioTerrestre.obtenerTransporte(); 
//const avion = servicioAereo.obtenerTransporte();


function enviarPaquete(servicio, lugar){
 const transporte = servicio.obtenerTransporte();
 transporte.transpotar(lugar);

}
enviarPaquete(servicioTerrestre,"Bucaramanga")
enviarPaquete(servicioTerrestre2,"Giron")
enviarPaquete(servicioAereo,"Girardot")
enviarPaquete(servicioAereo2,"Riohacha")

//function realizarEmvio(transporte, lugar){
//   transporte.transpotar(lugar);
//   console.log(transporte.conductor);}


//realizarEmvio(ford, "Cali");
//realizarEmvio(avion, "Barranquilla");