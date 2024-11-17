const express = require("express");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorControllers = require("./controllers/error");

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use("/", errorControllers.error404);

app.listen(3000, () => {
  console.log(`server is running at http://localhost:3000`);
});
