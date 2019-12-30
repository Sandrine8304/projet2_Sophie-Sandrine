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


var profsDatas = [
  {
    prenom: 'Lucile',
    email: 'sandrine.auberval@gmail.com',
    photo: ''
      
  },
   {
    prenom: 'Claudia',
    email: 'sandrine.auberval@gmail.com',
    photo: ''
      
  },
   {
    prenom: 'Angelina',
    email: 'sandrine.auberval@gmail.com',
    photo: ''
      
  },
   {
    prenom: 'Cassandre',
    email: 'sandrine.auberval@gmail.com',
    photo: ''
      
  },
   {
    prenom: 'Marie',
    email: 'sandrine.auberval@gmail.com',
    photo: ''
      
  }
];

const p1 = Prof.create(profsDatas);
p1.then(profs => console.log(`${profs.length} profs créés!`));



//
// Lieu
//

var sallesDatas = [
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
  },
  {
    nom: 'Espace 110',
    adresse: 'Avenue du Parc'  
  }
];

const p2 = Lieu.create(sallesDatas);
p2.then(lieux => console.log(`${lieux.length} salles créés!`));


//
// Tarif
//

var tarifsDatas = [
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

const p3 = Tarif.create(tarifsDatas);
p3.then(tarifs => console.log(`${tarifs.length} tarifs créés!`));

Promise.all([p1, p2, p3]).then(p1p2p3 => {
    console.log('Profs, Lieux et Tarifs ont été créés');
    Promise.all([p4]).then(p4promise => {
        console.log('Les cours ont été créés');
        Promise.all([p5]).then(p5promise => {
          console.log('Les familles ont été créées');
        }).catch(err => console.error(err));
    }).catch(err => console.error(err));
}).catch(err => console.error(err))   
;

//
// Cours
//

var coursDatas = [
  {
    nom: 'Eveil',
    prof: 'Lucile',
    lieu: 'Salle des Associations du Centre Ville',
    jour: 'Samedi',
    horaire: '10H30-11H30',
    duree: '1H'
  },
  {
    nom: 'Afrovibe',
    prof: 'Angelina',
    lieu: 'Espace 110',
    jour: 'Jeudi',
    horaire: '20H00-22H00',
    duree: '2H'
  },
  {
    nom: 'Ados',
    prof: 'Marie',
    lieu: 'Espace 110',
    jour: 'Mercredi',
    horaire: '18H00-19H30',
    duree: '1H30'
  },
  {
    nom: 'Adultes',
    prof: 'Claudia',
    lieu: 'Espace 110',
    jour: 'Jeudi',
    horaire: '20H00-22H00',
    duree: '2H'
  },
  {
    nom: '1er niveau',
    prof: 'Cassandre',
    lieu: 'Espace 110',
    jour: 'Jeudi',
    horaire: '20H00-22H00',
    duree: '2H'
  },
  {
    nom: '2e niveau A',
    prof: 'Cassandre', 
    lieu: 'Espace 110',
    jour: 'Jeudi',
    horaire: '20H00-22H00',
    duree: '2H'
  },
  {
    nom: '3e niveau',
    prof: 'Cassandre', 
    lieu: 'Espace 110',
    jour: 'Jeudi',
    horaire: '20H00-22H00',
    duree: '2H'
  }
   
];

const p4 = coursDatas.forEach(cour => {
  const idProf = Prof.findOne({prenom: cour.prof});
  const idLieu = Lieu.findOne({nom: cour.lieu});
  const idTarif = Tarif.findOne({duree: cour.duree}); //tarif ou duree à indiquer ; idem dans les datas cours???

  Promise.all([idProf, idLieu, idTarif]).then(ids => {
    cour.prof = ids[0];
    cour.lieu = ids[1];
    cour.duree = ids[2];
  }).then(function () { 
    Cours.create(cour).then(function (cour) { 
      console.log(`${cour}`);
    }).catch(err => console.error(err)); 
  }).catch(err => console.error(err));
}); 


//
// Famille
//

var famillesDatas = [
  { 
    username: 'FERREIRA',
    password: '',
    modifPwd: true,
    nom: 'DA SILVA',
    adresse: {
      rue: '42 av des Pyrenées',
      codePostal: '77270',
      ville: 'Villeparisis'
    },
    telephone1: {
      numero: '0605040302',
      envoiSMS: true
    },
    telephone2: {
      numero: '0615243342', 
      envoiSMS: false
    },
    email: 'sophie.pirodon@gmail.com',
    adherent: [
      {
      prenom: 'ELINE', 
      nom: 'FERREIRA', 
      dateNaissance: 2011-12-14, 
      photoAdherent: '',
      cours1: '2e niveau A',
      cours2: '',
      cours3: ''
      },
      {
      prenom: 'LEANNE', 
      nom: 'FERREIRA',
      dateNaissance: 2008-09-30, 
      photoAdherent:'',
      cours1: '3e niveau',
      cours2: '',
      cours3: ''
      },
      {
      prenom: 'EMILIE', 
      nom: 'FERREIRA', 
      dateNaissance: 1980-04-15, 
      photoAdherent:'',
      cours1: 'Adultes',
      cours2: 'Afrovibe',
      cours3: '' 
      }
    ]
  },
    
  {
    username: 'MARTIN',
    password: '',
    modifPwd: true,
    nom: 'MARTIN',
    adresse: {
      rue: '12 RUE ISAAC NEWTON',
      codePostal: '93290',
      ville: 'Tremblay en France'
    },
    telephone1: {
      numero: '0605040306',
      envoiSMS: true
    },
    telephone2: {
      numero: '0615243346',
      envoiSMS: false
    },
    email: 'sophie.pirodon@gmail.com',
    adherent: [
      {
      prenom: 'CAMILLE', 
      nom: 'MARTIN', 
      dateNaissance: 2015-03-13,
      photoAdherent:'',
      cours1: 'Eveil',
      cours2: '',
      cours3: ''      
      }
    ]
  },
    
  { 
    username: 'DUPOND',
    password: '',
    modifPwd: true,
    nom: 'DUPOND',
    adresse: {
      rue: '9 Avenue des Lilas',
      codePostal: '93290',
      ville: 'Tremblay en France'
      },
    telephone1: {
      numero: '0605040307',
      envoiSMS: true
    },
    telephone2: {
      numero:'0615243347', 
      envoiSMS: false
      },
    email: 'sophie.pirodon@gmail.com',
    adherent: [
      {
      prenom: 'Marion',
      nom: 'DUPOND', 
      dateNaissance: 2002-07-19, 
      photoAdherent: '',
      cours1: 'Ados',
      cours2: '',
      cours3: ''
      },
      {
      prenom: 'ROXANE',
      nom: 'DUPOND', 
      dateNaissance: 1999-01-04, 
      photoAdherent:'',
      cours1: 'Afrovibe',
      cours2: '',
      cours3: ''
      },
      {
      prenom: 'Celine', 
      nom: 'DUPOND', 
      dateNaissance: 1970-11-20, 
      photoAdherent:'',
      cours1: 'Afrovibe',
      cours2: '',
      cours3: '' 
      }
    ]
  },
    
  {
    username: 'JAOUANI',
    password: '',
    modifPwd: true,
    nom: 'JAOUANI',
    adresse: {
      rue: '52 ALLEE JOHANNES KEPLER',
      codePostal: '93290',
      ville: 'Tremblay en France'
      },
    telephone1: {
      numero: '0605040310',
      envoiSMS: true
    },
    telephone2: {
      numero:'0615243350',
      envoiSMS: false
    },
    email: 'sophie.pirodon@gmail.com',
    adherent: [
      {
      prenom: 'ALEXIA', 
      nom: 'JAOUANI', 
      dateNaissance: 2003-01-22, 
      photoAdherent:'',
      cours1: 'Ados',
      cours2: '',
      cours3: '' 
      }
    ]
  },

  { 
    username: 'SUNDI',
    password: '',
    modifPwd: true,
    nom: 'SUNDI',
    adresse: {
      rue: '25 av du Pré Gobelin',
      codePostal: '93290',
      ville: 'Tremblay en France'
      },
    telephone1: {
      numero: '0605040311',
      envoiSMS: true
      },
    telephone2: {
      numero: '0615243351', 
      envoiSMS: false
      },
    email: 'sophie.pirodon@gmail.com',
    adherent: [
      {
      prenom: 'LANA',
      nom: 'SUNDI',
      dateNaissance: 2010-09-28,
      photoAdherent: '',
      cours1: '2e niveau A',
      cours2: '',
      cours3: '' 
      },
      {
      prenom: 'LYA', 
      nom: 'SUNDI', 
      dateNaissance: 2014-01-19,
      photoAdherent: '', 
      cours1: '1er niveau',
      cours2: '',
      cours3: '' 
      }
    ]
  }
];
  
const p5 = famillesDatas.forEach(famille => {
  for (let i=0 ; i<famille.adherent.length ; i++) {
    const cours1Id = Cours.findOne({nom: famille.adherent[i].cours1});
    const cours2Id = Cours.findOne({nom: famille.adherent[i].cours2});
    const cours3Id = Cours.findOne({nom: famille.adherent[i].cours3});
      
    Promise.all([cours1Id, cours2Id, cours3Id]).then(ids => {
      famille.adherent[i].cours1 = ids[0];
      famille.adherent[i].cours2 = ids[1];
      famille.adherent[i].cours3 = ids[2];   
    }).then(function () { 
      Famille.create(famille).then(function (famille) { 
        console.log(`${famille}`);
      }).catch(err => console.error(err));
    }).catch(err => console.error(err));
  } 
});

