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

// retrieve owner's user data
export const GET_OWNER = gql`
    {
        owner {
            _id
            ownerName
            ownerEmail
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
            tstCompany
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
            userCompany
            userEmail
            userMessage
            purpose
            }
    }
`;

// retrieve all project data
export const GET_PROJECTS = gql`
    {
        project {
            _id
            projectName
            description
            image
            projectdate
            citystate
            location {
                latitude
                longitude
            }
            category
            company
            wc
        }
    }
`;

// retrieves all clients being presented on client listing (wc, citystate, company, category)
export const GET_CLIENTLIST = gql`
    {
        project {
            _id
            category
            citystate
            company
            wc
        }
    }
`;

// retrieve projects filtered by category ()
export const PROJECTS_BY_CATEGORY = gql`
    query projectsByCategory($categoryName: String) {
        projectsByCategory(categoryName: $categoryName) {
            _id
            projectName
            description
            image
            projectdate
            citystate
            location {
                latitude
                longitude
            }
            category
            company
            wc   
        }
    }
`;

// retrieves project by its id
export const PROJECT_BY_ID = gql`
query projectById($id: ID) {
    projectById(_id: $id) {
        _id
        projectName
        description
        image
        projectdate
        citystate
        location {
            latitude
            longitude
        }
        category
        company
        wc   
    }
}
`;
