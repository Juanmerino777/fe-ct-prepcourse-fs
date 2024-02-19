function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  var resultado = array.map(function(elemento, indice){
    return elemento * indice
  });
  return resultado;
}

module.exports = multiplicarElementosPorIndice;
