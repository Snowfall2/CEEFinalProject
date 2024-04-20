import BACKEND_URL from "./config";

export async function setupShips(lobbyPIN, playerName, ship) {
    return await fetch(`${BACKEND_URL}/${lobbyPIN}/setup`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ name: playerName, ship: ship })
    }).then(r => r.json())
    .catch(err => console.error(err))
}

// Return a value isn't neccessary, but can help debugging.