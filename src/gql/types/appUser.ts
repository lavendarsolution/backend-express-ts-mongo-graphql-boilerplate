const typeDef = `
  type AppUser {
    id: ID!

    # unique in the database; it is email currently and will stay that way for a while
    name: String!
    password: String!
    
    timestamp: String! # keeps track of when the user was added.
    updatedAt: String! # updated document timestamp
  }
`;

export default typeDef;
