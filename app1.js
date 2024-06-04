const express = require("express");
const app = express();
const port = 80;
 
app.get("/", (req, res)=>{ 
    res.status(200).send("This is homepage of my first express app with wccd");
});

app.get("/about", (req, res)=>{
    res.send("This is about page of my first express app with wccd");
});

app.post("/about", (req, res)=>{
    res.send("This is a post request about page of my first express app with wccd");
});
app.get("/this", (req, res)=>{
    res.status(404).send("This page is not found on my website wccd");
});

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});