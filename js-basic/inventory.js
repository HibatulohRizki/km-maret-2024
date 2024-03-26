// MEMBUAT INVENTORI

let carts = [
    {
        id : 1,
        name : "Dell is-12700",
        type : "Laptop",
        price : 10000000,
        stock : 5,
        status : true,
    },
    {
        id : 2,
        name : "HP is-12700",
        type : "Laptop",
        price : 7000000,
        stock : 3,
        status : true,
    },
    {
        id : 3,
        name : "Razor Gaming Mouse",
        type : "Mouse",
        price : 175000,
        stock : 3,
        status : false,
    }
];

const showCarts = () =>{
    console.log("Carts list : ");
    carts.forEach((cart) => {
        const {id,name,type,price,status,stock} = cart;
        if(status === true){
            console.log(`${id}. [x] ${name} - Rp.${price}.`);
            console.log(`${type}. Stocks : ${stock} pcs.`);
        }else{
            console.log(`${id}. [] ${name} -Rp.${price}.`);
            console.log(`${type} - Stocks : ${stock} pcs`);
        }
    });
};

const addItem = (name, type,price,stock)=>{
    const id = carts[carts.length -1 ].id +1;
    const status = true;
    carts.push({
        id , 
        name , 
        type , 
        price , 
        status , 
        stock
    });
};

const getCartById = (id) =>{
    let temp ={};
    carts.forEach(cart =>{
        if(cart.id == id){
           temp= cart ; 
        }
    });
}

const deleteCart =(id)=> {
    carts.forEach(cart => cart.id !== id);
}

const updateCart = (id,name,type,price,status,stock)=>{
    carts.map(cart => {
        if(cart.id===id){
            cart.name = name;
            cart.type = type;
            cart.price = price;
            cart.status = status;
            cart.stock = stock;
        }
        return cart;
    })
}

// addItem("Keyboard Gaming","keyboard",200000,5);
showCarts();
getCartById();
