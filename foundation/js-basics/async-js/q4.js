/*
Array Filter with Callback:
Write a function 'filterArray that takes an array and a callback function as arguments.
'filterArray' should filter the elements of the array based on the condition specified by the callback function 
and return a new array with the filtered elements.
*/

function filterArray(ar, callback){
    arr=ar.filter(callback)
}

function modifyArrayElement(n){
    if(n%2==0)
        return true
    else
        return false
}

let ar=[1,2,3,4,5,6,7,8,9]
let arr=[]
filterArray(ar, modifyArrayElement)
console.log(arr)