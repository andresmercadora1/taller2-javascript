'use strict'

let cont = 1, notas, notasA = 0, contA = 0, notasD = 0, contD = 0;
const numNota = Number(prompt('Digite el numero de notas a calcular'));

while (cont <= numNota) {
    notas = Number(prompt(`Digite la nota${cont} (1 a 5)`));
    if(notas >= 3) {
        notasA += notas;
        contA++;
    } else {
        notasD += notas;
        contD++;
    }
    cont++;
}

alert(`El promedio de las notas aprobadas es: ${(notasA / contA).toFixed(1)}
El promedio de las notas desaprobadas es: ${(notasD / contD).toFixed(1)}
`);