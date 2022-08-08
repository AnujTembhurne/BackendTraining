const express = require('express');
const abc = require('../introduction/intro')
const def=require('../logger/logger')
const ghi=require('../util/helper')
const jkl=require('../validator/formatter')
const router = express.Router();
const lodash=require('lodash');

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    //abc.printName()
    const months=(["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"])
    const subarray=lodash.chunk(months,3)
    console.log(subarray)

    const oddnumbers=[1,3,5,7,9,11,13,15,17,19]
    const newarray=lodash.tail(oddnumbers)
    console.log(newarray)

    const merged=lodash.union([1,2],[2,3],[1,3],[4,5],[2,4,5]);
    console.log(merged)

    const list=[['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']]
    const keyvalue=lodash.fromPairs(list)
    console.log(keyvalue)

    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    def.aba()
    res.send('This is the second routes implementation')
});

router.get('/give-me-students-data',function(req, res){
    ghi.todayDate
    ghi.getBatchInfo()
    res.send('This is the second Problem')
});
module.exports = router;
// adding this comment for no reason