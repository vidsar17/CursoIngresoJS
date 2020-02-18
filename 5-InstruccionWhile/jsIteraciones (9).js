function mostrar()
{/* Al presionar el botón pedir números hasta que el usuario quiera,
	 mostrar el número máximo y el número mínimo ingresado */
	
	// declarar variables
	var numero;
	var contador = 0;
	var maximo = 0;
	var minimo = 0;		
	var respuesta = 'no';

	while(respuesta != 'si')
	{
		numero = parseFloat(prompt("Ingrese un número"));
		respuesta = prompt("Digite ´SI´ para finalizar").toLowerCase();

		if(contador == 1)
		{
			maximo = numero;
			minimo = numero;
		}

		if(contador > 1 && numero > maximo)
		{
			numero = maximo;
		}

		if(contador > 1 && numero < minimo)
		{
			numero = minimo;
		}

		console.log("numero: " + numero);
		console.log("respuesta: " + respuesta);
		console.log("contador: " + contador);	
	}

		document.getElementById('maximo').value = maximo;
		document.getElementById('minimo').value = minimo;


}//FIN DE LA FUNCIÓN