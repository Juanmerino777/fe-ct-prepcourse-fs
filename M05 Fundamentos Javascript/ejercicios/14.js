function tienenMismaLongitud(str1, str2) {
  // La función recibe dos argumentos "str1" e "str2" que son strings.
  // Retorna true si los dos strings tienen la misma longitud.
  // De lo contrario, retorna false.
  // Tu código:

 // 1er:ejemplo-------------------
 //  var longitud1 = str1.length;
 //  var longitud2 = str2.length;

 //  if (longitud1 === longitud2){
 //   return true;
 //  }else {
 // return false;
 // }
 
 // 2er:ejemplo-------------------
  if(str1.length === str2.length){
    return true;
  }return false;
}
module.exports = tienenMismaLongitud;