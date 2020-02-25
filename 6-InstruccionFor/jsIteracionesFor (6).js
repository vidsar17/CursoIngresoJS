function mostrar()
{/**al presionar el botón pedir un número. mostrar los numeros pares desde el 1 al número ingresado, y mostrar la cantidad de numeros pares encontrados. */

    var repetir;
    var numero;
    var cantPares = 0;
    
    repetir = parseInt(prompt("Ingrese la cantidad de números"));

    for (let i = 1; i <= repetir; i++) {
        numero = parseInt(prompt("Dígite el número " + i + ":"));

        if(numero % 2 == 0)
        {            
            document.write("Número par ingresado: ", numero + "<br>");
            cantPares++;
        }       
    }

    document.write("La cantidad de número pares ingresados es: ", cantPares);

}//FIN DE LA FUNCIÓN