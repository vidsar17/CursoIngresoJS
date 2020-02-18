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
	var respuesta = 'no';
	var sumPositivos = 0;
	var sumNegativos = 0;
	var promPositivos = 0;
	var promNegativos = 0;
	var difNumeros;
	var numeros;

	while(respuesta != 'si')
	{
		numeros = parseFloat(prompt("Ingrese un nùmero"));
		respuesta = prompt("Digite 'SI' para finalizar").toUpperCase();

		contador++;
		acumulador += numeros;

		console.log("numeros: " + numeros);
		console.log("contador: " + contador);
		console.log("acumulador: " + acumulador);
	
	}




}//FIN DE LA FUNCIÓN