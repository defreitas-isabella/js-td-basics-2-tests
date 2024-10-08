/*
TESTS - PRÉPA 1

Ecrire un programme JS qui calcule la facture d’un client qui achète N articles vendus au prix x,
sachant qu’on accorde 10% de ristourne si le client achète au moins 20 articles.
*/

// 1. Demandez à l'utilisateur d'entrer le nombre d'articles (N) achetés par le client et le prix unitaire (x) d'un article.

const articles = Number(prompt("Entrez le nombre d'articles achetés"));
const price =Number(prompt("Entrez le prix unitaire d'un article"));
const total = (articles * price);

if (articles >= 20 || articles === 20 ) {
    console.log(total - (total * 0.1));
} else {
    console.log (total)
}
// 2. Calculez le montant total de la facture en multipliant le nombre d'articles par le prix unitaire (N * x).
// 3. Vérifiez si le nombre d'articles est supérieur ou égal à 20.
//    a) Si la condition est vraie, calculez la ristourne de 10% sur le montant total (0.1 * montant total) et soustrayez-la du montant total.
//    b) Si la condition est fausse, laissez le montant total tel quel.
// 4. Affichez le montant total de la facture dans la console.
