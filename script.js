  
const compras = (articulo, callback, duracion) =>{
    setTimeout(()=>{
        callback(articulo);
    }, duracion)
}

compras("Bicicleta", (articulo)=>{
    console.log("Comprar: "+ articulo);
    compras("Casco", (articulo)=>{
        console.log("Comprar: "+ articulo);
        compras("Guantes", (articulo)=>{
            console.log("Comprar: "+ articulo);
            compras("Paseo en bici", (articulo)=>{
                console.log("Accion: "+ articulo);   
            }, 5000)
        }, 2000)
    }, 1000)
}, 5000)
