import * as u from "../api/lobby.js"

const urlParams = new URLSearchParams(window.location.search)
const myName = urlParams.get('name')
const myPIN = urlParams.get('lobbyPIN')

console.log(myName, myPIN)

document.getElementById('username').textContent = "Your Username : " + window.atob(myName)
document.getElementById('lobbypin').textContent = "Lobby PIN : " + myPIN

let isNavigating = false;
let playerCount = 0;

window.addEventListener('unload', function(e) {
    if (!isNavigating) {
        // User is navigating away from the page
        e.preventDefault()
        if (playerCount == 1)
            u.deleteGame(parseInt(myPIN))
        else u.deletePlayer(parseInt(myPIN), window.atob(myName))
        return ''
    }
});

document.addEventListener('click', function(event) {
    const target = event.target

    if (target.tagName === 'A' && target.getAttribute('href')) {
        isNavigating = true; // User is navigating
    }
})

setInterval(async function() {
    const data = await u.getLobby(parseInt(myPIN))
    playerCount = data.player.length
    if (playerCount == 4)
        console.log('ready')
}, 500)