import React from 'react';
import { 
    List, 
    Datagrid, 
    TextField,
    TextInput, 
    DeleteButton,
    EditButton
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

// const TstList = (props) => {
//     return (
//     <List {...props}>
//         <Datagrid>
//             <TextField disabled source='id' />
//             <TextInput source='name' />
//             <TextInput source='company' />
//             <TextInput source='testimonial' />
//             <EditButton label='Edit' basepath='/testimonials' />
//             <DeleteButton basePath='/testimonials' />
//         </Datagrid>
//     </List>
//     )
// }

// export default TstList;