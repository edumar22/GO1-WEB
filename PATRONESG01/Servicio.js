import Camion from "./Camion.js";

class Servicio{

    idServicio = 0;
    constructor(){
        this.generarId();//nos referimos a un atributo dentro de la propia clase el this
    }

    generarId(){
        this.idServicio = Math.random().toString(36).slice(2);
    }

    obtenerTransporte(){
        return new Camion(this.idServicio, "Bad Bunny")

    }
}

export default 
Servicio;