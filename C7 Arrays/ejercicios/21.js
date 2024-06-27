function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  // Buscar los índices de los meses requeridos
  let eneroIndex = array.indexOf('Enero');
  let marzoIndex = array.indexOf('Marzo');
  let noviembreIndex = array.indexOf('Noviembre');

  // Verificar si se encontraron todos los meses
  if (eneroIndex === -1 || marzoIndex === -1 || noviembreIndex === -1) {
    return "No se encontraron los meses pedidos";
  }

  // Crear un nuevo arreglo con los meses encontrados y ordenarlos
  let mesesEncontrados = [array[eneroIndex], array[marzoIndex], array[noviembreIndex]].sort();

  return mesesEncontrados;
}

module.exports = mesesDelAño;
