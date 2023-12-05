//Path: backend/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  registrationDate: {
    type: Date,
    default: Date.now,
  },
});

// Définir le modèle basé sur le schéma
const UserModel = mongoose.model('User', userSchema);

// Exporter le modèle pour être utilisé dans d'autres parties de l'application
module.exports = UserModel;
