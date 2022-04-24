const express = require("express");
const mongoose = require("mongoose")
require("dotenv").config();
const cors = require("cors");

const app = express();

app.use(express.json())
app.use(cors())

mongoose
    .connect(
        process.env.MONGO_URL,
        {
            keepAlive: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
    .then(() => console.log("DB Connection Successfull!"))
    .catch(err => console.log(err))


/***** Routers *****/
const cartRouter = rquire("./routes/cart");
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");
const authRouter = require("./routes/auth");

app.use("/api/v1/products", productRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/cart", cartRouter);
app.use('/api/v1/auth', authRouter);


app.listen(process.env.PORT || 3002, () => {
    console.log("Server is running!")
})