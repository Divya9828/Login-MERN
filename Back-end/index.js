var exp=require('express')
var app=exp();
app.listen(5000)
var body=require('body-parser')
var mysql=require('mysql')
var db=require('./db/connection')
var cors=require('cors');
const { json } = require('body-parser');
app.use(body.json())
app.use(exp.urlencoded({extended:false}))
app.use(cors())

app.post('/select',(req,res)=>
{
    var form=req.body;
    var sqlSel="select * from reg where name=? and email=?";
    db.query(sqlSel,[form.user,form.email],(err,result)=>{
        if(err)
        {
            throw err
        }
        else
        {
            if(result.length===1)
            {
                res.send(result)
                res.status(200)
            }
            else
            {
                res.status(204)
                res.json()
            }
        }
    })
})