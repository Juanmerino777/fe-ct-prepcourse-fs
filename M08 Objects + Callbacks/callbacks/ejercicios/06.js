function map(array, cb) {
  // Itera sobre el arreglo y por cada elemento, pasárselo como argumento al callback.
  // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
  // Retorna el nuevo arreglo.
  // Tu código:
  var nuevoArray = array.map(function (item){
    return cb(item);
  });
  return nuevoArray;


  /*
  var acumulado = [];
  for (var i=0; i<array.length; i++){
    acumulado.push(cb(array[i]));
  }
  return acumulado;
  */
}

module.exports = map;
