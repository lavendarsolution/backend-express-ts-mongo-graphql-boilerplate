import http from "http";
import express, { Express, Request, Response } from "express";
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer, ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import { makeExecutableSchema } from "@graphql-tools/schema";
import typeDefs from "./gql/types";
import resolvers from "./gql/resolvers";
import config from "./config";
import Database from "./app/database";
import models from "./models";

Database().then(() => {
  const appUser = new models.AppUser({ name: "adasd" });
  appUser.save();

  console.log(appUser);
});

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Server started...");
});

async function startApolloServer(typeDefs: any, resolvers: any) {
  const app = express();
  const httpServer = http.createServer(app);

  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  const server = new ApolloServer({
    schema,
    csrfPrevention: true,
    cache: "bounded",
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
  });
  await server.start();
  server.applyMiddleware({
    app,
    path: "/graphql",
    // cors: true,
  });

  await new Promise<void>((resolve) => httpServer.listen({ port: 3000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:3000${server.graphqlPath}`);
}

startApolloServer(typeDefs, resolvers);
