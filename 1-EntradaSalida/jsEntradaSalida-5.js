/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombre;
    var edad;

    nombre = document.getElementById("elNombre").value;
    edad = document.getElementById("laEdad").value;

    console.log(nombre);
    console.info(edad);

    alert("Usted se llama " + nombre + " y tiene " + edad + " años ");
}

