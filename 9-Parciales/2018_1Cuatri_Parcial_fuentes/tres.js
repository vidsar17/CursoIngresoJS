function mostrar()
{/*                         Enunciado

En el ingreso a un viaje en crucero nos solicitan nombre, edad(mayores de 18), sexo('f' o 'm'), estado civil
("soltero", "casado"o "viudo");
a) El nombre del hombre casado más joven
b) El sexo y nombre del pasajero/a más viejo
c) La cantidad de mujeres que hay casadas o viudas
d) El promedio de edad entre las mujeres
e) El promedio de edad entre los hombres solteros
*/

var respuesta;
var nombre;
var edad;
var sexo;
var estadoCivil;
var nombreCasadoMasJoven;
var flag = true;
var menorEdad = 0;
var nombreViejo;
var sexoHombreViejo;
var flagHombreViejo = true;
var edadHombreViejo;
var contadorMujeres = 1;
var promedioEdadSoltero = 0;
var contadorHombreSoltero = 0;
var acumuladorHombreSoltero = 0;


alert("Bienvenido al sistema CRUCERO!!!")

do
{   //Ingreso de datos               
    do{
        nombre = prompt("Ingrese nombre de la persona: ").toLowerCase();        
    }while(nombre == "" || nombre == null);
    console.log(nombre);

    do{
        edad = parseInt(prompt("Ingrese edad de " + nombre));
    }while(edad < 0 || edad > 120  || isNaN(edad));
    console.log(edad);

    do{
        sexo = prompt("Ingrese el sexo de " + nombre + " en formato: 'f' o 'm'").toLowerCase();
    }while(sexo != 'f' && sexo != 'm');
    console.log(sexo);

    do{
        estadoCivil = prompt("Ingrese estado civil de: " + nombre + ": \n - soltero \n - casado \n - viudo").toLowerCase();
    }while(estadoCivil != 'soltero' && estadoCivil != 'casado' && estadoCivil != 'viudo' );   
    console.log(estadoCivil);

    //validaciones   
    
    //a) El nombre del hombre casado más joven
    if(sexo == "m" && estadoCivil == "casado")
    {      
        if(flag)
        {   
            flag = false;     

            menorEdad = edad;
            nombreCasadoMasJoven = nombre;
        }
        else if(edad < menorEdad)
        {
            menorEdad = edad;
            nombreCasadoMasJoven = nombre;
        }
    }

    //b) El sexo y nombre del pasajero/a más viejo
    if(sexo == 'm' || sexo == 'f')
    {
        if(flagHombreViejo)
        {
            flagHombreViejo = false;

            edadHombreViejo = edad;
            sexoHombreViejo = sexo;
            nombreViejo = nombre;
        }
        else if(edad > edadHombreViejo)
        {
            edadHombreViejo = edad;
            sexoHombreViejo = sexo;
            nombreViejo = nombre;
        }
    }

    //c) La cantidad de mujeres que hay casadas o viuda
    if(sexo == 'f' && (estadoCivil == 'soltero' || estadoCivil == 'viudo'))
    {        
        contadorMujeres++;
    }

    //e) El promedio de edad entre los hombres solteros
    if(sexo == 'm' && estadoCivil == 'soltero')
    {
        contadorHombreSoltero++;
        acumuladorHombreSoltero += edad;
    }


}while(respuesta = confirm("Desea ingresar más personas?"));

    
    document.write("El hombre casado más joven es: " + nombreCasadoMasJoven + ", con edad de: " + menorEdad +"<br>");
    
    document.write( nombreViejo + " es el pasajero/a mas viejo/a y su sexo es: " + sexoHombreViejo   
    + ", con edad de: " + edadHombreViejo +"<br>");

    if(contadorMujeres > 0)
    {
        document.write("Hay " + contadorMujeres + " mujeres casadas o viudas" +"<br>");
    }
    else
    {
        contadorMujeres == 1;
    }
    
    if(contadorHombreSoltero > 0 )
    {
        promedioEdadSoltero = acumuladorHombreSoltero / contadorHombreSoltero;
        document.write("El promedio de edad de los hombres solteros es de: " + promedioEdadSoltero);
    }
    else
    {
        contadorHombreSoltero = 0;
    }

}
