class Formulario {
    constructor(){
        this.campos = [];
    }
    agregarCampo(type, text){
        //obteniendo el arreglo y guardando en un varbale
        let campos = this.campos;
        let campo;

        //evaluando el tipo
        switch(type){
            case "text":
                campo = new InputText(text)
                break;
            case "button":
                campo = new InputBtn(text)

                break;
            case "email":
                campo = new InputEmail(text)
                break;
            default:
                throw new Error("this field dont is allowed", type);
        }
        campos.push(campo)
    }
    obtenerform(){
        let formCreado = document.createElement('form'),
             campos = this.campos;
             //recorriendo el arreglo de elmento y llamando la funcion creElemento
             campos.forEach((element) => {
                const br = document.createElement('br');
                formCreado.appendChild(br)
                formCreado.appendChild(element.crearElemento())
                
             });
             return formCreado
    }
}

class Inputs{
    constructor(texto){
        this.texto = texto;
    }
}

//instancear form
const form = new Formulario();

//class para los elementos hereda los metod de input
class InputText extends Inputs{
    constructor(texto){
        super(texto)
    }
    crearElemento(){
        const inputText = document.createElement('input');
        inputText.setAttribute('type', 'text')
        inputText.setAttribute('placeholder', this.texto)
        return inputText
    }
}
//email
class InputEmail extends Inputs{
    constructor(texto){
        super(texto)
    }
    crearElemento(){
        const inputEmail = document.createElement('input');
        inputEmail.setAttribute('type', 'email')
        inputEmail.setAttribute('placeholder', this.texto)
        return inputEmail
    }
}
//btn
class InputBtn extends Inputs{
    constructor(texto){
        super(texto)
    }
    crearElemento(){
        const InputBtn = document.createElement('input');
        InputBtn.setAttribute('type', 'submit')
        InputBtn.textContent = this.texto
        return InputBtn
    }
}

form.agregarCampo('text','este es un input text')
form.agregarCampo('email','este es un input email')
form.agregarCampo('button','este es un input button')

//cuando el documento este listo se pinta en panlla
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('app').appendChild(form.obtenerform())
})