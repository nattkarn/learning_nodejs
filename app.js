// ===> express
import express from "express";
import promBundle from "express-prom-bundle";

import AppRouter from "./src/app.route.js";

const app = express();

const metricsMiddleware = promBundle({ includeMethod: true });
app.use(metricsMiddleware);

//TODO : explain
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(AppRouter)



const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});

//GET Method
app.get("/status", (req, res) => {
  res.status(200).json({
    success: true,
    data: {
      timestamp: new Date(),
    },
  });
});

