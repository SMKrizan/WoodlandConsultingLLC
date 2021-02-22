
import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { UPDATE_OWNER } from '../../utils/mutations';
import { GET_OWNER } from '../../utils/queries';
// import { useStoreContext } from "../../utils/GlobalState";
// import { UPDATE_OWNER_INFO } from '../../utils/actions';
// import Auth from '../utils/auth';
import { Modal } from 'react-responsive-modal';

const ManageOwnerInfo = () => {

    const [open, setOpen] = React.useState(false);
    const [newOwnerInfo, setNewOwnerInfo] = useState("");
    const [updateOwner, { error }] = useMutation(UPDATE_OWNER);

    const { loading, data } = useQuery(GET_OWNER);

    const ownerData = data?.owner || [];
    console.log('ownerData: ', data?.owner);
    if (loading) {
        return <div>Loading...</div>;
    }
    if (!ownerData) {
        return <h2>Something went wrong.</h2>;
    }
    // -----------------CHANGE INPUT--------------------
    function handleChange(event) {
        setNewOwnerInfo(event.target.value)
        console.log(event.target.value)
    }
    // ---------------UPDATE INFO ______
    const handleFormSubmit = async event => {
        event.preventDefault();
        try {
            await updateOwner({})
            setNewOwnerInfo('');
        } catch (e) {
            console.error(e);
        }
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
                    action=""
                    value={newOwnerInfo}
                    onChange={handleChange}
                >
                    <p><label htmlFor="ownerName">
                        Name <input type="text" /></label></p>
                    <p><label htmlFor="ownerEmail">
                        Email <input type="text" /></label></p>
                    <p><label htmlFor="ownerAddress">
                        Address <input type="text" /></label></p>

                    <button onSubmit={handleFormSubmit}>Submit</button>
                    {/* <input type="submit" value="Submit" /> */}
                </form>
                {error && <div>Something went wrong...</div>}
            </Modal>
        </>
    );
};

export default ManageOwnerInfo;

