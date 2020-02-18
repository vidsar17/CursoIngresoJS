function mostrar()
{/* Al presionar el botón pedir números hasta que el usuario quiera, 
	sumar los que son positivos y multiplicar los negativos. */

	var numero;
	var respuesta='si';
	var acumPositivos; 
	var acumNegativos;

	acumPositivos = 0;
	acumNegativos = 0;
	
	do{
		numero = prompt("Ingrese un número");
		respuesta = prompt("Si desea salir del programa digite 'SI'").toLowerCase();

		numero = parseFloat(numero);

			if(isNaN(num))
			{
				continue;
			}

			if(numero >= 0)
			{
				//positivo++;
				acumPositivos += numero;
			}
			else //if(numero < 0)
			{				
				//negativo++;		
				acumNegativos += numero;			
			}		

		console.log("número: " + numero);
		console.log("respuesta " + respuesta);
		//console.log("positivos: " + positivo);
		//console.log("negativos: " + negativo);
		console.log("acumPositivos: "+ acumPositivos);
		console.log("acumNegativos: " + acumNegativos);

	}while(respuesta != "si")

		document.getElementById("suma").value = acumPositivos;
		document.getElementById("producto").value = acumNegativos	;

}//FIN DE LA FUNCIÓN