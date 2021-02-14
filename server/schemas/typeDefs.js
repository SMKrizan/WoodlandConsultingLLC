// imports gql tagged template function
const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        WoodlandConsulting: String
    }
    type Category {
        _id: ID
        name: String
    }

    type Porfolio {
        _id: ID
        name: String
        desctiption: String
        image: String
        date: String
        location: String
        category: Category
    }

    type Auth {
        token: ID
        user: Admin
    }

    type Mutations {
    }
`;

module.exports = typeDefs;