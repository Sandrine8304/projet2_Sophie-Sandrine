const mongoose = require('mongoose');
const Famille = require('../models/famille.js');
const Cours = require('../models/cours.js');
const Prof = require('../models/prof.js');
const Lieu = require('../models/lieu.js');
const Tarif = require('../models/tarif.js');


mongoose.connect('mongodb://localhost/espace-famille', {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
  .then(() => {
    console.log('🔌 Connected to Mongo!');
  })
  .catch(err => console.error('Error connecting to mongo', err))
;


//
// Prof
//


var profs = [
  {
    prenom: 'Lucile',
    photo: ''
      
  },
   {
    prenom: 'Claudia',
    photo: ''
      
  },
   {
    prenom: 'Angelina',
    photo: ''
      
  },
   {
    prenom: 'Cassandre',
    photo: ''
      
  },
   {
    prenom: 'Marie',
    photo: ''
      
  }
];

const p1 = Prof.create(profs);
p1.then(profs => console.log(`${profs.length} profs créés!`));



//
// Lieu
//

var salles = [
  {
    nom: 'Gymnase Guimier',
    adresse: '70, Avenue Gilbert Berger'
      
  },
   {
    nom: 'Salle Dossisard',
    adresse: '48, Avenue Louis Decquet'
  },
   {
    nom: 'Salle des Associations du Centre Ville',
    adresse: '8, Rue Pierre Brossolette'  
  }
  {
    nom: 'Espace 110',
    adresse: 'Avenue du Parc'  
  }
];

const p2 = Lieu.create(salles);
p2.then(lieux => console.log(`${lieux.length} salles créés!`));


//
// Tarif
//

var tarifs = [
  {
    duree: '1H',
    montant: 150  
  },
  {
    duree: '1H30',
    montant: 180  
  },
  {
    duree: '2H',
    montant: 216  
  }
   
];

const p3 = Tarif.create(tarifs);
p3.then(tarifs => console.log(`${tarifs.length} tarifs créés!`));


Promise.all([p1, p2, p3])
  .then(p1p2p3 => {
    

  })
  .catch(err => console.error(err))
;


//
// Cours
//

var cours = [
  {
    nom: 'Eveil',
    prof: 'lucile',
    lieu: 'Salle des Associations du Centre Ville',
    jour: 'Samedi'
    horaire: '10H30-11H30',
    tarif: '1H'
  },
  {
    nom: 'Eveil',
    prof: '',
    lieu: '',
    jour: 'Samedi'
    horaire: '10H30-11H30',
    tarif: ''
  },
  {
    nom: 'Eveil',
    prof: '',
    lieu: '',
    jour: 'Samedi'
    horaire: '10H30-11H30',
    tarif: ''
  },
  {
    nom: 'Eveil',
    prof: '',
    lieu: '',
    jour: 'Samedi'
    horaire: '10H30-11H30',
    tarif: ''
  },
  {
    nom: 'Eveil',
    prof: '',
    lieu: '',
    jour: 'Samedi'
    horaire: '10H30-11H30',
    tarif: ''
  },
  {
    nom: 'Eveil',
    prof: '',
    lieu: '',
    jour: 'Samedi'
    horaire: '10H30-11H30',
    tarif: ''
  },
  {
    nom: 'Eveil',
    prof: '',
    lieu: '',
    jour: 'Samedi'
    horaire: '10H30-11H30',
    tarif: ''
  },{
    nom: 'Eveil',
    prof: '',
    lieu: '',
    jour: 'Samedi'
    horaire: '10H30-11H30',
    tarif: ''
  },{
    nom: 'Eveil',
    prof: '',
    lieu: '',
    jour: 'Samedi'
    horaire: '10H30-11H30',
    tarif: ''
  }
   
];

cours.forEach(cour => {
  // cours 1

  const idProf = Prof.findOne({prenom: cour.prof});
  const idLieu = Lieu.findOne({lieu: cour.lieu});
  const idTarif = Tarif.findOne({tarif: cour.duree});

  Promise.all([idProf, idLieu, idTarif]).then(ids => {
    cour.prof = ids[0];
    cour.lieu = ids[1];
    cour.tarif = ids[2];
  }).then(function () {
    Cours.create(cour).then() //creer les familles dans le then
  })
});



const p3 = Tarif.create(tarifs);
p1.then(tarifs => console.log(`${tarifs.length} tarifs créés!`));






//
// Famille
//

var datas = [
  {
      
  }
];

const p1 = Famille.create(datas);
p1.then(familles => console.log(`${familles.length} familles créées!`))



Promise.all([p1])
  .then(() => mongoose.disconnect())
  .catch(err => console.error(err))
;