/**
 * Mengubah array menjadi object
 */

function buah (arr){
    let result ={};
    result.jenis = arr[0];
    result.price = arr[1];
    result.enak = arr[2];
    return result;
}

console.log(buah(["Alpukat",30000,true]));