// Dice face configurations for numbers 1 to 6
const diceFaces = {
    1: [4],
    2: [0, 8],
    3: [0, 4, 8],
    4: [0, 2, 6, 8],
    5: [0, 2, 4, 6, 8],
    6: [0, 2, 3, 5, 6, 8]
};

// Variable to store the selected bet choice
let selectedBet = '';

function selectBet(choice) {
    selectedBet = choice;
    
    // Remove active class from all buttons
    document.querySelectorAll('.toggle-button').forEach(button => {
        button.classList.remove('active');
    });

    // Add active class to the selected button
    document.getElementById(`bet-${choice}`).classList.add('active');
}

function placeBet() {
    const betAmount = parseInt(document.getElementById("bet-amount").value);
    const resultDiv = document.getElementById("result");

    if (isNaN(betAmount) || betAmount <= 0) {
        alert("Please enter a valid bet amount!");
        return;
    }

    if (selectedBet === '') {
        alert("Please select a bet option!");
        return;
    }

    const diceElements = [
        document.getElementById("dice1"),
        document.getElementById("dice2"),
        document.getElementById("dice3")
    ];

    diceElements.forEach(dice => {
        dice.classList.add("animate");
    });

    setTimeout(() => {
        let sum = 0;
        
        diceElements.forEach(dice => {
            dice.innerHTML = '';
            const randomNumber = Math.floor(Math.random() * 6) + 1;
            sum += randomNumber;
            
            for (let i = 0; i < 9; i++) {
                const dot = document.createElement("div");
                if (diceFaces[randomNumber].includes(i)) {
                    dot.classList.add("dot");
                }
                dice.appendChild(dot);
            }
            dice.classList.remove("animate");
        });

        let message;
        let reward = 0;

        if (selectedBet === "high" && sum >= 12) {
            reward = betAmount * 2;
            message = `You bet on High. Sum = ${sum}. You won $${reward}!`;
        } else if (selectedBet === "mid" && sum === 11) {
            reward = betAmount * 5;
            message = `You bet on Mid. Sum = ${sum}. You won $${reward}! 🎉`;
        } else if (selectedBet === "low" && sum <= 10) {
            reward = betAmount * 2;
            message = `You bet on Low. Sum = ${sum}. You won $${reward}!`;
        } else {
            message = `You lost! Sum = ${sum}. Better luck next time!`;
        }

        resultDiv.textContent = message;

    }, 600);
}
