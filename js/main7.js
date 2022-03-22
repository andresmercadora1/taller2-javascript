'use strict'

const intervalo = Number(prompt(`Digite un numero`)) || 1;

for (let i = 30; i >= 1; i-=intervalo) {
    document.write(`<p>${i}</p>`)
}