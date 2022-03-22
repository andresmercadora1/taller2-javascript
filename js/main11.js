'use strict'
let nombre, materia, notas;

for (let i = 1; i <= 3; i++) {
    let prom = 0, suma = 0;
    nombre = prompt(`Digite el nombre del alumno#${i}`);
    materia = prompt('Digite el nombre de la materia');

    document.write(`<p>Nombre Alumno #${i} ${nombre}</p>`);
    document.write(`<p>Materia: ${materia}</p>`);

    for (let j = 1; j <= 3; j++) {
        notas = Number(prompt(`Digite la nota${j} (1 a 5)`));
        suma += notas;
        document.write(`<p>Nota ${j} : ${notas}</p>`)
    }
    prom = (suma / 3).toFixed(1);
    document.write(`<p>Promedio: ${prom}</p>`);
}

document.write(`<p>Total Ventas del dia: ${numCompras}</p>`);
document.write(`<p>Total General del dia: ${totalG}</p>`);
