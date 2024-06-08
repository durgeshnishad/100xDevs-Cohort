/*
Array Map with Callback:
Implement a function 'mapArray that takes an array and a callback function as arguments.
'mapArray' should apply the callback function to each element of the array and return a new array with the moditied values.
 */

function mapArray(a, callback){
    let b=[]
    for(let i=0;i<a.length;i++){
        b[i]=callback(a[i])
    }
    return b;
}

let array= [1,2,3,4,5]

function arrayModify(element){
    element=1;
    return element;
}

console.log(mapArray(array, arrayModify))
