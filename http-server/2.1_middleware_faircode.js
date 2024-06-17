const express= require('express')
const app= express()
const port= 3000

app.use(express.json())

function ticketValidate(req, res, next){
    const ticketID= req.body.ticketID
    if(ticketID== 'valid')
        next()
    res.json({
        msg: "Ticket Invalid"
    })
}

function ageCheck(req, res, next){
    const age= req.query.age
    if(age>=18)
        next()
    res.json({
        msg: "Age criteria not met, try ride 2"
    })
}

app.use(ticketValidate)
app.get('/ride-1', ageCheck, (req, res)=>{
    res.json({
        msg: "Welcome to ride 1, enjoy"
    })
})

app.get('/ride-2', (req, res)=>{
    res.json({
        msg: "Welcome to ride 2, enjoy"
    })
})

app.listen(port)
