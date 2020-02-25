function mostrar()
{/** al presionar el botón mostrar 10 repeticiones con números ASCENDENTE, desde el 1 al 10. */
    var numero_1 = 10;
    var numero_2 = 10;
  
    for (let index = 1; index <= numero_1; index++)
     {
        document.write("<br>");
        document.write("Repetición: ", index , "<br>");
        for (let index_2 = 1; index_2 <= numero_2; index_2++)
         {
            document.write("Número: ", index_2 ,"<br>" );        
        }    
    }

}