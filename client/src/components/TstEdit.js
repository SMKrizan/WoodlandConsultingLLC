import React from 'react';
import { 
    Edit, 
    SimpleForm, 
    TextField,
    TextInput, 
    DeleteButton,
    EditButton
} from 'react-admin';

const TstEdit = (props) => {
    return (
    <Edit title='Edit/Delete testimonials:' {...props}>
        <SimpleForm>
            <TextField disabled source='id' />
            <TextInput source='name' />
            <TextInput source='company' />
            <TextInput source='testimonial' />
            <EditButton label='Edit' basepath='/testimonials' />
            <DeleteButton basePath='/testimonials' />
        </SimpleForm>
    </Edit>
    )
}

export default TstEdit;