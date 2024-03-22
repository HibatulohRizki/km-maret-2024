// Buatlah function untuk mengecek bilangan ganjil atau  genap 

function checkNumber(num) {
    if (num % 2 == 0) {
        return "Genap"
    } else {
        return "Ganjil"
    }
}

console.log(checkNumber(10));