function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  // Iterar sobre el arreglo
  for (let i = 0; i < array.length; i++) {
    // Verificar si el elemento actual es un string y tiene más de 5 caracteres
    if (array[i].length >= 5) {
      return array[i]; // Devolver el primer string largo encontrado
    }
  }

  return undefined; // Devolver undefined si no se encuentra ningún string largo
}

console.log(obtenerPrimerStringLargo(['this', 'is', 'a', 'test']))
module.exports = obtenerPrimerStringLargo;
