let numeroAzar = Math.floor(Math.random()*100) +1
let numeroEntrada = document.getElementById('numeroEntrada')
let mensaje = document.getElementById('mensaje')
let intentos = 0

function chequearResultado(){
    
    let numeroIngresado = parseInt(numeroEntrada.value)
    if(numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)){
        mensaje.textContent = 'introduzca un numero del 1 al 100';
        return
    }
    intentos++;
    if(numeroIngresado === numeroAzar){
        mensaje.textContent = 'felicidades, ganaste!!!'
        document.getElementById('intentosProbados').value;
        intentosProbados.textContent = 'Lo hiciste en '+ intentos + ' intentos'
    }else if(numeroIngresado > numeroAzar){
        mensaje.textContent = 'el numero es demasiado grande'
        document.getElementById('intentosProbados').value;
        intentosProbados.textContent = 'llevas '+ intentos + ' intentos realizados'
    }else{
        mensaje.textContent = 'el numero es demasiado chico'
        document.getElementById('intentosProbados').value;
        intentosProbados.textContent = 'llevas '+ intentos + ' intentos realizados'
    }

    if(intentos === 5){
        mensaje.textContent = ''
        numeroEntrada.disabled = true;
        ultimoIntento.textContent = '¡¡¡PERDISTE!!!, el número era ' + numeroAzar
        intentosProbados.textContent = ''
        document.getElementById('boton').disabled = true;
    }else if(intentos === 4){
        ultimoIntento.textContent = '¡¡¡¡Te queda un solo intento!!!!'
    }
}

function vaciar(){
mensaje.textContent = ""
}