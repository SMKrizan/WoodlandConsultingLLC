import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_OWNER } from '../../utils/queries';
import { UPDATE_OWNER } from '../../utils/mutations';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import Auth from '../../utils/auth';

const ManageOwnerInfo = (props) => {

    const { loading, data } = useQuery(GET_OWNER);
    const ownerData = data?.owner || [];
    console.log('ownerData: ', data?.owner);

    const [updateOwner, { error }] = useMutation(UPDATE_OWNER);
    const [open, setOpen] = React.useState(false);

    // const [newOwnerInfo, setNewOwnerInfo] = useState({ ownerName: '', ownerEmail: '', address: '' });
    const [newOwnerInfo, setNewOwnerInfo] = useState({});

    if (loading) {
        return <div>Loading...</div>;
    }
    if (!ownerData) {
        return <h2>Something went wrong.</h2>;
    }

    function handleChange(event) {
        const { name, value } = event.target;
        console.log('CHANGE', value);

        setNewOwnerInfo({
            ...newOwnerInfo,
            [name]: value
        });
    }

    const handleFormSubmit = async event => {
        event.preventDefault();
        try {
            console.log("LOG", newOwnerInfo);

            const mutationResponse = await updateOwner({
                variables: {
                    _id: newOwnerInfo._id,
                    ownerName: newOwnerInfo.ownerName,
                    ownerEmail: newOwnerInfo.ownerEmail,
                    address: newOwnerInfo.address
                }
            })
            const token = mutationResponse.data.updateOwner.token;

            Auth.updateOwner(token);
            setNewOwnerInfo('');
        } catch (e) {
            console.log(e)
        }
    };

    return (
        <>
            <div>
                <h3>Name: {ownerData.ownerName},{newOwnerInfo.ownerName}</h3>
                <h3>Email: {ownerData.ownerEmail}</h3>
                <h3>Address {ownerData.address}</h3>
            </div>
            <div>
                <button className="button" onClick={() => setOpen(true)}> Update </button>
            </div>


            <Modal open={open} onClose={() => setOpen(false)}>
                <h2>Please update your information</h2>
                <form
                    key={newOwnerInfo._id}
                    value={newOwnerInfo}
                    onSubmit={handleFormSubmit}
                >

                    <p><label htmlFor="ownerName">
                        New Name: <input type="name" name="ownerName" value={newOwnerInfo.ownerName} onChange={handleChange} /></label></p>
                    <p><label htmlFor="ownerEmail">
                        New Email: <input type="email" name="ownerEmail" value={newOwnerInfo.ownerEmail} onChange={handleChange} /></label></p>
                    <p><label htmlFor="ownerAddress">
                        New Address: <input type="address" name="address" value={newOwnerInfo.address} onChange={handleChange} /></label></p>
                    {
                        error ? <div>
                            < p className="error-text" > Something went wrong..Please provide information</p>
                        </div> : null
                    }

                    <input type="submit" value="Submit" />

                </form>

            </Modal >
        </>
    );
};

export default ManageOwnerInfo;

