
function date(){
  var d = new Date();

  var date = d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear();
  document.getElementById("date").innerHTML = date;
}
