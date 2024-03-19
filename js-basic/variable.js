var number = 20;
console.log(number); 

var str = "Hello";
console.log(str ); 

var isCorrect = true;
console.log(isCorrect);


// operator dalam javascript

var a = 15;
var b = "abc";
var total = a % b;
console.log(total);

/**
 * Dalam Operator matematika ketika sebuah tipe data number menggunakan operasi (- , / , *, %) 
 * dengan tipe data string
 * hasilnya akan Nan.
 * Namun jika menggunakan operasi ( + ) akan menjadi concat
 */

// OPERATOR LOGIC

var x = 15;
var y = "15";
var z = x == y;
console.log(z);
var v = x === y;
console.log(v);

/* Dalam operasi logic jika == hanya akan membandingkan valuenya saja sehingga hasilnya true
Sedangkan === akan membanding value dan tipe datanya sehingga hasilnya false
*/