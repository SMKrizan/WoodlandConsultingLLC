import gql from 'graphql-tag';

// get one category
export const GET_CATEGORIES = gql`
    {
        categories {
            _id
            categoryName
        }
    }
`;

// retrieve admin's user data
export const GET_ADMIN = gql`
    {
        admin {
            adminName
            adminEmail
            address
        }
    }
`;

// retrieve all posted testimonials
export const GET_TESTIMONIALS = gql`
    {
        testimonial {
            _id
            tstName
            company
            tstMessage
        }
    }
`;

// retrieve all submitted contact-form data
export const GET_MESSAGES = gql`
    {
        message {
            _id
            userName
            company
            userEmail
            userMessage
            purpose
            }
        }
    }
`;

// retrieve all project data
export const GET_PROJECTS = gql`
    {
        projects {
            _id
            projectName
            description
            image
            projectdate
            citystate
            category
            company
            wc
            location {
                latitude
                longitude
            }
        }
    }
`;

// retrieves all clients being presented on client listing (wc, citystate, company, category)
export const GET_CLIENTLIST = gql`
    {
        projects {

        }

    }
`;

// retrieve projects filtered by category ()
export const PROJECTS_BY_CATEGORY = gql`
    {
        projects {

        }

    }
`;

// retrieves project by its id
export const PROJECT_BY_ID = gql`
    {
        projects {

        }

    }
`;
