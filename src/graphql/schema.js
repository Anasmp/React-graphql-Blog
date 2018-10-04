export default `
scalar Date

type Status {
    message: String!
  }

  type User {
    _id: ID!
    username: String
    email: String!
    firstName: String
    lastName: String
    avatar: String
    createdAt: Date!
    updatedAt: Date!
  }
  
 type Post {
    _id: ID!
  text: String!
  createdAt: Date!
  updatedAt: Date!
 }

 type Query {
     getPosts: [Post]
     getPost(_id: ID!): Post
 }

 type Mutation {
    createPost(text: String!): Post
    updatePost(_id: ID!, text: String): Post
    deletePost(_id: ID!): Status
    signup(email: String!, fullName: String!, password: String!, avatar: String, username: String): User
  }

 schema {
     query : Query
     mutation: Mutation
 }

`