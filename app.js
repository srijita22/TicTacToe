let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#rstBtn");
let msg=document.querySelector(".msg");
let newBtn=document.querySelector("#newBtn");
let rstBtn=document.querySelector("#rstBtn");
let turnO=true;
const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
  boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
  });
  const showWinner=(winner)=>{
    msg.classList.remove("hide");
  };
   const disableBoxes=()=>{
    boxes.forEach((box)=>{
        box.disabled=true;
       });
   }
   const enableBoxes=()=>{
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
       });
       msg.classList.add("hide");
   }
  const checkWinner=()=>{
    for(pattern of winPatterns){
       let val1=boxes[pattern[0]].innerText;
       let val2=boxes[pattern[1]].innerText;
       let val3=boxes[pattern[2]].innerText;
       if(val1!=""&&val2!=""&&val3!=""){
        if(val1===val2&&val2===val3){
            console.log("winner");
            disableBoxes();
            showWinner(val1);
        }
       }
    }
  };
  newBtn.addEventListener("click",enableBoxes);
  rstBtn.addEventListener("click",enableBoxes);
