const express= require('express')
const app= express()
const port= 3000

function userMiddleware(req, res, next){
    const username= req.headers.username
    const pass= req.headers.pass
    if(!(username=="admin" && pass=="admin")){
        res.status(400).json({'msg': "BAD INPUT"})
    }else{
        next()
    }
}

function kidneyMiddleware(req, res, next){
    const kidneyID= req.query.kidneyID
    if(kidneyID!=1 && kidneyID!=2){
        res.status(400).json({'msg': "BAD INPUT"})
    }else{
        next()
    }
}

app.get('/health-checkup', userMiddleware, kidneyMiddleware, (req, res)=>{
    res.json({
        msg: "ALL GOOD"
    })
})

app.get('/kidney-checkup', userMiddleware, kidneyMiddleware, (req, res)=>{
    res.json({
        msg: "ALL GOOD"
    })
})

app.listen(port)

