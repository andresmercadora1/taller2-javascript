'use strict'

const intervalo = Number(prompt(`Digite un numero(altura)`));

let cont = 1, aux = 1;
while (cont <= intervalo) {
    let cont1 = 1;
    while (cont1 <= aux) {
        document.write('*');
        cont1++;
    }
    document.write(`<br>`)
    aux++;
    cont++;
}