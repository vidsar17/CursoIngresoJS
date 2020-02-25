function mostrar()
{/**al presionar el botón pedir un número. mostrar los numeros divisores desde el 1 al número ingresado, y mostrar la cantidad de numeros divisores encontrados */

    var numero;
   
    numero = parseInt(prompt("Ingrese el número a ser divisible"));

    for (let i = 2;i < numero/2; i++) 
    {
        if (numero % i === 0)
        {
            document.write(i,", ");
        }
    }
}//FIN DE LA FUNCIÓN