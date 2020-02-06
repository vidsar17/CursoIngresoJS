function mostrar()
{/* al presionar el botón mostrar 10 repeticiones con números ASCENDENTE, desde el 1 al 10. */

	var num;
	var mensaje;

	num = 1;
	mensaje = "Repeticiones ASCENENTES: \n"	

	alert('iteración while');

	while(num <= 10)
	{
		console.log("Número: " + num);
		mensaje += ("Número: " + num + "\n");
		alert(mensaje);

		num++;
	}
}//FIN DE LA FUNCIÓN