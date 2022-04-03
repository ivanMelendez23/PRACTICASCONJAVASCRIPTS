let dia,mes,año;
   mes=prompt(`Introduzca el numnero del mes`,"");
   mes = parseInt(mes);
   
   if(mes==1 || mes==3 || mes==5 || mes==7 || mes==8 || mes==10 || mes==12)
   {
       document.write(`ESTE MES TIENE 31 DIAS`);
   }
   else
   {
       if(mes==2)
       document.write(`ESTE MES PUEDE TENER 30 DIAS.`);
       else
       document.write(`Este mes tien 30 dias.`);
       
   }
