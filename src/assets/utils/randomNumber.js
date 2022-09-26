// Fonction permettant de générer un nombre aléatoire
function genererNombreEntier(max) {
  return Math.floor(Math.random() * Math.floor(max));
};

export default genererNombreEntier;