/*
Synchronous Callback:
Write a function "higherOrder' that takes a callback function as an argument. Inside
'higherOrder', call the callback function synchronousLy.
*/

function higherOrder(callback){
    callback()
}

function hi(){
    console.log("callback fn")
}
higherOrder(hi)