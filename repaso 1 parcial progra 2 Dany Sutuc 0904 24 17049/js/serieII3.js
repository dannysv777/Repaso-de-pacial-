function mostrarMarcas() {
    let marcas = ["Toyota", "Honda", "Nissan", "Ford", "Chevrolet", "Kia", "Hyundai", "Mazda", "Volkswagen", "BMW"];
    let salida = "<h3>Recorridos</h3>";

    salida += "<strong>For in:</strong><br>";
    for (let i in marcas) {
        salida += `${i}: ${marcas[i]}<br>`;
    }

    salida += "<br><strong>For of:</strong><br>";
    for (let marca of marcas) {
        salida += `${marca}<br>`;
    }

    salida += "<br><strong>For tradicional:</strong><br>";
    for (let i = 0; i < marcas.length; i++) {
        salida += `${i}: ${marcas[i]}<br>`;
    }

    salida += "<br><strong>For descendente:</strong><br>";
    for (let i = marcas.length - 1; i >= 0; i--) {
        salida += `${i}: ${marcas[i]}<br>`;
    }

    document.getElementById("resultado").innerHTML = salida;
}
