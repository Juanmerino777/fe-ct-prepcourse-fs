function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  var elementoDuplicado = [];

  for(var i=0; i<array.length;i++){
    elementoDuplicado.push(array[i] * 2);
  }
  return elementoDuplicado;
}

module.exports = duplicarElementos;
