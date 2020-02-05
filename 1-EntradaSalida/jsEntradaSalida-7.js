/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
var num1;
var num2;
var resul;

function sumar()
{	
    num1 = document.getElementById("numeroUno").value;
    num2 = document.getElementById("numeroDos").value;

    console.log(num1);
    console.info(num2);

    resul = parseInt(num1) + parseInt(num2);

    alert("La suma de los nùmeros es: " + resul)
}

function restar()
{
	num1 = document.getElementById("numeroUno").value;
    num2 = document.getElementById("numeroDos").value;

    console.log(num1);
    console.info(num2);

    resul = parseInt(num1) - parseInt(num2);

    alert("La resta de los nùmeros es: " + resul)
}

function multiplicar()
{ 
	num1 = document.getElementById("numeroUno").value;
    num2 = document.getElementById("numeroDos").value;

    console.log(num1);
    console.info(num2);

    resul = parseInt(num1) * parseInt(num2);

    alert("La multiplicaciòn de los nùmeros es: " + resul)
}

function dividir()
{
	num1 = document.getElementById("numeroUno").value;
    num2 = document.getElementById("numeroDos").value;

    console.log(num2);
    console.info(num2);
if(num1 >= num2)
{
    resul = parseInt(num1) / parseInt(num2);
    alert("La divisiòn de los nùmeros es: " + result)
}
else
{
    alert("No es posible realizar la divisiòn si el primer nùmero es menor")    
}
    
}

