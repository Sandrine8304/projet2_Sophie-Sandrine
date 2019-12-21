const adherents = require('adherents.json');


const familles = {};

/*
{
  'dasilva': {
    nom:
    adherents: []
  },
  'dupont': {
    ..
  }
}
*/

// Pour chacun des adherentsdasilva1
  // si sa famille n'existe pas encore dans `familles` : adherent.famille in familles
    // alors on cree la famille

  // on pousse l'adherent dans la famille

  console.log(JSON.stringify(Object.values(familles), null, 4));
//node createfamilies.js >families.txt (dans terminal)
  