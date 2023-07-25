alert("Vamos a simular coutas!");
let nombre = prompt("Ingrese su nombre").toLocaleUpperCase();
let apellido = prompt("Ingrese su apellido").toLocaleUpperCase();
alert(`Bienvenido ${nombre} ${apellido}! Comencemos a simular!`);


function calcularCuotas() {
    let edad = parseInt(prompt("Ingrese su edad"));
    if (edad >= 18) {
        cantidad = prompt("Ingrese el monto a calcular");
        while (cantidad <= 0) {
        cantidad = parseInt(prompt("Por favor ingrese el monto a calcular"));
    }
    let cuotas = prompt("Ingrese la cantidad de cuotas en las que desea abonar (3, 6 o 12)");
        while (cuotas != "3" && cuotas !="6" && cuotas != "12") {
        cuotas = parseInt(prompt("Recuerde que solo tiene 3, 6 o 12 cuotas!"));
    }
    let montoEnCuotas = cantidad / cuotas;
    let montoFinal = montoEnCuotas.toFixed(2);
    alert(`Su monto es de $ ${cantidad} a pagar en ${cuotas} cuotas de ${montoFinal} pesos cada una.`);
    } 
    else {
    alert(`Lo sentimos mucho ${nombre}! Debe ser mayor de edad para realizar su consulta!`);
    }
}
calcularCuotas();