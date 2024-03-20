// ALGORITMA PSEDUOCODE
/**
 * STUDY CASE 1
 * 
 * TENTUKAN ALGORTIMA DAN PSEUDUCODE UNTUK MENGHITUNG KELILING PERSEGI PANJANG
 * 
 * SDTUDY CASE 2
 * 
 * TENTUKAN ALGORITMA DAN PSEUDUCODE UNTUK MENGHITUNG LUAS PERMUKAAN TABUNG
 * 
 * STUDY CASE 3
 * 
 * TENTUKAN ALGORITMA DAN PSEUDUCODE VOLUME 1/4 VOLUME BOLA
 */

//STUDY CASE  1

let panjang = 10;
let lebar = 8;

let keliling = 2 * (panjang + lebar);
console.log("Keliling persegi panjang adalah : " +keliling);


//  STUDY CASE 2

let jariJari = 7;
let tinggi = 5;
let phi = 3.14;

let luasPermukaanTabung =  2 * phi * jariJari * jariJari + 2 * phi * jariJari * tinggi;
console.log("Luas permukaan tabung adalah : " +luasPermukaanTabung);

//  STUDY CASE 3

let r = 10;
let pi = 3.14;

let volumeBola = (4/3) * pi * r * r * r;
let volumeSeperempatBola = (1/4) *  volumeBola;
console.log("Volume bola adalah : "+volumeSeperempatBola) ;
