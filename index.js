const express = require('express')

const fs = require('fs')
var data = fs.readFileSync('kinfe.json')
var result = JSON.parse(data)
const app  = express()
const PORT = process.env.PORT  || 5000 
app.listen((PORT ) , ()=>{
    console.log("Server started at the PORT " , PORT )
})
app.use(express.static('public'));
app.get("/" , (req , res)=>{
    res.send("Welcome to the result API...You can explore the student result at /results page and /results/id_number ex. id_number = 526515")
})
app.get('/results' , (req , res)=>{
    res.send(result)
})
app.get('/results/:result/' , (req , res)=>{
    console.log(req.params.result)
    let id = req.params.result
    let idformat = id.toString()
    result.map((resu)=>{
        if(idformat == resu.id){
            res.send(resu)
          
            
        }
        
    })
} )
