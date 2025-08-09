function calcularGasolina() {
    let litros = parseFloat(prompt("Ingrese la cantidad de litros consumidos:"));
    let clave = parseInt(prompt("Ingrese la clave del tipo de gasolina (1, 2 o 3):"));
    let precio = 0;

    if (clave === 1) precio = 40;
    else if (clave === 2) precio = 35;
    else if (clave === 3) precio = 30;
    else { alert("Clave inválida"); return; }

    let total = litros * precio;
    document.getElementById("resultado").innerHTML =
        `Total a pagar: Q${total.toFixed(2)}`;
}
