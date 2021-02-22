import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { useStoreContext } from "../../utils/GlobalState";
import { Modal } from 'react-responsive-modal';
import { Card, CardText, CardBody, CardGroup, CardTitle, CardSubtitle, Button } from 'reactstrap';

import { GET_TESTIMONIALS } from '../../utils/queries';
import { ADD_TST, UPDATE_TST, DELETE_TST } from '../../utils/actions';
// import Auth from '../utils/auth';

const TestimonialList = (props) => {
    const [state, dispatch] = useStoreContext();
    const { testimonials } = state;

    // modal
    const [open, setOpen] = React.useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    // reminder: "data" is the object described by associated query/mutation
    const { loading, data: tstData } = useQuery(GET_TESTIMONIALS);
    // const tstData = data?.testimonials;
    console.log('tstCompany: ', tstData[0].tstCompany)
    console.log('tstData: ', tstData)

    // useEffect(() => {
    //     if (tstData) {
    //         dispatch({
    //             type: UPDATE_TST,
    //             testimonials: tstData.testimonials
    //         })
    //     }
    // }, [tstData, dispatch]);

    return (
        <>
            <h4>There are currently {tstData.length} testimonials displaying to your page:</h4>
            {tstData &&
                tstData.map(testimonial => (
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
                                    <Button className="button" onClick={onOpenModal}>Update</Button>
                                    <Modal open={open} onClose={onCloseModal}>
                                        <h2>Enter new information to replace current testimonial:</h2>
                                        <form action="">
                                            <p>
                                                <label htmlFor="name">Name:  <input type="text" /></label>
                                            </p>
                                            <p>
                                                <label htmlFor="company">Company:  <input type="text" /></label>
                                            </p>
                                            <p>
                                                <label htmlFor="Message">Message:  <input type="text" /></label>
                                            </p>
                                            <button>Submit</button>
                                            <input type="submit" value="Submit" />
                                        </form>
                                    </Modal>
                                </CardBody>
                            </Card>
                        </CardGroup>
                    </div>
                ))}
        </>
    );
};


export default TestimonialList;