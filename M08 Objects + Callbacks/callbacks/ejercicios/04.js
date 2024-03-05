function sumarArray(arrayOfNumbers, cb) {
  // Recibes un arreglo de números y un callback.
  // Suma todos los números del arreglo.
  // Este resultado debes pasárselo como argumento al callback recibido.
  // NOTA: no debes retOrnar nada.
  // Tu código:

  var resultado = arrayOfNumbers.reduce(function(acumulador, num){
    return (acumulador = acumulador + num);
  });
  return cb(resultado);


  /*
  var suma = 0;
  for (var i = 0; i < arrayOfNumbers.length; i++) {
    suma += arrayOfNumbers[i];
  }
  cb(suma);
   

  var acumulador = 0;

  for (var i = 0; i < arrayOfNumbers.length; i++) {
    if(typeof arrayOfNumbers[i] === 'number'){
      acumulador += arrayOfNumbers[i];
    }
  }
  return cb(acumulador);
  */
}

module.exports = sumarArray;
