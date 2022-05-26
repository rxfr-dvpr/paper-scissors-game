const game = () => {
    let pScore = 0;
    let cScore = 0;

    // Start the Game
    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut')
            match.classList.remove('fadeOut')
            match.classList.add('fadeIn')
        })
    }

    // Play Match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');

        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const handsImg = document.querySelectorAll('.hand-img')

        handsImg.forEach(hand => {
            hand.addEventListener('animationend', function () {
                this.style.animation = "";
            });
        });

        // Computer Options
        const computerOptions = ['quduq', 'qogoz', 'qaychi']
        
        options.forEach(option => {
            option.addEventListener('click', function () {
                // Computer Choice
                const compNum = Math.floor(Math.random() * 3);
                const compChoice = computerOptions[compNum];
                
                playerHand.src = `./assets/img/${computerOptions[0]}.png`;
                computerHand.src = `./assets/img/${computerOptions[0]}.png`;
                setTimeout(() => {
                    compareHands(this.textContent, compChoice)
                    // Update Images
                    playerHand.src = `./assets/img/${this.textContent}.png`;
                    computerHand.src = `./assets/img/${compChoice}.png`;
                }, 2000);

                playerHand.style.animation = "shakePlayer 2s ease"
                computerHand.style.animation = "shakeComputer 2s ease"
            })
        });
    }

    const updateScore = () => {
        const playerScore = document.querySelector('.player-score')
        const compScore = document.querySelector('.computer-score')
        playerScore.textContent = pScore;
        compScore.textContent = cScore;
    }

    const compareHands = (pChoice, cChoice) => {

        const winner = document.querySelector('.winner')

        if (pChoice === cChoice) {
            winner.textContent = "Durrang Bo'ldi";
            return;   
        }
        // Check for Rock
        if (pChoice === "quduq") {
            if (cChoice === "qaychi") {
                winner.textContent = "Player Yutdi"
                pScore++
                updateScore()
                return;
            } else {
                winner.textContent = "Computer Yutdi"
                cScore++
                updateScore()
                return;
            }
        }
        // Check for Paper
        if (pChoice === "qogoz") {
            if (cChoice === "qaychi") {
                winner.textContent = "Computer Yutdi"
                cScore++
                updateScore()
                return;
            } else {
                winner.textContent = "Player Yutdi"
                pScore++
                updateScore()
                return;
            }
        }
        // Check for Scissors
        if (pChoice === "qaychi") {
            if (cChoice === "quduq") {
                winner.textContent = "Computer Yutdi"
                cScore++
                updateScore()
                return;
            } else {
                winner.textContent = "Player Yutdi"
                pScore++
                updateScore()
                return;
            }
        }
    }

    startGame()
    playMatch()
}

game()