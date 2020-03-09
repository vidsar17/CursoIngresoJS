function mostrar()
{/*                         Enunciado

En el ingreso a un viaje en crucero nos solicitan nombre, edad(mayores de 18), sexo('f' o 'm'), estado civil
("soltero", "casado"o "viudo");
a) El nombre del hombre casado más joven
b) El sexo y nombre del pasajero/a más viejo
c) La cantidad de mujeres que hay casadas o viudas
d) El promedio de edad entre las mujeres
e) El promedio de edad entre los hombres soleteros
*/

var respuesta;
var nombre;
var edad;
var sexo;
var estadoCivil;
var nombreCasadoMasJoven;
var nombreJoven;
var flag = true;
var menorEdad = 0;

alert("Bienvenido al sistema CRUCERO!!!")

do
{   //Ingreso de datos               
    do{
        nombre = prompt("Ingrese nombre de la persona: ").toLowerCase();        
    }while(nombre == "" || nombre == null);
    console.log(nombre);

    do{
        edad = prompt("Ingrese edad de " + nombre);
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

}while(respuesta = confirm("Desea ingresar más personas?"));

    //validaciones   
    
    //a) El nombre del hombre casado más joven
    if(sexo == "m" && estadoCivil == "casado")
   {
        if(flag)
        {
            flag = false;
            menorEdad = edad;
            nombreJoven = nombre;
        }else if(edad < menorEdad)
        {
            menorEdad = edad;
            nombreJoven = nombre;
        }
    }

    document.write("El hombre más joven es : " + nombreJoven + ", con edad de: " + menorEdad +"<br>");

}
