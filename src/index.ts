import http from "http";
import express, { Express, Request, Response } from "express";

const app: Express = express();

app.get("/health", (req: Request, res: Response) => {
  res.send("Server is started...");
});

const httpServer = http.createServer(app);

httpServer.listen(3000, () => {
  console.log(`🚀 Server ready at http://localhost:3000`);
});
