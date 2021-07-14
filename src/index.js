import { GraphQLServer } from 'graphql-yoga'

// Scalar types: String, Int, Boolean, Float, ID

// Type definitions (schema)
const typeDefs = `
    type Query {
        hello: String!
        name: String!
        location: String!
        bio: String!
    }
`;

// Resolvers
const resolvers = {
    Query: {
        hello() {
            return 'This is my first query!';
        },
        name() {
            return 'Car RG';
        },
        location() {
            return 'Galeana, Morelos';
        },
        bio() {
            return 'Soy proactivo';
        },
    }
};

const server = new GraphQLServer({
    typeDefs,
    resolvers
});

server.start(() => {
    console.log('The server is up!');
});
