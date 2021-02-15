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
        description: String
        image: String
        date: String
        location: String
        category: Category
    }

    type Admin {
        _id: ID
        firstName: String
        lastName: String
        email: String
    }

    type Auth {
        token: ID
        user: Admin
    }
     
    type Map {
        projectName: String
        description: String
        category: Category
        cityState: String
        longtitude: String
        latitude: String
        projectDate: String
    }
    type Mutations {
        login(email: String!, password: String!): Auth
        
    }
`;

module.exports = typeDefs;