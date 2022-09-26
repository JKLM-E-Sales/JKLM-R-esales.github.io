let animationContainer = document.querySelector(".animation-container");
let word = ["U","N","D","E","R","-","C","O","N","S","T","R","U","C","T","I","O","N"];
let spans = [];

//Create Word
for(let i = 0; i < word.length; i++){
    let temp = document.createElement("span");
    temp.innerText = word[i];
    temp.classList.add("animation");
    if (i === 5){
        temp.classList.add("hyphen");
    }
    spans.push(temp);
    animationContainer.appendChild(temp);
}

console.log(spans)



function timer(x){

    if (x < 18){
        colorChange(x);
        x++;
        setTimeout(function(){
            timer(x)
        }, 220);
    } else if (x === 18){
        x = 0
        setTimeout(function () {
            timer(x);
        }, 220);
    } else {
        console.log(x, "broken!")
        return
    }
    
}



function colorChange(x){

    spans[x].classList.add("color");
    setTimeout(function(){
        spans[x].classList.remove('color');
    }, 1000);
}

timer(0);