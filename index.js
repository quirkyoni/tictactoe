const resetButton = document.querySelector(".reset")

const gameboard = (() => {
    const grid = [
    [],[],[],
    [],[],[],
    [],[],[]
    ]

    const reset = () => {
        resetButton.addEventListener("click", () => {
            window.location.reload()
            
        })

    }

    return {grid, reset}
})()

gameboard.reset()