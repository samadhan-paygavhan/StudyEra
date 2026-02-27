import express from "express";
import "dotenv/config";
import connectDB from "./App/database/db.js";
import userRouter from "./App/routes/userRoute.js";
import authRouter from "./APP/routes/authRoute.js";
import courseUpload from "./APP/routes/courseUpload.js";
import cors from "cors";
import "./APP/config/passport.js";
import courseRoute from "./APP/routes/courseRoute.js";
import order from "./APP/routes/order.js";
import myBatch from "./APP/routes/myBatch.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", userRouter);
app.use(authRouter);
app.use("/api", courseUpload);
app.use("/api", courseRoute);
app.use("/api", order);
app.use("/api", myBatch);

app.listen(PORT, () => {
  connectDB();
  console.log(`App is listening on ${PORT}`);
});
