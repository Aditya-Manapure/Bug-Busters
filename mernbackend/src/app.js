const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");
require("./db/conn");
const port = process.env.PORT || 3000;

const static_path = path.join(__dirname,"../public");
app.use(express.static(static_path));

const template_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");

app.set("view engine", "hbs");
app.set("views",template_path);
hbs.registerPartials(partials_path);


app.get("/", (req,res) => {
    res.render("index")
});

app.listen(port, () => {
    console.log(`Server is running at port no ${port}`);
});