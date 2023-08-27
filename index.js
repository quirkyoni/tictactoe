const grid = document.querySelector(".grid")
const addPlayerNames = document.querySelector(".add-player-names")
const playerOne = document.querySelector(".player-1")
const playerOneInput = document.querySelector(".form-field-p1")
const playerTwo = document.querySelector(".player-2")
const playerTwoInput = document.querySelector(".form-field-p2")
const startButton = document.querySelector(".start")
const resetButton = document.querySelector(".reset")

const playerFactory = (name, token, active) => {


    return { name, token, active }
}

const tictactoe = (() => {

    let gameboardGrid = [];
    let players = []

    const createGameboard = () => {
        for (i = 0; i < 9; i++) {
            const gridItem = document.createElement("div")
            gridItem.className = "grid-item"
            gridItem.setAttribute("id", `${i}`)
            grid.appendChild(gridItem)
            gameboardGrid.push(gridItem)
        }
    }

    resetButton.addEventListener("click", () => {
        window.location.reload()
    })

    const checkPlayerName = () => {
        startButton.addEventListener("click", () => {
            if (playerOneInput.value == "" || playerTwoInput.value == "") {
                alert("Please enter a name for both players.")
            } else if (playerOneInput.value !== "" || playerTwoInput.value !== "") {
                playerOne.remove()
                const newPlayerOne = playerFactory(`${playerOneInput.value}`, "X", true)
                players.push(newPlayerOne)
                const playerOneName = document.createElement("div")
                playerOneName.className = "player-1"
                const pOneName = document.createElement("p")
                pOneName.textContent = `${playerOneInput.value}`
                playerOneName.appendChild(pOneName)


                playerTwo.remove()
                const newPlayerTwo = playerFactory(`${playerTwoInput.value}`, "O", false)
                players.push(newPlayerTwo)
                const playerTwoName = document.createElement("div")
                playerTwoName.className = "player-2"
                const pTwoName = document.createElement("p")
                pTwoName.textContent = `${playerTwoInput.value}`
                playerTwoName.appendChild(pTwoName)

                addPlayerNames.appendChild(playerOneName)
                addPlayerNames.appendChild(playerTwoName)

                startButton.disabled = true;
                createGameboard()

                let activePlayer = players[0]

                document.addEventListener("click", (e) => {
                    if (e.target.className == "grid-item") {
                        var markerSpot = e.target
                        console.log(markerSpot)
                        markerSpot.textContent = `${activePlayer.token}`
                    }
                })


                console.log(activePlayer)
            }
        })
    }

    return { createGameboard, checkPlayerName }
})()

tictactoe.checkPlayerName()