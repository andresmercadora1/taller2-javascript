'use strict'

let contMay = 0, contMen = 0, edad;

for (let i = 0; i < 10; i++) {
    edad = Number(prompt(`Digite la edad del estudiante ${i+1}`));
    if (edad < 18) {
        contMen++;
    } else {
        contMay++;
    }
}

alert(`Existen ${contMay} estudiantes mayores de edad
y Existen ${contMen} estudiantes menores de edad`);
