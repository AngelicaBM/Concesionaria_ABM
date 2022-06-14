let autos = require("./autos");

let concesionaria = {
   autos: autos,

   buscarAuto: function (patente){
            for(let i=0;i<=autos.length;i++){
         if(autos[i].patente==patente){
            return autos[i]} else {return null}}
      },

   venderAuto: function (patente){
      let autoParaVender = this.buscarAuto(patente)
      autoParaVender.vendido = true;
      return autos
   }, 

   autosParaLaVenta: function () {
      let lista = this.autos;
      let autosNoVendidos = lista.filter(lista => lista.vendido == false);
      return autosNoVendidos
      },
   
   autosNuevos: function () {
      let listaNoVendidos = this.autosParaLaVenta();  
      let autos0KM  = listaNoVendidos.filter(listaNoVendidos => listaNoVendidos.km < 100)
      return autos0KM
   },

   listaDeVentas: function () {
      let lista = this.autos;
      let listaVendidos = []
      for(let i = 0; i<lista.length; i ++){
         if(lista[i].vendido == true){listaVendidos.push(lista[i].precio)}
      } return listaVendidos
        },

   totalDeVentas: function () {
      let lista = this.listaDeVentas()
      let total = lista.reduce((acumulador, numero)=> {return acumulador + numero},0);
      return total
      },

   puedeComprar: function (auto,persona){
         let autoEncontrado = auto
         if(autoEncontrado.precio<=persona.capacidadDePagoTotal && ((autoEncontrado.precio/autoEncontrado.cuotas)<=persona.capacidadDePagoEnCuotas))
         { return true;
         } else {return false}
      },

   autosQuePuedeComprar:function (persona){
      let autoEncontrados = this.autosParaLaVenta();        
      let listaAutosQuePuedeComprar = []
      for(let i = 0; i<autoEncontrados.length; i ++){
         if((autoEncontrados[i].precio<=persona.capacidadDePagoTotal && (autoEncontrados[i].precio/autoEncontrados[i].cuotas)<=persona.capacidadDePagoEnCuotas)){listaAutosQuePuedeComprar.push(autoEncontrados[i])}
      }return listaAutosQuePuedeComprar;
   }
}
let persona = {
   nombre: "Juan",
   capacidadDePagoEnCuotas: 20000,
   capacidadDePagoTotal: 100000
   }
let auto =[
   {
      marca: "Ford",
      modelo : "Fiesta",
      color: "Azul",
      anio: 2019,
      km: 50,
      precio: 150000,
      cuotas: 12,
      patente: "APL123",
      vendido: false
      }]


console.log(concesionaria.buscarAuto("APL123"))

