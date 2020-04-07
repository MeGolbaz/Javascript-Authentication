// DOM SELECTION
let numbers = document.querySelectorAll("div.number");
// console.log(numbers);
let input = document.querySelector("input");
console.log(input);
let removebtn = document.querySelector(".back");
// console.log(remove);
let btn = document.querySelector("input.event-none");
// console.log(button);
let randomCode="";
let linecode = document.querySelector("h3");
let subtitle = document.querySelector("legend");
let label = document.querySelector("h2");
let tag = document.querySelector("h6");
// console.log("h6");
let details = document.querySelector("span");
let add = document.querySelector("input#Tel");
let eye = document.querySelector("i.fas");
// console.log(eye);
// const input1 = document.querySelector('input');
// const log = document.getElementById('log');
let keyPad = document.querySelector("section#keypad");

//FUNCTIONS
function putInput() {
    if (keyPad.hasAttribute("type")) {
        input.value += this.getAttribute("num");
        if (input.value.length === 11) {
            btn.classList.remove("event-none");
            btn.classList.add("active");

        }
    }
}
    function putCode() {
    if ( !keyPad.hasAttribute("type")){
        if (input.value.length === 6) {
            input.value = "";
            btn.classList.remove("event-none");
            btn.classList.add("active");
        }

    }
}



    function myfunction (){
        input.textContent = document.getElementById("Tel").onkeypress
    }

    function  showEye() {

        eye.style.display = "inline";
        if (input.value.length === 0){
            eye.style.display = "none";
        }
    }

    // function logKey(e) {
    //     log.textContent += ` ${e.code}`;
    // }

// }
function removeinput() {
    let newStr = input.value.substr(0,input.value.length-1);
    if (input.value = newStr){
        // input.setAttribute("number","password");
    }
    // console.log(newStr);
}


function  VertificationCode(e) {
    e.preventDefault();
    for (let i=0;i<6;i++){
    randomCode += String(Math.floor(Math.random()*10));
    }
    // console.log(randomCode);
    linecode.textContent=randomCode;
    if (randomCode.length === 6){
        input.value = "";
        btn.classList.remove("active");
        btn.classList.add("event-none");
        btn.classList.add("yellow");
    }
    changeTage();
    timer();
    keyPad.removeAttribute("type");
    showEye();
}
function changeTage() {
        subtitle.textContent = "Vertification Code";
        label.textContent = "XBOX";
        tag.textContent = "Put Your Code Here";
        add.setAttribute("type" , "password") ;
        btn.textContent = "go for it";


}



function timer() {
    let sec = 0;
    let min = 0;

    let interval = setInterval(function () {
        sec++;
        if (sec === 60){
            min++;
            sec =0;
        }
        let timer =" your time is 2 minutes: "+ min +":"+sec;
        details.textContent = timer;
    },1000);
    
}

function  showEye() {

    eye.style.display = "none";
    if (add.value.length === 0){
        eye.style.display = "inline";
    }
}


//EVENT TRIGGERED
for (let number of numbers){
    number.addEventListener("click" ,putInput);
    number.addEventListener("click" ,putCode);

}

removebtn.addEventListener("click" , removeinput);

btn.addEventListener("click" , VertificationCode);

btn.addEventListener("click" , changeTage);

btn.addEventListener("click" , showEye);

// input.addEventListener('keydown',logKey);
