import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import { createServer } from 'http';
import bodyParser from 'body-parser';
import mocks from './mocks';
import './config/db';
import constants from './config/constants';
import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';


const app = express();

app.use(bodyParser.json());

app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: constants.GRAPHQL_PATH,
  }),
);

const schema = makeExecutableSchema ({
    typeDefs,
    resolvers
})
app.use(
  constants.GRAPHQL_PATH,
  graphqlExpress({
    schema
  }),
);

const graphQLServer = createServer(app)

mocks().then(() => {
    graphQLServer.listen(constants.PORT, err => {
      if (err) {
        console.error(err);
      } else {
        console.log(`App running on port: ${constants.PORT}`);
      }
    });
  });