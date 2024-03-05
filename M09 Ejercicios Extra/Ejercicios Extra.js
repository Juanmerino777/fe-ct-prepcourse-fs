/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:

  var arrayPadre = []

  for(var propiedad in objeto){
    var array = [propiedad, objeto[propiedad]]
    arrayPadre.push(array)
  }
  return arrayPadre;

  /*
  var claves = Object.keys(objeto);
  var arregloPadre = claves.map(function(clave){
    return [clave, objeto[clave]]
  })
  return arregloPadre;
  */
}






function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código: 
  
  //                            =>split = comvierte el string en array.
  var arrayOrdenado = string.split('').sort() 
  //                                   =>sort = ordena el string.
  
  var acumulador = 1;
  var objeto = {};

  for (var i = 0; i < arrayOrdenado.length; i++) {
    if(arrayOrdenado[i] === arrayOrdenado[i+1]){
      acumulador++;
    }else{
      objeto[arrayOrdenado[i]] = acumulador;
      acumulador = 1;
    }
  }

  return objeto;

}






function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:

  var mayusculas = '';
  var minusculas = '';

  for (var i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      mayusculas += string[i];
    } else {
      minusculas += string[i];
    }
  }

  return mayusculas + minusculas;

}





function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:

  var resultado = frase.split(" ").map(function(item){
    return item.split("").reverse().join("")
  }).join(" ");
  
  return resultado;

}







function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:


  var numeroAString = numero.toString();//comvierto el numero a string,

  var numeroInvertido = numeroAString.split('').reverse().join('')

  if (numeroAString === numeroInvertido) {
    return "Es capicua";
  } else {
    return "No es capicua";
  }
}







function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  var resultado = '';

  for (var i = 0; i < string.length; i++) {
    if(string[i] != 'a' && string[i] != 'b' && string[i] != 'c'){
      resultado += string[i];
    }
  }
  return resultado;
}






function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  function compararTamaño(a, b) {
    return a.length - b.length;
  }
  return arrayOfStrings.sort(compararTamaño);
  
}






function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  
  var elementosEnComun = []
  for (var i = 0; i < array1.length; i++) {
    if(array2.includes(array1[i])){
      elementosEnComun.push(array1[i]);
    }
  }
  return elementosEnComun;
}



/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
