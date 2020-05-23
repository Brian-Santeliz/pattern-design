const wordPress = {};

wordPress.pluggins = [
    {
        nombre:'woocomerce'
    },
    {
        nombre:'smush rush'
    },
    {
        nombre:'Divi'
    }
];

wordPress.functiones = {
    ordena:(id, nombre)=>{
        let existe = "si",  
            noExiste = "no"
        console.log(` tu pluggin ${wordPress.pluggins[id].nombre === nombre ? existe : noExiste} esta en tu lista`)
    },
    agregarPluggin: (objeto)=>{
        const {nombre } = objeto
        const nuevo = {
            nombre
        }
        wordPress.pluggins.push(nuevo)
    }, 
    mostrarPluggin: pluggins=>{
        pluggins.forEach((e,i)=>{
            console.log(`${e.nombre}: ${i}`)
        })
    }
}
const pluginNuevo={
    nombre:'yoast seo'
}
wordPress.functiones.ordena(1, 'smush rush')
wordPress.functiones.agregarPluggin(pluginNuevo)
wordPress.functiones.mostrarPluggin(wordPress.pluggins)

