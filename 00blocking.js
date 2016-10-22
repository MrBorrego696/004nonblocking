/*programa que realiza una lectura de archivo 
desde el sistema de archivos local de forma 
sincrona o bloqueante*/

/*Importar la libreria File System*/
var fs = require ('fs');
/*leyendo el archivo
y guardando el contenido en la variable content*/
var content = fs.readFileSync('./index.html','utf8');
/*imprimo el archivo en consola*/
console.log(content);
/*imprimo un mensaje de final de programa*/
console.log("El programa a terminado");