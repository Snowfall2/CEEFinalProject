// Sample list of players
var players = ['Player 1', 'Player 2', 'Player 3'];

// Function to populate the player list
function populatePlayerList() {
  var playerListElement = document.getElementById('playerList');
  playerListElement.innerHTML = ''; // Clear existing list
  players.forEach(function(player) {
    var playerDiv = document.createElement('div');
    playerDiv.textContent = player;
    playerListElement.appendChild(playerDiv);
  });
}

// Call populate function on load
populatePlayerList();

// Function to start the game
function startGame() {
  alert('The game is starting!');
  // Implement game start logic here
}