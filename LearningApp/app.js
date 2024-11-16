const express = require("express");
const bodyParser = require("body-parser");
const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const path = require("path");


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use("/admin", adminData.router);
app.use(shopRoutes);

app.use("/", (req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "PageNotFound.html"));
});

app.listen(3000, () => {
  console.log(`server is running at http://localhost:3000`);
});
