import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { Modal } from "react-responsive-modal";
import {
  Card,
  CardText,
  CardBody,
  CardGroup,
  Button,
} from "reactstrap";
import { useStoreContext } from "../../utils/GlobalState";
import { idbPromise } from '../../utils/helpers';
import "react-responsive-modal/styles.css";
import { UPDATE_TST } from "../../utils/actions";
import { GET_TESTIMONIALS } from "../../utils/queries";
import { UPDATE_TESTIMONIAL } from "../../utils/mutations";

const TestimonialList = (props) => {
  // retrieves global state object and dispatch method to update state and display products to page
  const [state, dispatch] = useStoreContext();

  // hook responds to global state object
  const { loading, data } = useQuery(GET_TESTIMONIALS);
  const tstData = data?.testimonials || [];

  useEffect(() => {
    // if there's data to be stored
    if (data) {
      // let's store it in the global state object
      dispatch({
        type: UPDATE_TST,
        testimonials: data.testimonials
      });

      // but let's also take each product and save it to IndexedDB using the helper function 
      data.testimonials.forEach((testimonial) => {
        idbPromise('testimonials', 'put', testimonial);
      });
    }
  }, [data, loading, dispatch]);
  
  // tells front end how to use mutation
  const [updatedTst] = useMutation(UPDATE_TESTIMONIAL);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const mutationResponse = await updatedTst({
      variables: {
        _id: modalData._id,
        tstName: modalData.tstName,
        tstCompany: modalData.tstCompany,
        tstMessage: modalData.tstMessage,
      },
    });
  };

  // state is updated with any new form values
  const [modalData, setModalData] = useState({});
  const handleClick = (testimonial) => {
    setModalData(testimonial);
  };

  // grabs any updated form values with other retained object properties
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setModalData({
      ...modalData,
      // gets value of name attribute and returns associated value property
      [name]: value,
    });
  };

  // modal
  const [open, setOpen] = useState(false);
  const onCloseModal = () => setOpen(false);

  return (
    <>
      <h3 className="padtb">
        These are the testimonials currently displaying to your page:
      </h3>
      {tstData &&
        tstData.map((testimonial) => (
          // 'key' is required on mapped data for React to track data changes
          <div key={testimonial._id}>
            <CardGroup className="padb">
              <Card className=' box shadow pad'>
                <CardBody>
                  <h4>{testimonial.tstName}</h4>
                  <h5 className="mb-2 text-muted">
                    {testimonial.tstCompany}
                  </h5>
                  <CardText>{testimonial.tstMessage}</CardText>
                  <h5 className="mb-2 text-muted">
                    Updated: {new Date(parseInt(testimonial.updated_at)).toLocaleDateString()}
                    <br />
                    Created: {new Date(parseInt(testimonial.created_at)).toLocaleDateString()}
                  </h5>
                  <Button
                    className="button"
                    onClick={() => {
                      setOpen(true);
                      handleClick(testimonial);
                    }}
                  >
                    Update
                  </Button>
                </CardBody>
              </Card>
            </CardGroup>
          </div>
        ))}
      <Modal
        styles={{ overlay: { background: "transparent" }, modal: { background: "var(--maroon)", border: "2px white solid" } }}
        open={open} onClose={() => setOpen(false)}>
        <h2>Replace/update testimonial:</h2>
        <form
          onClick={handleFormSubmit}
        >
          <p>
            <label name="tstName">
              Name:
              <input
                type="text"
                name="tstName"
                value={modalData.tstName}
                onChange={handleInputChange}
              />
            </label>
          </p>
          <p>
            <label name="tstCompany">
              Company:
              <input
                type="text"
                name="tstCompany"
                value={modalData.tstCompany}
                onChange={handleInputChange}
              />
            </label>
          </p>
          <p>
            <label name="tstMessage">
              Message:
              <input
                type="text"
                name="tstMessage"
                value={modalData.tstMessage}
                onChange={handleInputChange}
              />
            </label>
          </p>
          <button onClick={onCloseModal}>Submit</button>
        </form>
      </Modal>
    </>
  );
};

export default TestimonialList;
