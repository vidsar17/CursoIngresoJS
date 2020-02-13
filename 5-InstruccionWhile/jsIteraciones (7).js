function mostrar()
{/* Al presionar el botón pedir números hasta que el USUARIO QUIERA 
	e informar la suma acumulada y el promedio */

	var contador = 0;
	var acumulador = 0;
	var respuesta = 'si';
	var numero;
	var promedio;

do
{	
	numero = prompt("Ingrese un número");
	respuesta = prompt("Si desea salir del sistema ingrese SI").toLowerCase();
	numero = parseInt(numero);

	contador += numero;
	contador = parseInt(contador);
	
	console.log("número ingresado " + numero);
	console.log("respuesta para salir: " + respuesta);
	console.log("contador: " + contador);	
	console.log("acumulador: " + acumulador);

	acumulador++;

}while(respuesta != "si");

	promedio = contador / acumulador;
	promedio = parseFloat(promedio).toFixed(2);

	document.getElementById('suma').value = contador;
	document.getElementById('promedio').value = promedio;

}//FIN DE LA FUNCIÓN