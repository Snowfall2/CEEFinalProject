const express = require('express')
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public', 'api')));
app.use(express.static(path.join(__dirname, 'public', 'menu')));
app.use(express.static(path.join(__dirname, 'public', 'lobby')));
app.use(express.static(path.join(__dirname, 'public', 'setup')));
app.use(express.static(path.join(__dirname, 'public', 'game')));

const PORT = 3221;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'menu', 'index.html'));
});

app.get('/lobby', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'lobby', 'index.html'));
});

app.get('/game', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'game', 'index.html'));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Frontend Server ready at http://localhost:${PORT}`);
});