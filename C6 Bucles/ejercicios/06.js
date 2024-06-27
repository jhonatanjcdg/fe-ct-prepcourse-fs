function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  return num < 1000 && num > 99
}

module.exports = tieneTresDigitos;
