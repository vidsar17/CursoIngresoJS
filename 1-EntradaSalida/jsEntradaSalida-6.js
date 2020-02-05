/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var num1;
    var num2;
    var suma;

    num1 = document.getElementById("numeroUno").value;
    num2 = document.getElementById("numeroDos").value;

    console.info(num1);
    console.log(num2);

    suma = parseInt(num1) + parseInt(num2);

    alert("La suma de ambos nùmeros es: " + suma);
}

