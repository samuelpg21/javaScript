function calculaNota() {
    let N = prompt("Dame la nota de 1 al 5");
    let F = N * 2;

    alert("Nota introducida " + N + ", nota final " + F);

    if (F > 5) {
        alert("Has aprovado")
    }
    else {
        alert("Has suspendido")
    }
}

function calcularProducto() {
    let num1 = prompt("Dime un numero");
    let num2 = prompt("Dime otro numero");
    let producto = num1 * num2;

    alert("El producto de " + num1 + " por " + num2 + " es " + producto);

    if (producto > 100) {
        alert("Resultado mayor que 100");
    } else {
        alert("Resultado menor que 100");
    }
}


function cambioAlerta() {
    let alerta = document.getElementById("palert");

    alerta.innerHTML = "Nivel de alerta 1";
    alerta.style.backgroundColor = "red";
    alerta.style.color = "yellow";
    alerta.style.fontSize = "4em";
}

function concederAcceso() {
    let acceso = document.getElementById("acces");

    acceso.innerHTML = "Acceso denegado";
    acceso.style.backgroundColor = "black";
    acceso.style.color = "white";
    acceso.style.fontFamily = "Arial";
}

function validaFormulario() {
    let usuario = document.getElementById("nomb");
    let age = document.getElementById("edad");
    let subscriptor = document.getElementById("sub");
    let comunidad = document.getElementById("comunidades");

    if (usuario.value == "") {
        alert("El usuario no debe quedar en blanco");
        usuario.focus();
        return false;
    }
    if (usuario.value.length < 8) {
        alert("El usuario debe contener al menos 8 caracteres");
        usuario.focus();
        return false;
    }
    if (age.value > 65) {
        alert("No puedes ser mayor a 65 años");
        age.focus();
        return false;
    }
    if (subscriptor.checked == false) {
        alert("Debe ser subscriptor para acceder");
        subscriptor.focus();
        return false;        
    }
    if (comunidad.value == "ma") {
        alert("Los usuarios de Madrid no tienen acceso");
        comunidad.focus();
        return false;
    }

    return true;

}