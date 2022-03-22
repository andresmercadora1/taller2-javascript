let cont = 1,
    maximoRepeticion = 0,
    tabla = '';

const maximo = Number(prompt('Digite la longitud maxima del contenido de la tabla'))

tabla = `
    <table class="table w-50 table-bordered">
`;
while (cont <= maximo) {
    var cont1 = 1;
        tabla += `<tr>`;
        while (cont1 <= 5) {
            if(maximoRepeticion === maximo) {
                cont = maximo+1;
                cont1 = 5+1;
            } else {
                maximoRepeticion++;
                tabla += `
                    <td>${ maximoRepeticion }</td>       
                `; 
                cont1++;
            }      
        
        }
        tabla += `</tr>`;
        
    cont++;
}
tabla += `
    </table>
`;
document.write(tabla)