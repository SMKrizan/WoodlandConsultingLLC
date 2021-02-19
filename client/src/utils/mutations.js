import gql from 'graphql-tag';

<<<<<<< HEAD
// names/format/order must match those within server setup (resembles GraphQL Playground mutation syntax)

// passes in variables, $email and $password, as arguments for login form page; logged-in user's data and token will be returned.
export const LOGIN_USER = gql`
=======
// names/format... order(?) must match those within server setup

// $email and $password passed as arguments for login; returns logged-in user's data and token
export const OWNER_LOGIN = gql`
>>>>>>> develop
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

<<<<<<< HEAD
export const ADD_USER = gql`
mutation addUser($email: String!, $username: String!, $password: String!) {
  addUser(email: $email, username: $username, password: $password) {
    token
    user {
      _id
      email
      username
      savedBooks {
        title
        description
        bookId
        image
        authors
        link
      }
    }
  }
}
`;

export const SAVE_BOOK = gql`
  mutation saveBook($bookId: String!, $title: String!, $description: String!, $authors: [String], $image: String, $link: String) {
    saveBook(bookId: $bookId, title: $title, description: $description, authors: $authors, image: $image, link: $link) {
      _id
      username
      email
      savedBooks {
        bookId
        title
        description
        authors
        image
        link
=======
export const UPDATE_OWNER = gql`
mutation updateOwner($ownerEmail: String!, $ownerName: String!, $address: String, $password: String!) {
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
>>>>>>> develop
      }
    }
  }
`;

<<<<<<< HEAD
export const REMOVE_BOOK = gql`
mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
      _id
      username
      email
      savedBooks {
        bookId
        title
        description
        authors
        image
        link
      }
    }
  }
`;

=======
export const UPDATE_TESTIMONIAL = gql`
mutation updateTestimonial($tstName: String!, $tstCompany: String!, $tstMessage: String!) {
    updateTestimonial(tstName: $tstName, tstCompany: $tstCompany, tstMessage: $tstMessage) {
        _id
        tstName
        tstCompany
        tstMessage
        }    
    }
`;

export const REMOVE_TESTIMONIAL = gql`
mutation removeTestimonial($id: ID) {
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
                messageCount
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
                messageCount
        }
    }
`;
>>>>>>> develop
