'use strict'

const numCompras = Number(prompt('Digite el numero de compras del día'));
let cont = 1, numProducto, valorProducto, totalG = 0;

while (cont <= numCompras) {
    let cont1 = 1, total = 0;
    numProducto = Number(prompt(`Digite el numero de productos del cliente#${cont}`));
    document.write(`<p>Cliente #${cont}</p>`);
    document.write(`<p>No. Producto: ${numProducto}</p>`);
    while (cont1 <= numProducto) {
        valorProducto = Number(prompt(`Digite el valor del producto ${cont1}`));
        total += valorProducto;
        document.write(`<p>Valor p${cont1}: ${valorProducto}</p>`)
        cont1++;
    }
    document.write(`<p>Total compra: ${total}</p>`);

    totalG += total;
    cont++;
}

document.write(`<p>Total Ventas del dia: ${numCompras}</p>`);
document.write(`<p>Total General del dia: ${totalG}</p>`);
