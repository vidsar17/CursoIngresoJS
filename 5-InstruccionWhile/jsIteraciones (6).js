function mostrar()
{/* Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio */

	var i;
	var contador;
	var acumulador;
	var promedio;
	var sum_acumulada;

	contador = 0;
	acumulador = 0;
	promedio = 0;
	


	alert("Ingrese 5 números \n");

	i = 1;		
	while(i <= 3)
	{		

		numero = prompt("Ingrese el número " + (i));
		numero++;		

		// acumulador = acumulador + numero;
		// promedio = acumulador / contador;

		
		document.getElementById('promedio').value = numero	;

		//document.getElementById('suma').value = acumulador;

	}

		
}//FIN DE LA FUNCIÓN