    var x=0;
    var y=0;
    var z=0;
     var n1=1;
    function number2() {
      x = Math.floor((Math.random() * 9) + 0);
      y = Math.floor((Math.random() * 9) + 0);
      z = Math.floor((Math.random() * 9) + 0);
      
    console.log(x);
    console.log(y);
    console.log(z);}
   
    
    function check1(){
     n1 = $("#num1").val();
     console.log(n1);
    if (n1==x){
        document.getElementById("div1").style.background = "#2eb82e";}
      else if (n1==y){document.getElementById("div1").style.background = "#f1f907";

        }
       else if (n1==z){document.getElementById("div1").style.background = "#f1f907";

        }
        
        else(
            document.getElementById("div1").style.background = "#ff0000");}
    
    

   
      var n2=1
     function check2(){
      n2 = $("#num2").val();
     console.log(n2);
    if (n2==y){
    document.getElementById("div2").style.background = "#2eb82e";}
    else if (n2==x){document.getElementById("div2").style.background = "#f1f907";

        }
       else if (n2==z){document.getElementById("div2").style.background = "#f1f907";

        }
     else(
             document.getElementById("div2").style.background = "#ff0000"
        );
 }


      var n3=1
     function check3(){
      n3 = $("#num3").val();
     console.log(n2);
    if (n3==z){
    document.getElementById("div3").style.background = "#2eb82e";}
    else if (n3==y){document.getElementById("div3").style.background = "#f1f907";

        }
       else if (n3==x){document.getElementById("div3").style.background = "#f1f907";

        }
     else(
             document.getElementById("div3").style.background = "#ff0000"
        );
 }
 
 function checkall(){
     check1();
     check2();
     check3();
 };
    
    