// Se traen las variables
let numero1;
let numero2;
let operacion;
let resultado = document.querySelector('#resultado');
let reset = document.querySelector('#reset');
let suma = document.querySelector('#suma');
let resta = document.querySelector('#resta');
let multiplicacion = document.querySelector('#multiplicacion');
let division = document.querySelector('#division');
let igual = document.querySelector('#igual');
let uno = document.querySelector('#uno');
let dos = document.querySelector('#dos');
let tres = document.querySelector('#tres');
let cuatro = document.querySelector('#cuatro');
let cinco = document.querySelector('#cinco');
let seis = document.querySelector('#seis');
let siete = document.querySelector('#siete');
let ocho = document.querySelector('#ocho');
let nueve = document.querySelector('#nueve');
let cero = document.querySelector('#cero');


uno.onclick = function (e) {
    resultado.value = resultado.value + "1";
}
dos.onclick = function (e) {
    resultado.value = resultado.value + "2";
}
tres.onclick = function (e) {
    resultado.value = resultado.value + "3";
}
cuatro.onclick = function (e) {
    resultado.value = resultado.value + "4";
}
cinco.onclick = function (e) {
    resultado.value = resultado.value + "5";
}
seis.onclick = function (e) {
    resultado.value = resultado.value + "6";
}
siete.onclick = function (e) {
    resultado.value = resultado.value + "7";
}
ocho.onclick = function (e) {
    resultado.value = resultado.value + "8";
}
nueve.onclick = function (e) {
    resultado.value = resultado.value + "9";
}
cero.onclick = function (e) {
    resultado.value = resultado.value + "0";
}

//Funciones
resetear.onclick = function(e){
    resetok();
}
suma.onclick = function(e){
    numero1= resultado.value;
    operacion = "+";
    limpiar();
}
resta.onclick = function(e){
    numero1= resultado.value;
    operacion = "-";
    limpiar();
}
multiplicacion.onclick = function(e){
    numero1= resultado.value;
    operacion = "*";
    limpiar();
}
division.onclick = function(e){
    numero1= resultado.value;
    operacion = "/";
    limpiar();
}
igual.onclick = function(e){
    numero2= resultado.value;
    resolver();
}

//Operaciones
function limpiar() {
    resultado.value= "";
}


function resetok(){
    numero1 = "";
    numero2 = "";
    operacion = "";
    limpiar();}

function resolver() {
    let respuesta = 0;
    switch (operacion) {
        case "+":
            respuesta = parseFloat(numero1) + parseFloat(numero2);
            break;
        case "-":
            respuesta = parseFloat(numero1) - parseFloat(numero2);
            break;
        case "*":
            respuesta = parseFloat(numero1) * parseFloat(numero2);
            break;
        case "/":
            respuesta = parseFloat(numero1) / parseFloat(numero2);
            break;
    }
    resultado.value= respuesta;
    
}