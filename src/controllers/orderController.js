const OrderModel=require("../models/orderModel")
const ProductModel= require("../models/productModel")
const UserModel= require("../models/userModel")

const createOrder= async function (req, res) {
    let data= req.body
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

    let ndata=req.headers.isfreeappuser
    data.isFreeAppUser=ndata
    if(ndata=="false"){
       if(validation1.balance>=validation2.price){
        let update=await UserModel.updateOne({_id:validation1},{$inc:{balance:-validation2.price}})
        let update1=await UserModel.updateOne({_id:validation1},{$set:{isFreeAppUser:ndata}})
        data['amount']=validation2.price
        let savedData= await OrderModel.create(data)
        res.send({data: savedData})
       }else{
        return res.send({msg:"users balance is low,cannot make the order"})
       }
    }
    else if(ndata=="true"){
        data['amount']=0
        let savedData= await OrderModel.create(data)
        res.send({data: savedData})
    }
}
module.exports.createOrder=createOrder