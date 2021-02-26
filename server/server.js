const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const { authMiddleware } = require('./utils/auth');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

// serves as main endpoint for accessing API
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
});

// MIDDLEWARE (methods/fn called between processing request and sending response)
// integrates Apollo server with Express application
server.applyMiddleware({ app });
// the following 2 middleware are required for PUT and POST requests
// instructs that incoming request object are strings or arrays
app.use(express.urlencoded({ extended: false }));
// instructs that incoming request object is JSON
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    // logs location for testing GraphQL API
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
