const colors = require('colors');
const fs = require('fs');
const crearArchivo = async(base = 5, listar,limite) => {
    try {
        let salida = '';
        let guardado = '';
        salida +="===============================\n".america;
        salida +=`La tabla del ${colors.red(base)} es la siguiente\n`;
        salida +="===============================\n".america;
        
        for(let i = 1; i <= limite; i++){
            salida +=`${colors.italic(base)} ${'x'.green} ${colors.italic(i)} ${'='.green} ${colors.cyan(base * i)}\n`;
            guardado +=`${base} x ${i} = ${base * i}\n`;
        }
    
        (listar)?console.log(salida):console.log()

        fs.writeFileSync(`./salida/tabla-${base}.txt`, guardado)
        let nombreArchivo = `tabla-${base}.txt`.rainbow;
        return nombreArchivo;
    } catch (error) {
         throw 'Archivo no creado'
    }
   
}

module.exports = {
    crearArchivo 
}