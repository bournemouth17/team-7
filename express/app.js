const express = require('express')
const app = express()
const mc = require('./mysqlConnector');

app.use(express.static('public'))

//getUsers
app.get('/profiles', function (req, res) {
	console.log('get /profiles')
	res.send(mc.getXUsers(req.query.num))
})


// get the children limited by the number for the front page
app.get('/', function (req, res) {
	console.log('get /')
	res.send(mc.getChildDetails(req.query.numChild))
})

//getWishesAndDonations
app.get('/wish', function (req, res) {
	console.log('get /wish')

    // sendResult(function() {
    //     console.log('After apps.js')
    //     console.log(temp)
    //     res.send(temp)
    // });

	temp = mc.getWishesAndDonations(req.query.wishId, function() {
        console.log('After apps.js')
        console.log(temp)
        res.send(temp)
    })

})


//insert wish
app.get('/addWish', function (req, res) {
	console.log('get /addWish')
	res.send(insertWish(JSON.parse(req)))
})

// getWish



app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})

