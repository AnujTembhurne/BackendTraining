const { count } = require("console")
const BookModel= require("../models/bookModel")
const AuthorModel= require("../models/authorModel")


const createBook= async function (req, res) {
    let data= req.body
    let authorid=data.author_id
    if(!authorid){
        return res.send({status:false,msg:"author id must be present"})
    }
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}
const createAuthor= async function (req, res) {
    let data= req.body
    let authorid=data.author_id
    if(!authorid){
        return res.send({status:false,msg:"author id must be present"})
    }
    let savedData= await AuthorModel.create(data)
    res.send({msg: savedData})
}
const getAuthorId= async function (req, res) {
    let data=await AuthorModel.find({author_name:"Chetan Bhagat"}).select( { author_id: 1, _id: 0})
    let ndata=await BookModel.find({author_id:{$eq:data[0].author_id}})
    res.send({msg:ndata})
}
const findupdate=async function (req,res){
    let data=await BookModel.findOneAndUpdate({name:"Two states"},{$set:{price:100}},{new:true})
    let ndata=await AuthorModel.find({author_id:{$eq:data.author_id}}).select({author_name:1,_id:0})
    res.send({msg:data,ndata})
}
const bet=async function (req,res){
    let data=await  BookModel.find({price:{$gte:50,$lte:100}})
    let a=data.map(x=>x.author_id)
    let ndata=await AuthorModel.find({author_id:a}).select({author_name:1,_id:0})
    res.send({msg:ndata})
}
// const available=async function(req,res){
//     let ava=await BookModel.find({author_id:require})
//     if (!author_id)res.send({msg:"Do not accept the entry"})
// }

// const getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find( {authorName : "HO" } )
//     console.log(allBooks)
//     if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
//     else res.send({msg: "No books found" , condition: false})
// }


const updateBooks= async function (req, res) {
    let data = req.body // {sales: "1200"}
    // let allBooks= await BookModel.updateMany( 
    //     { author: "SK"} , //condition
    //     { $set: data } //update in data
    //  )
    let allBooks= await BookModel.findOneAndUpdate( 
        { authorName: "ABC"} , //condition
        { $set: data }, //update in data
        { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
     )
     
     res.send( { msg: allBooks})
}

const deleteBooks= async function (req, res) {
    // let data = req.body 
    let allBooks= await BookModel.updateMany( 
        { authorName: "FI"} , //condition
        { $set: {isDeleted: true} }, //update in data
        { new: true } ,
     )
     
     res.send( { msg: allBooks})
}




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE



module.exports.createBook= createBook
//module.exports.getBooksData= getBooksData
module.exports.updateBooks= updateBooks
module.exports.deleteBooks= deleteBooks
module.exports.findupdate=findupdate
module.exports.bet=bet

module.exports.createAuthor= createAuthor
module.exports.getAuthorId=getAuthorId
