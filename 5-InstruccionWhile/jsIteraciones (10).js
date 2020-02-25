function mostrar()
{/* Al presionar el botón pedir números hasta que el usuario quiera, mostrar:
	1-Suma de los negativos.
 	2-Suma de los positivos. 
	3-Cantidad de positivos. 
	4-Cantidad de negativos. 
	5-Cantidad de ceros.
	6-Cantidad de números pares. 
	7-Promedio de positivos. 
	8-Promedios de negativos. 
	9-Diferencia entre positivos y negativos, (positvos-negativos) */

	//declarar contadores y variables 
	var contador = 0;
	var acumulador = 0;
	var respuesta = true;
	var negativo = 0;
	var positivo = 0;
	var canPositivos = 0;
	var canNegativos = 0;
	var canPares = 0;
	var canCeros = 0;

	do
	{
		numero = parseFloat(prompt("Ingrese un nùmero"));
		respuesta = confirm("Desea ingresar màs nùmeros");

		if(isNaN(numero))
		{
			continue;
		}
						
		console.log("numero: " + numero);
		console.log("contador: " + contador);
		console.log("acumulador: " + acumulador);

		if(numero % 2 == 0)
		{ 
			canPares++;
		}
		
		if(numero > 0)
		{
			positivo += numero;
			canPositivos ++;
		}else if(numero < 0)
		{
			negativo += numero;
			canNegativos++;
		}else if(numero == 0)
		{
			canCeros++;
		}
		
	}while(respuesta);	 
		
	document.write("<p> Suma de negativos "     + negativo                + "</p>");
	document.write("<p> Cantidad de negativos " + canNegativos           + "</p>");
	document.write("<p> Promedio de negativos " + negativo/canNegativos  + "</p>");
	document.write("<p> Suma de positivos "     + positivo                + "</p>");
	document.write("<p> Cantidad de positivos " + canPositivos           + "</p>");
	document.write("<p> Promedio de negativos " + positivo/canPositivos  + "</p>");
	document.write("<p> Cantidad de ceros "     + canCeros               + "</p>");
	document.write("<p> Cantidad de pares "     + canPares               + "</p>");
	document.write("<p> Suma total "            + (positivo + negativo)   + "</p>");


}//FIN DE LA FUNCIÓN