function mostrarMes() {
    let mes = parseInt(prompt("Ingrese el número del mes (1-12):"));
    let año = parseInt(prompt("Ingrese el año:"));

    let meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio",
                 "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

    if (mes < 1 || mes > 12) {
        alert("Mes inválido");
        return;
    }

    let dias = [31, (año % 4 === 0 && (año % 100 !== 0 || año % 400 === 0)) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    document.getElementById("resultado").innerHTML =
        `${meses[mes - 1]} tiene ${dias[mes - 1]} días.`;
}
