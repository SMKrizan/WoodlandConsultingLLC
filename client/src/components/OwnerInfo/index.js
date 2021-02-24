import React, { useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { useStoreContext } from "../../utils/GlobalState";
import { Card, CardText, CardHeader, CardTitle, CardBody } from 'reactstrap';
import { GET_OWNER } from '../../utils/queries';
// import { UPDATE_OWNER } from '../../utils/mutations';
import { UPDATE_OWNER_INFO } from '../../utils/actions';
// import Auth from '../utils/auth';

const ManageOwnerInfo = () => {
    const [state, dispatch] = useStoreContext();

    const { ownerInfo } = state;

    const { loading, data } = useQuery(GET_OWNER);

    const ownerData = data?.owner || [];
    if (loading) {
        return <div>Loading...</div>;
    }
    if (!ownerData) {
        return <h2>Something went wrong.</h2>;
    }

    const updateOwnerInfo = item => {
        dispatch({
            type: UPDATE_OWNER_INFO,
            _id: item._id,
            ownerName: item.ownerName,
            ownerEmail: item.ownerImail,
            address: item.address
        })
    } 
    
    return (

        <Card outline color='secondary'>
            <CardHeader> Owner</CardHeader>
            <CardBody>
                <CardTitle><h3>Name: {ownerData.ownerName}</h3></CardTitle>
                <CardText><h3>Email: {ownerData.ownerEmail}</h3></CardText>
                <CardText><h3>Address {ownerData.address}</h3></CardText>
            </CardBody>
            <div>
                <button onClick={updateOwnerInfo}> Update</button>
            </div>
        </Card>


    );
};

export default ManageOwnerInfo;

