
function mostrar()
{/*                                            Enunciado
    
    Realizar la carga de 5 productos de prevención de contagio de cada uno se deben obtener los siguientes datos:
    el tipo (validar 'barbijo', 'jabón', o 'alcohol'), 
    el precio validar entre 100 y 300, 
    la cantidad de unidades (no puede se 0 o negativo y no debe superar las 1000 unidades), 
    la marca y el fabricante. 
   
    Se debe informar al usuario lo siguiente:
    a) Del mas caro de los barbijos, la cantidad de unidades y el fabricante
    b) Del item con más unidades, el fabricante
    C) Cuantas unidades de jabones hay en total */

    var productos;
    var precio;
    var cantidad;
    var marca;
    var fabricante;
    var i = 0;
    var canProductos = 2;
    var barbijoMasCaro;
    var flagBarbijo = true;
    var cantBarbijo;
    var fabBarijo;
    var itemMasUnidades;
    var fabMasUnidades = 0;
    var flagMasUnidades = true;
    var cantMasUnidades;
    var unidadesJabon = 0;

   while(i < canProductos)
   {
            //validar productos
        do{
            productos = prompt("Ingrese producto número " + (i+1) + ":" + " \n - barbijo \n - jabón \n - alcohol").toLowerCase();
        }while(productos != 'barbijo' && productos != 'jabón' && productos != 'alcohol');
        console.log("producto: " + productos);   

            //validar precio
        do{
            precio = parseFloat(prompt("Ingrese el precio del " + productos + " entre 100 y 300: "));
        }while(isNaN(precio) || precio < 100 || precio > 300);
        console.log("precio: " + precio);

            //validar cantidad
        do{
            cantidad = parseInt(prompt("Ingrese cantidad del " + productos + " entre 1 y 1000:"));               
        }while(isNaN(cantidad) || cantidad == "null" || cantidad <= 0 || cantidad >1000);
        console.log("cantidad " + cantidad);

            //validar marca
        do{
            marca = prompt("Ingrese la marca del " + productos + ": ").toLowerCase();
        }while(marca == "");
        console.log("marca: " + marca);
            //validar fabricante
        do{
            fabricante = prompt("Ingrese el fabricante del " + productos + ": ");
        }while(fabricante == "");
        console.log("fabricante: " + fabricante);

         //a) Del mas caro de los barbijos, la cantidad de unidades y el fabricante
         if(productos == "barbijo")
         {
             if(flagBarbijo)
             {
                 flagBarbijo = false;
                 barbijoMasCaro = precio;
                 fabBarijo = fabricante;
                 cantBarbijo = cantidad;
             }else if(precio > barbijoMasCaro)
             {
                 barbijoMasCaro = precio;
                 fabBarijo = fabricante;
                 cantBarbijo = cantidad;
             }            
         }

         // b) Del item con más unidades, el fabricante
            if(flagMasUnidades)
            {
                flagMasUnidades = false;
                itemMasUnidades = productos;
                fabMasUnidades = fabricante;
                cantMasUnidades = cantidad;
            }else if(cantidad > cantMasUnidades)
            {
                itemMasUnidades = productos;
                fabMasUnidades = fabricante;
                cantMasUnidades = cantidad;
            }

            //C) Cuantas unidades de jabones hay en total
            if(productos == 'jabón')
            {
                unidadesJabon++;
            }

    i++;
    }
        if(productos == "barbijo")
        {
            document.write("El barbijo más caro es de: $"+ barbijoMasCaro + ", el fabricante es " + fabBarijo + " y la cantidad es de " + cantBarbijo + "<br>");
        }else
        {
            document.write("No se ingresaron barbijos" + "<br>");
        }

        document.write("El ítem con más unidades vendidas es: " + itemMasUnidades + ", el fabricante es: " + fabMasUnidades + " y la cantidad de unidades vendidas es: " + cantMasUnidades + "<br>");

        document.write("La cantidad de jabones ingresado es de: " + unidadesJabon + "<br>");

}
