/*
Asynchronous Callback:
Write a function 'higherOrderAsync' that takes a callback function as an argument. Inside
'higherOrderAsync', call the callback function asynchronously using settimeout after a delay of n seconds.
where n is current day ot the month according to UTC time (1 <= n <= 31).
*/

const date= new Date()
let day= date.getDate()

function higherOrderAsync(Callback){
    
    setTimeout(Callback, day*1000)
}

function hi(){
    console.log("hi after "+day+" seconds")
}

higherOrderAsync(hi)