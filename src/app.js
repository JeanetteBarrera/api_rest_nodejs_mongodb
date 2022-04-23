const express = require("express");
const mongoose = require("mongoose")
//import '@babel/polyfill';
require("dotenv").config()
//import { connect } from "./database";

const app = express();
app.use(express.json())


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
const adminRouter = rquire("./routes/admin");
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");
const authRouter = require("./routes/auth");

app.use("/api/v1/products", productRouter);
app.use("/api/v1/user", userRouter);
//app.use(adminRouter);
app.use('/api/v1/auth', authRouter);


app.listen(3000, () => {
    console.log("Server on port 3000")
})