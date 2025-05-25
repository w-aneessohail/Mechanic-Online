import Express, { json } from "express";
import { connectDB } from "./db/config.js";
import intitDB from "./db/init.js";
import customerRouter from "./router/customer/index.js";
import cust_AuthRoutes from "./router/auth/customerAuth/index.js";
import mech_AuthRoutes from "./router/auth/mechanicAuth/index.js";
import request_SRouter from "./router/customer/requestServices.js";
import mechanicRouter from "./router/mechanic/index.js";
import categoriesRouter from "./router/mechanic/categories.js";
import cust_ImageRouter from "./router/customer/images.js";
import mech_ImageRouter from "./router/mechanic/images.js";
import cust_PasswordRouter from "./router/customer/forgotPassword.js";
import mech_PasswordRouter from "./router/mechanic/forgotPassword.js";
import job_CompletionRouter from "./router/jobCompletion.js";
import cust_LogoutRouter from "./router/auth/customerAuth/logout.js";
import cors from "cors";

const app = Express();
const port = 3000;

app.use(json());

intitDB()
  .then(() => {
    console.log("Database Synced");
  })
  .catch((err) => {
    console.error("DB Crashed", err);
  });

connectDB();

app.use(cors());

app.use(customerRouter);
app.use(cust_AuthRoutes);
app.use(mech_AuthRoutes);
app.use(request_SRouter);
app.use(mechanicRouter);
app.use(categoriesRouter);
app.use(cust_ImageRouter);
app.use(mech_ImageRouter);
app.use(cust_PasswordRouter);
app.use(mech_PasswordRouter);
app.use(job_CompletionRouter);
app.use(cust_LogoutRouter);

app.listen(port, () => {
  console.log("Server Started Successfully");
});
