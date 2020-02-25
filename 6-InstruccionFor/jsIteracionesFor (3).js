function mostrar()
{/**al presionar el botón pedir la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA" */

var repeticiones;

repeticiones = parseInt(prompt("ingrese el número de repeticiones"));


for(let i = 1; i <= repeticiones; i++)
{
    document.write(i + ". Hola UTN FRA " + "</br>");
}

}//FIN DE LA FUNCIÓN