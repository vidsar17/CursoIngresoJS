function mostrar()
{/* Al presionar el botón pedir números hasta que el usuario quiera, mostrar:
	1-Suma de los negativos.
 	2-Suma de los positivos. 
	3-Cantidad de positivos. 
	4-Cantidad de negativos. 
	5-Cantidad de ceros.
	6-Cantidad de núm++eros pares. 
	7-Promedio de positivos. 
	8-Promedios de negativos. 
	9-Diferencia entre positivos y negativos, (positvos-negativos) */

	//declarar contadores y variables 
	var contador = 0;
	var acumulador = 0;
	var respuesta = true;
	var sumPositivos = 0;
	var sumNegativos = 0;
	var promPositivos = 0;
	var promNegativos = 0;
	var difnumeros;
	var numero;
	var canPositivos = 0;
	var canNegativos = 0;

	while(respuesta)
	{
		numero = parseFloat(prompt("Ingrese un nùmero"));
		respuesta = confirm("Desea ingresar màs nùmeros");

		if(isNaN(numero))
		{
			continue;
		}
						
		contador++;
		acumulador += numero;

		console.log("numero: " + numero);
		console.log("contador: " + contador);
		console.log("acumulador: " + acumulador);

		//suma negativos y positivos
		if(numero < 0)
		{
			canNegativos++;
			sumNegativos += numero;			
		}
		else
		{
			canPositivos++;
			sumPositivos += numero;
		}

		
	
	}
		document.getElementById('sumNegativos').value = sumNegativos;
		document.getElementById('sumPositivos').value = sumPositivos;
		
		document.getElementById('canPositivos').value = canPositivos;
		document.getElementById('canNegativos').value = canNegativos;
 
		console.log("positivos: " + sumPositivos);
		console.log("negativos: " + sumNegativos)


}//FIN DE LA FUNCIÓN