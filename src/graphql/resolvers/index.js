import PostResolvers from './post-resolver';
import GraphQLDate from 'graphql-date';
import UserResolvers from './user-resolvers';

export default {
  Date: GraphQLDate,
  Query: {
    getPosts: PostResolvers.getPosts,
    getPost: PostResolvers.getPost,
  },

  Mutation: {
    createPost: PostResolvers.createPost,
    updatePost: PostResolvers.updatePost,
    deletePost: PostResolvers.deletePost,
    signup: UserResolvers.signup
  }
  
}