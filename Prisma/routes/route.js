const express = require("express");
const router = express.Router();

const controllers = require("../controllers/index");
const  upload  = require("../middleware/upload");


// router.get("/all", controllers);
router.post("/upload",(req,res,next)=>{console.log("hello mf");next()}, upload.single( "file" ), controllers.uploadSheet);
router.get("/getAllEmployee", controllers.getAll)
router.post("/update", controllers.updateEmployee)

module.exports = router;