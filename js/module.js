 const functionIefi = (()=>{
    //privado
    let contenidoProtegido = 'esto no puede ser accedido sin return';

    let mensaje = 'este es un mensaje privado'
    let evento = 'JS'
    const boletos= () =>{
        const p = document.createElement('p')
        p.innerText = `compronando boleto para ${evento}`
        document.getElementById('app').appendChild(p)
    }
    //publico debes return 
    return {
        mostrarContenido: function(){
        console.log(contenidoProtegido)
    },
    mostrarBoleto:()=>{
        boletos()
    }
}

})()

functionIefi.mostrarBoleto()