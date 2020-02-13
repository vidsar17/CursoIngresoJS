function mostrar()
{/* Al presionar el botón pedir números hasta que el usuario quiera, 
	sumar los que son positivos y multiplicar los negativos. */

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var i = 0;
	var respuesta='si';
	
	do{
		numero = prompt("Ingrese un número").value;
		respuesta = prompt("Si desea salir del programa digite 'SI'").toLowerCase();

		numero = parseInt(numero);
		contador += numero;

		console.log("número: " + numero);
		console.log("contador: " + contador);
		console.log("variable: " + i);

		i++;
	}while(respuesta != "si")

		Console.log("variable: " + i);

		document.getElementById("suma") = contador;
		document.getElementById("producto") = numero;

// document.getElementById('suma').value=positivo;
// document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN