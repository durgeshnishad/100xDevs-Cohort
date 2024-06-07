/**
    Given: [1,2,3,4,5]
            [2,4,6,8,10]
*/

// Map
let a = [1,2,3,4,5]

function transform(i){
    return i*2
}

console.log(a.map(transform))

// Filter
let ar = [1,2,3,4,5]
function filerFn(n){
    if(n%2==0)
        return true
    else
        return false
}

console.log(ar.filter(filerFn))


