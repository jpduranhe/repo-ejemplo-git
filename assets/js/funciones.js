
function definirSiEsGrandeOChico(rut){
    guardarUltimoRutEnLocalStorage(rut);
    const rutSinDv=obtenerRutSinDv(rut);
    const rutNumero=parseInt(rutSinDv);

    if(rutNumero<= 5000000){
        return 'grande';
    } else{
        return 'chico';
    }
}
function toogleFormularioError(muestraError){

    if(muestraError){
        $("#formulario-datos").addClass("was-validated");
        $("#inputRut").addClass("is-invalid");
    }else{
        $("#formulario-datos").removeClass("was-validated");
        $("#inputRut").removeClass("is-invalid");
    }

}

function guardarUltimoRutEnLocalStorage(rut){
    localStorage.setItem("ultimoRut",rut);
}
function obtenerUltimoRutEnLocalStorage(){
   const ultimoRut= localStorage.getItem("ultimoRut");
   $("#parrafoUltimoRut").text(ultimoRut);
}

function obtenerRutSinDv(rut){

    //11.111.111-K
    const rutSinPuntos=rut.replaceAll(".","");
    //11111111-K
    const rutSinGuion= rutSinPuntos.replace("-","");
    //11111111K
    const largo=rutSinGuion.length;
    const rutSinDv= rutSinGuion.substring(0,largo-1);
    //11111111
    return rutSinDv;
}
function formatearRut(rut){
    // XX.XXX.XXX-X
    const newRut = rut.replace(/\./g,'').replace(/\-/g, '').trim().toLowerCase();
    const lastDigit = newRut.substr(-1, 1);
    const rutDigit = newRut.substr(0, newRut.length-1)
    let format = '';
    for (let i = rutDigit.length; i > 0; i--) {
      const e = rutDigit.charAt(i-1);
      format = e.concat(format);
      if (i % 3 === 0){
        format = '.'.concat(format);
      }
    }
    return format.concat('-').concat(lastDigit);
  }

  obtenerUltimoRutEnLocalStorage();
