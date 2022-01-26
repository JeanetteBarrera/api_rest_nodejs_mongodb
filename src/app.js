import express from "express";

const app = express();

/***** Routers *****/
import indexRouter from "./routes/indexRouter";
import adminRouter from "./routes/adminRouter";
import productRouter from "./routes/productsRouter";
import userRouter from "./routes/usersRouter";





app.use(indexRouter);
app.use("/products", productRouter);
app.use("/users", userRouter),
app.use("/admin", adminRouter)


app.listen(3000, () => {
    console.log("Server on port 3000" )
})