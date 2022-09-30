let warning = document.getElementById("warning");
var firstPos = "100px";
var secondPos = "200px";
var count = 1;

setInterval(timer, 1000);

function timer() {

  if(count%2 == 0){
    warning.style.margin = firstPos;
    warning.style.backgroundColor = "red";
  } else {
    warning.style.margin = secondPos;
    warning.style.backgroundColor = "blue";
  }
  count++;
}
