function filter(arrayOfStrings) {
  // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
  // Luego retorna un nuevo arreglo con estos elementos.
  // Tu código:
  var nuevoArray = arrayOfStrings.filter(function (string){
    if(string.startsWith('a')) return string;
    //startsWith() = verifica si el string empieza con a.
  });
  return nuevoArray;


  /*
  var acumulado = [];
  for(var i = 0; i < arrayOfStrings.length; i++){
    if(arrayOfStrings[i][0] === 'a'){
      acumulado.push(arrayOfStrings[i]);
    }
  }
  return acumulado;
  */
}

module.exports = filter;
