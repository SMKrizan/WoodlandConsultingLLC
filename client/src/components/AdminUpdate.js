import React from 'react';
import { 
    Edit, 
    SimpleForm,
    EmailField,
    TextInput,
    EditButton
} from 'react-admin';

const AdminUpdate = (props) => {
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

export default AdminUpdate;