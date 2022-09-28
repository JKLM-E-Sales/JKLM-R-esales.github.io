function myMove() {
  let id = null;

  const x = document.getElementById("animate");
  let pos = 0;

  clearInterval(id);

  id = setInterval(frame, 20);

  id1 = setInterval(colorer, 300);

  function frame() {
    if (pos == 400) {
      clearInterval(id);
      myMove();
    } else {
      pos++;
      x.style.left = pos + "px";
    }
  }

  function colorer() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let strg = "rgb(" + r + "," + g + "," + b + ")";
    x.style.color = strg;
  }
}
