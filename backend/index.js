import express from "express";
import "dotenv/config";
import connectDB from "./App/database/db.js";
import router from "./App/routes/userRoute.js";
import cors from "cors";

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
app.use(router);

app.listen(PORT, () => {
  connectDB();
  console.log(`App is listening on ${PORT}`);
});
