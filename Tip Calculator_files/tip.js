
var tip=0
 

    function calc() {
         $("#tipEach").empty();
        var service = $("#mySelect").val();
        var bill = $("#bill").val();
        var split = $("#split").val();
        var tip=(bill/split) *service;
    if (bill == null || bill == "") {
        alert("Must enter bill amount!");
        return false;}
        if (split >=2){
            tip = (tip+(bill/split));
        } 
    
$("#tipEach").append("Tip $"+tip.toFixed(2));    
}
function startOver() {
    location.reload();
};
        function isNumberKey(evt) {
  var charCode = (evt.which) ? evt.which : event.keyCode;
  if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
  } else {
      return true;
  }
        }