/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var importe;
    const descuento = 0.25;
    var resultado;
    
    importe = document.getElementById("importe").value;
    
    resultado = parseInt(importe) * descuento;

    document.getElementById("resultado").value = resultado;

}
