function mostrar()
{/* Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.". */ 
var laHora;

laHora = document.getElementById("hora").value;
laHora = parseInt(laHora);
	
    switch(laHora)
    {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            alert("Es de madrugada");
        break;

        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
            alert("Es de mañana");
        break;

        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        case 21:
        case 22:
        case 23:
        case 24:
            alert("Es de tarde");
        break;

        default:
            alert("Esa hora no existe ingrese una hora entre 0 y 24");
    }
}//FIN DE LA FUNCIÓN