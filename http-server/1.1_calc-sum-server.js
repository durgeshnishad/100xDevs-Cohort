const express= require('express')
const app= express()
const port=3000

function calculate(n){
    let sum =0;
    for(let i=1;i<=n;i++){
        sum+=i
    }
    return sum
}

app.get('/', (req, res)=>{
    const n= req.query.n;
    const ans=calculate(n)
    res.send("hi your sum is: "+ ans)
})

app.listen(3000)