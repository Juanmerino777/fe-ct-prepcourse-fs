function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  var mesesEncontrados = [];

  for(var i=0; i<array.length; i++){
    if(
      array[i] === "Enero" ||
      array[i] === "Marzo" ||
      array[i] === "Noviembre"
      ){
        mesesEncontrados.push(array[i]);
      }
  }

  if(mesesEncontrados.length !== 3){
    return "No se encontraron los meses pedidos";
  }
  return mesesEncontrados;
}

module.exports = mesesDelAño;
