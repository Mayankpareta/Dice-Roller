// const buttonE1 = document.querySelector("#roll-button");
// const diceE1 = document.querySelector("#dice");
// const rollHistoryE1 = document.querySelector("#roll-history");

// let historyList = [];

// const rollDice = () => {
//     const  rollResult = Math.floor(Math.random() * 6) + 1;
//     const diceFace = getDiceFace(rollResult);
//     diceE1.innerHTML = diceFace;
//     historyList.push(rollResult);
//     updateRollHistory();
// }

// const updateRollHistory = () => {
//     rollHistoryE1.innerHTML = "";
//     for(let i=0; i < historyList.length; i++) {        
//         const listItem = document.createElement('li');
//         listItem.innerHTML = `Roll ${i + 1}; 
//               <span>${getDiceFace(historyList[i])}</span>`;
//         rollHistoryE1.appendChild(listItem)        
//     }
// }

// const getDiceFace = (rollResult) => {
//     switch (rollResult) {
//         case 1:
//             return "&#9856" ;
//         case 2:
//             return "&#9857" ;
//         case 3:
//             return "&#9858" ;
//         case 4:
//             return "&#9859" ;
//         case 5:
//             return "&#9860" ;
//         case 6:
//             return "&#9861" ;   
//         default:
//             return "" ;              
//     }
// }

// buttonE1.addEventListener("click", () => {
//     diceE1.classList.add("roll-animation");
//     setTimeout(() => {
//         diceE1.classList.remove("roll-animation");
//         rollDice();
//     }, 1000);
// })



// SELFTRY TO MAKE 
 
const dice = document.querySelector('#dice');
const btn = document.querySelector("#roll-button");
const historyRoll = document.querySelector('#roll-history')

let diceHistory = [];

btn.addEventListener('click', 
    () => {
         dice.classList.add("roll-animation")
         setTimeout(() => {
            dice.classList.remove("roll-animation")
         }, 1000);
         const ranNum = Math.floor(Math.random() * 6) + 1 ;
         let showDice = roll(ranNum);
         dice.innerHTML = showDice
         diceHistory.push(ranNum);
         historyUpdate()
})

function historyUpdate() {
    historyRoll.innerHTML = "";
    for(let i=0;  i < diceHistory.length; i++) {
    const list = document.createElement('li');
    list.innerHTML = `Roll ${i + 1}:
                   <span>${roll(diceHistory[i])}</span>`
    historyRoll.appendChild(list);
    }
}


let roll = (ranNum) => {
    switch (ranNum) {
        case 1:
            return "&#9856";
        case 2 :
            return "&#9857";
        case 3 :
            return "&#9858";
        case 4 :
            return "&#9859";
        case 5 :
            return "&#9860";
        case 6 :
            return "&#9861";
            
        default:
            return "";
    }
}