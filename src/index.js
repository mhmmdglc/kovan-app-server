const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const ItemAPI = require('./datasource/item-api');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
        return {
            itemAPI: new ItemAPI(),
        };
    },
});

server.listen().then(() => {
    console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/sandbox
  `);
});
