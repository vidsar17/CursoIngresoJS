/*2. Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular
y se debe alambra con tres hilos de alambre. 
B. 	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe 
alambrar con tres hilos de alambre. 
    C.  Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal,
    debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
var largo;
var ancho;
var radio
var area;
var areaTotal;

function Rectangulo () 
{
    largo = document.getElementById('Largo').value;
    ancho = document.getElementById('Ancho').value;
    console.log(largo);
    console.log(ancho);

    parseFloat(largo);
    parseFloat(ancho);

    area = largo * ancho;
    areaTotal    = area * 3;//el 3 hace referencia a los 3 hilos de alambre

    alert("La cantidad de alambre para el terreno rectángular es de: " + areaTotal + " cm2");
}
function Circulo () 
{
    radio = document.getElementById('Radio').value;
    console.log(radio);

    area = parseFloat(Math.round(Math.PI * Math.pow(radio,2))).toFixed(2);
    areaTotal = area * 3;
    alert("La cantidad de alambre para el círculo es de: " + areaTotal + " cm2")

}
function Materiales () 
{
	
}