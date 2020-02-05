/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    var num1;
    var num2;
    var resul;
    var resto;

	num1 = document.getElementById("numeroUno").value;
    num2 = document.getElementById("numeroDos").value;

    console.log(num1);
    console.info(num2);

    resul = parseInt(num1) / parseInt(num2);
    resto = parseInt(num1) % parseInt(num2);

    alert("La multiplicaciòn es: " + resul + " y el resto es: " + resto );
}
