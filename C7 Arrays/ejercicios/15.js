function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  // Obtener el valor máximo del arreglo usando Math.max y spread operator
  if(array.length <= 1) return 0
  // Usar indexOf para encontrar el índice del valor máximo
  let mayor = array[0];
  let indiceMayor = 0;

  // Iterar sobre el arreglo para encontrar el número más grande y su índice
  for (let i = 1; i < array.length; i++) {
    if (array[i] > mayor) {
      mayor = array[i];
      indiceMayor = i;
    }
  }

  return indiceMayor;
}
module.exports = encontrarIndiceMayor;
