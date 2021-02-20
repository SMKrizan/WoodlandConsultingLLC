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

export const ownerInfo = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="ownerName" />
            <EmailField source="ownerEmail" />
            <TextField source="address" />
            <TextField source="password" />
        </Datagrid>
    </List>
);

const ownerUpdate = (props) => {
    return (
    <Edit title='Update your information:' {...props}>
        <SimpleForm>
            <TextInput source='ownerName' />
            <EmailField source='ownerEmail' />
            <TextInput source='address' />
            <TextInput source='password' />
            <EditButton label='Edit' basepath='/owner' />
        </SimpleForm>
    </Edit>
    )
}


export default { ownerInfo, ownerUpdate };