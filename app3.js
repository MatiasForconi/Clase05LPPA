//Ejercicio 8 //
function miFuncion(unNumero, unArray){
     ++unNumero; unArray.pop(); 
    }
    var miNumero = 15;
    var miArray = ['Un texto', true, 4, 5];
    miFuncion(miNumero, miArray);

console.log(miNumero);
console.log(miArray);


/*
miNumero = 15
miArray = ['Un texto', true, 4, ]
*/