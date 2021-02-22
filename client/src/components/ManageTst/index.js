import React, { useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { useStoreContext } from "../../utils/GlobalState";
import { Card, CardText, CardBody, CardGroup, CardTitle, CardSubtitle, Button } from 'reactstrap';

import { GET_TESTIMONIALS } from '../../utils/queries';
import { ADD_TST, UPDATE_TST, DELETE_TST } from '../../utils/actions';
// import Auth from '../utils/auth';

const TestimonialList = (props) => {
    const [state, dispatch] = useStoreContext();
    const { testimonials } = state;

    // reminder: "data" is the object described by associated query/mutation
    const { loading, data } = useQuery(GET_TESTIMONIALS);
    const testimonialData = data?.testimonials;
    console.log('tstCompany: ', testimonialData[0].tstCompany)
    console.log('testimonialData: ', testimonialData)

    return (
        <>
            <h4>There are currently {testimonialData.length} testimonials displaying to your page:</h4>
            {testimonialData &&
                testimonialData.map(testimonial => (
                    // 'key' is required on mapped data for React to track data changes
                    <div key={testimonial._id}>
                        <CardGroup>
                            <Card>
                                <CardBody>
                                    <CardTitle tag="h5">{testimonial.tstName}</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">{testimonial.tstCompany}</CardSubtitle>
                                    <CardText>{testimonial.tstMessage}</CardText>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">{testimonial.updatedAt}</CardSubtitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">{testimonial.createdAt}</CardSubtitle>
                                    <Button>Update</Button>
                                    <Button>Delete</Button>
                                </CardBody>
                            </Card>
                        </CardGroup>
                    </div>
                ))}
        </>
    );
};


export default TestimonialList;