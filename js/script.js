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

// var numero = prompt('Digita un numero di 4 cifre');
// numero = numero.trim();
//
// while ((numero.length !== 4) || isNaN(numero)) {
//     numero = prompt('Digita un numero di 4 cifre');
//     numero = numero.trim();
//
// }
// // numeroSplit = numero.split(''); //Posso evitare lo split e iterare direttamente la stringa
// // console.log(numeroSplit);
//
// somma = 0;
// for (var i = 0; i < numero.length; i++) {
// // console.log(numeroIntero.length);
//   somma+= parseInt(numero[i]);
// }
// console.log(somma);

//*********************************//*********************************//
// Fai inserire un numero, che chiameremo N, all’utente.
//Genera N array,ognuno formato da 10 numeri casuali tra 1 e 100.
//  Ogni volta che ne crei uno, stampalo a schermo.

// var numeroUtente = parseInt(prompt('inserisci un numero per popolare un array'));
// for (var i = 0; i < numeroUtente; i++) {
//   var arrayGenerato = generatoreNArray();
//   console.log(arrayGenerato);
// }
//
//
// function generatoreNArray(){
// var listaarray = [];
//   for (var i = 0; i < 10; i++) {
//
//   var numeroGenerato = Math.floor(Math.random() * 100) + 1;
//   listaarray.push(numeroGenerato);
//
//   }
// return listaarray;
// }
//*********************************//*********************************//
// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e
// una lista di cognomi, Gatsby vuole generare una falsa lista di invitati.
// var listaNomifalso = 4;
//
//
// // Lista nomi
// var nomi = ['Francesca','Gilda', 'Bruna', 'Maria'];
//
// // Lista cognomi
// var cognomi = ['Campana','Benda','Lamalfa','Deangelis'];
//
// //Lista nuovaListaFalsa
// var nuovaListaFalsa = [];
//
// //Genero una falsa lista di invitati
// for (var i = 0; i < listaNomifalso; i++) {
//   //elemento preso a caso dalla lista dei nomi
//   var indiceNomiRandom = Math.floor(Math.random() * nomi.length);
//   var nomiRandom = nomi[indiceNomiRandom];
//
//   //elemento preso a caso dalla lista dei cognomi
//   var indiceCognomiRandom = Math.floor(Math.random() * cognomi.length);
//   var cognomiRandom = cognomi[indiceCognomiRandom];
//
//   //Creo un nome falso  concatenando  un 'nomeRandom' ad un'cognomeRandom
//   var nomeFalso = nomiRandom + '-' + cognomiRandom;
//
//   nuovaListaFalsa.push(nomeFalso);
//
// }
//
// //Stampo la nuova falsa lista
// console.log(nuovaListaFalsa);

//-------------//

//
//
// // Crea due array che hanno un numero di elementi diversi.
// // Aggiungi elementi casuali all’array che ha meno elementi,
// // fino a quando ne avrà tanti quanti l’altro.
//
// //Creo due array che abbiano all'interno un numero di elementi differenti
// var primoArray = [1, 2, 3, 4, 5, 50, 90, 'giovanni', 1, 2, 3, 4, 5, 6, 7, 8, 9];
// var secondoArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var primoArrayLunghezza = primoArray.length;
// var secondoArrayLunghezza = secondoArray.length;
//
// // var arraynuovoTest = riempiArray(secondoArray, 20);
// // console.log(arraynuovoTest);
//
//
//
// if (primoArrayLunghezza < secondoArrayLunghezza) {
//   primoArray = riempiArray(primoArray, secondoArrayLunghezza);
//   console.log(primoArray);
// } else if (primoArrayLunghezza > secondoArrayLunghezza) {
//   secondoArray = riempiArray(secondoArray, primoArrayLunghezza);
//   console.log(secondoArray);
// }else {
//   console.log ('Sono di uguale lunghrezza');
// }
// //Aggiungere elementi casuali ad un array
// //creerò una funzione che mi permetta di generare dei numeri casuali ed inserirli
// //in un 'arrayDaRiempire' fintanto che si raggiunga la 'lunghezzaArray'
//
// function riempiArray (arrayDaRiempire, lunghezzaArray) {
//
//   while (arrayDaRiempire.length < lunghezzaArray) {
//     var numeriCasuali = Math.floor(Math.random() * 100) + 1;
//     arrayDaRiempire.push(numeriCasuali);
//     console.log(arrayDaRiempire);
//   }
//   return arrayDaRiempire;
//
// }

//------------------------------//
// SNACK N° 9
// Crea due tag div con due id diversi: un div avrà
// il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso
// i numeri dispari e in verde i numeri pari.

//Creo un Array di numeri
// var numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var numeriElement = numeri[i];
//
// for (var i = 0; i < numeri.length; i++) {
//   if (numeri[i] % 2 === 0) {
//   document.getElementById('rosso').innerHTML += numeri[i] + '<br>';
//   }else {
//   document.getElementById('verde').innerHTML += numeri[i] + '<br>';
//   }
// }

//------------------------------//
// L’utente ha a disposizione un input in cui inserire un nome di un giocatore
// e una select tramite la quale puoi scegliere se il giocatore va inserito tra
// i titolari o tra le riserve.
// Quando si clicca sul button “Aggiungi” il nome viene aggiunto nella lista dei
// titolari se l’utente ha scelto titolari, altrimenti tra le riserve.

// $(document).ready(function (){
//   $('.btn-aggiungi').click(
//     function () {
//       var nomeGiocatore = $ ('#nome-aggiunto').val();
//       // console.log(nomeGiocatore);
//       var titolariORiserve = $ ('#titolari-riserve').val();
//       // console.log(titolariORiserve);
//       var nomeAppendere = '<li>' + nomeGiocatore + '<button class="btn-elimina">Elimina</button>' + '</li>';
//       // console.log(nomeAppendere);
//
//       if (titolariORiserve === 'titolare') {
//         $('#lista-titolare ul').append(nomeAppendere);
//       }else if (titolariORiserve === 'riserva') {
//         $('#lista-riserve ul').append(nomeAppendere);
//       }
//
//     });
//
//     $(document).on('click', '.btn-elimina',
//     function (){
//       $(this).parent().remove();
//     }
//     );
//
//   }
// );
// --------------------//
// Creare 10 quadrati vuoti.
// Con jQuery, dentro ognuno scrivere un numero
// random

// $(document).ready(function(){
//
//   var numeroQuadrati = 10;
//   for (var i = 0; i < numeroQuadrati; i++) {
//   $('.wrapper').append('<div class="box"></div>');
//   var index = numeroQuadrati[i];
//   }
//
//   $('.box').each(
//     function(index){
//     // $(this).text(getRndInteger(1, 100));
//
//       if (index % 2 === 0) {
//         $(this).addClass('red');
//         // console.log($('.box').addClass('red'));
//
//       }else{
//         $(this).addClass('green');
//         // console.log($('.box').addClass('green'));
//       }
//
//     });
//   $(document).on('click', '.box',
//     function(){
//       $(this).text(getRndInteger(1, 100));
//
//
//     });
//
// });
// function getRndInteger(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) ) + min;
}
