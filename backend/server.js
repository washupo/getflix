const express = require('express');
const app = express();
const port = 3000; // Choisis le port que tu préfères, par exemple 3000

app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
})