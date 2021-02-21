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
        testimonials {
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
        messages {
            _id
            userName
            userCompany
            userEmail
            userMessage
            purpose
            }
    }
`;
// export const QUERY_PROJECTS = gql`
export const GET_PROJECTS = gql`
    {
        projects {
            _id
            projectName
            description
            image
            projectDate
            cityState
            location {
                latitude
                longitude
            }
            category {
                _id
                categoryName
            }
            company
            WC
        }
    }
`;

// retrieves all clients being presented on client listing (wc, citystate, company, category)
export const GET_CLIENTLIST = gql`
    {
        projects {
            _id
            category {
                categoryName
            }
            cityState
            company
            WC
        }
    }
`;

// retrieve projects filtered by category ()
export const PROJECTS_BY_CATEGORY = gql`
    query projectsByCategory($categoryName: String!) {
        projectsByCategory(categoryName: $categoryName) {
            _id
            projectName
            description
            image
            projectDate
            cityState
            location {
                latitude
                longitude
            }
            category {
                categoryName
            }
            company
            WC
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
        projectDate
        cityState
        location {
            latitude
            longitude
        }
        category {
            categoryName
        }
        company
        WC  
    }
}
`;
