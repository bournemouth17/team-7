var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rootpw"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    //runQuery("SELECT * FROM wishDonator.user;");
    //console.log(jsonResults.location);
});

module.exports = {
    getXUsers: function(num) {
        //input number of users to get
        var queryTemp = "SELECT * FROM wishDonator.user LIMIT " + num;
        console.log(queryTemp)
        return this.runQuery(queryTemp);
    },

    insertUser: function(jsonDetails) {
        //must follow this exact structure when inputted as JSON file with all the below details
        var genderId;
        if (json[0].gender == "Male") {
            genderId = 1;
        } else {
            genderId = 2;
        }
        var queryTemp = "INSERT INTO wishDonator.user (`name`, `age`, `genderId`, `phone`, " +
            "`username`, `password`, `location`) VALUES (\"" + jsonDetails[0].name + "\", " + jsonDetails[0].age + ", " + genderId + ", "
            + jsonDetails[0].phoneNumber + ", \"" + jsonDetails[0].username + "\", \"" + jsonDetails[0].password + "\", \"" + jsonDetails[0].location +
            "\");";
        this.runQuery(queryTemp);
    },

    getChildDetails: function(num) {
        var queryTemp = "SELECT childName, description, wishId FROM wishDonator.wish LIMIT " + wishId;
        return this.runQuery(queryTemp);
    },

    getWish: function(wishId) {
        //specify number of children to retrieve
        var queryTemp = "SELECT * FROM wishDonator.wish WHERE wishId " + num;
        return this.runQuery(queryTemp);
    },

    getWishesAndDonations: function(wishId) {
        var queryTemp = "SELECT childname, description, totalPrice, currentPrice, value, name FROM wishDonator.wish, wishDonator.donations WHERE wishDonator.wish.wishId = " + wishId + " AND wishDonator.wish.wishId = wishDonator.donations.donationId;";
        console.log(queryTemp);
        this.runQuery(queryTemp);
    },

    insertWish: function(jsonDetails) {
        var queryTemp = "INSERT INTO wishDonator.wish (`description`, `youtubeLink`, `imageLink`, `totalPrice`, `currentPrice`, `childName`, `disease`) " +
            "VALUES (\"" + jsonDetails[0].description + "\", \"" + jsonDetails[0].youtubeLink + "\", \"" + jsonDetails[0].imageLink + "\", " +
            jsonDetails[0].totalPrice + ", " + jsonDetails[0].currentPrice + ", \"" + jsonDetails[0].childName + "\", \"" + jsonDetails[0].disease + "\")";
    },

    insertDonation: function(jsonDetails) {
        var queryTemp = "INSERT INTO wishDonator.donations (`value`, `name`, `userId`) VALUES (" + jsonDetails[0].value + ", \"" + jsonDetails[0].name + "\", \""
            + jsonDetails[0].userId + "\")";
    },

    getDonation: function(userId) {
        var queryTemp = "SELECT * FROM wishDonator.donations WHERE userId = " + userId + ";";
        return this.runQuery(queryTemp);
    },

    deleteDonation: function(donationId) {
        var queryTemp = "DELETE FROM "
    }

    runQuery: function(query) {
        con.query(query, function (err, result) {
            if (err) throw err;
            //console.log(result);
            return JSON.stringify(result);
        });
    }
}