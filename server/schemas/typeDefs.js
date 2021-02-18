// imports gql tagged template function
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Category {
    _id: ID
    categoryName: String
  }

  type Query {
    categories: [Category]
    admin: Admin
    projects: [Project]
    projectsByCategory(category: ID, projectName: String): [Project]
    projectById(_id: ID!): Project
    testimonials: [Testimonial]
    messages: [Message]
    clientList: [Project]

  }

  type Project {
    _id: ID
    projectName: String
    description: String
    image: String
    projectDate: String
    cityState: String
    location: [Location]
    category: Category
    company: String
    WC: Boolean
  }

  type Admin {
    _id: ID
    adminName: String
    adminEmail: String
    address: String
  }

  type Auth {
    token: ID
    admin: Admin
  }

  type Testimonial {
    _id: ID
    tstName: String
    company: String
    tstMessage: String
  }
  type Message {
    userName: String
    company: String
    userEmail: String
    userMessage: String
    purpose: String
  }
  type Location {
    latitude: Float
    longitude: Float
  }
  type Mutation {
    login(adminEmail: String!, password: String!): Auth
    updateAdmin(
      adminName: String
      adminEmail: String
      address: String
      password: String
    ): Admin
    addTestimonial(
      tstName: String
      company: String
      tstMessage: String
    ): Testimonial
    updateTestimonial(
      tstName: String
      company: String
      tstMessage: String
    ): Testimonial
    removeTestimonial(_id: ID!): Testimonial
    addMessage(
      _id: ID!
      userName: String!
      company: String
      userEmail: String!
      userMessage: String!
      purpose: String
    ): Message
    removeMessage(_id: ID!): Message
   
  }
`;

module.exports = typeDefs;

// make image required in mutation for portfolio
// null for not image
// filter on the portfolio page for image
// in resolver before return
// array.filter(project => {
//     return project.image !== null
// })
// clientList(company: String, description: String, location: [Location], WC: Boolean): [Project]
// input client {
//     company: String
//     description: String
//     location: [Location]
//     WC: Boolean
// }
