class ConstructorSitios{
    constructor(){
        this.crearElemento = function(texto,tipo){
            //compara el tipo de elemento
            let html;
            if(tipo === 'input'){
                html = new InputHtml(texto)
            }else if(tipo === 'img'){
                html = new ImgHtml(texto)
            }else if(tipo ==='h1'){
                html = new HeaderHtml(texto)
            }else if(tipo === 'p'){
                html = new PHtml(texto)
            }
            ///agrega al tipo
            html.tipo = tipo;

           html.mostrar = function (){
            const elemento = document.createElement(this.tipo);

            if(this.tipo === 'input'){
                elemento.setAttribute('placeholder', this.texto)
            }else if(this.tipo === 'img'){
                elemento.setAttribute('src', this.texto)
            }else{
                elemento.appendChild(document.createTextNode(this.texto))
            }
            document.getElementById('app').appendChild(elemento)
           }

            //retornamos el html
            return html
        }

    }
}

 const HeaderHtml = function(texto){
     this.texto = texto
 }

 const PHtml = function(texto){
    this.texto = texto
}
const ImgHtml = function(texto){
    this.texto = texto
}
const InputHtml = function(texto){
    this.texto = texto
}
  
    


const sitioweb= new ConstructorSitios()

//guardar los elemos
const elementos = [];
//creando y add al array
elementos.push(sitioweb.crearElemento('bienvenido', 'h1'))
elementos.push(sitioweb.crearElemento('logo.jpg', 'img'))
elementos.push(sitioweb.crearElemento('otro sitio web con factory', 'p'))
elementos.push(sitioweb.crearElemento('contacto', 'input'))




elementos.forEach(element => {
    element.mostrar()
});
console.log(elementos)