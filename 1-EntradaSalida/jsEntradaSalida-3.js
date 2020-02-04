/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var dato;
    //sacamos el valor por ID
    dato = document.getElementById("elNombre").value;
    //mostrmos el alert con el dato
    alert("El dato ingresado es " + dato);
}


