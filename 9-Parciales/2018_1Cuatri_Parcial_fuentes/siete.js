function mostrar()
{/*Bienvenidos. 
Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10),
el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert: 
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones que su nota haya sido mayor o igual a 6.*/

var nota;
var sexoMinimo = 0;
var contadorF = 0;
var contadorM = 0;
var promedioNotas = 0;
var acumuladorDeNotas = 0;
var notaMinima = 0;
var contador = 0;
var notaMaxima = 0;

    while(contador <= 3)
    {                    
    contador++;

        do{
            nota = prompt("Ingrese la nota del estudiante Nro. " + contador);
            nota = parseFloat(nota);

        }while(isNaN(nota) ||  nota < 0 || nota > 10);

        do{
            sexo = prompt("Ingrese sexo: 'f'(femenino, 'm'(masculino))").toLocaleLowerCase();
            
        }while(sexo != "f" && sexo != "m");

        //punto a
        acumuladorDeNotas += nota;
       
        console.log("acumulador notas: " + acumuladorDeNotas);        

        //punto b
        if(contador == 1) //flag para guardar la primer nota
        {
            notaMinima = nota;
            sexoMinimo = sexo;
        }
        else if(nota < notaMinima)
        {
            notaMinima = nota;
            sexoMinimo = sexo;
        }        

        //punto c
        if(sexo == "m" && nota >=6)
        {
            contadorM++;
        }
    }

    //respuestas
    promedioNotas = acumuladorDeNotas / contador; 
            
    console.log("promedio notas totales: " + promedioNotas); 
    console.log("varones con nota menor a 6: " + contadorM);
    console.log("nota minima " + notaMinima + ", y el sexo es: " + sexoMinimo);        
}
