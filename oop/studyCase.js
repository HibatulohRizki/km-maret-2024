/**
 * Exercise OOP
 * 
 * 
 * seorang chef specialis makanan manis / dessert akan membuat 3 jenis dessert 
 * yaitu chocolate cookies, sweet cookies, strawberry cookies. Dimana dia akan
 * membuat nya dalam kittchen (Factory class).
 * 
 * bantulah chef untuk membuat cookies dengan bantuan oop menggunakan bahasa Javascript.
 * 
 * 
 * Task 1
 * 
 * Buatlah class Cookie, yang berisi attribute :
 * 
 * id
 * name
 * price
 * ingredients(array)
 * type
 * 
 * Task 2
 * 
 * buat class inheritance untk chocolate,sweet, strawberry, yang memiliki attribute tambahan berupa :
 * -isSweet(_false -> by default_)
 * 
 * Task 3
 * 
 * buat class kitchen sebagai factory class,yang memiliki attribute dan method :
 */



class Cookies {
    constructor(id, name, price, ingredients, type){
        this.id = id;
        this.name = name;
        this.price = price;
        this.ingredients = ingredients;
        this.type= type;
        
    }
}
class Chocolate extends Cookies{
    constructor(id, name, price, ingredients,type,isSweet){
        super(id, name, price,ingredients, type);
        this.isSweet = isSweet ;
    }
}

class Sweet extends Cookies{
    constructor(id, name, price,ingredients,type,isSweet){
        super(id, name, price, ingredients,type)
        this.isSweet = isSweet;   
    }
}

class Strawberry extends Cookies{
    constructor(id,name,price,ingredients,type,isSweet){
        super(id,name,price,ingredients,type);
        this.isSweet= isSweet;
    }
}

class Kitchen{
    constructor(container){
        this.container = container;
    }

    showCookies(){
        // menampilkan cookies
        console.log("Cookies in Container: ");
        if(this.container.length > 0){
          this.container.forEach(container => {
            const{id, name,price, isSweet} = container;
            if(isSweet){
                console.log(`ID : ${id}, Name : ${name}, Price : Rp.${price}`);  
            }else{
                console.log(`ID : ${id}-${"Not Sweet"}, Name : ${name}-${"Not Sweet"}, Price : RP.${price}`);  
            } 
            });  
        }else {
            console.log("Cookies empty");
        }                
    }
    
    bake(name, price, type){
        //menambahkan cookies
        let ingredients = []
        let isSweet = false;
        let id ;
        if(this.container.length === 0)id = 1;
        switch(type){
            case "Chocolate" :
                this.container.push(
                    new Chocolate(id, name, price,  ingredients, type, isSweet)
                );
                break;
            case "Sweet" :
                this.container.push(
                    new Sweet(id, name, price,  ingredients, type, isSweet)
                );
                break;
            case "Strawberry" :
                this.container.push(
                    new Strawberry(id, name, price,  ingredients, type, isSweet)
                );
                break;
        }
    }
    eat(id){
        // menghapus cookies
        this.container= this.container.filter(
            (container) => container.id !== id);
    }
    addSugar(id){
        // mengubah cookies
        this.container = this.container.map((container) => {
            if(container.id === id){
                container.isSweet = true;
            }
        })
    }
}

module.exports = {Kitchen};