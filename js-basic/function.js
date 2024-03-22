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


