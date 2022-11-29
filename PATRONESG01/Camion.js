class Camion{
  //  constructor(placa){
  //      this.placa = placa;
  //  }
    constructor(id, conductor){
        this.placa = id;
        this.conductor = conductor;
    } 

    transpotar(lugar){
        console.log("El Camion 🚛["+this.placa+"] esta transportando el pedido a: "+lugar+", Por medio terrestre");
    }


}
export default Camion;