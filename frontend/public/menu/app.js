import * as u from "../api/lobby.js"
import { setMyName, setMyPIN } from "../api/config.js";

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

let username = null
let gamePIN = null

startGameBtn.addEventListener('click', async () => {
  // Perform your join game
  let res
  if (mode === "join") {
    username = document.getElementById("joingame-username").value
    gamePIN = document.getElementById("joingame-gamepin").value
    if (!username)
      document.querySelector('.container').querySelector('p').textContent = "Fill in Username"
    else if (!gamePIN)
      document.querySelector('.container').querySelector('p').textContent = "Fill in Lobby PIN"
    else res = await u.newPlayer(parseInt(gamePIN), username)
  } else {
    username = document.getElementById("create-username").value
    gamePIN = document.getElementById("create-gamepin").value
    if (!username)
      document.querySelector('.container').querySelector('p').textContent = "Fill in Username"
    else if (!gamePIN)
      document.querySelector('.container').querySelector('p').textContent = "Fill in Lobby PIN"
    else res = await u.createLobby(parseInt(gamePIN), [{ name: username }])
  }
  if (!res.message) {
    window.location.href = `/lobby?lobbyPIN=${gamePIN}&name=${window.btoa(username)}`
  }

  else {
    document.querySelector('.container').querySelector('p').textContent = res.message
  }
});