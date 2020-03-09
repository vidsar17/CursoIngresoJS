
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
    var numProductos = 5;
    var marca;
    var fabricante;
    var flag = true;
    var cantidadJabones = 0;
    var mayorPrecio = 0;
    var cantidadMayor;
    var fabricanteBarbijo;
    var itemMasUnidadesVendidas;
    var fabricanteMasUnidadesVendidas;
    var mayorPrecioBarbijo;
    var cantidadBarbijo = 0;

    for(let i = 0; i < numProductos; i++)
    {

        do{ //validación productos
            productos = prompt("Ingrese producto: \n - barbijo \n - jabón \n - alcohol");
            if(productos == "jabón")
            {
                cantidadJabones++;                 
            }

        }while(productos != "barbijo" && productos != "jabón" && productos != "alcohol");

        do{//validación precio
            precio = parseFloat(prompt("Ingrese precio de " + productos + " entre 100 y 300"));

        }while(isNaN(precio) || precio < 100 || precio > 300);

        do{//validación cantidad
            cantidad = parseInt(prompt("Ingrese la cantidad de " + productos +" entre 1 a 1000 "));

        }while(cantidad <= 0 || isNaN(cantidad) || cantidad > 1000);

        do{//validación marca
            marca = prompt("Ingrese la marca del " + productos);
            
        }while(marca == "" ); //isNaN(marca));

        do{//validación fabricante
            fabricante = prompt("Ingrese la fabricante del " + productos);
            
        }while(fabricante == "" ); //|| isNaN(fabricante));
       
    } 
            //b) Del item con más unidades, el fabricante
            if(flag)
            {flag = false;
                mayorPrecio = precio;
                itemMasUnidadesVendidas = productos;
                fabricanteMasUnidadesVendidas = fabricante;
                cantidadMayor = cantidad;
            }else if(precio > mayorPrecio)
            {
                mayorPrecio = precio;
                itemMasUnidadesVendidas = productos;
                fabricanteMasUnidadesVendidas = fabricante;
                cantidadMayor = cantidad;
            }
    
          //a) Del mas caro de los barbijos, la cantidad de unidades y el fabricante
          if(productos == "barbijo")
          {                 
              mayorPrecioBarbijo = mayorPrecio;
              fabricanteBarbijo = fabricanteMasUnidadesVendidas;
              cantidadBarbijo = cantidadMayor;
              document.write("Barbijo caro es de: " + mayorPrecioBarbijo + ", la cantidad de unidades es: " + cantidadBarbijo + 
              " y el fabricante es: " + fabricanteBarbijo +"<br>");
          }else
          {
                     document.write("No se ingresaron barbijos" + "<br>");
          }       
  
          //C) Cuantas unidades de jabones hay en total
          if(productos == "jabón")
          {
            document.write("Cantidad de jabones es de: " + cantidadJabones +"<br>");       
          }else
          {
              document.write("No se ingresaron jabones " + "<br>");
          }
              

        document.write("El ítem con más unidades vendidas es: " + itemMasUnidadesVendidas +
         " y su fabricante es: " + fabricanteMasUnidadesVendidas +"<br>");
        
}
