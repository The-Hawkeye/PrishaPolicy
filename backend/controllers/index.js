const { extractDataFromExcel } = require("../services");

exports.uploadSheet = async(req,res)=>{
    console.log(req.file);

    await extractDataFromExcel(req.file);
    console.log(("service called"));

    res.json({
        message:"hello"
    })
}