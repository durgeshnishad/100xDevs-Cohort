const express= require('express')
const app= express()
const zod= require('zod')
const cors= require('cors')

const schema= zod.number()

app.use(cors())

function calculateSI(req, res, next){
    const p= schema.safeParse(parseInt(req.query.p))
    const r= schema.safeParse(parseInt(req.query.r))
    const t= schema.safeParse(parseInt(req.query.t))
    if(p.success && r.success && t.success){
        const pData=p.data
        const rData= r.data
        const tData= t.data
        const interest=pData*rData*tData/100
        const finalAmount= pData+(pData*rData*tData/100)
        res.json({
            Interest: interest,
            FinalAmount: finalAmount
        })
    }else{
        res.status(400).send("Issue with values")
    }
}

app.get('/SIcalculator', calculateSI,)

app.use((err, req, res, next)=>{
    console.error(err);
    res.status(500).send("Sorry, something went wrong on our server.");
})

app.listen(3000, ()=>{
    console.log("server is running on port 3000")
})