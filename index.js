const gameboard = (() => {
    const grid = [
    ["x"],[],[],
    [],["x"],[],
    [],[],["x"]
    ]

    const test = () => {
        console.log(grid[0], "hello world")
    }

    return {grid, test}
})()