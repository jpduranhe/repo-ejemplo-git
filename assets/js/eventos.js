$("#formulario-datos").submit((event)=>{
    event.preventDefault();
    console.log('submit formulario');

    const rutIngresado = $("#inputRut").val();
    if(rutIngresado==''){
        toogleFormularioError(true);
    }else {
        toogleFormularioError(false);
        const resultado=definirSiEsGrandeOChico(rutIngresado);    
        $("#div-mensaje")
        .text(resultado)
        .fadeIn();

    }

});
// $("#inputRut").keyup((event)=>{
//     const rutEscrito= event.target.value;
//     const rutFormateado= formatearRut(rutEscrito);
//     $("#inputRut").val(rutFormateado);
// })

