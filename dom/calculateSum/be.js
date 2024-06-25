const express= require('express')
const app= express()
const zod= require('zod')
const cors= require('cors')

const schema= zod.number()

app.use(cors())

function calculateSum(req, res, next){
    const a= parseInt(req.query.a)
    const b= parseInt(req.query.b)

    const parsedA= schema.safeParse(a)
    const parsedB= schema.safeParse(b)

    if(parsedA.success && parsedB.success){
        res.send(`Sum: ${a+b}`)
    }
    else{
        res.status(400).send("Invalid Input")
    }
}
app.get("/getsum", calculateSum, (req, res)=>{
    res.send("Done!")
})

app.use((err, req, res, next)=>{
    res.send("Sorry something is up with our server")
})

app.listen(3000)