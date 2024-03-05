const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  return Object.keys(objeto).length;


  /*
  var contarPropiedad = 0;
  for (var propiedad in objeto) {
    if (objeto.hasOwnProperty(propiedad)) {
      contarPropiedad++;
    }
  }
  return contarPropiedad;
  */
};

module.exports = contarPropiedades;
