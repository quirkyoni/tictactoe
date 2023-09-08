const header = document.querySelector("header")
const section = document.querySelector("section")
const grid = document.querySelector(".grid")
const addPlayerNames = document.querySelector(".add-player-names")
const playerOne = document.querySelector(".player-1")
const playerOneInput = document.querySelector(".form-field-p1")
const playerTwo = document.querySelector(".player-2")
const playerTwoInput = document.querySelector(".form-field-p2")
const startButton = document.querySelector(".start")
const resetButton = document.querySelector(".reset")

const playerFactory = (name, token) => {


    return { name, token }
}

const tictactoe = (() => {

    let gameboardGrid = [];
    let players = []
    let turnCounter = 0;
    let winnerBool = false;

    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    const createGameboard = () => {
        for (i = 0; i < 9; i++) {
            const gridItem = document.createElement("div")
            gridItem.className = "grid-item"
            gridItem.setAttribute("id", `${i}`)
            grid.appendChild(gridItem)
            gameboardGrid.push(gridItem.innerHTML)
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
                const newPlayerOne = playerFactory(`${playerOneInput.value}`, "X")
                players.push(newPlayerOne)
                const playerOneName = document.createElement("div")
                playerOneName.className = "player-1"
                const pOneName = document.createElement("p")
                pOneName.textContent = `${playerOneInput.value}`
                playerOneName.appendChild(pOneName)


                playerTwo.remove()
                const newPlayerTwo = playerFactory(`${playerTwoInput.value}`, "O")
                players.push(newPlayerTwo)
                const playerTwoName = document.createElement("div")
                playerTwoName.className = "player-2"
                const pTwoName = document.createElement("p")
                pTwoName.textContent = `${playerTwoInput.value}`
                playerTwoName.appendChild(pTwoName)

                addPlayerNames.appendChild(playerOneName)
                addPlayerNames.appendChild(playerTwoName)

                startButton.disabled = true;
                startButton.style.opacity = "0.75"
                createGameboard()

                let activePlayer = players[0]

                const switchActivePlayer = () => {
                    if (activePlayer == players[0]) {
                        activePlayer = players[1]
                    } else {
                        activePlayer = players[0]
                    }
                }

                document.addEventListener("click", (e) => {
                    if (e.target.className == "grid-item" && e.target.textContent == "") {
                        turnCounter++
                        const markerSpot = e.target
                        markerSpot.style.backgroundColor = "#4a5d79"
                        const markerPara = document.createElement("p")
                        markerPara.className = "marker"
                        markerSpot.appendChild(markerPara)
                        markerPara.textContent = `${activePlayer.token}`
                        gameboardGrid.splice(markerSpot.id, 1, activePlayer.token)
                        console.log(gameboardGrid)

                        switchActivePlayer()

                        winConditions.forEach((condition) => {
                            if (gameboardGrid[condition[0]] === "X" && gameboardGrid[condition[1]] === "X" && gameboardGrid[condition[2]] === "X") {
                                const winner = document.createElement("div")
                                winner.className = "winner"
                                const winnerPara = document.createElement("p")
                                winnerPara.textContent = `${players[0].name} is the winner!`
                                winner.appendChild(winnerPara)
                                playerOneName.remove()
                                playerTwoName.remove()
                                addPlayerNames.appendChild(winner)
                                grid.style.pointerEvents = "none"
                                winnerBool = true;
                            } else if (gameboardGrid[condition[0]] === "O" && gameboardGrid[condition[1]] === "O" && gameboardGrid[condition[2]] === "O") {
                                const winner = document.createElement("div")
                                winner.className = "winner"
                                const winnerPara = document.createElement("p")
                                winnerPara.textContent = `${players[1].name} is the winner!`
                                winner.appendChild(winnerPara)
                                playerOneName.remove()
                                playerTwoName.remove()
                                addPlayerNames.appendChild(winner)
                                grid.style.pointerEvents = "none"
                                winnerBool = true
                            }
                        })
                    } else if (e.target.className == "grid-item" && e.target.textContent !== "") {
                        alert("Enter your token on an empty spot.")
                    }

                    if (turnCounter === 9 && winnerBool === false) {
                        const tieGame = document.createElement("div")
                        tieGame.className = "winner"
                        const tieGamePara = document.createElement("p")
                        tieGamePara.textContent = "It's a tie game!"
                        tieGame.appendChild(tieGamePara)
                        playerOneName.remove()
                        playerTwoName.remove()
                        addPlayerNames.appendChild(tieGame)
                        grid.style.pointerEvents = "none"
                    }
                })
            }
        })
    }




    return { createGameboard, checkPlayerName }
})()

tictactoe.checkPlayerName()