function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  let a = Array.from(arguments)
  return a.length == 0? 0: a.reduce((acumulador, numero) => acumulador * numero, 1)
}

module.exports = multiplicarArgumentos;
