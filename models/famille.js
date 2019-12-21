mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FamilleSchema = new Schema({
  username: String,
  nom: String,
  adresse: { rue: String, codePostal: Number, ville: String },
  telephone1: { numero: String, utiliserSMS: Boolean },
  telephone2: { numero: String, utiliserSMS: Boolean },
  telephone3: { numero: String, utiliserSMS: Boolean },
  email: String,
  adherent: [ 
    {
      prenom: String,
      nom: String,
      dateNaissance: Date,
      cours: [{type: Schema.Types.ObjectId, ref: 'Cours'}]
    }
  ]
});

const Famille = mongoose.model('Famille', FamilleSchema);

module.exports = Famille;


