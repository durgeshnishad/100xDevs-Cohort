// Simple Primitives in Js- Loops, Variables, Data Types, if/else etc...
// Complex Primitives in JS- Arrays, Objects
// Functions

console.log("Hellow World")

let a= 1
var b=2
const c=3
console.log(a)
console.log(b)
console.log(c)

let firstName= "Durgesh"
let age= 23
let isSingle= false

if(isSingle)
    console.log(firstName+",aged "+age+" is single")
else
    console.log(firstName+",aged "+age+" is not single")

let ans=0;
for(let i=1;i<101;i++)
        ans+=i
console.log(ans)

let nameArray=["Durgesh", "Prerna", ":)"]
let ageArray=[23, 22, ":)"]

for(let i=0;i<nameArray.length;i++)
    console.log(nameArray[i]+" is "+ageArray[i]+" years old")

let user={
    name:"Durgesh",
    age:23,
    gender: "Male"
}

console.log(user.name)

let users=[
    {
        name:"Durgesh",
        age:23,
        gender:"Male"
    },{
        name:"Prerna",
        age: 22,
        gender:"Female"
    },{
        name:":)",
        age: 0,
        gender:":)"
    }
]

for(let i=0;i<users.length;i++)
        console.log(users[i].name+" is "+users[i].age+" years old")


function sum(a, b){
    return a+b;
}

console.log(sum(3,5))

function arithmeticOperation(a, b, type){
    return type(a, b)
}

function sum(a, b){
    return a+b
}
function diff(a, b){
    return a-b
}

console.log(arithmeticOperation(2,3,diff))
