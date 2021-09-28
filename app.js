const express= require ('express')
const app = express()
const path = require('path')

const publicPath = path.join(__dirname,'./public')
app.use(express.static(publicPath))



app.listen(process.env.PORT || 5050, ()=>{
    console.log('funciona en http://localhost:5050' )
})

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'/views/home.html'))
})

app.get('/register', (req,res)=>{
    res.sendFile(path.join(__dirname,'/views/register.html'))
})

app.post('/login',(req,res)=>{
    res.redirect("/")
})

app.post('/register',(req,res)=>{
    res.redirect("/")
})

app.get('/login', (req,res)=>{
    res.sendFile(path.join(__dirname,'/views/login.html'))
})


