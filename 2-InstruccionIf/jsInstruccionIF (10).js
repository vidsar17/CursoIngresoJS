function mostrar()
{/*Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4*/ 

	var numRandom;

	numRandom = Math.round(Math.random()*10);

	if(numRandom == 9 || numRandom == 10)
	{
		alert("EXCELENTE: " + numRandom);	
	}
	else if(numRandom >= 4 && numRandom < 9)
	{
		alert("APROBÓ: " + numRandom);
	}
	else if(numRandom < 4)
	{
		alert("Vamos, la proxima se puede: " + numRandom);
	}

}//FIN DE LA FUNCIÓN