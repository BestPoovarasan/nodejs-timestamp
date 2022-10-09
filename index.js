const express = require("express");
const app = express();
const fs = require("fs");
const date= new Date();


app.get("/ts",function (req,res){
    fs.writeFile(`./${date.getDate()}-${date.getMonth()}-${date.getFullYear()}-${date.getHours()}.txt`,`Date:${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} 
    timestamp : ${new Date()}`,(err)=>{
        if(err) throw err;
        console.log("File created");
    })
    res.json("file-created")
})

app.listen(3001);