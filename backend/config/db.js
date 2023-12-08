//Configuration de la base de donnée
// Path: backend/config/db.js
const mongoose = require('mongoose');
require('dotenv').config();

// URL de connexion à votre base de données MongoDB
/* const dbUrl = process.env.MONGODB_URI; */
const dbUrl = 'mongodb+srv://neb:0K5BmltUhUBpLZtT@chillhome.x0wyt0m.mongodb.net/?retryWrites=true&w=majority';
console.log('dbUrl', dbUrl)


// Connexion à la base de données
mongoose.connect(dbUrl);

// Gérer les événements de connexion
const db = mongoose.connection;

db.on('error', (err) => {
  console.error('Erreur de connexion à MongoDB :', err);
});

db.once('open', () => {
  console.log('Connexion à MongoDB réussie');
});

// Exporter l'objet de connexion pour être utilisé dans d'autres parties de l'application si nécessaire
module.exports = {
  db,
  url: dbUrl,
};
