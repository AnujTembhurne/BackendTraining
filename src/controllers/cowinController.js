let axios = require("axios")


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)

        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body
        
        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
let getByDistrict=async function(req,res){
    try{
        let district=req.query.district_id
        let date = req.query.date
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
let weatherdata=async function(req,res){
    try{
        let city=req.query.q
        let id= req.query.appid
        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${id}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data})
    }catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
let weatherdatatemp=async function(req,res){
    try{
        let city=req.query.q
        let id= req.query.appid
        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${id}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data.main.temp})
    }catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
let sort=async function(req,res){
    try{
        let cities=["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"] 
        let cityObjArray=[]
        for(i=0;i<cities.length;i++){
            let obj={city:cities[i]}
            let options = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=58e24abd21860c0ece98f86957f483f7`
            }
            let result = await axios(options)
            obj.temp=result.data.main.temp
            cityObjArray.push(obj)
        }
        let sorted=cityObjArray.sort(function(a,b){return a.temp-b.temp})
        res.status(200).send({status:true,data:sorted})
        }catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
let Allmemes=async function(req,res){
    try{
        var options = {
            method: "get",
            url: `https://api.imgflip.com/get_memes`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data})
    }catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
let BymemeId=async function(req,res){
    try{
        let id=req.query.template_id
        let first= req.query.text0
        let second=req.query.text1
        let name=req.query.username
        let pass=req.query.password
        var options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=${id}&text0=${first}&text1=${second}&username=${name}&password=${pass}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data})
    }catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}



module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getByDistrict=getByDistrict
module.exports.getOtp = getOtp
module.exports.weatherdata=weatherdata
module.exports.weatherdatatemp=weatherdatatemp
module.exports.sort=sort
module.exports.Allmemes=Allmemes
module.exports.BymemeId=BymemeId