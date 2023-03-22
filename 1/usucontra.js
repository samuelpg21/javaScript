function usuarioYContrasena(){
    let usuario = prompt("Introduzca usuario");
    let contrasena = prompt("Introduzca la contraseña");


    if (usuario == "admin" && contrasena == "1234") {
        alert("Acceso autorizado");
    } else {
        alert("NO estas autorizado. Usuario o contraseña incorrectos");
    }
}

function cambioContra() {
    let nuevaContrasena = prompt("Dime tu nueva contraseña");
    let confirmaContrasena = prompt("Confirma tu nueva contraseña");

    if (nuevaContrasena == confirmaContrasena) {
        alert("Contraseña cambiada");
    } else {
        alert("Contraseña incorrecta");
    }
}
