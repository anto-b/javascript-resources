// Strutture di controllo (decisionale)

/* 
Es. 1
Si vuole permettere ad un utente di proseguire, solo e soltanto se
abbonato a premium
*/

const nomeUtente = "Roberto";
const cognomeUtente = "Gialli";
let premium = true; // utente non abbonato
let eta = 50;

/*  Operatori di confronto

==: operatore identità (semplice)
===:  operatore identità (stretta)
>
>=
<
<=

*/

if (premium === true) {

    console.log("Complimenti " + nomeUtente + ", puoi proseguire");

} else {

    console.log("Mi dispiace " + nomeUtente + ", non puoi proseguire");

}

/* 
Es. 2
Stampare messaggio di auguri a seconda dell'età
*/

if ( eta < 18) {

    console.log("Buon compleanno, sei molto giovane");

} else if ( eta <= 50 ) {

    console.log("Buon compleanno, sei ancora giovane");

} else {
    console.log("Buon compleanno, mi dispiace stai diventando anziano");
}


