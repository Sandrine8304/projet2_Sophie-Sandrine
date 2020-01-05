const adherents = require('families.json');


// const familles = {};

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

  //console.log(JSON.stringify(Object.values(familles), null, 4));
//node createfamilies.js >families.txt (dans terminal)
  
const familles = {

  {"_id":{"$oid":"5e10af8fc61d361c1f0cc1af"},"username":"FERREIRA","password":"fakepwd","modifPwd":true,"nom":"DA SILVA","adresse":{"rue":"42 av des Pyrenées","codePostal":{"$numberInt":"77270"},"ville":"Villeparisis"},"telephone1":{"numero":"0605040302","envoiSMS":true},"telephone2":{"numero":"0615243342","envoiSMS":false},"email":"sophie.pirodon@gmail.com","adherent":[{"_id":{"$oid":"5e10af8fc61d361c1f0cc1b2"},"prenom":"ELINE","nom":"FERREIRA","dateNaissance":{"$date":{"$numberLong":"1985"}},"photoAdherent":"","cours1":{"$oid":"5e10af7a823dd61bf62a3be7"},"cours2":null,"cours3":null},{"_id":{"$oid":"5e10af8fc61d361c1f0cc1b1"},"prenom":"LEANNE","nom":"FERREIRA","dateNaissance":{"$date":{"$numberLong":"1969"}},"photoAdherent":"","cours1":{"$oid":"5e10af7a823dd61bf62a3be9"},"cours2":null,"cours3":null},{"_id":{"$oid":"5e10af8fc61d361c1f0cc1b0"},"prenom":"EMILIE","nom":"FERREIRA","dateNaissance":{"$date":{"$numberLong":"1961"}},"photoAdherent":"","cours1":{"$oid":"5e10af7a823dd61bf62a3beb"},"cours2":{"$oid":"5e10af7a823dd61bf62a3be8"},"cours3":null}],"createdAt":{"$date":{"$numberLong":"1578151823353"}},"updatedAt":{"$date":{"$numberLong":"1578151823353"}},"__v":{"$numberInt":"0"}},
  {"_id":{"$oid":"5e10af90c61d361c1f0cc1b9"},"username":"JAOUANI","password":"fakepwd","modifPwd":true,"nom":"JAOUANI","adresse":{"rue":"52 ALLEE JOHANNES KEPLER","codePostal":{"$numberInt":"93290"},"ville":"Tremblay en France"},"telephone1":{"numero":"0605040310","envoiSMS":true},"telephone2":{"numero":"0615243350","envoiSMS":false},"email":"sophie.pirodon@gmail.com","adherent":[{"_id":{"$oid":"5e10af90c61d361c1f0cc1ba"},"prenom":"ALEXIA","nom":"JAOUANI","dateNaissance":{"$date":{"$numberLong":"1980"}},"photoAdherent":"","cours1":{"$oid":"5e10af7a823dd61bf62a3bea"},"cours2":null,"cours3":null}],"createdAt":{"$date":{"$numberLong":"1578151824234"}},"updatedAt":{"$date":{"$numberLong":"1578151824234"}},"__v":{"$numberInt":"0"}},
  {"_id":{"$oid":"5e10af90c61d361c1f0cc1c0"},"username":"MARTIN","password":"fakepwd","modifPwd":true,"nom":"MARTIN","adresse":{"rue":"12 RUE ISAAC NEWTON","codePostal":{"$numberInt":"93290"},"ville":"Tremblay en France"},"telephone1":{"numero":"0605040306","envoiSMS":true},"telephone2":{"numero":"0615243346","envoiSMS":false},"email":"sophie.pirodon@gmail.com","adherent":[{"_id":{"$oid":"5e10af90c61d361c1f0cc1c1"},"prenom":"CAMILLE","nom":"MARTIN","dateNaissance":{"$date":{"$numberLong":"1999"}},"photoAdherent":"","cours1":{"$oid":"5e10af7a823dd61bf62a3be6"},"cours2":null,"cours3":null}],"createdAt":{"$date":{"$numberLong":"1578151824607"}},"updatedAt":{"$date":{"$numberLong":"1578151824607"}},"__v":{"$numberInt":"0"}},
  {"_id":{"$oid":"5e10af90c61d361c1f0cc1c6"},"username":"DUPOND","password":"fakepwd","modifPwd":true,"nom":"DUPOND","adresse":{"rue":"9 Avenue des Lilas","codePostal":{"$numberInt":"93290"},"ville":"Tremblay en France"},"telephone1":{"numero":"0605040307","envoiSMS":true},"telephone2":{"numero":"0615243347","envoiSMS":false},"email":"sophie.pirodon@gmail.com","adherent":[{"_id":{"$oid":"5e10af90c61d361c1f0cc1c9"},"prenom":"Marion","nom":"DUPOND","dateNaissance":{"$date":{"$numberLong":"1976"}},"photoAdherent":"","cours1":{"$oid":"5e10af7a823dd61bf62a3bea"},"cours2":null,"cours3":null},{"_id":{"$oid":"5e10af90c61d361c1f0cc1c8"},"prenom":"ROXANE","nom":"DUPOND","dateNaissance":{"$date":{"$numberLong":"1994"}},"photoAdherent":"","cours1":{"$oid":"5e10af7a823dd61bf62a3be8"},"cours2":null,"cours3":null},{"_id":{"$oid":"5e10af90c61d361c1f0cc1c7"},"prenom":"Celine","nom":"DUPOND","dateNaissance":{"$date":{"$numberLong":"1939"}},"photoAdherent":"","cours1":{"$oid":"5e10af7a823dd61bf62a3be8"},"cours2":null,"cours3":null}],"createdAt":{"$date":{"$numberLong":"1578151824996"}},"updatedAt":{"$date":{"$numberLong":"1578151824996"}},"__v":{"$numberInt":"0"}},
  {"_id":{"$oid":"5e10af91c61d361c1f0cc1ca"},"username":"SUNDI","password":"fakepwd","modifPwd":true,"nom":"SUNDI","adresse":{"rue":"25 av du Pré Gobelin","codePostal":{"$numberInt":"93290"},"ville":"Tremblay en France"},"telephone1":{"numero":"0605040311","envoiSMS":true},"telephone2":{"numero":"0615243351","envoiSMS":false},"email":"sophie.pirodon@gmail.com","adherent":[{"_id":{"$oid":"5e10af91c61d361c1f0cc1cc"},"prenom":"LANA","nom":"SUNDI","dateNaissance":{"$date":{"$numberLong":"1973"}},"photoAdherent":"","cours1":{"$oid":"5e10af7a823dd61bf62a3be7"},"cours2":null,"cours3":null},{"_id":{"$oid":"5e10af91c61d361c1f0cc1cb"},"prenom":"LYA","nom":"SUNDI","dateNaissance":{"$date":{"$numberLong":"1994"}},"photoAdherent":"","cours1":{"$oid":"5e10af7a823dd61bf62a3bec"},"cours2":null,"cours3":null}],"createdAt":{"$date":{"$numberLong":"1578151825006"}},"updatedAt":{"$date":{"$numberLong":"1578151825006"}},"__v":{"$numberInt":"0"}}

};

console.log(JSON.stringify(Object.values(familles), null, 4));