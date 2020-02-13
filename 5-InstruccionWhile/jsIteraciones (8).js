function mostrar()
{/* Al presionar el botón pedir números hasta que el usuario quiera, 
	sumar los que son positivos y multiplicar los negativos. */

	var contador = 0;
	var positivo = 0;
	var negativo = 1;
	var numero;
	var respuesta='si';
	var acumulador = 0;
	
	do{
		numero = prompt("Ingrese un número");
		respuesta = prompt("Si desea salir del programa digite 'SI'").toLowerCase();

		numero = parseInt(numero);

			if(numero % 2 == 0)
			{
				acumulador += numero;
				positivo = parseInt(acumulador);
			}
			else
			{
				acumulador *= numero;
				negativo = parseInt(acumulador);
			}		

		console.log("número: " + numero);
		console.log("respuesta " + respuesta);
		console.log("acumulador: " + acumulador);
		console.log("contador: " + contador);

		contador++;

	}while(respuesta != "si")

		document.getElementById("suma").value = positivo;
		document.getElementById("producto").value = negativo;

}//FIN DE LA FUNCIÓN