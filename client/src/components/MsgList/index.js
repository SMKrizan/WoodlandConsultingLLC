import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { Table } from "reactstrap";
import "./MsgList.css";
import { GET_MESSAGES } from "../../utils/queries";
import { REMOVE_MESSAGE } from "../../utils/mutations";

const MessageList = (props) => {
  const [message, newMessageData] = useState({});

  const [removeMessage, { error }] = useMutation(REMOVE_MESSAGE, {
    update(cache, { data: { removeMessage } }) {
      try {
        const { messages } = cache.readQuery({ query: GET_MESSAGES });
        const newMessageArray = messages.filter((message) => removeMessage._id !== message._id);
        cache.writeQuery({
          query: GET_MESSAGES,
          data: { messages: [...newMessageArray] },
        });
      } catch (e) {
        console.log(e);
      }
    },
  });

  // reminder: "data" is the object described by associated query/mutation
  const { loading, data } = useQuery(GET_MESSAGES)
  const messageData = data?.messages;

  if (loading) {
    return <div>Loading...</div>;
  } else if (!messageData.length) {
    return <h2>No messages to display.</h2>;
  }

  const handleSubmit = async (messageData) => {
    const { data } = await removeMessage({
      variables: { _id: messageData._id },

    });
    newMessageData({
      ...message, data
    });
  };

  return (
    <div>
      <p>{error && <span>Something went wrong.</span>}</p>
      <h3 className="padtb">You have {messageData.length} messages:</h3>
      <Table responsive id="messages" className="box shadow">
        <thead>
          <tr>
            <th key="delete">Delete</th>
            <th key="type">Type</th>
            <th key="name">Name</th>
            <th key="company">Company</th>
            <th key="email">Email</th>
            <th key="message">Message</th>
            <th key="date">Date Received</th>
          </tr>
        </thead>
        <tbody>
          {messageData &&
            messageData.map((message, i) => (
              <tr key={messageData._id}>
                <td key="deleteBtn">
                  <button
                    type="submit"
                    onClick={() => {
                      handleSubmit(messageData[i]);
                    }}
                  >
                    Delete
                  </button>
                </td>
                <td key={messageData.purpose}>{message.purpose}</td>
                <td key={messageData.userName}>{message.userName}</td>
                <td key={messageData.userCompany}>{message.userCompany}</td>
                <td key={messageData.userEmail}>{message.userEmail}</td>
                <td key={messageData.userMessage}>{message.userMessage}</td>
                <td key={messageData.created_at}>
                  {new Date(parseInt(message.created_at)).toLocaleDateString()}
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MessageList;
