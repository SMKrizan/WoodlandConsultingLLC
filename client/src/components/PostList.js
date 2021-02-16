import React from 'react';
import { 
    List, 
    Datagrid, 
    TextField, 
    DateField, 
    DeleteButton 
} from 'react-admin';

const PostList = (props) => {
    return (
    <List {...props}>
        <Datagrid>
            <TextField source='_id' />
            <TextField source='purpose' />
            <TextField source='email' />
            <DateField source='createdAt' />
            <DeleteButton basePath='/posts' />
        </Datagrid>
    </List>
    )
}

export default PostList;