import BACKEND_URL from "./config";

export async function updateStatus(lobbyPIN, playerName) {
    return await fetch(`${BACKEND_URL}/${lobbyPIN}/status`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ name: playerName })
    }).then(r => r.json())
    .catch(err => console.error(err))
}

export async function attackPlayer(lobbyPIN, playerName, attackPos) {
    return await fetch(`${BACKEND_URL}/${lobbyPIN}/attack`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ name: playerName, position: attackPos })
    }).then(r => r.json())
    .catch(err => console.error(err))
}

export async function getDeadship(lobbyPIN, playerName) {
    return await fetch(`${BACKEND_URL}/${lobbyPIN}/deadship`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ name: playerName })
    }).then(r => r.json())
    .catch(err => console.error(err))
}