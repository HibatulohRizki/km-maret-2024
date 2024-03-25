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


/**
 * method in object
 */

let  person={
    nama : "Jihyo",
    weight : 55,
    height : 160,
    hobbies : ["Membuat kaum adam klepek-klepek", "Beautiful"],

    jihyoHobb: function(){
        console.log("Jihyo Hobbies : ");
        for(let i = 0; i < this.hobbies.length ;i++){
            console.log(i + 1 + ". "+ this.hobbies[i]);
        }
    },
    tambahHobby: function (hobbyName) {
        this.hobbies.push(hobbyName);
    },
};
person.jihyoHobb();

/**
 * Tentukan jumlah huruf vokal dalam suatu kalimat
 * 
 * contoh : "Buka puasa bersama teman kuliah"
 * 
 * {
 *  a:7
 *  i:1
 *  u:3
 *  e:2
 *  o:0
 * }
 */

function countVokal(kalimat){
    let results = {
        a: 0,
        i: 0,
        u: 0,
        e: 0,
        o: 0,
    }

    for(let i = 0; i < kalimat.length; i++){
        if(kalimat[i] == "a" || kalimat[i] === "A"){
            results.a++;
        }else if(kalimat[i] === "i" || kalimat[i] === "I"){
            results.i++;
        }else if(kalimat[i] === "u" || kalimat[i] === "U"){
            results.u++;
        }else if(kalimat[i] === "e" || kalimat[i] === "E"){
            results.e++;
        }else if( kalimat[i] === "o" || kalimat[i] === "O"){
            results.o++;
        }
    }
    return results;
}
console.log(countVokal("Buka puasa bersama teman kuliah")); 
    