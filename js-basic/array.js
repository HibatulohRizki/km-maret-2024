//study case 1

let murid = [
    [1, "Vincent" , 3.5],
    [2, "Udin" , 3.0],
    [3,"Mamang", 2.1]
]

for(let i = 0; i < murid.length ;i++){
    if(murid[i][2] >= 3.0){
        console.log(murid[i][0] + "."+murid[i][1] + ", IPK = "+murid[i][2]+ "Lulus");
    }else{
        console.log(murid[i][0] + "."+murid[i][1] + ", IPK = "+murid[i][2]+ "Gagal");
    }
}