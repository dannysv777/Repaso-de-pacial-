function registrarCiudadanos() {
    let departamentos = ["HUEHUETENANGO", "QUETZALTENANGO", "GUATEMALA"];
    let conteo = {
        HUEHUETENANGO: { total: 0, mayores: 0, menores: 0, edades: [] },
        QUETZALTENANGO: { total: 0, mayores: 0, menores: 0, edades: [] },
        GUATEMALA: { total: 0, mayores: 0, menores: 0, edades: [] }
    };

    while (true) {
        let depto = prompt("Ingrese departamento (HUEHUETENANGO, QUETZALTENANGO, GUATEMALA o SALIR):").toUpperCase();
        if (depto === "SALIR") break;
        if (!departamentos.includes(depto)) {
            alert("Departamento inválido");
            continue;
        }

        let edad = parseInt(prompt("Ingrese la edad:"));
        conteo[depto].total++;
        conteo[depto].edades.push(edad);
        if (edad >= 18) {
            conteo[depto].mayores++;
            alert("Puede votar");
        } else {
            conteo[depto].menores++;
            alert("No puede votar");
        }
    }

    let html = "";
    departamentos.forEach(d => {
        let promedio = conteo[d].edades.length > 0 ?
            (conteo[d].edades.reduce((a, b) => a + b, 0) / conteo[d].edades.length).toFixed(2) : 0;
        html += `<h3>${d}</h3>
                 Total: ${conteo[d].total}<br>
                 Mayores: ${conteo[d].mayores}<br>
                 Menores: ${conteo[d].menores}<br>
                 Promedio edad: ${promedio}<br><br>`;
    });

    let todasEdades = [].concat(...departamentos.map(d => conteo[d].edades));
    let promedioGeneral = todasEdades.length > 0 ? (todasEdades.reduce((a, b) => a + b, 0) / todasEdades.length).toFixed(2) : 0;

    html += `<strong>Promedio general:</strong> ${promedioGeneral}`;
    document.getElementById("resultado").innerHTML = html;
}
