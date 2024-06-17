const express= require('express')
const app= express()
const port= 3000
const zod= require('zod')

const schema= zod.array(zod.number())

app.use(express.json())

app.post('/', (req, res)=>{
    const kidneys= req.body.kidneys
    const response= schema.safeParse(kidneys)
    res.send({
        response
    })
})

app.listen(port)

