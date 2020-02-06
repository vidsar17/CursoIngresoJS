function mostrar()
{/* al presionar el botón pedir un número entre 0 y 9 inclusive. */

	var numero;
	var num;
	
	numero = prompt("ingrese un número entre 0 y 9");

	while(numero != 9)
	{
		console.log(numero);
				 
		if(numero >= 0 && numero <= 9)
		{
			num = document.getElementById("Numero").value = numero;
			break;
		}

		numero = prompt("Ingresó " + num + ", debe digitar un número entre 0 y 9");
	}	

}//FIN DE LA FUNCIÓN