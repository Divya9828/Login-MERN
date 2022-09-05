var mysql=require('mysql')
var connect=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'crud'
})
connect.connect((err,result)=>
{
    if(err)
    throw err
    console.log("conneceted")
})
module.exports=connect