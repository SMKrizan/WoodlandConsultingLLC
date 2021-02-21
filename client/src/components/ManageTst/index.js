import React, { useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { useStoreContext } from "../../utils/GlobalState";

import { GET_TESTIMONIALS } from '../../utils/queries';
import { ADD_TST, UPDATE_TST, DELETE_TST } from '../../utils/actions';
// import Auth from '../utils/auth';

const TestimonialList = ({ _id, tstName, tstCompany, tstMessage, updatedAt }) => {

    const [state, dispatch] = useStoreContext();
    const { testimonials } = state;

    // reminder: "data" is the object described by associated query/mutation
    const { loading, data } = useQuery(GET_TESTIMONIALS);
    const testimonialData = data?.testimonials;
    console.log('testimonialData: ', testimonialData)

    return (
        <div>
            <h3>There are currently {testimonialData.length} testimonials displaying to your page:</h3>
            {testimonialData &&
                testimonialData.map(message => (
                    // 'key' is required on mapped data for React to track data changes
                    <div key={_id}>
                        <div>
                            <h4>Name: {tstName}</h4>
                            <h4>Company: {tstCompany}</h4>
                            <p>Message: {tstMessage}</p>
                            <h4>Updated: {updatedAt}</h4>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default TestimonialList;