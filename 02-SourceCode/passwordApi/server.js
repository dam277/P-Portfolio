const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// Route pour obtenir un mot de passe aléatoire sous forme de JSON
app.get('/get-password', (req, res) => {
  const password = generateRandomPassword();
  res.json({ password });
});

// Fonction pour générer un mot de passe aléatoire
function generateRandomPassword() {
  const length = 12;
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }
  return password;
}

const port = 8080; // Port sur lequel le serveur écoutera
app.listen(port, () => {
  console.log(`Serveur en écoute sur le port ${port}`);
});
