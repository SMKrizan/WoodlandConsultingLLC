import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_OWNER } from '../utils/queries';
import { OWNER_LOGIN, UPDATE_OWNER } from '../utils/mutations';
import Auth from '../utils/auth';


export const OwnerInfo = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="city/state" />
            <TextField source="password" />
        </Datagrid>
    </List>
);

const OwnerUpdate = (props) => {
    return (
    )
}


export default { OwnerInfo, OwnerUpdate };