// Dice face configurations for numbers 1 to 6
const diceFaces = {
    1: [4],
    2: [0, 8],
    3: [0, 4, 8],
    4: [0, 2, 6, 8],
    5: [0, 2, 4, 6, 8],
    6: [0, 2, 3, 5, 6, 8]
};

function rollDice() {
    const diceElements = [
        document.getElementById("dice1"),
        document.getElementById("dice2"),
        document.getElementById("dice3")
    ];

    diceElements.forEach(dice => {
        dice.classList.add("animate");
    });

    setTimeout(() => {
        diceElements.forEach(dice => {
            // Clear previous dots
            dice.innerHTML = '';
            
            // Get random number between 1 and 6
            const randomNumber = Math.floor(Math.random() * 6) + 1;
            
            // Create 9 grid cells for the dice face
            for (let i = 0; i < 9; i++) {
                const dot = document.createElement("div");
                if (diceFaces[randomNumber].includes(i)) {
                    dot.classList.add("dot");
                }
                dice.appendChild(dot);
            }
            dice.classList.remove("animate");
        });
    }, 600);
}
