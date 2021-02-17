import React from 'react';
import { 
    Create, 
    SimpleForm, 
    TextInput,
    TextField,
    EditButton
} from 'react-admin';

const TstAdd = (props) => {
    return (
    <Create title='Add a testimonial:' {...props}>
        <SimpleForm>
            <TextField disabled source='id' />
            <TextInput source='name' />
            <TextInput source='company' />
            <TextInput source='testimonial' />
            <EditButton label='Edit' basepath='/testimonials' />
        </SimpleForm>
    </Create>
    )
}

export default TstAdd;