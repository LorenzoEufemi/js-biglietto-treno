Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va stampato in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Ricordatevi un metodo che abbiamo visto durante le lezioni precedenti.


DATI
chiedere numero chilometri
chiedere l'età dell'utente
prezzo biglietto: 0.21€ al km
sconto 20% < 18 anni
sconto 40% >= 65 anni

ESECUZIONE
calcolare prezzo biglietto intero:0.21€ * km
calcolare sconto 20% : prezzo intero * 20 / 100
calcolare sconto 40% : prezzo intero * 40 /100
calcolare prezzo 20% : prezzo intero - sconto 20%
calcolare prezzo 40% : prezzo intero - sconto 40%
se <18 anni allora prezzo 20%
altrimenti se >= 65 anni allora prezzo 40%
 altrimenti prezzo intero 

 OUTPUT 
 stampa prezzo corretto
  