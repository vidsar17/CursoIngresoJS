/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % 
    y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 %
     y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” 
    se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del 
    impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var cantidad;
    var marca;
    var descuento;
    var precio;
    var precioTotal;
    var precioConDescuento;
    var impuestosBrutos;
    var precioConImpuestos;
    var precioIIBB;
     
    precio = 35;    

        cantidad = document.getElementById('Cantidad').value;
        marca = document.getElementById('Marca').value;               
       
        cantidad = parseInt(cantidad);    

     if(cantidad >= 6)
     {
         descuento = 50;             
         
     }
     else if(cantidad == 5 && marca == "ArgentinaLuz")
             {
                 descuento = 40;                  
             }
    else if(cantidad == 5)
             {
                descuento = 30;
             }
    else if(cantidad == 4 && (marca == "ArgentinaLuz" ||  marca == "FelipeLamparas"))
            {
                descuento = 25;
            }
    else if(cantidad == 4)
            {
                descuento = 20;              
            }
    else if(cantidad == 3 && marca == "ArgentinaLuz")
             {
                 descuento = 15;                  
            }
    else if(cantidad == 3 && marca == "FelipeLamparas")
            {
                descuento = 10;                
            }
    else if(cantidad == 3)
            {
                descuento = 5;
            }

            precioTotal = parseInt(precio) * parseInt(cantidad);  
            precioConDescuento = (precioTotal * descuento) / 100;
            parseInt(precioConDescuento);
                
            console.log("Cantidad: " + cantidad);
            console.log("precio: "+ precio);
            console.log("precioTotal: " + precioTotal);
            console.log("descuento: " + descuento); 
            
            if(precioConDescuento > 120)
            {
                impuestosBrutos = 10;
                precioConImpuestos = parseInt(precioConDescuento * impuestosBrutos) / 100;  

                precioIIBB = precioConImpuestos + precioConDescuento;

                alert("Usted pago " + precioIIBB + " de IIBB");
                console.log("Usted pago " + precioIIBB + " de IIBB");              
            }
            
             precioConDescuento = document.getElementById("precioDescuento").value;
      }
