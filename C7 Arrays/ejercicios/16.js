function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  let i=-1
  return array.map((num) => {i+=1; return num*i})
}
module.exports = multiplicarElementosPorIndice;
