//conocido como subscriptor-publicador

let observer = {
    obtenerOfertas: function(callback){
        if(typeof callback === 'function'){
            this.suscribers[this.suscribers.length] = callback;
        }
    },
    cancerlarOfertas: function(callback){
        for(let i = 0; i< this.suscribers.length; i++){
            if(this.suscribers[i] === callback){
                delete this.suscribers[i]
            }
        }
    },
    publicarOferta: function(oferta){
        for(let i = 0; i< this.suscribers.length; i++){
            if(typeof this.suscribers[i] === 'function'){
                 this.suscribers[i](oferta);
            }
        }
    },
    crear: function(objeto){
        for(let i in this){
            if(this.hasOwnProperty(i)){
                objeto[i] = this[i];
                objeto.suscribers = [];
            }
        }
    }
}

//vendedores
const amazon = {
    nuevoProducto: function(){
        const producto = 'Nueva Laptop Gamer!';
        this.publicarOferta(producto)
    }
}

const facebook = {
    nuevoAnuncio: function(){
        const anuncio = 'Compra un Mouses Wireless';
        this.publicarOferta(anuncio)
    }
}

//crear los publicadores
observer.crear(amazon)
observer.crear(facebook)

//personas 
const brian = {
    compartir: function(oferta){
        console.log('Brian dice: Buena oferta!!', oferta)
    }
}
const karen = {
    interesa: function(oferta){
        console.log('karen dice: Me interesa la oferta de', oferta)
    }
}
//suscribiendo los usuarios
amazon.obtenerOfertas(brian.compartir)
amazon.obtenerOfertas(karen.interesa)
//publica la oferta
amazon.nuevoProducto()
//desuscribe de las ofertas
amazon.cancerlarOfertas(karen.interesa)
amazon.nuevoProducto()

facebook.obtenerOfertas(brian.compartir)
facebook.obtenerOfertas(karen.interesa)
//publica la oferta
facebook.nuevoAnuncio()