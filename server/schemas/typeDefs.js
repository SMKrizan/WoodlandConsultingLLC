// imports gql tagged template function
const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        WoodlandConsulting: String
        categories: [Category]
        projects(category: ID, name: String): [Project]
        projectById(_id: ID!): Project
        testimonials: [Testimonial]
        messages: [UserForm]
    }

    type Category {
        _id: ID
        name: String
    }

    type Project {
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

    type Testimonial {
        _id: ID
        firstName: String
        lastName: String
        company: String
        message: String
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

    type UserForm { 
        name: String
        company: String
        email: String
        message: String
    }
    
    type Mutation {
        login(email: String!, password: String!): Auth
        addTestimonial(firstName: String, lastName: String, company: String, message: String): Testimonial

    }
`;

module.exports = typeDefs;
// updateTestimonial(firstName: String, lastName: String, company: String, message: String): Testimonial
// removeTestimonial(_id: ID!): Testimonial
// removeMessage