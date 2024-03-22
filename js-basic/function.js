// Buatlah function untuk mengecek bilangan ganjil atau  genap 

function checkNumber(num) {
    if (num % 2 == 0) {
        return "Genap"
    } else {
        return "Ganjil"
    }
}

console.log(checkNumber(10));

/**
 * Study case 2
 * 
 * buatlah 2 fungsi :
 * megubah kalimat menjadi larik,
 * menghitung jumlah elemen dalam larik
 * 
 * contoh masukan : "Hallo Selamat Pagi" akan memberikan hasil 3
 * 
 */


function splitArray(str) {
    return str.split(" ");
    
}
function countElementInArray(kalimat){
    let result = splitArray(kalimat);
    let arrayLength = result.length;
    return arrayLength;
}
let exampleSentence = "Halo Selamat Pagi";
console.log(countElementInArray(exampleSentence));

/**
 * Study case 3
 * 
 * buatlah function untuk mengecek sebuah faktor dari angka
 * contoh :
 * CheckBilangan(12); 
 * result : 6
 */

function checkFaktor(number) {
    let faktor = 0;
    for(let i= 1 ; i <= number ; i++){
        if (number % i == 0) {
            faktor++;
        }
    }
    return faktor;
}
console.log(checkFaktor(12));




