
 const numero1 = document.getElementById("num1");

 const numero2 = document.getElementById("num2");
 
 const total = document.getElementById("resultado");


 document.getElementById("suma").addEventListener("click", function() {
     const num1 = +(numero1.value);
     const num2 = +(numero2.value);
        const resultado = num1 + num2;
        total.textContent = resultado;
 });

 document.getElementById("resta").addEventListener("click", function() {
     const num1 = +(numero1.value);
     const num2 = +(numero2.value);
        const resultado = num1 - num2;
        total.textContent = resultado;
 });

 document.getElementById("multiplicacion").addEventListener("click", function() {
     const num1 = +(numero1.value);
     const num2 = +(numero2.value);
         const resultado = num1 * num2;
         total.textContent = resultado;
 });

 document.getElementById("division").addEventListener("click", function() {
     const num1 = +(numero1.value);
     const num2 = +(numero2.value);
        const resultado = num1 / num2;
        total.textContent = resultado;
    
 });