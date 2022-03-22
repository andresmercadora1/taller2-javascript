'use strict'

let cont = 1;

const num = Number(prompt('Digite un numero'));

while (cont <= 30) {
    document.write(`<p>${num} X ${cont} = ${num * cont}</p>`);
    cont++;
}