
let dato1,dato2,dato3,num1,num2,resultado;

dato1=window.prompt("PRIMER NUMERO?","0");
num1=parseInt(dato1);

dato2=window.prompt("Segundo numero?","0");
num2=parseInt(dato2);
 
if(num1>num2)
{
resultado="el primero"
}
else
{
resultado="el segundo"
}
document.write(`<h3>EL MAYOR ES ${resultado} </h3>`);


