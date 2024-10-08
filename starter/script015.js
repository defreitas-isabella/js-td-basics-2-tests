/*****************************
 * 15 - Logique booléenne
 */

// Préliminaires
/*
(source : https://openclassrooms.com/fr/courses/2984401-apprenez-a-coder-avec-javascript/3043921-ajoutez-des-conditions)
*/

// 15-1. - LES OPÉRATEURS LOGIQUES

// 1°) L'opérateur logique ET

// 1. Affichez dans la console le résultat de toutes les combinaisons possibles de true ET false

console.log(true && false); // Donnera false car une des conditions est fausse
console.log(true && true); // Donnera true car les deux sont vraies
console.log(false && false); // Donnera false car une des deux est fausses
console.log(true && false); // Donnera true

// 2. Avant de lancer votre navigateur et d'ouvrir la console, notez ici pour chaque ligne le résultat attendu dans un commentaire

// Une condition qui utilise l'opérateur logique ET

// 1. Demandez à l'utilisateur d'entrer un nombre et stockez-le dans une variable nombre
const enter = prompt("Veuillez entrer un nombre")
const convertedNumber = Number(enter);

if (convertedNumber >= 0 && convertedNumber <= 100) {
    console.log("Ce chiffre est compris entre en 0 et 100");
} else {
    console.log("Ce chiffre n'est pas compris entre 0 et 100");
}
// 2. Testez si le nombre est dans l'intervalle [0, 100]. Autrement dit, testez si 0 <= nombre <= 100. Si c'est le cas, affichez "… est compris entre 0 et 100".


// 2°) L'opérateur logique OU

// 1. Affichez dans la console le résultat de toutes les combinaisons possibles de true OU false
console.log(true || false); //true car une des deux propositions est vraie
console.log(true || true); // true
console.log(false || true) // true
console.log(false || true); // false

// 2. Avant de lancer votre navigateur et d'ouvrir la console, notez ici pour chaque ligne le résultat attendu dans un commentaire

// Une condition qui utilise l'opérateur logique OU

// 1. Demandez à l'utilisateur d'entrer un nombre et stockez-le dans une variable nombre
const input = prompt("Veuillez entrer un nombre :");
const conversion = Number(input);
// 2. Testez si le nombre est en dehors de l'intervalle [0, 100]. Si c'est le cas, affichez "… est en dehors de l'intervalle [0, 100]".
if (conversion > 0 || conversion < 100) {
    console.log(`${conversion} est compris entre 0 et 100.`)
} else {
    console.log(`${conversion} n'est pas compris entre 0 et 100`)
}
// 3°) L'opérateur logique NOT

// Affichez dans la console le résultat NOT true puis le résultat de NOT false
console.log(!true); // devient faux
console.log(!false); // devient vrai

// Une condition qui utilise l'opérateur logique NOT

// 1. Demandez à l'utilisateur d'entrer un nombre et stockez-le dans une variable nombre

const chiffre = prompt("Veuillez entrer un message");
const chiffreVersion = Number(chiffre);


// 2. Si ce nombre n'est pas supérieur à 100, affichez "… est inférieur ou égal à 100".
if (!(chiffreVersion > 100)) {
    console.log(`${chiffreVersion} est inférieur ou égal à 100`)
}

// 15-2. - LES ALTERNATIVES MULTIPLES

// 1°) Imbriquer des conditions

// 1. Demandez à l'utilisateur d'entrer un nombre et stockez-le dans une variable nombre
const userNumber = prompt("Veuillez entre un nombre")
const userVersion = Number(userNumber);

// 2. Si ce nombre est positif, affichez "… est positif", sinon (c'est donc qu'il est négatif ou nul), vous allez faire un sous-test :

if (userVersion > 0) {
    console.log(`${userVersion} est positif`);
} else {
    if (userVersion < 0) {
        console.log(`${userVersion} est négatif`);
    } else {
        console.log(`${userVersion} est nul`)
    }
}
// 1°) s'il est négatif, affichez "… est négatif",
// 2°) sinon, affichez "… est nul"

// 2°) Autre écriture pour le même test : le if / elseif / else

// BUT : réaliser le même test que l'exercice précédent mais avec l'écriture if / elseif / else
// 1. Demandez à l'utilisateur d'entrer un nombre et stockez-le dans une variable nombre
const whatever = prompt("Veuillez entre un nombre")
const whateverIdk = Number(whatever);
// 2. Affichez "… est positif", "… est négatif" ou "… est nul" selon le cas
if (whateverIdk > 0) {
    console.log("Ce nombre est positif");
} else if (whateverIdk < 0) {
    console.log("Ce nombre est négatif")
} else {
    console.log("Ce nombre est nul")
}
// Une application

// 1. Stockez le prénom de la personne dans une variable firstName

const firstName = "Marie"
const marieAge = "25"

if (marieAge < 13) {
    console.log(`${firstName} est une fille`);
} else if (marieAge > 13 && marieAge < 20) {
    console.log(`${firstName} est une adolescente`);

} else if (marieAge > 20 && marieAge < 30) {
    console.log(`${firstName} est une jeune femme`);
} else {
    console.log(`${firstName} est une femme`);
}
// 2. Stockez son âge dans une variable age
// 3. a) Si la personne a moins de 13 ans, affichez le message "… est un petit garçon."
// b) Si elle a entre 13 et 20 ans, affichez "… est un adolescent."
// c) Si elle a entre 20 et 30 ans, affichez "… est un jeune homme."
// d) sinon, affichez "… est un homme."

// Autre application

// 1. Demandez à l'utilisateur d'entrer l'information
//  "Quel temps fait-il dehors ? Répondez par un des quatre mots suivants :
//  soleil, vent, pluie ou neige."
// 2. Stockez cette information dans une variable meteo
const meteo = prompt("Quel temps fait-il dehors ? Répondez par un des quatre mots suivants : soleil, vent, pluie ou neige.")
if (meteo === "soleil") {
    console.log("Sortez en t-shirt.");
} else if (meteo === "vent") {
    console.log("Sortez en pull");
} else if (meteo ==="pluie"){
    console.log("Sortez en blouson");
} else if (meteo==="neige"){
    console.log("Restez au chaud à la maison");
} else  {
    console.log("Faites ce que vous voulez");
}
// 3. a) s'il fait soleil, affichez le message "Sortez en t-shirt."
// b) s'il y a du vent, affichez "Sortez en pull."
// c) s'il pleut, affichez "Sortez en blouson."
// d) s'il neige, affichez "Restez au chaud à la maison."
// e) dans tous les autres cas (si la personne n'a
