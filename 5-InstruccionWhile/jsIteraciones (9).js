function mostrar()
{/* Al presionar el botón pedir números hasta que el usuario quiera,
	 mostrar el número máximo y el número mínimo ingresado */
	
	// declarar variables
	var numero;
	var maximo = 0; //Number.MIN_VALUE;
	var minimo = 0; //Number.MAX_VALUE;	
	var respuesta = 'no';
	var primeraVez = true;

	while(respuesta != 'si')
	{
		numero = parseInt(prompt("Ingrese un número"));
		respuesta = prompt("Digite ´SI´ para finalizar").toLowerCase();

		if(isNaN(numero))
			{
				continue;
			}

		//bandera para declarar màximo y minimo
		if (primeraVez)
		{
			primeraVez = false;
			maximo = numero;
			minimo = numero;
		}else{
			if(numero < minimo)
			{
				minimo = numero;
			}

			if(numero > maximo)
			{
				maximo = numero;
			}
		}	
		console.log("numero: " + numero);
		console.log("respuesta: " + respuesta);			
	}

		document.getElementById('maximo').value = maximo;
		document.getElementById('minimo').value = minimo;


}//FIN DE LA FUNCIÓN