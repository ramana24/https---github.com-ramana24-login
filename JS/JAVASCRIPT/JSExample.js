<!DOCTYPE html> <!-- HTML5 Declaration-->
<HTML>

  

<HEAD>
<script>
    
        
    function sum(){
        var a = 1;
        var b = 2;
     
     var   c= a+b;
        
    document.getElementById("idadd").innerHTML = "The sum of values:" + c;
    };

</script>
 <script>

    
    function Calculator(){
        var a1 = parseInt(document.getElementById("value1").value);
        var b1 = parseInt(document.getElementById("value2").value);
     
     var   c1= a1 + b1;
        
    document.getElementById("idtotal").innerHTML = "The sum of values:" + c1;
    };

</script>
<TITLE>Welcome to UI5 Programming!</TITLE>
<link rel="stylesheet" href="style.css">
</HEAD>
<BODY>
<P>Fiori Foundation Course 2020 Edition</P>
<h2 class="UICursive">Bookmarks:</h2>
<!-- <h3>Reference</h3>
<img src="w3schools.jpg" alt="learn from w3schools" height="50" width="50"></img> -->

<h1 id="productid">Week 1: Lets Learn HTML,CSS,JavaScript  !</h1>
<p class="UICursive"> Day 1: Lets learn HTML !</p>
<p style="font-weight: bold;">HTML  Exercise- Practice all HTML tags in single page</p>
<!-- <a href="https://ui5.sap.com/">SAP Fiori Development- API</a> -->

<p class="UICursive"> Day 2: Lets learn CSS !</p>
<p style="font-weight: bold;" > CSS Exercise- Practice External CSS approach to define properties</p>
<p class="UICursive">Day 3: Lets learn JavaScript !</p>
<p style="font-weight: bold;"> JS Exercise- Practice External JavaScript approch with  functions concept </p>
<button   onclick="sum()">Calculate</button>
<p id="idadd"></p>
<p> Calculator</p>
<input id="value1" type="text"></input>
<input id="value2" type="text"></input>
<button   onclick="Calculator()">Calculate</button>
<p id="idtotal"></p>


<p>Weekly Exercise : Create a invoice for your Telephone/Gas/Broadband Bill. And calculate amount to be paid. </p>
<p> hint: use html tags to create form ,use css to make it colorful,calculate total using Javascript.  </p>
</BODY>
</HTML>

<!--
CSS
//inline css
// internal css
// external css

{
background-image:""; width:100% ;

 -->