/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
  var sueldo;
  var total;
  const aumento = 0.10;

  sueldo = document.getElementById("sueldo").valor;

  total = parseInt(sueldo) + parseInt(aumento);

  document.getElementById("resultado").valor = total;
	
}
