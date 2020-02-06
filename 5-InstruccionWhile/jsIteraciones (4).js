function mostrar()
{/* al presionar el botón pedir un número entre 0 y 9 inclusive. */

	var numero;
	var num;
	
	numero = prompt("ingrese un número entre 0 y 9");

	while(numero <= 10)
	{
		console.log(numero);
				 
		if(numero >= 0 && numero <= 9)
		{
			num = document.getElementById("Numero").value = numero;
			break;
		}

		numero++;
	}	

}//FIN DE LA FUNCIÓN