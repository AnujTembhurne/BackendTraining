
const mid1= function ( req, res, next) {
    req.falana= "hi there. i am adding something new to the req object"
    console.log("Hi I am a middleware named Mid1")
    next()
}

const mid2= function ( req, res, next) {
    
    next()
}

const mid3= function ( req, res, next) {
    let data = req.body
    let ndata=req.headers.isfreeappuser
    data.isFreeAppUser=ndata
    if(!ndata){
        return res.send({msg:"that the request is missing a mandatory header"})
    }
    next()
}
const ProductModel= require("../models/productModel")
const UserModel= require("../models/userModel")

const mid4=async function ( req, res, next) {
    let data = req.body
    let userId1=data.userId
    let validation1=await UserModel.findById(userId1)
    if(!validation1){
        return res.send({msg:" user is not present"})
    }
    let productId1=data.productId
    let validation2=await ProductModel.findById(productId1)
    if(!validation2){
        return res.send({msg:" product is not present"})
    }
    
    next()
}
const mid5=async function(req,res,next){
    let data = req.body
    let ndata=req.headers.isfreeappuser
    data.isFreeAppUser=ndata
    if(ndata=false){
        let ne=await ProductModel.find()
        let oe=await UserModel.aggregate({$subtract:["balance","ne.price"]})

        res.send({msg:oe})
    }
    if(ndata=true){}
    next()
}


module.exports.mid1= mid1
module.exports.mid2= mid2
module.exports.mid3= mid3
module.exports.mid4= mid4
module.exports.mid5=mid5
