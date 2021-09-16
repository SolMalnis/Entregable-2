const express= require ('express')
const app = express()
const path = require('path')

const publicPath = path.join(__dirname,'./public')
app.use(express.static(publicPath))



app.listen(5050, ()=>{
    console.log('funciona en http://localhost:5050/' )
})

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'/views/home.html'))
})



