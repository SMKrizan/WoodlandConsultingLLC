import { gql } from 'apollo-boost';

export const GET_PROJECTS = gql`
{
    project {
        id
        name
        description
        image
        location {
                lat
                lng
            }
    }
}`;

