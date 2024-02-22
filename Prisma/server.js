const App = require("./index");
// const mongoose = require("mongoose");

// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }).then(()=>console.log("Connected to mongoDB")).catch((err)=>{
//     console.log(err, "Failed to connect to DB")
// })


App.listen(process.env.PORT, ()=>{
    console.log(`Server listening on port: ${process.env.PORT}`)
})