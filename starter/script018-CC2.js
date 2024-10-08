/*****************************
 * CODING CHALLENGE 2
 */
const johnFirstScore =89;
const johnSecondScore = 120;
const johnThirdScore = 102;
const johnTeamScore = (johnFirstScore + johnSecondScore + johnThirdScore) / 3;

const mikeFirstScore=116;
const mikeSecondScore=94;
const mikeThirdScore=123;

const mikeTeamScore =(mikeFirstScore + mikeSecondScore + mikeThirdScore)/3;

if (johnTeamScore >= 110) {
    console.log(`L'équipe de John a gagné avec un résultat en moyenne de ${johnTeamScore}`);
} else  {
    console.log(`L'équipe de John a perdu avec un résulat en moyenne de ${johnTeamScore}!`);
}

if (mikeTeamScore >= 110) {
    console.log(`L'équipe de Mike a gagné avec un résultat en moyenne de ${mikeTeamScore}!`);
} else {
    console.log(`L'équipe de Mike a perdu avec un résulat en moyenne de ${mikeTeamScore}`);
}

const maryFirstScore = 97;
const marySecondScore = 134;
const maryThirdScore = 105;

const maryTeam = (maryFirstScore + marySecondScore + maryThirdScore) / 3;

if (maryTeam >= 112 || maryTeam === 112) {
    console.log(`La team de Mary a gagné avec un résultat de ${maryTeam}`);
} else {
    console.log(`La team de mary a perdu avec un résultat de ${maryTeam}`)
}
/*
John et Mike jouent tous les deux au basket dans différentes équipes.
Lors des trois derniers jeux, l'équipe de John a marqué 89, 120 et 103 points,
alors que l'équipe de Mike a marqué 116, 94 et 123 points.

1. Calculez le score moyen de chaque équipe.
2. Décidez quelle équipe gagne en moyenne (celle qui a le plus haut score moyen)
   et imprimez l'équipe gagnante dans la console avec son score moyen.
3. Changez ensuite les scores pour montrer différents gagnants.
   N'oubliez pas de prendre en compte qu'il pourrait y avoir un ex æquo (le même score moyen).

4. BONUS : Mary joue aussi au basket, et son équipe a marqué 97, 134 et 105 points.
   Comme avant, imprimez le gagnant en moyenne dans la console.
   INDICE : vous allez avoir besoin de l'opérateur && pour prendre la décision.
5. Changez là aussi les scores pour générer différents gagnants,
   en gardant toujours en tête qu'il pourrait y avoir des ex æquos.



BONNE CHANCE 😀
*/

// sans bonus

// 1. Calculez le score moyen de chaque équipe.
// 2. Décidez quelle équipe gagne en moyenne (celle qui a le plus haut score moyen)
//    et imprimez l'équipe gagnante dans la console avec son score moyen.
// 3. Changez ensuite les scores pour montrer différents gagnants.
//    N'oubliez pas de prendre en compte qu'il pourrait y avoir un ex æquo (le même score moyen).

// avec bonus

// 4. BONUS : Mary joue aussi au basket, et son équipe a marqué 97, 134 et 105 points.
//    Comme avant, imprimez le gagnant en moyenne dans la console.
//    INDICE : vous allez avoir besoin de l'opérateur && pour prendre la décision.
// 5. Changez là aussi les scores pour générer différents gagnants,
//    en gardant toujours en tête qu'il pourrait y avoir des ex æquos.
