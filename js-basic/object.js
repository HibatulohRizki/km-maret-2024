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
    