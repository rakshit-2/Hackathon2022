const express=require('express')
const app=express()
const mysql=require('mysql')
const bodyParser=require('body-parser');
const cors=require('cors');
const { spawn } = require('child_process');


const db=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"password",
    database:"baymax",
});

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));




app.get('/result',(req,res)=>{
    let data1;
    const check= spawn('python',['check.py',req.query.ans]);
    check.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });
    check.stdout.on('data', function (data) {
        console.log(data1 = data)
     });
     check.on('close', (code) => {
        res.send(data1)
     });
})









app.get('/get/login',(req,res)=>{
    var email=req.query.email;
    const getPass="select password from baymax where email=?;";
    db.query(getPass,[email],(err,result)=>{
        res.send(result)
    })
})



app.post('/insert/signup',(req,res)=>{
    var name=req.body.name;
    var email=req.body.email;
    var password=req.body.password;
    const ele="insert into baymax (name,email,password) values(?,?,?);";
    db.query(ele,[name,email,password],(err,result)=>{
        console.log(result);
    })
    
})









app.listen(3001,()=>{
    console.log("running 3001")
});


// npm run devStart