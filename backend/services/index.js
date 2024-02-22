const fs = require("fs");
const xlsx = require("xlsx");

exports.extractDataFromExcel = async(file) => {

    console.log("extract");

        const workbook = xlsx.readFile(file.path);
        console.log("1")
        const sheetNames = workbook.SheetNames;
        console.log("2")

        for (const sheetName of sheetNames) {
            console.log("3")
            console.log(sheetNames.length)
            const sheet = workbook.Sheets[sheetName];
            // console.log(sheet)

            console.log("4")
            const jsonData = xlsx.utils.sheet_to_json(sheet);
            console.log("5")
            // console.log(jsonData);

            if (jsonData.length === 0) continue;
            for(let i of  jsonData){

                console.log(i)   
            }  
        }
        return null;
};