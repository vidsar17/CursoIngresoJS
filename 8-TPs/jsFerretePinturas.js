/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado 
    (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit 
    (ej.: "0  centígrados son 32 Fahrenheit ").
*/

    var temperatura;
    var centigrados;

    temperatura = document.getElementById('Temperatura').value;
    temperatura = parseFloat(temperatura);

function FahrenheitCentigrados () 
{
	centigrados = (temperatura - 32) * 5/9;
    parseFloat(centigrados);

    alert( temperatura + "º Fahrenheit son " + centigrados + "º centígrados");
    console.log(temperatura + "º Fahrenheit son " + centigrados + "º centígrados");
}

function CentigradosFahrenheit () 
{
	
}
