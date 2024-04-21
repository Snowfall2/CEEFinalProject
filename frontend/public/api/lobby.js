import { BACKEND_URL } from "./config.js";

export async function getAllGame() {
    return await fetch(`${BACKEND_URL}/`).then(r => r.json())
}

export async function getLobby(lobbyPIN) {
    return await fetch(`${BACKEND_URL}/${lobbyPIN}`).then(r => r.json())
}

export async function getPlayer(lobbyPIN, playerName) {
    return await fetch(`${BACKEND_URL}/${lobbyPIN}/${playerName}`).then(r => r.json())
}

export async function createLobby(lobbyPIN, player) {
    // player is an array of length 1
    return await fetch(`${BACKEND_URL}/`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ lobbyPIN: lobbyPIN, player: player })
    }).then(r => r.json())
}

export async function newPlayer(lobbyPIN, playerName) {

    return await fetch(`${BACKEND_URL}/${lobbyPIN}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ name: playerName })
    }).then(r => r.json())
}

/**
    Note: For delete request, r.json() isn't necessary but you 
    can use a returning value to help debugging a code.
 */
export async function deleteGame(lobbyPIN) {
    return await fetch(`${BACKEND_URL}/${lobbyPIN}`, {
        method: 'DELETE'
    }).then(r => r.json())
}

export async function deletePlayer(lobbyPIN, playerName) {
    return await fetch(`${BACKEND_URL}/${lobbyPIN}/${playerName}`, {
        method: 'DELETE'
    }).then(r => r.json())
}
