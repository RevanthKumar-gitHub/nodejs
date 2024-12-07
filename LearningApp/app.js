const express = require("express");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const userRoutes = require("./routes/user");
const errorControllers = require("./controllers/error");
const cartRoutes = require("./routes/cart");
const orderRoutes = require("./routes/order");
const sequelize = require("./utils/db");
const Product = require("./models/Product");
const User = require("./models/User");
const Cart = require("./models/Cart");
const CartItem = require("./models/Cart-item");
const Order = require("./models/Order");
const OrderItem = require("./models/Order-item");

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  User.findByPk(1)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});

app.use("/user",userRoutes);
app.use("/admin", adminRoutes);
app.use("/cart", cartRoutes);
app.use(shopRoutes);
app.use("/orders",orderRoutes);

app.use("/", errorControllers.error404);

Product.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User);
Product.belongsToMany(Cart, { through: CartItem });
Cart.belongsToMany(Product, { through: CartItem });
Order.belongsTo(User);
User.hasMany(Order);
Order.belongsToMany(Product,{through : OrderItem});
Product.belongsToMany(Order,{through : OrderItem});



sequelize
  .sync({})
  .then(() => {
    return User.findByPk(1);
  })
  .then((user) => {
    if (!user) {
      User.create({
        username: "Revanth",
        password: "1812",
        email: "reva@gmail.com",
      }).then((user) => {
        return user.createCart();
      });
    }
    return Promise.resolve(user);
  })
  .then(console.log("All tabels are created!"))
  .catch((err) => console.log("Error in creating tabels : ", err));

app.listen(3000, () => {
  console.log(`server is running at http://localhost:3000`);
});
