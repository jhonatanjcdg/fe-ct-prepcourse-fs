function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // NOTA: no debes retornar nada.
   // Tu código:
   let suma = arrayOfNumbers.reduce((acumulador, numero) => acumulador + numero, 0);
  
  // Llamar al callback con el resultado de la suma como argumento
  cb(suma);
}

module.exports = sumarArray;
