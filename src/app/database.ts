import mongoose from "mongoose";

import config from "../config";

function connect() {
  return mongoose
    .connect(config.MONGO_URL, {
      dbName: config.MONGO_DATABASE,
    })
    .then(() => {})
    .catch((err: any) => {
      console.log(err);
    });
}

export default connect;
