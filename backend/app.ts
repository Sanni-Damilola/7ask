import express, { Application, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";

const app = (app: Application) => {
  app.use(express.json()).use(cors()).use(morgan("dev"));
  app.all("*", (req: Request, res: Response) => {
    res.status(404).json({
      message: `${req.originalUrl} Does not Exist`,
    });
  });

  app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
      message: "Api is Available",
    });
  });
};

export default app;
