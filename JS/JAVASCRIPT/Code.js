function sum(){
    var a = 1;
    var b = 2;
 
 var   c= a+b;
    
document.getElementById("idadd").innerHTML = "The sum of values:" + c;
};

function Calculator(){
    var a1 = parseInt(document.getElementById("value1").value);
    var b1 = parseInt(document.getElementById("value2").value);
 
 var   c1= a1 + b1;
    
document.getElementById("idtotal").innerHTML = "The sum of values:" + c1;
};


