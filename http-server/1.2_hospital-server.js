const express= require('express')
const app= express()
const port= 3000
//const bodyParser= require('body-parser')


var users=[{
    name:"Patient1",
    kidney:[{
        healthy: false
    }]
}]

app.get('/', (req, res)=>{
    const Patient1Kidney=users[0].kidney
    const totalKidneys= Patient1Kidney.length
    let healthyKidney=0
    for(let i=0;i<Patient1Kidney.length;i++){
        if(Patient1Kidney[i].healthy)
            healthyKidney++
    }
    const unhealthyKidney= Patient1Kidney.length-healthyKidney
    res.json({
        totalKidneys,
        healthyKidney,
        unhealthyKidney
    })
})

app.use(express.json())

app.post('/', (req, res)=>{
    const isHealthy=req.body.isHealthy
    users[0].kidney.push({
        healthy:isHealthy
    })
    res.json({
        msg: "Done!"
    })
})

app.put('/', (req, res)=>{
    for(let i=0;i<users[0].kidney.length;i++){
        users[0].kidney[i].healthy=true;
    }
    res.json({
        msg: "Done!"
    })
})

function isThereABadyKidney(){
    let isThereABadyKidney= false
    for(let i=0;i<users[0].kidney.length;i++){
        if(!users[0].kidney[i].healthy)
            isThereABadyKidney=true
    }
    return isThereABadyKidney
}

app.delete('/', (req, res)=>{
    if(isThereABadyKidney()){
        let newKidneys=[]
        for(let i=0;i<users[0].kidney.length;i++){
        if(users[0].kidney[i].healthy)
            newKidneys.push({
                healthy:true
            })
        }
        users[0].kidney=newKidneys
        res.json({
            msg: "Done!"
        })
    }else{
        res.status(411).json({
            msg: "you have no bad kidneys"
        })

    }
})


app.listen(port, ()=>{
    console.log(`port ${port}`)
})
