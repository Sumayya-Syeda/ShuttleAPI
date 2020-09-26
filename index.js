//scripts comment for package.json: 
//no"test": "echo \"Error: no test specified\" && exit 1"

const express = require("express")
const axios = require("axios")

const app = express()
const port = process.env.port || 5000;

app.get("/",  function (req, res){
    res.send("Shuttle API");
});

app.get("/locations", function (req, res){
    axios
        .get(
            "http://andysbuses.com/Services/JSONPRelay.svc/GetMapVehiclePoints?ApiKey=8882812681"
        )
        .then(function (data) { //function (data) same thing as (data) =>
            res.send(data.data);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send("Error");
        });
});

app.listen(5000, () => console.log('App Listening on port 5000'));