function mostrar()
{/*Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4*/ 

	var random;
	var max;
	var min;

	max = 10;
	min = 1;
	//random = Math.round(Math.random()*10);
	random = Math.floor(Math.random() * (max - min) + min);

	console.log(random);

	if(random == 9 || random == 10)
	{
		alert("EXCELENTE: " + random);	
	}
	else if(random >= 4 && random < 9)
	{
		alert("APROBÓ: " + random);
	}
	else if(random < 4)
	{
		alert("Vamos, la proxima se puede: " + random);
	}

}//FIN DE LA FUNCIÓN