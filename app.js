function mostrarResultado(resultado) {
    document.getElementById('resultado').value = resultado;
}

function suma() {
    let numero1 = parseInt(document.getElementById("campo1").value, 10);
    let numero2 = parseInt(document.getElementById("campo2").value, 10);
    let resultado = numero1 + numero2;
    mostrarResultado(resultado.toString());
}

function resta() {
    let numero1 = parseInt(document.getElementById("campo1").value, 10);
    let numero2 = parseInt(document.getElementById("campo2").value, 10);
    let resultado = numero1 - numero2;
    mostrarResultado(resultado.toString());
}

function multiplicacion() {
    let numero1 = parseInt(document.getElementById("campo1").value, 10);
    let numero2 = parseInt(document.getElementById("campo2").value, 10);
    let resultado = numero1 * numero2;
    mostrarResultado(resultado.toString());
}

function division() {
    let numero1 = parseInt(document.getElementById("campo1").value, 10);
    let numero2 = parseInt(document.getElementById("campo2").value, 10);
    let resultado = numero1 / numero2;
    mostrarResultado(resultado.toString());
}

function raiz() {
    let numero = parseFloat(document.getElementById("campo1").value);
    let resultado = Math.sqrt(numero);
    mostrarResultado(resultado.toString());
}

function potencia() {
    let numero1 = parseFloat(document.getElementById("campo1").value);
    let numero2 = parseInt(document.getElementById("campo2").value, 10);
    let resultado = Math.pow(numero1, numero2);
    mostrarResultado(resultado.toString());
}


function absoluto() {
    let numero1 = parseInt(document.getElementById("campo1").value, 10);
    let resultado = Math.abs(numero1);
    mostrarResultado(resultado.toString());
}

function aleatorio() {
    let minimo = parseInt(document.getElementById("campo1").value, 10);
    let maximo = parseInt(document.getElementById("campo2").value, 10);
    maximo = maximo + 1;
    mostrarResultado(Math.floor(Math.random() * (maximo - minimo) + minimo));
}

function redondeo() {
    let resultado = parseFloat(document.getElementById("resultado").value);
    mostrarResultado(Math.round(resultado));
}

function techo() {
    let resultado = parseFloat(document.getElementById("resultado").value);
    mostrarResultado(Math.ceil(resultado));
}

function piso() {
    let resultado = parseFloat(document.getElementById("resultado").value);
    mostrarResultado(Math.floor(resultado));
}

function refreshPage() {
    location.reload();
}
