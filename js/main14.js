'use strict'

let num, cont = 1;

const random = Number(Math.round(Math.random() * 5));

do {
    num = Number(prompt('Digite un numero'));
    if (random === num) {
        alert('Felicitaciones el numero ingresado coincide');
        cont = 4;
    } else {
        alert(`No coinciden, intentelo de nuevo, le quedan ${3 - cont} intentos`);
    }
    cont++;
} while(cont <= 3);
