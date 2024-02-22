const express = require("express");
const router = express.Router();

const controllers = require("../controllers/index");
const  upload  = require("../middlewares/upload");


// router.get("/all", controllers);
router.post("/upload",(req,res,next)=>{console.log("hello mf");next()}, upload.single( "file" ), controllers.uploadSheet);

module.exports = router;