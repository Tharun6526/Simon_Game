let max =0;
let gameSeq =[];
let userSeq =[];
let colors = ["red","purple","green","yellow"];
let level =0;
let started = false;
let score = 0;
let h2 = document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
    console.log("game started");
    started =true;
    levelup();
    }
});
function btnFlash(btn){
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash")
},350);
}
function userFlash(btn){
btn.classList.add("userFlash");
setTimeout(function(){
    btn.classList.remove("userFlash")
},350);
}
function levelup(){
    userSeq=[]; 
    score++;
    max=Math.max(score-1,max);
    level++;
    h2.innerHTML= `Level ${level}     current score :  ${score-1}`;
    let randIdx = Math.floor(Math.random()*4);
    let ranColor = colors[randIdx];
    gameSeq.push(ranColor);
    console.log(gameSeq);
    let ranBtn = document.querySelector(`.${ranColor}`);
    btnFlash(ranBtn);
}
function check(idx)  {
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelup,1000);
        }
    }else{
        h2.innerHTML = `Game Over <br> Press any key to restart  Your score was :<b> ${score-1} </b> <br> Max Score : ${max}`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}
function btnPress(btn){
    let btn1  = this;
    userFlash(btn1);
    userColor = btn1.getAttribute("id");
    userSeq.push(userColor);
    check(userSeq.length-1);
}
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
    score = 0;
}

