import React from 'react';
import { 
    List, 
    Edit, 
    Datagrid,
    SimpleForm,
    EmailField,
    TextField, 
    TextInput,
    EditButton
} from 'react-admin';

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
    <Edit title='Update your information:' {...props}>
        <SimpleForm>
            <TextInput source='firstName' />
            <TextInput source='lastName' />
            <EmailField source='email' />
            <TextInput source='city' />
            <TextInput source='state' />
            <TextInput source='password' />
            <EditButton label='Edit' basepath='/administrator' />
        </SimpleForm>
    </Edit>
    )
}


export default { OwnerInfo, OwnerUpdate };