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
    else if (!messageData.length) {
        return <h2>No messages to display.</h2>;
    }

    // useEffect(() => {
    //     if(messages) {
    //         dispatch({
    //             type: DELETE_MESSAGE,
    //             messages: 
    //         })
    //     }
    // });

    // const handleClick = id => {
    //     dispatch({
    //         type: DELETE_MESSAGE,
    //         messages: messageList
    //     })
    // }
    
    return (
        <div>
            <h3>You have {messageData.length} messages:</h3>
            {messageData &&
                messageData.map(message => (
                    // 'key' is required on mapped data for React to track data changes
                    <div key={messageData._id}>
                        <>
                        <h4>{purpose}</h4>
                        <h5>Name: {userName}</h5>
                        <h5>Company: {userCompany}</h5>
                        <h5>Email: {userEmail}</h5>
                        <p>Message: {userMessage}</p>
                        <h5>Date: {createdAt}</h5>
                        </>
                    </div>
                ))}
        </div>
    );
};

export default MessageList;