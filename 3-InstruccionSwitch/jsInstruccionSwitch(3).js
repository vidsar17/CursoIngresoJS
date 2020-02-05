function mostrar()
{/*al seleccionar un mes informar.
si es Febrero: " Este mes no tiene más de 29 días."
si NO es Febrero: "Este mes tiene 30 o más días" */
var mesDelAño;

mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
switch(mesDelAño)
{
    case "Enero":  
        alert("Este mes tiene 30 o más días") 
    case "Febrero":
        alert("Este mes no tiene más de 29 días");
        break;
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio":
    case "Julio":
    case "Agosto":
    case "Septiembre":
    case "Octubre":   
    case "Noviembre":
    case "Diciembre":
        alert("Este mes tiene 30 o más días");
    break;
}


}//FIN DE LA FUNCIÓN