import React, { useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { useStoreContext } from "../../utils/GlobalState";
import { Table } from 'reactstrap';
import './MsgList.css'
import { GET_MESSAGES } from '../../utils/queries';
import { REMOVE_MESSAGE } from '../../utils/mutations';
// import { REMOVE_MESSAGE } from '../utils/mutations';
// import { idbPromise } from "../../utils/helpers";
import Auth from '../../utils/auth';

// conditionally renders message data; destructuring rather than using 'props.userName' etc. throughout JSX code
const MessageList = (props) => {
    const [removeMessage, {error}] = useMutation(REMOVE_MESSAGE);
    const [state, dispatch] = useStoreContext();
    const { messages } = state;

    // reminder: "data" is the object described by associated query/mutation
    const { loading, data } = useQuery(GET_MESSAGES);
    const messageData = data?.messages;
    if (loading) {
        return <div>Loading...</div>;
    }
    else if (!messageData.length) {
        return <h2>No messages to display.</h2>;
    }

  

    const handleSubmit = async (_id) => {
        const token = Auth.loggedIn() ? Auth.getToken() : null;
        if (!token) {
            return false;
        }

        try {
            const { data } = await removeMessage({
                variables: { _id: messageData._id }
            });

            removeMessage(_id);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div >
            <h3 className="padtb">You have {messageData.length} messages:</h3>
            <Table responsive id="messages" className="box shadow">
                    <thead>
                        <tr>
                            <th >Delete</th>
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
                                <tr key={messageData._id} onSubmit={handleSubmit}>
                                    <td>[<button type="submit" >Delete</button>]</td>
                                    <td>{message.purpose}</td>
                                    <td>{message.userName}</td>
                                    <td>{message.userCompany}</td>
                                    <td>{message.userEmail}</td>
                                    <td>{message.userMessage}</td>
                                    <td>{message.created_at}</td>
                                </tr>
                            ))}
                    </tbody>
                </Table >
        </div>
    );
}

export default MessageList;