const express = require("express");
//const router = express.Router();
var appH = express();
//var burgs = require("../models/burger");

var db = require("../models");
var exphbr = require("express-handlebars");
appH.engine("handlebars", exphbr({defaultLayout:"main"}));
appH.set("view engine", "handlebars");

module.exports = function(app){
    app.get("/", function(req,res1){
        db.Burgs.findAll({}).then(function(dbBurgs){
            //var hbsAll = {burger:dbBurgs};
            //res1.render("index",hbsAll);
            res1.json(dbBurgs);
        });
    });

    app.post("/", function(req, res) {
        db.Burgs.create({
            burger_name: req.body.burger_name,
            devoured: false
        }).then(function(dbBurgs){
            res.render("index",dbBurgs)
        })
        // burgs.create(req.body, function(result) {
        //     // ID of the new burger
        //     res.render("index",result);
        // });
    });

    app.put("/:id",function(req,res0){
        // burgs.eat(req.params.id,function(res){
        //     res0.render("index",res);
        // })
    })
}
