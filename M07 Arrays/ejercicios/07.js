function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  var comvertido =[];
  
  for(var i = 0; i < array.length; i++){
    if(typeof array[i] === 'string'){
      comvertido.push(array[i].toUpperCase());
    }else{
      comvertido.push(array[i]);
    }
  }
  return comvertido;
}

module.exports = convertirStringAMayusculas;
