const express = require('express');
const abc = require('../introduction/intro')
const def=require('../logger/logger')
const ghi=require('../util/helper')
const jkl=require('../validator/formatter')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    //abc.printName()
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