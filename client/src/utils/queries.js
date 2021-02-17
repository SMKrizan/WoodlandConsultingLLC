// helps parse client-side tagged template-literal statements for queries and mutations
import gql from 'graphql-tag';

// retrieves all data related to the (logged-in?) user; syntax is different as no variables are passed
export const GET_ME = gql`
    {
        me {
            _id
            username
            email
            bookCount
            savedBooks {
                bookId
                description
                title
                authors
                image
                link
            }
        }
    }
`;