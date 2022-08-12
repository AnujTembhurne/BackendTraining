
const express = require('express');
const router = express.Router();
//const persons=require('persons')
let persons=[
    {
        name:"PK",
        age:10,
        votingstatus:false
    },
    {
        name:"SK",
        age:20,
        votingstatus:false
    },
    {
        name:"AA",
        age:70,
        votingstatus:false
    },
    {
        name:"SC",
        age:5,
        votingstatus:false
    },
    {
        name:"HO",
        age:40,
        votingstatus:false
    },
]
router.post("/post-query",function(req,res){
    let newpersons=req.query.votingage;
    
    let arr=persons.filter(ele=>ele.age>newpersons)
    arr.map(ele=>ele.votingstatus=true)
    res.send({data:arr});
})
  
module.exports = router;