import React, { useState } from 'react';

import { useQuery, useMutation } from '@apollo/react-hooks';
import { UPDATE_OWNER } from '../../utils/mutations';

// import { useStoreContext } from "../../utils/GlobalState";
// import { UPDATE_OWNER_INFO } from '../../utils/actions';
import { GET_OWNER } from '../../utils/queries';
import Auth from '../../utils/auth';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
const ManageOwnerInfo = (props) => {
    const { loading, data } = useQuery(GET_OWNER);
    const ownerData = data?.owner || [];
    console.log('ownerData: ', data?.owner);

    const [open, setOpen] = React.useState(false);
    const [newOwnerInfo, setNewOwnerInfo] = useState({ ownerName: '', ownerEmail: '', address: '' });
    const [updateOwner, { error }] = useMutation(UPDATE_OWNER);

    if (loading) {
        return <div>Loading...</div>;
    }
    if (!ownerData) {
        return <h2>Something went wrong.</h2>;
    }

    const handleFormSubmit = async event => {

        event.preventDefault();
        try {
            console.log("LOG", newOwnerInfo.ownerName);
            const mutationResponse = await updateOwner({ variables: { ownerName: newOwnerInfo.ownerName, ownerEmail: newOwnerInfo.ownerEmail, address: newOwnerInfo.address } })
            const token = mutationResponse.data.updateOwner.token;
            Auth.updateOwner(token);
        } catch (e) {
            console.log(e)
        }
    };

    function handleChange(event) {

        const { name, value } = event.target;
        console.log('CHANGE', name);
        setNewOwnerInfo({
            ...newOwnerInfo,
            [name]: value
        });
    }

    return (
        <>
            <div>
                <h3>Name: {ownerData.ownerName}</h3>
                <h3>Email: {ownerData.ownerEmail}</h3>
                <h3>Address {ownerData.address}</h3>
            </div>
            <div>
                <button className="button" onClick={() => setOpen(true)}> Update </button>
            </div>

            <Modal open={open} onClose={() => setOpen(false)}>
                <h2>Please update your information</h2>
                <form
                    value={newOwnerInfo}
                    onSubmit={handleFormSubmit}

                >
                    <p><label htmlFor="ownerName">
                        Name <input type="name" name="name" onChange={handleChange} /></label></p>
                    <p><label htmlFor="ownerEmail">
                        Email <input type="email" name="email" onChange={handleChange} /></label></p>
                    <p><label htmlFor="ownerAddress">
                        Address <input type="address" name="address" onChange={handleChange} /></label></p>
                    {
                        error ? <div>
                            <p className="error-text" >Something went wrong.. Please provide information</p>
                        </div> : null
                    }

                    <input type="submit" value="Submit" />

                </form>

            </Modal>
        </>
    );
};

export default ManageOwnerInfo;

