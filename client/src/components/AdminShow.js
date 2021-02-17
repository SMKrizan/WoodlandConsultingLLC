import React from 'react';
import { 
    List, 
    Datagrid,
    SimpleShowLayout, 
    EmailField,
    TextField, 
    DateField,
    EditButton
} from 'react-admin';

export const AdministratorList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="firstName" />
            <TextField source="lastName" />
            <EmailField source="email" />
            <TextField source="city" />
            <TextField source="state" />
            <DateField source="password" />
        </Datagrid>
    </List>
);

const AdminShow = (props) => {
    return (
    <List {...props}>
        <SimpleShowLayout>
            <TextField source='firstName' />
            <TextField source='lastName' />
            <EmailField source='email' />
            <TextField source='city' />
            <TextField source='state' />
            <TextField source='password' />
            <EditButton label='Edit' basepath='/administrator' />
        </SimpleShowLayout>
    </List>
    )
}

export default AdminShow;