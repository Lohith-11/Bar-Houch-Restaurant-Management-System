/**
* this configuration for connect our application with mongodb
*/
const mongoose = require('mongoose')
let db = mongoose.connect('mongodb+srv://root:root@cluster0.wrawjtl.mongodb.net/',{ useNewUrlParser: true } , (err)=> {
    if (err) {
        console.log(err)
    } else {
        console.log('connected...')
    }
})
