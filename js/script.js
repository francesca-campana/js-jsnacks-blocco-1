//L’utente inserisce due numeri in successione, con due
//prompt. Il software stampa il maggiore.

// var numeroUno = parseInt(prompt('Inserisci un primo numero'));
// while (isNaN(numeroUno)) { //Fintanto che numeroUno non è un numero msg di errore
//   numeroUno =  parseInt(prompt('Errore, inserisci primo numero'));
//   console.log(numeroUno);
// }
//
// var numeroDue = parseInt(prompt('Inserisci un secondo numero'));
// while (isNaN(numeroDue)) { //Fintanto che numeroDue non è un numero msg di errore
//   numeroDue =  parseInt(prompt('Errore, inserisci secondo numero'));
//   console.log(numeroDue);
// }
// if (numeroUno > numeroDue ) { //Se il numeroUno è maggiore del numeroDue stampo numeroUno
//   console.log('Il numero maggiore è ' + numeroUno);
// }else if (numeroUno < numeroDue) { //Se il numeroUno è minore del numeroDue stampo numeroDue
//   console.log('Il numero maggiore è ' + numeroDue);
//
// }else {
//   console.log('I numeri sono pari'); //Altrimenti i numri sono pari
// }


//*********************************//*********************************//

// L’utente inserisce due parole in successione, con due
// prompt. Il software stampa prima la parola più corta, poi la
// parola più lunga.

// var parolaUno = prompt('Inserisci la prima parola'); //Chiedo la prima parola
//
// while (!isNaN(parolaUno)) { //Fintanto che la parolaUno è un numero si chiederà di riscrivere la prima parola
//   parolaUno = prompt('Errore, Inserisci la prima parola');
//
// }
// var parolaDue = prompt('Inserisci la seconda parola'); //Fintanto che la parolaDue è un numero si chiederà di riscrivere la seconda parola
// while (!isNaN(parolaDue)) {
//   parolaDue = prompt('Errore, Inserisci la seconda parola');
//
// }
// if (parolaUno.length < parolaDue.length) { //Se la parolaUno è minore della parolaDue stamperà la parolaUno
//   console.log(parolaUno + ' - ' +  parolaDue);
//
// } else if (parolaUno.length > parolaDue.length) { //Se la parolaUno è maggiore della parolaDue stamperà la parolaDue
//   console.log(parolaDue + ' - ' + parolaUno);
// }else {
//   console.log('le parole sono uguali'); //Altrimenti la lunghezza delle parole sarà pari
// }

//*********************************//*********************************//

// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

//Con Metodo For
// var numeroUtente = parseInt(prompt('Inserisci un numero')); //Chiedo di inserire un numero
// console.log(numeroUtente);
//
// while (isNaN(numeroUtente)) { //Fintanto che il dato non è un numero
//   numeroUtente = parseInt(prompt('Errore, Inserisci un numero')); // Richiederò di inserire il numero
// }
// var somma = 0;
// for (var i = 0; i < 5; i++) { //Attraverso il ciclo chiederà di inserire il numero per 5 volte
//    numeroUtente = parseInt(prompt('Inserisci un numero'));
//   somma += numeroUtente; //facendo la somma dei numeri inseriti correttamente per le 5 volte richieste
//
// }
// console.log(somma);

//Con Metodo do While

//Dichiaro le mie variabili
// var numeroUtente = parseInt(prompt('Inserisci un numero'));
// var somma = 0;
// var i = 0;
//
// do {
//   numeroUtente = parseInt(prompt(' Inserisci un numero'));
//   somma += numeroUtente;
//   console.log(somma);
//   i++
//
// }while (i < 5)  {
//
// }
//
// console.log( 'La somma dei 5 numeri inseriti è ' + somma);


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

var numero = prompt('Digita un numero di 4 cifre');
numero = numero.trim();

while ((numero.length !== 4) || isNaN(numero)) {
    numero = prompt('Digita un numero di 4 cifre');
    numero = numero.trim();

}
// numeroSplit = numero.split(''); //Posso evitare lo split e iterare direttamente la stringa
// console.log(numeroSplit);

somma = 0;
for (var i = 0; i < numero.length; i++) {
// console.log(numeroIntero.length);
  somma+= parseInt(numero[i]);
}
console.log(somma);
