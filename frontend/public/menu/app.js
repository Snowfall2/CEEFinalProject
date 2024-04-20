const joinGameBtn = document.getElementById('joinGameBtn');
const createGameBtn = document.getElementById('createGameBtn');
const startGameBtn = document.getElementById('startButton');

let mode = "join"

joinGameBtn.addEventListener('click', () => {
    document.getElementById('createGameForm').style.display = 'none';
    document.getElementById('joinGameForm').style.display = 'block';
    mode = "join"
});

createGameBtn.addEventListener('click', () => {
    document.getElementById('joinGameForm').style.display = 'none';
    document.getElementById('createGameForm').style.display = 'block';
    mode = "create"
});

startGameBtn.addEventListener('click', async () => {
  // Perform your join game
  let res
  if (mode === "join") {
    const username = document.getElementById("joingame-username").value
    const gamePIN = document.getElementById("joingame-gamepin").value
    res = await newPlayer(parseInt(gamePIN), username)
  } else {
    const username = document.getElementById("create-username").value
    const gamePIN = document.getElementById("create-gamepin").value
    res = await createLobby(parseInt(gamePIN), [{ name: username }])
  }
  if (!res.message)
      window.location.href = "/lobby"
  else {
    document.querySelector('.container').querySelector('p').textContent = res.message
  }
});

const BACKEND_URL = "http://localhost:3000";

async function getAllGame() {
  return await fetch(`${BACKEND_URL}/`).then(r => r.json())
}

async function getLobby(lobbyPIN) {
  return await fetch(`${BACKEND_URL}/${lobbyPIN}`).then(r => r.json())
}

async function getPlayer(lobbyPIN, playerName) {
  return await fetch(`${BACKEND_URL}/${lobbyPIN}/${playerName}`).then(r => r.json())
}

async function createLobby(lobbyPIN, player) {
  // player is an array of length 1
  return await fetch(`${BACKEND_URL}/`, {
      method: 'POST',
      headers: {
          'Content-type': 'application/json'
      },
      body: JSON.stringify({ lobbyPIN: lobbyPIN, player: player })
  }).then(r => r.json())
}

async function newPlayer(lobbyPIN, playerName) {
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
async function deleteGame(lobbyPIN) {
  return await fetch(`${BACKEND_URL}/${lobbyPIN}`, {
      method: 'DELETE'
  }).then(r => r.json())
}

async function deletePlayer(lobbyPIN, playerName) {
  return await fetch(`${BACKEND_URL}/${lobbyPIN}/${playerName}`, {
      method: 'DELETE'
  }).then(r => r.json())
}