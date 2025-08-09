function registrarNotas() {
    let rango1 = [], rango2 = [], rango3 = [];

    for (let i = 0; i < 15; i++) {
        let curso = prompt(`Ingrese el nombre del curso ${i + 1}:`);
        let nota = parseFloat(prompt(`Ingrese la nota del curso ${curso} (0-100):`));

        if (nota >= 0 && nota <= 40) rango1.push(nota);
        else if (nota <= 70) rango2.push(nota);
        else if (nota <= 100) rango3.push(nota);
        else {
            alert("Nota inválida, intente de nuevo");
            i--;
        }
    }

    function promedio(arr) {
        return arr.length > 0 ? (arr.reduce((a, b) => a + b, 0) / arr.length).toFixed(2) : 0;
    }

    let totalNotas = rango1.length + rango2.length + rango3.length;
    let sumaTotal = [...rango1, ...rango2, ...rango3].reduce((a, b) => a + b, 0);
    let promedioTotal = totalNotas > 0 ? (sumaTotal / totalNotas).toFixed(2) : 0;

    document.getElementById("resultado").innerHTML =
        `<h3>Resultados</h3>
         0-40: ${rango1.length} notas, suma: ${rango1.reduce((a,b)=>a+b,0)}, promedio: ${promedio(rango1)}<br>
         41-70: ${rango2.length} notas, suma: ${rango2.reduce((a,b)=>a+b,0)}, promedio: ${promedio(rango2)}<br>
         71-100: ${rango3.length} notas, suma: ${rango3.reduce((a,b)=>a+b,0)}, promedio: ${promedio(rango3)}<br>
         <br>Total de notas: ${totalNotas}<br>
         Suma total: ${sumaTotal}<br>
         Promedio total: ${promedioTotal}`;
}
