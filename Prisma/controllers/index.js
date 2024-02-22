
const prisma = require("../DB/db.config");
const { extractDataFromExcel } = require("../services/index");

exports.uploadSheet = async (req, res) => {
    console.log(req.file);

    try {
        const jsonData = await extractDataFromExcel(req.file);
        console.log(("service called"));

        const result = await prisma.employee.createMany({
            data: jsonData,
        });

        console.log(result);

        res.json({
            message: "Data uploaded successfully",
            result: result,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "An error occurred while uploading the data",
        });
    }
};


exports.getAll = async (req, res) => {
    try {
        const employees = await prisma.employee.findMany();
        res.json({
            message: "All employee details retrieved successfully",
            data: employees,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "An error occurred while retrieving employee details",
        });
    }
};

exports.updateEmployee = async (req, res) => {
    const { Employee_Code, Relation } = req.query;
    const newData = req.body;

    try {
        const employee = await prisma.employee.findUnique({
            where: {
                    Employee_Code: Employee_Code,
                    Relation: Relation, 
            },
            // select:{
            //     Relation: Relation,
            // }
        });

        if (!employee) {
            return res.status(404).json({ error: "Employee not found" });
        }

        const updatedEmployee = await prisma.employee.update({
            where: {
              Id: employee.Id,
            },
            data: newData,
        });

        res.json({
            message: "Employee updated successfully",
            data: updatedEmployee,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while updating the employee" });
    }
};

exports.singleEntry = async (req, res) => {
    const { Employee_Code, Relation } = req.body;

    try {
        const existingEmployee = await prisma.employee.findUnique({
            where: {
                    Employee_Code: Employee_Code,
                    Relation: Relation,
            },
        });

        if (existingEmployee) {
            return res.status(400).json({ error: "Employee entry already exists" });
        }

        const newEmployee = await prisma.employee.create({
            data: req.body,
        });

        res.json({
            message: "Employee entry created successfully",
            data: newEmployee,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while creating employee entry" });
    }
};