import React from 'react';
import { 
    List, 
    Edit, 
    Create, 
    Datagrid, 
    SimpleForm, 
    TextField,
    TextInput, 
    DeleteButton,
    EditButton
} from 'react-admin';

export const tstList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="company" />
            <TextField source="testimonial" />
        </Datagrid>
    </List>
);

const tstEdit = (props) => {
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

const tstAdd = (props) => {
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

export default { tstList, tstEdit, tstAdd };