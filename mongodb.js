const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url,
    function(err, db) {
        if (err) throw err;
        
        var dbo = db.db('mydb');
        var myobj = { name: "Jamal", adress: "Rufai Dopemu"};

        dbo.collection("customers").insertOne(myobj, function(err, res){
            if (err) throw err;
            console.log("One document inserted");
            db.close();
        });     
        });
        