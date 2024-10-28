// input
const km = prompt("Inserire numero chilometri da percorrere")
const age = prompt("Inserire età passeggero")

// esecuzione
const kmUser = parseInt(km);
const ageUser = parseInt(age);

const fullPrice = kmUser * 0.21;
console.log(fullPrice);


const price20 = fullPrice - (fullPrice * 0.2); // 0.2 = 20%
const price40 = fullPrice - (fullPrice * 0.4); // 0.4 = 40%
console.log(price20)
console.log(price40)

let result;

if (ageUser < 18) {
    result = `Il prezzo totale del viaggio è ${price20.toFixed(2)}`;
} else if (ageUser >= 65) {
    result = `Il prezzo totale del viaggio è ${price40.toFixed(2)}`;
} else {
    result = `Il prezzo totale del viaggio è ${fullPrice.toFixed(2)}`;
}


// output
console.log(result)