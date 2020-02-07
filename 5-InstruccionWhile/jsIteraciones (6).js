function mostrar()
{/* Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio */

	var numero;
	var aleatorio;
	var random;
	var contador;

	contador = 0;

	random = Math.round(Math.random()*10);
	console.log(random);

	do{
		numero = prompt("Digite un número ");
		 
		if(numero > random)
		{
			prompt("Digite un número menor");
		}
		else
		{
			prompt("Digite un número mayor");
		}

		contador++;
		
	}while(numero != random)

	alert("Adivinaste el número en : " +  contador + " intentos");

		
}//FIN DE LA FUNCIÓN