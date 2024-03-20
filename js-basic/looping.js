    // Looping

    /**
     * Study case 1
     * 
     * Tampilkan 10 bilangan ganjil dan genap pertama
     * 
     */
    let num = 10
    for(let i = 1 ; i <= num ; i++){
        if(i % 2 === 0){
            console.log("Genap : " + i);
        }else{
            console.log("Ganjil : " + i);
        }
    }

    /**
     * Study case 2
     * 
     * Tentukan jumlah faktor dari sebuah bilangan
     */

    let bilangan= 24;
    let faktor=0;

    for(let i = 1; i <= bilangan ; i++){
        if(bilangan % i == 0){
            faktor ++;
        }
    }
    console.log("Faktor dari bilangan "+ bilangan + " adalah "+faktor);


    /**
     * Study case 3
     * 
     * Cek apakah bilangan prima
     */

