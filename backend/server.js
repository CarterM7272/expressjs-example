const express = require('express');
const path = require('path')
const port = 3000
const app = express()

app.use(express.static('public'))



app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'home.html'));
});

app.get('/profile', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'profile.html'));
});

app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'signup.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'login.html'));
});

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`)
})