let batchName="Plutonium"
let printDate=new Date()
let todayDate=(printDate.getMonth()+1)+'-'+printDate.getDate()
console.log(todayDate)

let getBatchInfo=function(){
    console.log(batchName,",W3D6,the topic for today is Nodejs module system")
}

module.exports.todayDate=todayDate
module.exports.getBatchInfo=getBatchInfo