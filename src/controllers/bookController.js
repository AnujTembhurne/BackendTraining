const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

const createBook= async function (req, res) {
    let book = req.body
    let author1=book.author
    if(!author1){
        return res.send({status:false,msg:" this detail is required"})
    }
    let validation=await authorModel.findById(author1)
    if(!validation){
        return res.send({status:false,msg:" author is not present"})
    }
    
    let publisher1=book.publisher
    if(!publisher1){
        return res.send({status:false,msg:" this detail is required"})
    }
    let validation2=await publisherModel.findById(publisher1)
    if(!validation2){
        return res.send({status:false,msg:" publisher is not present"})
    }
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}

const getBooksDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author publisher')
    res.send({data: specificBook})

}
const a=async function(req,res){
    //let Pubished=await bookModel.find({name:"Penguin"},{name:"HarperCollins"})
    let Pubished=await bookModel.updateMany({name:"Penguin",name:"HarperCollins"},{$set:{isHardCover:true}})
    res.send({msg:Pubished})
}
const b=async function(req,res){
    //let Pubished=await bookModel.find({name:"Penguin"},{name:"HarperCollins"})
    let rating=await bookModel.updateMany({ratings:{$gt:3.5}},{$inc:{price:10}})
    res.send({msg:rating})
}
module.exports.createBook= createBook
module.exports.new=a
module.exports.greater=b
module.exports.getB= getBooksDetails
