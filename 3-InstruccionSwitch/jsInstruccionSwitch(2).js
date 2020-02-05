function mostrar()
{/* al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno. */
var mesDelAño;

mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);

switch(mesDelAño)
{
    case "Enero":   
    case "Febrero":
    case "Marzo":
    case "Abril":
    case "Mayo":
        alert("Falta para el invierno");
    break;

    case "Junio":
    case "Julio":
        alert("Abrigate que hace frio.");
    break;

    case "Agosto":
    case "Septiembre":
    case "Octubre":   
    case "Noviembre":
    case "Diciembre":
        alert("Ya pasamos el frio, ahora calor!!!.");
    break;
}
}