import React, { useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { useStoreContext } from "../../utils/GlobalState";

import { GET_OWNER } from '../../utils/queries';
import { UPDATE_OWNER } from '../../utils/mutations';
import { UPDATE_OWNER_INFO } from '../../utils/actions'
// import Auth from '../utils/auth';

const ManageOwnerInfo = ({ ownerName, ownerEmail, address }) => {
    const [state, dispatch] = useStoreContext();
    const { ownerInfo } = state;

    // reminder: "data" is the object described by associated query/mutation
    const { loading, data } = useQuery(GET_OWNER);
    const ownerData = data?.ownerInfo;
    console.log('ownerData: ', ownerData)
    if (loading) {
        return <div>Loading...</div>;
    }
    else if (!ownerData) {
        return <h2>Something went wrong.</h2>;
    }

    // useEffect(() => {
    //     if(ownerInfo) {
    //         dispatch({
    //             type: UPDATE_OWNER_INFO,
    //             ownerInfo: 
    //         })
    //     }
    // });

    return (
        <div>
            <h3>Name: {ownerName}</h3>
            <h3>Email: {ownerEmail}</h3>
            <h3>Address {address}</h3>
        </div>
    );
};

export default ManageOwnerInfo;