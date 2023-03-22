

function calculoCuadrado(){

    let num = prompt("Dime un numero que te calculo el cuadrado");
    let cuadrado = num * num;

    alert("El cuadrado de " + num + " es " + cuadrado);

}

function areaRectangulo(){

    let base = prompt("Dime la base del rectangulo");
    let altura = prompt("Dime la altura del rectangulo");

    let area = base * altura;

    alert("El area del rectangulo con base " + base + " y altura " + altura + " es " + area);

}

function division(){

    let dividendo = prompt("Dime el dividendo");
    let divisor = prompt("Dime el divisor");
    let cociente = dividendo / divisor;

    if (divisor == 0) {
        alert("ERROR")
    } else {
        alert("El resultado de " + dividendo + " / " + divisor + " es " + cociente)
    }
}

function login(){
    let usuario = prompt("Dime tu nombre de usuario");

    if (usuario == "admin") {
        alert("Bienvenido")
    } else {
        alert("No estas autorizado")
    }
}




function adivinaElNumero(){
    let numsecret = 8;
    let numero = prompt("Dime un numero del 1 al 10");

    if (numero == numsecret) {
        alert("Acertastes el numero secreto");
    } if (numero > 10 || numero < 0) {
        alert("No puede ser mayor que 10 ni menor que 0")
        return;
    } if (numero > numsecret) {
        alert("Te pasaste bro mi pana");
        return;
    } if (numero < numsecret) {
        alert("No llegas pringao");
        return;
    }
}