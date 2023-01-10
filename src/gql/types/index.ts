import appUser from "./appUser";

const Schema = `
  scalar Upload
  scalar JSON
  scalar JSONObject

  type Query {
    _empty: String
  }

  type Mutation {
    empty: String
  }

  type Subscription {
    _empty: String
  }
`;

export default [Schema, appUser];
