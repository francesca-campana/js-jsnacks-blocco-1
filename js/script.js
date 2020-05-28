//L’utente inserisce due numeri in successione, con due
//prompt. Il software stampa il maggiore.

// var numeroUno = parseInt(prompt('Inserisci un numero'));
// var numeroDue = parseInt(prompt('Inserisci un numero'));
// console.log(numeroUno);
// console.log(numeroDue);
// if (numeroUno > numeroDue ) {
//   console.log('Il numero maggiore è ' + numeroUno);
// }else if (numeroUno < numeroDue) {
//   console.log('Il numero maggiore è ' + numeroDue);
//
// }else {
//   console.log('I numeri sono pari');
// }




//*********************************//*********************************//
// var parolaUno = prompt('Inserisci una parola');
// var parolaDue = prompt('Inserisci una parola');
//
// console.log(parolaUno);
// console.log(parolaDue);
//
//
//
// if (parolaUno.length < parolaDue.length) {
//   console.log(parolaUno + ' - ' +  parolaDue);
//
// } else if (parolaUno.length > parolaDue.length) {
//   console.log(parolaDue + ' - ' + parolaUno);
// }else {
//   console.log('le parole sono uguali');
// }

//*********************************//*********************************//

// Il software deve chiedere per 5 volte all’utente di inserire un numero di.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.
// var numeroUtente = parseInt(prompt('Inserisci un numero'));
// console.log(numeroUtente);

//Con Metodo For

// var somma = 0;
// for (var i = 0; i < 5; i++) {
//   var numeroUtente = parseInt(prompt('Inserisci un numero di 4 cifre'));
//   somma += numeroUtente;
//
// }
//console.log(somma);

//Con Metodo While

// var somma = 0;
// var i = 0;
// while (i < 5) {
//   var numeroUtente = parseInt(prompt('Inserisci un numero di 4 cifre'));
//    somma += numeroUtente;
//
//
//   i++
// }
// console.log(somma);


//*********************************//*********************************//


// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

// var listaInvitati = ['Hemingway', 'Pound', 'Duncan', 'Fitzgerald'];
// var utente = prompt('Qual è il suo nome?');
// // console.log(listaInvitati);
// // console.log(utente);
// var messaggio = 'Non ha accesso, mi dispiace.';
//
// for (var i = 0; i < listaInvitati.length; i++) {
//   if (utente === listaInvitati[i]) {
//     console.log(listaInvitati[i]);
//     messaggio = 'Prego, Lei è dei nostri!';
//   }
//
// }
// console.log(messaggio);

//++++++++++++++++++++---------------------------------++++++++++++++++++++++++

// Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre
// che compongono il numero.

// var numero = prompt('Digita un numero di 4 cifre');
// while (numero.length != 4) {
//     numero = prompt('Digita un numero di 4 cifre')
//
// }
// numeroSplit = numero.split('');
// // console.log(numeroSplit);
//
// somma = 0;
// for (var i = 0; i < numeroSplit.length; i++) {
// // console.log(numeroIntero.length);
//   somma+= parseInt(numeroSplit[i]);
// }
// console.log(somma);
