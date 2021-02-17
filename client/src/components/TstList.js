import React from 'react';
import { 
    List, 
    Datagrid, 
    TextField,
} from 'react-admin';

export const TestimonialList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="company" />
            <TextField source="testimonial" />
        </Datagrid>
    </List>
);

export default TestimonialList;