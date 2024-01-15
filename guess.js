let gameName = "Guess the Word";
document.title = gameName;
document.querySelector("h1").innerHTML = gameName;
document.querySelector("footer").innerHTML = `${gameName} Game Created By Aiman and Ahmed`;

// setting Game Options
let numberOfTries = 6;
let numberOfLetters = 6;
let currentTry = 1;

function generateInput() {
    const inputsContainer = document.querySelector(".inputs");
    for (let i = 1; i <= numberOfTries; i++) {
        const tryDiv = document.createElement("div");
        tryDiv.classList.add(`try-${i}`);
        tryDiv.innerHTML = `<span>try ${i}</span>`;
        if (i !== 1) tryDiv.classList.add("disabled-inputs");
        // create Inputs
        for (let j = 1; j <= numberOfLetters; j++) {
            const input = document.createElement("input");
            input.type = "text";
            input.id = `guess-${i}-letter-${j}`;
            input.setAttribute("maxlength", "1");
            tryDiv.appendChild(input);
        }

        inputsContainer.appendChild(tryDiv);
    }
    inputsContainer.children[0].children[1].focus();

    const inputs = document.querySelectorAll("input");
    inputs.forEach((input, index) => {
        input.addEventListener("input", function () {
            this.value = this.value.toUpperCase();
            const nextInput = inputs[index + 1];
            if (nextInput) nextInput.focus();
        });

        input.addEventListener("keydown", function (event) {
            let currentIndex;
            inputs.forEach((el, index) => {
                if (el === event.target) {
                    currentIndex = index;
                }
            });

            if (event.key === "ArrowRight") {
                const nextInput = currentIndex + 1;
                if (nextInput < inputs.length) inputs[nextInput].focus();
            }

            if (event.key === "ArrowLeft") {
                const prevInput = currentIndex - 1;
                if (prevInput >= 0) inputs[prevInput].focus();
            }
        });
    });

    const disabledInputs = document.querySelectorAll(".disabled-inputs input");
    disabledInputs.forEach((input) => (input.disabled = true));
}

window.onload = function () {
    generateInput();
};
