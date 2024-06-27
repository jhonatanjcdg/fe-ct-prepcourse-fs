function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  // Utilizar el método filter() para seleccionar elementos mayores a 10
  let elementosMayoresA10 = array.filter(numero => numero > 10);
  
  // Obtener la longitud del arreglo resultante
  return elementosMayoresA10.length;
}

module.exports = contarElementosMayoresA10;
