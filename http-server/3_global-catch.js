const express= require('express')
const app= express()
const port= 3000

app.use(express.json()) // used to parse json body

app.post('/', (req, res)=>{
    const kidneys= req.body.kidneys
    const kidneyLength= kidneys.length

    res.send("you have "+kidneyLength+" kidneys")
})

app.use((err, req, res, next)=>{ //global catch
    res.json({
        msg: "Sorry, something is up with our server"
    })
})

app.listen(port)

