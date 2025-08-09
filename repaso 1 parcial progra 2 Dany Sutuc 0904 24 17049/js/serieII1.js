function calcularIMC() {
    let peso = parseFloat(prompt("Ingrese su peso en kg:"));
    let altura = parseFloat(prompt("Ingrese su altura en metros:"));

    if (peso <= 0 || altura <= 0) {
        alert("Datos inválidos");
        return;
    }

    let imc = peso / (altura * altura);
    let categoria = "";

    if (imc < 18.5) categoria = "Bajo peso";
    else if (imc < 25) categoria = "Normal";
    else if (imc < 30) categoria = "Sobrepeso";
    else categoria = "Obesidad";

    document.getElementById("resultado").innerHTML =
        `Su IMC es: ${imc.toFixed(2)}<br>Categoría: ${categoria}`;
}
