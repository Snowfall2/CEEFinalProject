const express = require('express')

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + 'public/menu/index.html')
})

app.get('/lobby', (req, res) => {
  res.sendFile(__dirname + 'public/lobby/index.html')
})

app.get('/setup', (req, res) => {
  res.sendFile(__dirname + 'public/setup/index.html')
})

app.get('/game', (req, res) => {
  res.sendFile(__dirname + 'public/game/index.html')
})

const PORT = 3221;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Frontend Server ready at http://localhost:${PORT}`);
});