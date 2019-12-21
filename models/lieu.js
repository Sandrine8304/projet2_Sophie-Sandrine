mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LieuSchema = new Schema({
  nom: String,
  adresse: String
});

const Famille = mongoose.model('Cours', LieuSchema);

module.exports = Lieu;