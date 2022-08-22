
const publisherModel= require("../models/publisherModel")

const createPublisher= async function (req, res) {
    let book = req.body
    let publisherCreated = await publisherModel.create(book)
    res.send({data: publisherCreated})
}
module.exports.createPublisher= createPublisher