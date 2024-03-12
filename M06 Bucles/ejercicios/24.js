function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  /*
  var stringFinal = ''
  for(var i = texto.length - 1; i >= 0 ; i--){
    stringFinal  = stringFinal + texto[i];
  }
  return stringFinal;
*/

  return texto.split("").reverse().join("");
}
module.exports = invertirTexto;