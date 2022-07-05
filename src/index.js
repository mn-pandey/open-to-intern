const express = require("express")
const bodyParser = require("body-parser")
const route = require("./Route/route")
const { default: mongoose } = require("mongoose")
const app = express()
const multer = require('multer')

app.use(bodyParser.json())
app.use(multer().any());


mongoose.connect("mongodb+srv://AkshayMakwana:Akshay123@cluster0.zmta9.mongodb.net/project2-DB?retryWrites=true&w=majority",)

    .then(() => console.log("MongoDB is Connected."))
    .catch(err => console.log(err))

app.use('/', route)

app.listen(process.env.PORT || 3001, function () {
    console.log("Express is running on port " + (process.env.PORT || 3001))
})