let gameName="Guess the Word";
document.title=gameName;
document.querySelector("h1").innerHTML=gameName;
document.querySelector("footer").innerHTML=`${gameName}Game Created By Aiman`;
// setting Game Options
let numberOfTries=6;
let numberOfLetters=6;
let currentTry=1;  
function generateInput(){
    const inputsContainer=document.querySelector(".inputs");
    for (let i=1; i <=numberOfTries;i++){
        const tryDiv=document.createElement("div");
        tryDiv.classList.add(`try-${i}`);
        tryDiv.innerHTML=`<span>try ${i}</span>`;
        if(i !==1) tryDiv.classList.add("disabled-inputs");
        // create Inputes
        for (let j = 1; j <= numberOfLetters; j++) {
            const input = document.createElement("input");
            input.type = "text";
            input.id = `guess-${i}-letter-${j}`;
            input.setAttribute("maxlength", "1");
            tryDiv.appendChild(input);
        }
        

        inputsContainer.appendChild(tryDiv);
    }
    console.log(inputsContainer.children[0].children[0]);

}
window.onload = function() {
    generateInput();
}

