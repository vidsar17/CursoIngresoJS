function mostrar()
{//Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive
	
	var random;
	var max;
	var min;

	max = 11;
	min = 1;

	random = Math.floor(Math.random() * (max - min) + min);

	console.log(random);
	alert("Número aleatorio entre 0 y 10 es: " + random);	


	// var numRandom;

	// numRandom = Math.round(Math.random()*10);
	// console.log(numRandom);

	// alert("Número aleatorio entre 0 y 10 es: " + numRandom);	

}//FIN DE LA FUNCIÓN