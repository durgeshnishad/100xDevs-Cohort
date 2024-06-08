/*
File Processing with Callback:
Write a function 'readFileCallback' that takes a filename and a callback function.
readFileCallback' should read the contents of the file asynchronously and pass the pata to the callback Tunction.
*/

const fs= require('fs')

function readFileCallback(fname, callback){
    fs.readFile('q5.txt', 'utf-8', callback)
}

function printData(err, data){
    console.log(data)
}


let fname= 'q5.txt'
readFileCallback(fname, printData)