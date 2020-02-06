function mostrar()
{/* al presionar el botón mostrar 10 repeticiones con números DESCENDENTES, desde el 10 al 1 */
	alert('iteración while');

	var num;
	var mensaje;

	num = 10;
	mensaje = "Repeticiones DESCENDENTES: \n"

	while(num >= 1)
	{
		console.log("Número " + num);
		mensaje += ("Número " + num + "\n");
		alert(mensaje);

		num--;
	}


}//FIN DE LA FUNCIÓN