console.log('Hola mundo');

let a = 2;
let b = 2;

if (a == 2) {
    console.log('Condición 1', a+b, 'Eve');
}

if (b == 3) {
    console.log('Condición 2', a+b);
    alert('Hola')
}

var toto = 45;

if(typeof toto=='string'){
    console.log('es una cadena de caracteres, mira:')
    console.log(toto)
} else if (typeof toto=='number'){
    console.log('es un numero y es este:')
    console.log(toto)
}

var resultado = 13;
var calculo = resultado + 2;
console.log(calculo);

var calculo2 = resultado%4;
console.log(calculo2);

calculo2 += 30;
console.log(calculo2);

var e=5, f=10;
if (a>b) {
     alert("e es mayor que f");
}
else{
    alert(" Hola! bienvendo a donde conoceras un poco sobre la mente adolescente");
    f++;
}

// holaaaaa 
/*hola x2*/

var eve = 17;


console.log(eve);

var yo;
yo = "Eve hola ";
console.log(yo);

var suma = 7 + 7;
console.log(suma);

var miNumeroDecimal = 2.40 * 3.80;
console.log(miNumeroDecimal);

var resto = 15 % 5;
console.log(resto);

var librosComprados = 105;
console.log(librosComprados);
// Opcion 1 de como incrementar esta variable
     //librosComprados = librosComprados + 1;

// Opcion 2 (esta solo funciona para incrementar en 1)
 librosComprados++;
 console.log(librosComprados);

 /* Ahora para incrementar o reducir con cualquier otro 
 valor que no sea 1*/
 var z = 23;
 z += 3;
console.log(z);