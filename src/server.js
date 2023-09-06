const express = require("express");
const morgan = require("morgan");
const app = express();


app.use(morgan("dev"));


app.get("/test", (req, res)=>{
    res.status(200).send({
        massage: "Welcome to the Myshop Server site",
    });
});







app.listen(5001, ()=>{
    console.log(`myshop server is running`)
});
