let numeroAzar = Math.floor(Math.random()*100) +1
let numeroEntrada = document.getElementById('numeroEntrada')
let mensaje = document.getElementById('mensaje')

function chequearResultado(){
    let numeroIngresado = parseInt(numeroEntrada.value)
    if(numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)){
        mensaje.textContent = 'introduzca un numero del 1 al 100';
        return
    }
    if(numeroIngresado === numeroAzar){
        mensaje.textContent = 'felicidades, ganaste!!!'
    }else if(numeroIngresado > numeroAzar){
        mensaje.textContent = 'el numero es demasiado grande'
    }else{
        mensaje.textContent = 'el numero es demasiado chico'
    }
}