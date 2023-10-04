
const p1={
    score: 0,
    button: document.querySelector("#p1Button"),
    display: document.querySelector("#p1Display")
}

const p2={
    score: 0,
    button: document.querySelector("#p2Button"),
    display: document.querySelector("#p2Display")
}
const resetButton=document.querySelector("#Reset");
const winnigScoreSelect=document.querySelector("#playto");
let winningScore=3;
let isGameover=false;
function update(player,oponent){
    if (!isGameover){
        player.score+=1;
        player.display.textContent=player.score;
        if(player.score===winningScore){
            isGameover=true;
            player.display.classList.add("has-text-success");
            oponent.display.classList.add("has-text-denger");
            player.button.disabled=true;
            oponent.button.disabled=true;
        }
    }
}
p1.button.addEventListener("click",function(){
    update(p1,p2);
});
p2.button.addEventListener("click",function(){
    update(p2,p1);
});
winnigScoreSelect.addEventListener("change",function(){
    winningScore=parseInt(this.value);
    reset();
});
resetButton.addEventListener("click",reset);
function reset(){
    isGameover=false;
    for(let p of [p1,p2]){
        p.score=0;
        p.display.textContent=0;
        p.display.classList.remove("has-text-success","has-text-denger");
        p.button.disabled=false;
    }
}