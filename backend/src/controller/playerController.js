import { shipIsAlive } from "shipController"

export const playerIsAlive = (playerShip) => {
    // check the status of all player's ship
    for (let i = 0; i < playerShip.length; i++) {
        if (shipIsAlive(playerShip[i])) return true
    }
    return false
}

export const playerAttack = (otherBoard, attackedPosition) => {
    /*
        otherBoard - Get Board from the other 3 players
        attackedPosition - Array of attacked position
            ex. [[3,1], [7,2], [5,8]]
            Please make sure the order are allign with otherBoard 
    */

    // Please make sure otherBoard and attackedPosition are same length (should be 3)
    for (let i = 0; i < otherBoard.length; i++) {
        const x = attackedPosition[i][0]
        const y = attackedPosition[i][1]

        (otherBoard[i])[x][y] = 1
    }
}




