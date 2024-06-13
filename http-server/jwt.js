const express= require('express')
const app = express()
const jwt= require('jsonwebtoken')
const jwtPassword= "123456789"

app.use(express.json())

const users=[{
    username: "dnishad042@gmail.com",
    password: "123",
    name: "durgesh nishad"
},
{
    username: "prernalohia25@gmail.com",
    password: "456",
    name: "prerna lohia"
}]

function userExists(username, password){
    let temp= false
    for(let i=0;i<users.length;i++){
        if(users[i].username== username && users[i].password== password)
            temp= true
    }
    return temp
}
app.post('/signin', (req, res)=>{
    const username= req.body.username
    const password= req.body.password

    if(!(userExists(username, password))){
        return res.status(403).json({
            msg: "user does not exisit"
        })
    }

    var token= jwt.sign({username: username}, jwtPassword)
    return res.json({
        token
    })
})

app.get('/users', (req, res)=>{
    const token= req.headers.authorization
    try{
        const decoded= jwt.verify(token, jwtPassword)
        const username= decoded.username
        res.json({
            users: users
        })
    } catch(err){
        return res.status(403).json({
            msg: "Invalid token"
        })
    }
})


app.listen(3000)
