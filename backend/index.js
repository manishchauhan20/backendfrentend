const express = require("express")
const app = express();
const port= 5000;
app.listen(port,()=>{
console.log(`server is running on Port  is ${port}`);    
})
// console.log(app.listen());
