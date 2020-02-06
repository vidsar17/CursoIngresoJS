function mostrar()
{/* Al presionar el botón pedir números hasta que el USUARIO QUIERA 
	e informar la suma acumulada y el promedio */

	var contador=0;
	var acumulador=0;
	var respuesta='si';

do
{		
	
	respuesta = prompt("Si desea salir del sistema ingrese SI");


	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}while(respuesta);



}//FIN DE LA FUNCIÓN