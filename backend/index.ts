import express, { Application } from "express";
import appData from "./app";

const port: number = 2001;
const app: Application = express();
appData(app);

const server = app.listen(port, () => {
  console.log("Done on port", port);
});

process.on("uncaughtException", (error: any) => {
  console.log("Server is Down", error);
  process.exit(1);
});

process.on("unhandledRejection", (reason: any) => {
  console.log("Server i down", reason);
  server.close(() => {
    process.exit(1);
  });
});
