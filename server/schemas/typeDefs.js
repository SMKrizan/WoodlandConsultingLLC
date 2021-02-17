// imports gql tagged template function
const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Category {
        _id: ID
        name: String
    }

    type Query {
        categories: [Category]
        admin: Admin
        projects: [Project]
        projectsByCategory(category: ID, name: String): [Project]
        projectById(_id: ID!): Project
        testimonials: [Testimonial]
        messages: [UserForm]
    }    

    type Project {
        _id: ID
        projectName: String
        description: String
        image: String
        projectDate: String
        cityState: String
        location: String
        category: Category
        company: String
        WC: Boolean
    }

    type Admin {
        _id: ID
        name: String
        email: String
        cityState: String
    }

    type Auth {
        token: ID
        admin: Admin
    }

    type Testimonial {
        _id: ID
        name: String
        company: String
        message: String
    }

    type UserForm { 
        name: String
        company: String
        email: String
        message: String
        purpose: String
    }
   
    input client {
        company: String
        description: String
        location: String
        WC: Boolean
    }
        
    type Mutation {
        login(email: String!, password: String!): Auth
        updateAdmin(name: String, email: String, cityState: String, password: String): Admin
        addTestimonial(name: String, company: String, message: String): Testimonial
        updateTestimonial(name: String, company: String, message: String): Testimonial
        removeTestimonial(_id: ID!): Testimonial
        addMessage(_id: ID!, name: String!, company: String, email: String!, message: String!, purpose: String)
        removeMessage(_id: ID!): UserForm
    }
`;

module.exports = typeDefs;
// addProject(project_name: String, description: String, image: String, location: Object, category: []): Project
// updateTestimonial(firstName: String, lastName: String, company: String, message: String): Testimonial
// removeTestimonial(_id: ID!): Testimonial
// removeMessage

// make image required in mutation for portfolio
// null for not image
// filter on the portfolio page for image
// in resolver before return
// array.filter(project => {
//     return project.image !== null
// })

// input portfolioProject {
//     projectName: String
//     description: String
//     image: String!
//     category: [Category]
// }

