const descripcion = {
    demand: true,
    alias: 'd',
    descripcion: 'Descripción de la tarea por hacer'
};

const completado = {
    alias: 'c',
    defaul: true,
    descripcion: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualizar el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea', {
        descripcion
    })
    .help()
    .argv;


module.exports = {
    argv
};