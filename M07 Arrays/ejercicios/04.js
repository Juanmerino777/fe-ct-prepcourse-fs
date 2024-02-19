function obtenerElementoAleatorio(array) {
  // Devuelve un elemento aleatorio del arreglo array.
  // PISTA: Usa el método Math.random().
  // Tu código:
  var elementoAleatorio = Math.floor(Math.random() * array.length);
  return array[elementoAleatorio]
}

module.exports = obtenerElementoAleatorio;
