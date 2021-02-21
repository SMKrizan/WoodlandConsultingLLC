import React, { useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { useStoreContext } from "../../utils/GlobalState";

import { GET_MESSAGES } from '../../utils/queries';
import { DELETE_MESSAGE } from '../../utils/actions';
// import { REMOVE_MESSAGE } from '../utils/mutations';
// import { idbPromise } from "../../utils/helpers";
// import Auth from '../utils/auth';

// conditionally renders message data; destructuring rather than using 'props.userName' etc. throughout JSX code
const MessageList = ({ userName, userCompany, userEmail, userMessage, purpose, createdAt }) => {
    const [state, dispatch] = useStoreContext();
    const { messages } = state;

    // reminder: "data" is the object described by associated query/mutation
    const { loading, data } = useQuery(GET_MESSAGES);
    const messageData = data?.messages;
    console.log('messageData: ', messageData)
    if (loading) {
        return <div>Loading...</div>;
    }
    else if (!messageData) {
        return <h2>No messages available...</h2>;
    }

    useEffect(() => {
        if(messages) {
            dispatch({
                type: DELETE_MESSAGE,
                messages: 
            })
        }
    });

    const handleClick = id => {
        dispatch({
            type: DELETE_MESSAGE,
            messages: messageList
        })
    }
    
    // first checking to see whether thoughts array contains data
    if (!messageList.length) {
        return <h3>No Messages</h3>;
    }

    return (
        <div>
            <h3>You have {messageData.length} messages:</h3>
            {messageList &&
                messageList.map(message => (
                    // 'key' is required on mapped data for React to track data changes
                    <div key={message._id}>
                        <>
                        <p>
                            {purpose}
                        Name: {userName}
                        Company: {userCompany}
                        Email: {userEmail}
                        Message: {userMessage}
                        Date: {createdAt}
                        </p>
                        </>
                    </div>
                ))}
        </div>
    );
};

export default MessageList;