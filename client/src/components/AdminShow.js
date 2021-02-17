import React from 'react';
import { 
    List, 
    Datagrid,
    EmailField,
    TextField, 
} from 'react-admin';

export const Administrator = props => (
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

export default Administrator;