function mostrar()
{/**al presionar el botón pedir un número. Informar si el numero es PRIMO o no. */

    var n1; 
    var primer = true;

    n1 = prompt("Escribe un número");

    for (let i = 2; i < n1 / 2; i++)
    {
        if (n1 % i === 0) 
        {
            primer = false;
        }
    }
        if (primer) 
        {
            document.write("El número es primo");
        } else
        {
            document.write("El número no es primo");
        }
}//FIN DE LA FUNCIÓN