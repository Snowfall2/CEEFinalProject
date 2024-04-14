export const shipIsAlive = (shipPosition, playerBoard) => {
    for (let i = 0; i < shipPosition.length; i++) {
        const x = shipPosition[i][0]
        const y = shipPosition[i][1]

        // 0 - not attacked,  1 - attacked
        if (playerBoard[x][y] == 0) return true
    }
    return false
}


