let funcionalidadTareas = require('./funcionesjson');

let accion = process.argv[2];
let parametroAdicional = process.argv[3];
let parametroAdicionalDos = process.argv[4];

switch(accion) {
    case 'leerAutos' :
        funcionalidadTareas.leerAutos()
        break;

    case 'buscarAuto' :
        console.log(funcionalidadTareas.buscarAuto(parametroAdicional))
        break;

    case 'venderAuto' :
        console.log(funcionalidadTareas.venderAuto(parametroAdicional))
        break;

    case 'autosParaLaVenta' :
        console.log(funcionalidadTareas.autosParaLaVenta())
        break;

    case 'autosNuevos' :
        console.log(funcionalidadTareas.autosNuevos())
        break;

    case 'listaDeVentas' :
        console.log(funcionalidadTareas.listaDeVentas())
        break;

    case 'totalDeVentas' :
        console.log(funcionalidadTareas.totalDeVentas())
        break;

    case 'puedeComprar' :
        console.log(funcionalidadTareas.puedeComprar(parametroAdicional,parametroAdicionalDos))
        break;

    case 'autosQuePuedeComprar' :
        console.log(funcionalidadTareas.autosQuePuedeComprar(parametroAdicional))
        break;

    default:
        console.log('No hay autos que comprar');
            break;
}
