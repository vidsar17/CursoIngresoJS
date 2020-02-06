function mostrar()
{/* Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio */

	var num;
	var i;
	var contador = o;
	var acumulador = 0;

	alert("Ingrese 5 números \n");

	i = 1;
	while(i <= 3)
	{		
		num = prompt("Ingrese el número " + (i))		
		
		contador = contador + 1;		
		document.getElementById('suma').value = contador;

		//i++;
	}

		acumulador = acumulador + contador;
		document.getElementById('promedio').value = acumulador / 3;
}//FIN DE LA FUNCIÓN