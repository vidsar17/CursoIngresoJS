function mostrar()
{/* Al presionar el botón pedir números hasta que el USUARIO QUIERA 
	e informar la suma acumulada y el promedio */

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;
	var promedio;
	var i = 1;

do
{
	i++;
	numero = prompt("Ingrese un número");
	respuesta = prompt("Si desea salir del sistema ingrese SI").toLowerCase();
	numero = parseInt(numero);

	contador += numero;
	
	console.log("contador: " + contador);	
	
	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador/contador;

	
	console.log("variable i: " + i);

}while(respuesta != "si");

	promedio = contador / i;
	document.getElementById('suma').value = contador;
	document.getElementById('promedio').value = promedio;

}//FIN DE LA FUNCIÓN