'use strict'

let cont = 0, suma = 0, num = 0, opt = '';

do {
    num = Number(prompt('Digite un valor'));
    suma += num;
    cont++;
    opt = prompt('Digite la letra F si ya no deseas ingresar mas numero').toUpperCase();
} while(opt !== 'F');
alert(`La cantidad de numero ingresado es: ${cont}
Y la suma de los mismo es: ${suma}`);