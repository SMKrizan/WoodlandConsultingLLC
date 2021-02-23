import gql from 'graphql-tag';

// names/format... order(?) must match those within server setup

// $email and $password passed as arguments for login; returns logged-in user's data and token
export const OWNER_LOGIN = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`;

export const UPDATE_OWNER = gql`
mutation updateOwner($ownerEmail: String, $ownerName: String, $address: String, $password: String) {
  updateOwner(ownerEmail: $ownerEmail, ownerName: $ownerName, address: $address, password: $password) {
    token
    owner {
      _id
      ownerEmail
      ownerName
      address
      }
    }
  }
`;

export const ADD_TESTIMONIAL = gql`
  mutation addTestimonial($tstName: String!, $tstCompany: String!, $tstMessage: String!) {
    addTestimonial(tstName: $tstName, tstCompany: $tstCompany, tstMessage: $tstMessage) {
        _id
      tstName
      tstCompany
      tstMessage
      createdAt
    }
  }
`;

export const UPDATE_TESTIMONIAL = gql`
mutation updateTestimonial($_id: ID! $tstName: String, $tstCompany: String, $tstMessage: String) {
    updateTestimonial(_id: $_id, tstName: $tstName, tstCompany: $tstCompany, tstMessage: $tstMessage) {
        _id
        tstName
        tstCompany
        tstMessage
        createdAt
        updatedAt
        }    
    }
`;

export const REMOVE_TESTIMONIAL = gql`
mutation removeTestimonial($_id: ID!) {
    removeTestimonial(_id: $id) {
        _id
        tstName
        tstCompany
        tstMessage
    }
}
`;

export const ADD_MESSAGE = gql`
mutation addMessage(
    $userName: String!, 
    $userCompany: String, 
    $userEmail: String!, 
    $userMessage: String!, 
    $purpose: String) {
        addMessage(
            userName: $userName, 
            userCompany: $userCompany, 
            userEmail: $userEmail, 
            userMessage: $userMessage, 
            purpose: $purpose) {
                _id
                userName
                userCompany
                userEmail
                userMessage
                purpose
        }
    }
`;

export const REMOVE_MESSAGE = gql`
mutation removeMessage(
    $userName: String!, 
    $userCompany: String, 
    $userEmail: String!, 
    $userMessage: String!, 
    $purpose: String) {
        removeMessage(
            userName: $userName, 
            userCompany: $userCompany, 
            userEmail: $userEmail, 
            userMessage: $userMessage, 
            purpose: $purpose) {
                _id
                userName
                userCompany
                userEmail
                userMessage
                purpose
        }
    }
`;