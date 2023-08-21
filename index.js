const playerOneInput = document.querySelector(".form-field-p1")
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
            }
        })
    }


    return { grid, reset, checkPlayerName}
})()

tictactoe.reset()
tictactoe.checkPlayerName()