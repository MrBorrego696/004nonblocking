/*Importar libreria*/
var fs = require('fs');
/*Lectura no bloqueante*/
/*callback*/
fs.readFile('./index.html','utf8',function(err, content){
    if(err){
        console.log(">Error en la lectura del archivo");
    }else{
        console.log(content);
    }
});
/*Mensaje de despedida*/
console.log("El programa ha terminado");