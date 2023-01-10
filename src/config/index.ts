import * as utils from "../utils";

const { MONGO_URL, MONGO_DATABASE } = process.env;

utils.assertIsDefined(MONGO_URL);
utils.assertIsDefined(MONGO_DATABASE);

export default {
  MONGO_URL,
  MONGO_DATABASE,
};
