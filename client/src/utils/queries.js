import gql from 'graphql-tag';

// get one category
export const GET_CATEGORY = gql`
    {
        categories {
            name
        }
    }
`;

// retrieve admin user data
export const GET_ADMIN = gql`
    {
        admin {
            name
            email
            city/state
        }
    }
`;

// retrieve all posted testimonials
export const GET_TESTIMONIALS = gql`
    {
        testimonial {
            name
            company
            message
        }
    }
`;

// retrieve all submitted contact-form data
export const GET_MESSAGES = gql`
    {
        message {
            _id
            name
            company
            email
            message
            purpose
            }
        }
    }
`;

// retrieve all project data
export const GET_PROJECTS = gql`
    {
        projects {
            category
            project-name
            description
            city/state
            project-date
            company
            wc
            image
            location {
                longitude
                latitude
            }
        }
    }
`;