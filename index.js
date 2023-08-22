const addPlayerNames = document.querySelector(".add-player-names")
const playerOne = document.querySelector(".player-1")
const playerOneInput = document.querySelector(".form-field-p1")
const playerTwo = document.querySelector(".player-2")
const playerTwoInput = document.querySelector(".form-field-p2")
const startButton = document.querySelector(".start")
const resetButton = document.querySelector(".reset")

const tictactoe = (() => {
    const grid = [
        [], [], [],
        [], [], [],
        [], [], []
    ]

    const reset = () => {
        resetButton.addEventListener("click", () => {
            window.location.reload()
        })
    }

    const checkPlayerName = () => {
        startButton.addEventListener("click", () => {
            if (playerOneInput.value == "" || playerTwoInput.value == "") {
                alert("Please enter a name for both players.")
            } else if (playerOneInput.value !== "" || playerTwoInput.value !== "") {
                console.log("start game")
                playerOne.remove()
                const playerOneName = document.createElement("div")
                playerOneName.className = "player-1"
                const pOneName = document.createElement("p")
                pOneName.textContent = `${playerOneInput.value}`
                playerOneName.appendChild(pOneName)


                playerTwo.remove()
                const playerTwoName = document.createElement("div")
                playerTwoName.className = "player-2"
                const pTwoName = document.createElement("p")
                pTwoName.textContent = `${playerTwoInput.value}`
                playerTwoName.appendChild(pTwoName)
                
                addPlayerNames.appendChild(playerOneName)
                addPlayerNames.appendChild(playerTwoName)
            }
        })
    }


    return { grid, reset, checkPlayerName}
})()

tictactoe.reset()
tictactoe.checkPlayerName()