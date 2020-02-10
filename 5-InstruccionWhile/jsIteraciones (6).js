function mostrar()
{/* Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio */
	
	var numero;
	var promedio;
	var elementos;
	var suma = 0;

	numero = prompt("Digite un número");
	
	while(numero >= 0)
	{
		suma += numero;
		elementos++;

		numero = prompt("Digite un número");
	}

	if(elementos == 0)
	{
		alert("La división entre 0 no existe");
	}
	else
	{
		promedio = suma/elementos;
		alert("El promedio es " + promedio);
	}
	
}//FIN DE LA FUNCIÓN