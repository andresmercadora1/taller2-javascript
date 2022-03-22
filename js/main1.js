'use strict'

const n = Number(prompt('Digite un numero'));
let cont = 1, suma = 0;

while (cont <= n) {
    suma += cont;
    cont++;
}

alert('La suma de 1 a ' + n + 'es: ' + suma);