// imports gql tagged template function
const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        WoodlandConsulting: String
        categories: [Category]
        portfolioProjects(category: ID, name: String): [Portfolio]
        portfolioProject(_id: ID!): Portfolio
    }

    type Category {
        _id: ID
        name: String
    }

    type Portfolio {
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

    type AdminForm {
        firstName: String
        lastName: String
        company: String
        testimonial: String
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
    
    type Mutation {
        login(email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;
// addTestimonial(firstName: String, lastName: String, company: String, testimonial: String): AdminForm
        // updateTestimonial(firstName: String, lastName: String, company: String, testimonial: String): AdminForm
// deletetestimonial
// deletemessage