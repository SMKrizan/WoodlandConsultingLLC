import React, { useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { useStoreContext } from "../../utils/GlobalState";
import { Table } from 'reactstrap';

import { GET_MESSAGES } from '../../utils/queries';
import { DELETE_MESSAGE } from '../../utils/actions';
// import { REMOVE_MESSAGE } from '../utils/mutations';
// import { idbPromise } from "../../utils/helpers";
// import Auth from '../utils/auth';

// conditionally renders message data; destructuring rather than using 'props.userName' etc. throughout JSX code
const MessageList = (props) => {
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

    return (
        <div className="pad">
            <h4>You have {messageData.length} messages:</h4>
            <Table responsive>
                    <thead>
                        <tr>
                            <th>Delete</th>
                            <th>Type</th>
                            <th>Name</th>
                            <th>Company</th>
                            <th>Email</th>
                            <th>Message</th>
                            <th>Date Received</th>
                        </tr>
                    </thead>
                    <tbody>
                        {messageData &&
                            messageData.map(message => (
                                <tr key={messageData._id}>
                                    <td>[ ]</td>
                                    <td>{message.purpose}</td>
                                    <td>{message.userName}</td>
                                    <td>{message.userCompany}</td>
                                    <td>{message.userEmail}</td>
                                    <td>{message.userMessage}</td>
                                    <td>{message.createdAt}</td>
                                </tr>
                            ))}
                    </tbody>
                </Table >
        </div>
    );
}

export default MessageList;