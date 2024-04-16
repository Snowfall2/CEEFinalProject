const joinGameBtn = document.getElementById('joinGameBtn');
const createGameBtn = document.getElementById('createGameBtn');
const startGameBtn = document.getElementById('startButton');

joinGameBtn.addEventListener('click', () => {
    document.getElementById('createGameForm').style.display = 'none';
    document.getElementById('joinGameForm').style.display = 'block';
});

createGameBtn.addEventListener('click', () => {
    document.getElementById('joinGameForm').style.display = 'none';
    document.getElementById('createGameForm').style.display = 'block';
});

startGameBtn.addEventListener('click', () => {
  const gameCode = document.getElementById('join-game-code').value;

  // Perform your join game
});