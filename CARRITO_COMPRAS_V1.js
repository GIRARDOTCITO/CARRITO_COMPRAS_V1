//Nombre: Juan Sebastian Girardot Antonio
//Centro de Biotecnologia Agropecuaria Sena - Mosquera
//En este codigo podemos observar que primero pedimos el nombre del cliente y le mostramos los productos de nuestro carrito de compras.

var nombre = prompt('Digite su nombre');
console.log('|----------------------------------|')
console.log('|  Codigo  |   Nombre   |  Precio  |')
console.log('|----------------------------------|')
console.log('|   (p)   ' + ' | ' + 'pantalones |  $40000  |')
console.log('|----------------------------------|')
console.log('|   (c)   ' + ' | ' + ' camisas   |  $50000  |')
console.log('|----------------------------------|')
console.log('|   (m)   ' + ' | ' + ' medias    |  $10000  |')
console.log('|----------------------------------|')
do {
  console.log("Hola " + nombre)
  var ropita, cantidad;
  do{
   ropita = prompt(" ¿Que desea comprar?")
  }while(ropita != 'p' && ropita != 'c' && ropita != 'm' && ropita != 'P' && ropita != 'C' && ropita != 'M')
  do{
   cantidad = prompt('¿Cuantos articulos desea comprar?')
  }while(isNaN(cantidad) || cantidad < 1)
  //En esta parte del codigo, validamos datos de tal manera que el cliente solo pueda digitar lo que se observa, ya que si digita otra cosa lo devolvera.
  let ropa = {
    p: 40000,
    c: 30000,
    m: 10000,
  }
  //creamos un objeto el cual contiene los precios de cada uno de los productos que tenemos en nuestro carrito de compras
  switch (ropita) {
    case 'P', 'p':
      let sumap = ropa.p * cantidad
      console.log('El total de su compra es: $' + sumap)
      break;''
    case  'C','c':
      let sumac = ropa.c * cantidad
      console.log('El total de su compra es: ' + sumac)
      break;
    case 'M','m':
      let sumam = ropa.m * cantidad
      console.log('El total de su compra es: ' + sumam)
      break;
    default:
    console.log('no coinciden los datos')
  }
  //Creamos un "switch" para que cuando el cliente digite un valor el switch lea cual de los valores digito y si conincide con cada uno de ellos entonces que realice las operaciones que vemos acontinuacion.
  valid = confirm('¿Desea realizar mas compras?')
} while (valid === true)
//Y por ultimo ponemos un "while" con un "confirm", por si el cliente desea realizar mas compras.
