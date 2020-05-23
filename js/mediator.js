const Vendedor = function(nombre){
    this.nombre= nombre;
    this.sala = null;
}

const Comprador = function(nombre){
    this.nombre = nombre;
    this.sala = null;

}
//metodos del vendedor
Vendedor.prototype = {
    oferta: function(articulo, precio){
        console.log(`Tenemos el articulo ${articulo} con el precio ${precio}`)
    },
    vendido: function(comprador){
        console.log(`Vendido a ${comprador}`)
    }
}
//metodos del comprador
Comprador.prototype={
    oferta: function(mensaje, comprador){
        console.log(`${comprador.nombre} : ${mensaje}`)
    }
}
//registro de usuarios a la subasta
const Subasta = function(){
    let compradores ={};
    return{
        registro: function(usuario){
            compradores[usuario.nombre] = usuario;
            usuario.sala = this;
        }
    }
}

//instanceando los objetos
const brian = new Comprador('Brian')
const jose = new Comprador('Jose')
const joe = new Comprador('Joe')

const vendedor = new Vendedor('Vendedor')

const subasta = new Subasta()
subasta.registro(brian)
subasta.registro(jose)
subasta.registro(joe)


vendedor.oferta('Cubo rubik', 30)
brian.oferta(300,brian)
brian.oferta(400,jose)
brian.oferta(1000000,joe)
vendedor.vendido(joe.nombre)


