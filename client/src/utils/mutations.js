import gql from 'graphql-tag';

// names/format/order must match those within server setup (resembles GraphQL Playground mutation syntax)

// passes in variables, $email and $password, as arguments for login form page; logged-in user's data and token will be returned.
export const LOGIN_USER = gql`
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
      }
    }
  }
`;

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

