let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let new_btn=document.querySelector("#new");
let msg_con=document.querySelector(".msg-con");
let msg=document.querySelector("#msg");
let turnO=true;
const win=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const reset_game=()=>{
    turnO=true;
    count=0;
    enable_boxes();
    msg_con.classList.add("hide");
};

boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        console.log("clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO="true";
        }
        box.disabled=true;
        count++;

        let winner=checkWinner();
        if(count==9&&!winner){
            game_draw();
        }
    });
});

const game_draw=()=>{
    msg.innerText="It's a DRAW!!";
    msg_con.classList.remove("hide");
    disable_boxes();
}

const disable_boxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enable_boxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner)=>{
    msg.innerText=`Hurray! ${winner} won the game`;
    msg_con.classList.remove("hide");
    disable_boxes();
}

const checkWinner=()=>{
    for(let pattern of win){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!=""&&pos2!=""&&pos3!=""){
            if(pos1===pos2&&pos2===pos3){
                console.log("winner",pos1);
                showWinner(pos1);
                return true;
            }
        }
    }
};

new_btn.addEventListener("click",reset_game);
reset.addEventListener("click",reset_game);