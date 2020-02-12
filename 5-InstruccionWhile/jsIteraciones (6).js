function mostrar()
{/* Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio */
	var num;
	var i; // contador
	var suma; // acumulador
	var promedio;

	suma = 0;

	i = 1;
	while(i <= 3)
	{
		num = prompt("Ingrese el número " + i);
		num = parseInt(num);

		console.log("número ingresado: " + num);

		suma = suma + num;
		
		i++;
	}
		promedio = suma / 3;
		promedio = parseFloat(promedio).toFixed(2);

		document.getElementById('suma').value = suma;
		console.log("suma: " + suma);

		document.getElementById('promedio').value = promedio;		
		console.log("promedio: " + promedio);

}//FIN DE LA FUNCIÓN