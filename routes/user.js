const express = require('express');
let router = express.Router();
router
.route('/:id')
.get((req,res)=>{
    res.send("retrive id value " + req.params.id);
})
.put((req,res)=>{
    res.send(" update this id value " + req.params.id);
})
.delete((req,res)=>{
    res.send("delete this id value " + req.params.id);
})


module.exports = router;



