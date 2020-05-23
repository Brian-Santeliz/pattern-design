//Singleton object literal, todas las instancias en un objeto
const alumnos = {
    //guarda los alumnos
     listaAlumno : [],

     //obtener alumno
     get:function(id){
       return this.listaAlumno[id]
     },
     //crear alumno
     crear: function(datos){
        this.listaAlumno.push(datos)
     },

     //listar alumno
     listar: function(){
        return this.listaAlumno; //devuelve el arreglo, se menciona con la palabra this.
     }
    
}
const alumno1 = {
    nombre:'Pepito',
    apellido: 'Perez'
}

const alumno2 = {
    nombre : 'Rose',
    apellido: 'Rivas'
}
alumnos.crear(alumno2)
alumnos.crear(alumno1)

const getAlumno = alumnos.get(1)
console.log(getAlumno)
