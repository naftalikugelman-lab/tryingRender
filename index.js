const express=require("express");
const app=express();
const path=require('path');

require("dotenv").config();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'scripts')));

app.get("/", (req,res)=>{
    res.render("index")
})

app.post("/message", (req, res)=>{
    const msg=req.body;
    res.render("message", {msg})
})


app.listen(process.env.PORT, (err)=>{
    if(err)console.log("error" + err.message)
    else console.log("listening on port" + process.env.PORT )
})


