/**
 * Study case 1
 * 
 * cek angka bilangan ganjil genap
 * 
 * buatlah algoritma dan pseuducode coding
 * 
 * 
 * 1. buatlah variabel bilangan
 * 2. cek bilangan menggunakan if  else, jika bilangan genap maka tulis "genap"
 *    jika bilangan ganjil maka tulis "ganjil
 * 
 */

let bil = 5;
if(bil% 2 === 0){
    console.log("Bilangan genap");
}else{
    console.log("Bilangan Ganjil");
}


/**
 * Study case 2
 * Grade nilai
 * Score 100-85, grade A
 * Score 84 - 70 , Grade B
 * Score 69 - 50 , Grade C
 * Score 49 - 30 , Grade D
 * Score 29 - 0 , Grade E
 */

let score = 75;
let grade;

switch (true) {
    case score >=85:
        console.log("Grade A");
        break;
    case score >=70 :
        console.log( "Grade B");
        break;
    case score >=50:
        console.log ("Grade C");
        break;
    case score  >= 30:
        console.log ("Grade D");
        break;
    case score <= 29 :
        console.log( "Grade E");
        break;
    default:
        break;
}