const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const port = process.env.PORT || 8000;

const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

//to set the view engine
app.set('view engine', 'hbs');
// set other than view engine change path and get 
app.set('views', templatePath);
hbs.registerPartials(partialsPath);

app.use(express.static(staticPath));
//template engine route
app.get("/", (req,res) =>{
    res.render("index", {
        names:"nitesh",
        name:"kal"
    });
});
app.get("/about", (req,res) =>{
    res.render("about", {
        names:"nitesh",
        name:"kal"
    });
});
app.get("*", (req,res) =>{
    res.send("oops.. 404 error");
});

// app.use(express.static(staticPath));
app.get("/", (req,res) =>{
    res.send("hello from express server");
});

app.listen(8000, () =>{
    console.log("listing at 8000");
}); 