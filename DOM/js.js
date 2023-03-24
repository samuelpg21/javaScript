
function cambiarTitulo() {
    let miTitulo = document.getElementById("titulo");

    if (miTitulo.innerHTML == "Titulo cambiado") {
        miTitulo.innerHTML = "Titulo Pagina"
    } 
    else {
        miTitulo.innerHTML = "Hola"
    }

}

function cambiarAncho() {
    let imagen = document.getElementById("paco");
    imagen.width = "1000";
}

function cambiarImagen() {
    let imagen = document.getElementById("paco");
    imagen.src = "https://birdcom.es/blog/wp-content/uploads/2021/10/como-reducir-el-peso-de-una-imagen.jpg";
}

function cambiarTexto() {
    let texto = document.getElementById("titulo");
    texto.style.color = "red";
    texto.style.fontSize = "4em";
    texto.style.fontStyle = "italic";
}

function desapareceImage() {
    let imagen = document.getElementById("paco");

    imagen.style.display = "none";
}