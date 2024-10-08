/*
TESTS - PRÉPA 4 : Ristourne

Un magasin fait 10% de réduction pour des achats dont le montant est supérieur à 50€
s’il y a au moins 3 enfants dans la famille ou si le montant des achats est supérieur à 125€.
Sinon, il fait 5% de réduction.

Attention, les ristournes ne sont pas cumulables.

Écrire un programme JS qui affiche le montant de la réduction accordée
sur base de la situation de l’acheteur et du montant de ses achats.

Valeurs de test :
- achat de 50 euros et moins de 3 enfants : 5% = 2.5€
- achat de 50 euros et 3 enfants : 5% = 2.5€
- achat de 60 euros et moins de 3 enfants : 5 % = 3€
- achat de 60 euros et 3 enfants : 10% = 6€
- achat de 125€ et moins de 3 enfants : 5 % = 6.25€
- achat de 125€ et 3 enfants : 10% = 12.5€
- achat de 126€ et moins de 3 enfants : 10 % = 12.6€
- achat de 126€ et 3 enfants : 10 % = 12.6€
*/

// 1. Demandez à l'utilisateur d'entrer le montant des achats.
const montant = Number(prompt("Veuillez entrer le montant de vos achats : "));
const kids = Number(prompt("Veuillez entrer le nombre d'enfants dans la famille "));
let reduction = 0;
// 2. Demandez à l'utilisateur d'entrer le nombre d'enfants dans la famille.
// 3. Initialisez une variable de réduction (discount) à 0.

if (montant > 50) {
    reduction = montant * 0.1;
    console.log(`Le montant de vos achats est supérieur à 50 : ${montant}€`);
} else {
    reduction = montant * 0.05;
    console.log(`Le montant de vos achats est inférieur à 50 : ${montant}€`);
}

if (kids >= 3) {
    console.log(`Vous possédez 3 enfants voire plus : ${kids}`);
} else  {
    console.log(`Vous possédez 3 enfants voire moins : ${kids}`);
}
// 4. Vérifiez si le montant des achats est supérieur à 50€.
// 5. Vérifiez si le nombre d'enfants est supérieur ou égal à 3.
// 6. Si l'une des conditions de l'étape 4 ou de l'étape 5 est vraie, attribuez 10% de réduction (discount = montant des achats * 0.1).
// 7. Sinon, attribuez 5% de réduction (discount = montant des achats * 0.05).
// 8. Affichez le montant de la réduction (discount) en euros dans la console.
