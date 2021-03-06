// imports gql tagged template function
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Category {
    _id: ID
    categoryName: String
  }

  type Query {
    categories: [Category]
    owner: Owner
    projects: [Project]
    projectsByCategory(category: String!): [Project]
    projectById(_id: ID!): Project
    testimonials: [Testimonial]
    messages: [Message]
    clientList: [Project]
  }
  type Owner {
    _id: ID
    ownerName: String
    ownerEmail: String
    address: String
  }
  type Auth {
    token: ID
    owner: Owner
  }
  type Testimonial {
    _id: ID
    tstName: String
    tstCompany: String
    tstMessage: String
    created_at: String
    updated_at: String
  }
  type Message {
    _id: ID
    userName: String
    userCompany: String
    userEmail: String
    userMessage: String
    purpose: String 
    created_at: String
    updated_at: String
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
  type Location {
    _id: ID
    latitude: Float
    longitude: Float
  }
  type Mutation {
    login(ownerEmail: String!, password: String!): Auth
    updateOwner(
      ownerName: String
      ownerEmail: String
      address: String
    ): Owner
    addTestimonial(
      tstName: String!
      tstCompany: String!
      tstMessage: String!
    ): Testimonial
    updateTestimonial(
      _id: ID!
      tstName: String
      tstCompany: String
      tstMessage: String
    ): Testimonial
    removeTestimonial(_id: ID!): Testimonial
    addMessage(
      userName: String!
      userCompany: String
      userEmail: String!
      userMessage: String!
      purpose: String
    ): Message
    removeMessage(_id: ID!): Message
  }
`;

module.exports = typeDefs;