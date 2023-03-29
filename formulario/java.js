function validaFormulario(){
    let miEdad = document.getElementById("edad");
    let miNombre = document.getElementById("nombre")
    let miComunidad = document.getElementById("comunidad");
    let miAcepto = document.getElementById("acepto");
    let miPasswd = document.getElementById("passwd");

    if (miEdad.value < 18) {
        alert("No puede ser menor que 18 años");
        miEdad.focus();
        return false;
    }

    if (miNombre.value.length < 6) {
        alert("El nombre no debe estar en blanco");
        miNombre.focus();
        return false;
    }

    if (miComunidad.value == "elija") {
        alert("Debe elejir una comunidad");
        miComunidad.focus();
        return false;
    }
    if (miAcepto.checked == false) {
        alert("Acepte los terminos y condiciones")
        miAcepto.focus();
        return false;
    }

    if (miPasswd.value != "1234") {
        alert("Contraseña incorrecta");
        miPasswd.focus();
        return false;
    }

    alert("Datos correctos");
    return true;

}