'use strict'

const intervalo = Number(prompt(`Digite un numero`)) || 1;

for (let i = 1; i <= 30; i+=intervalo) {
    document.write(`<p>${i}</p>`)
}