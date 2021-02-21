import React, { useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { useStoreContext } from "../../utils/GlobalState";

import { GET_MESSAGES } from '../utils/queries';
import { UPDATE_MESSAGES } from '../../utils/actions';
// import { REMOVE_MESSAGE } from '../utils/mutations';
// import { idbPromise } from "../../utils/helpers";
// import Auth from '../utils/auth';

// conditionally renders message data; data is destructured to avoid having to use 'props.userName' etc. throughout JSX code
const messageList = ({ userName, userCompany, userEmail, userMessage, purpose, createdAt }) => {
    const [state, dispatch] = useStoreContext();
    const { messages } = state;
    const { data: messages } = useQuery(GET_MESSAGES);

    useEffect(() => {
        if(messages) {
            dispatch({
                type: GET_MESSAGES,
                messages: messageList
            })
        }
    });

    const handleClick = id => {
        dispatch({
            type: UPDATE_MESSAGES,
            messages: messageList
        })
    }
    
    // first checking to see whether thoughts array contains data
    if (!messageList.length) {
        return <h3>No Messages</h3>;
    }

    return (
        <div>
            <h3>You have {messageList.length} messages:</h3>
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