const AuthorModel= require("../models/authorModel")

const createAuthor= async function (req, res) {
    let data= req.body

    let savedData= await AuthorModel.create(data)
    res.send({msg: savedData})
}
const getAuthorId= async function (req, res) {
    let data=await AuthorModel.find({author_name:"Chetan Bhagat"},{author_id:"Number"})
    res.send({msg:data})
}
module.exports.createAuthor= createAuthor
module.exports.getAuthorId=getAuthorId