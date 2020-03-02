/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/

var numero;

function ComenzarIngreso () 
{
        numero = prompt("Ingrese un valor vàlido");
        numero = parseInt(numero);

    while(isNaN(numero) ||  numero < 0)
    {
        numero = prompt("Ingrese un valor vàlido");
        numero = parseInt(numero);
    }
}

function NumerosPares()
{
    ComenzarIngreso();

    var contador = numero + 1;
    var contadorDePares = 0;

    if(contador % 2 == 0)
    {
        contadorDePares++;
    } 

    while(contdor > 1)
    {
        contador--;        
    }
}

function NumerosImpares()
{
    ComenzarIngreso();

    var contador = numero + 1;
    var contadorDeImpares = 0;

    if(contador % 2 == 1)
    {
        contadorDeImpares++;
    } 

    while(contador > 1)
    {
        contador--;        
    }
}

function NumerosDivisibles()
{
    ComenzarIngreso();
    var contadorDeDivisibles = 0;
    var contaodr = 1;

    while(contador <= 100)
    {
        contador++;

        if(numero % contador == 0)
        {
            contadorDeDivisibles++;
        }
    }
}

function VerificarPrimo()
{
    ComenzarIngreso();

    var contaodr = 2;
    var noEsPrimo = false;
    var mayor = numero/2;

    while(contador < mayor)
    {
        if(numero % contador == 0)
        {
            noEsPrimo = true;
            break;
        }        
        contador++;
    }
        if(noEsPrimo)
        {
            alert("El numero es primo");
        }
        else
        {
            alert("El numero no es primo");
        }
}

function NumerosPrimos()
{
    ComenzarIngreso();
    var contador = 1;
    var contadorPrimos = 2;
    var noEsPrimo = false;

    while(contador <= numero)
    {
        while(contadorPrimos < contador)
        {
            if(contador % contadorPrimos == 0)
            {
                noEsPrimo = true;
                break;
            }
            contador++;
        }
    }
}