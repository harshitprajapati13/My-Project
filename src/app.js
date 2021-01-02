const express = require('express');
const app = express();
const path=require('path');
const hbs=require('hbs');
const port = process.env.PORT || 8000;

// public static path
const staticPath=path.join(__dirname,"../public")
const templatePath=path.join(__dirname,"../templates/views")
const partialsPath=path.join(__dirname,"../templates/partials")

app.set('view engine','hbs');
app.set('views',templatePath);
hbs.registerPartials(partialsPath);

app.use(express.static(staticPath));


// routing

app.get("/", (req, res) => {
    // res.send("<h1>Welcome To MY Website</h1>")
    res.render('index');
});
app.get("/about", (req, res) => {
    // res.send("<h1>Welcome To MY About Page</h1>")
    res.render('about');
});
app.get("/weather", (req, res) => {
    // res.send("<h1>Welcome To MY weather Page</h1>")
    res.render("Weather");
});
app.get("*", (req, res) => {
    // res.send("<h1>404 ERROR</h1>")
    res.render('errorpage');
});

app.listen(8000, () => {
    console.log("Yes It is working right")
});