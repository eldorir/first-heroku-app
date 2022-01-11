const express = require("express")
const bodyParser = require("body-parser")
const request = require("request")

const app = express()
const https = require("https")
app.use(express.static(__dirname));
// app.use(express.static("public"))


app.use(bodyParser.urlencoded({extended:true}))
app.get("/", function (req, res) {
    res.sendFile(__dirname+"/signup.html")
 })

 app.listen(process.env.PORT || 3000, function () {
    console.log("server running on 3000")
}) 


app.post('/',function(req,res){
    var firstName = req.body.fname
    var lastName = req.body.lname
    var email = req.body.email
    console.log(firstName,lastName,email)

})

// 2cce31ec089da401bcd7552182d2cf41-us20