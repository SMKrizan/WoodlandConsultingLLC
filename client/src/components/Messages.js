import React from 'react';
import { 
    List, 
    Datagrid, 
    TextField,
    EmailField,
    DateField, 
    DeleteButton
} from 'react-admin';

const Messages = (props) => {
    return (
    <List {...props}>
        <Datagrid>
            <TextField disabled source='id' />
            <TextField source='type' />
            <TextField source='name' />
            <TextField source='company' />
            <EmailField source='email' />
            <TextField source='message' />
            <DateField source='createdAt' />
            <DeleteButton basePath='/posts' />
        </Datagrid>
    </List>
    )
}

export default Messages;