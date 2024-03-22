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


/**
 * Study case 4
 * buatlah sebuah fungsi apakah bilangan prima atau bukan
 * 
 * contoh : cekBilanganPrima(19);
 * 
 * output : Bilangan prima
 */
function isPrimeNumber(angka) {
    let jumlahFaktor = checkFaktor(angka)
    if(jumlahFaktor === 2){
        return  'Bilangan Prima';
    }  else{
        return  'Bukan Bilangan Prima';
    }
}

console.log(isPrimeNumber(19)); //output


/**
 * Study case 5
 * 
 * buatlah sebuah function untuk memecah sebuah kata menjadi per kalimat
 * 
 * contoh : "Buka puasa bersama teman kuliah " -> 
 * ["Buka","puasa","bersama","teman","kuliah"]
 */

function splitSentence(sentence) {
    let hasil = [];
    let word = "";
    for(let i = 0; i <= sentence.length; i++){
        if (i == sentence.length || sentence[i] == " ") {
            hasil.push(word);
            word = "";
        }else {
            word += sentence[i];
        }
    }
    console.log(hasil);
}
splitSentence("Buka puasa bersama teman kuliah");
    