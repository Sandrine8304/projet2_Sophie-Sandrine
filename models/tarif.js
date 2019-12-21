mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TarifSchema = new Schema({
  duree: String,
  montant: Number
});

const Tarif = mongoose.model('Cours', TarifSchema);

module.exports = Tarif;