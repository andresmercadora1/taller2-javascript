'use strict'

let cont = 30;

const num = Number(prompt('Digite un numero'));

while (cont >= 1) {
    document.write(`<p>${num} X ${cont} = ${num * cont}</p>`);
    cont--;
}