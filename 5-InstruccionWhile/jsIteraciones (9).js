function mostrar()
{/* Al presionar el botón pedir números hasta que el usuario quiera,
	 mostrar el número máximo y el número mínimo ingresado */
	
	// declarar variables
	var numero;
	var contador = 0;
	var maximo = Number.MIN_VALUE;
	var minimo = Number.MAX_VALUE;	
	var respuesta = 'no';

	while(respuesta != 'si')
	{
		numero = parseInt(prompt("Ingrese un número"));
		respuesta = prompt("Digite ´SI´ para finalizar").toLowerCase();

		contador++;

		if(numero < minimo)
		{
			minimo = numero;
		}

		if(numero > maximo)
		{
			maximo = numero;
		}

		console.log("numero: " + numero);
		console.log("respuesta: " + respuesta);
		console.log("contador: " + contador);	
	}

		document.getElementById('maximo').value = maximo;
		document.getElementById('minimo').value = minimo;


}//FIN DE LA FUNCIÓN