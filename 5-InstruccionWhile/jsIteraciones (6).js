function mostrar()
{/* Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio */
	
	var numero;
	var suma;
	var promedio;
	var contador;
	var acumulador;
	var suma = 0;
	var i = 1;

	while(i <= 3)
	{
		numero = prompt("Ingrese el nùmero " + i + ":");
		contador++;
		acumulador = contador + numero;	

		i++;
	}
		console.log("contador: "+ parseInt(contador) +" numero: "+ numero +" acumulador: "+ acumulador);
}//FIN DE LA FUNCIÓN