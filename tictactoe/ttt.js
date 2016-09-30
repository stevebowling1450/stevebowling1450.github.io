var r1c1=0;
var r1c2=0;
var r1c3=0;
var r2c1=0;
var r2c2=0;
var r2c3=0;
var r3c1=0;
var r3c2=0;
var r3c3=0;
function startgame(){
    r1c1= $("#r1c1").val();
    r1c2= $("#r1c2").val();
    r1c3= $("#r1c3").val();
    r2c1= $("#r2c1").val();
    r2c2= $("#r2c2").val();
    r2c3= $("#r2c3").val();
    r3c1= $("#r3c1").val();
    r3c2= $("#r3c2").val();
    r3c3= $("#r3c3").val();
    //console.log(+r1c1 + +r2c2 + +r3c3);
    //rows//
    
    if (r1c1 + r1c2 + r1c3 == 111){
      setTimeout(xwin, 200);}
   else if (r1c1 + r1c2 + r1c3 == 555){
           setTimeout(owin, 200);}
    
    else if (r2c1 + r2c2 + r2c3 == 111){
        setTimeout(xwin, 200);}
   else if (r2c1 + r2c2 + r2c3 == 555){
           setTimeout(owin, 200);}
   
   else if (r3c1 + r3c2 + r3c3 == 111){
        setTimeout(xwin, 200);}
   else if (r3c1 + r3c2 + r3c3 == 555){
           setTimeout(owin, 200);}
   //cols//
   else if (r1c1 + r2c1 + r3c1 == 111){
        setTimeout(xwin, 200);}
   else if (r1c1 + r2c1 + r3c1 == 555){
          setTimeout(owin, 200);}
    
    else if (r1c2 + r2c2 + r3c2 == 111){
      setTimeout(xwin, 200);}
   else if (r1c2 + r2c2 + r3c2 == 555){
          setTimeout(owin, 200);}
  
   else if (r1c3 + r2c3 + r3c3 == 111){
        setTimeout(xwin, 200);}
   else if (r1c3 + r2c3 + r3c3 == 555){
            setTimeout(owin, 200);}
    // dia//
    else if (r1c1 + r2c2 + r3c3 == 111){
       setTimeout(xwin, 200);}
   else if (r1c1 + r2c2 + r3c3 == 555){
           setTimeout(owin, 200);}
     else if (r1c3 + r2c2 + r3c1 == 111){
        setTimeout(xwin, 200);}
   else if (r1c3 + r2c2 + r3c1 == 555){
            setTimeout(owin, 200);}
 
else if (+r1c1 + +r1c2 + +r1c3 + +r2c1 + +r2c2 + +r2c3 + +r3c1 + +r3c2 + +r3c3 == 25){
    alert(" The CAT wins");
    startOver();}
console.log(+r1c1 + +r1c2 + +r1c3 + +r2c1 + +r2c2 + +r2c3 + +r3c1 + +r3c2 + +r3c3 );
}

function startOver() {
    $("#r1c1").val(0);
    $("#r1c2").val(0);
    $("#r1c3").val(0);
    $("#r2c1").val(0);
    $("#r2c2").val(0);
    $("#r2c3").val(0);
    $("#r3c1").val(0);
    $("#r3c2").val(0);
    $("#r3c3").val(0);
};

function xwin(){
    alert(" X is the winner");
    $("#xscore").empty(); 
    xs();
}
function owin(){
    alert(" O is the winner");
    $("#oscore").empty();
   os();
}
var xscr=0
function xs() {
    xscr++;
     $("#xscore").append("# "+xscr);
     startOver();
    };
    
    var oscr=0
function os() {
     oscr++;
     $("#oscore").append("# "+oscr);
     startOver();
    };
    function restart() {
    location.reload();}
    