/* 
pedir un numero 10 veces mediante prompt y sumarle otro numero en cada repeticion, mostrar el resultado 
por consola, usando for 
*/


var numero1 = parseInt(prompt("Ingrese el numero que sera sumado en cada iteraccion"));
var suma = 0;
for(let i=0; i < 10; i++){
    var numero2 = parseInt(prompt("Ingrese el numero para sumar"));
    suma = numero1 + numero2;
    console.log(suma);
}


//pedir un texto por consola, concatenar un valor en cada iteraccion realizando una salida por resultado
// hasta que se ingrese "ESC"

//var texto = prompt("Ingrese un texto");
var resultado = texto;
var textoConcatenar =" ";

while(textoConcatenar != 'ESC'){
    textoConcatenar = prompt("Ingrese un texto para concatenarle al inicial");
    resultado = resultado +" " + textoConcatenar;
    console.log(resultado);

}



//pedir un numero y mostrar alerta con mensaje "Hola" la cantidad de veces del valor del numero


var numero1 = parseInt (prompt("Ingrese un numero para repetir el mensaje", 0));

for (let i =1; i <= numero1; i++){
    alert("Hola");
}