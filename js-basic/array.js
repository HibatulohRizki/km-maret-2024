//study case 1

let students = [
    [1, "Vincent" , 3.5],
    [2, "Udin" , 3.0],
    [3,"Mamang", 2.1]
]

for(let i = 0; i < students.length ;i++){
    if(students[i][2] >= 3.0){
        console.log(students[i][0] + "."+students[i][1] + ", IPK = "+students[i][2]+ "Lulus");
    }else{
        console.log(students[i][0] + "."+students[i][1] + ", IPK = "+students[i][2]+ "Gagal");
    }
}

/**
 * Study Case 2
 * 
 * Tentukan nilai rata-rata dari array berikut
 * 
 * var stats = [10,2,3,7,1,8,5];
 * 
 * result:
 * 5.14
 */

let  stats = [10,2,3,7,1,8,5];
let total =0;
let mean ;
for(let i = 0 ; i < stats.length ; i++ ) {
    total += stats[i]
}
mean = total / stats.length;
console.log("Mean :"+mean.toFixed(2));
    

/**
 * Study case 3
 * pecah sebuah kalimat menjadi per kata.
 * var stats = "buka bersama teman kuliah seru"
 * result:
 * ["buka","bersama","teman","kuliah","seru"]
 */

let  sentence ="buka bersama teman kuliah seru";
let words=sentence.split(' ');
console.log(words);