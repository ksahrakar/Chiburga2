const express = require("express");
const router = express.Router();
var app = express();
//var burgs = require("../models/burger");
var exphbr = require("express-handlebars");

app.engine("handlebars", exphbr({defaultLayout:"main"}));
app.set("view engine", "handlebars");

router.get("/", function(req,res1){
    // burgs.all(function(res2){
    //     var hbsAll = {burger:res2};
    //     res1.render("index",hbsAll);
    // });
});

router.post("/", function(req, res) {
    // burgs.create(req.body, function(result) {
    //     // ID of the new burger
    //     res.render("index",result);
    // });
});

router.put("/:id",function(req,res0){
    // burgs.eat(req.params.id,function(res){
    //     res0.render("index",res);
    // })
})

  
module.exports = router;