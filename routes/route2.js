var express = require("express");
var node = require("../colors.json");
var router = express.Router();
var arr = node.colors;

router.get("/all", function(req, res){
  res.send(arr);
});

router.get("/:color", function(req,res,next){
  var index = -1;
  var color = req.params.color.toLowerCase().toString();

  var filter = arr.find(function(item,i){
    if(item.color === color){
      index = i;
      return index;
    }
  });
  if (index === -1){
    res.status(404).send("404");
  }else{res.send(arr[index]);
    }
});

module.exports = router;
