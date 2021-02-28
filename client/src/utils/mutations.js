import gql from 'graphql-tag';

// $email and $password passed as arguments for login; returns logged-in user's data and token
export const OWNER_LOGIN = gql`
mutation login($ownerEmail: String!, $password: String!) {
  login(ownerEmail: $ownerEmail, password: $password) {
    token
    owner {
      _id
      ownerName
    }
  }
}
`;

export const UPDATE_OWNER = gql`
mutation updateOwner($ownerEmail: String, $ownerName: String, $address: String) {
  updateOwner(ownerEmail: $ownerEmail, ownerName: $ownerName, address: $address) {
      _id
      ownerEmail
      ownerName
      address
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
      created_at
      updated_at
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
        created_at
        updated_at
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
        created_at
        updated_at
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
                created_at
                updated_at
        }
    }
`;

export const REMOVE_MESSAGE = gql`
mutation removeMessage(
    $_id: ID!) {
        removeMessage(
           _id: $_id) {
                _id
                userName
                userCompany
                userEmail
                userMessage
                purpose
                created_at
                updated_at
        }
    }
`;