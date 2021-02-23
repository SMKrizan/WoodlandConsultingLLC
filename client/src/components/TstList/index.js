import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { useStoreContext } from "../../utils/GlobalState";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import {
  Card,
  CardText,
  CardBody,
  CardGroup,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

// import TstUpdate from '../TstUpdate';
import { GET_TESTIMONIALS } from "../../utils/queries";
import { UPDATE_TST } from "../../utils/actions";
import { UPDATE_TESTIMONIAL } from "../../utils/mutations";
import Auth from "../../utils/auth";

const TestimonialList = (props) => {
  const [state, dispatch] = useStoreContext();
  const { testimonials, testimonial } = state;
  const [updatedTst] = useMutation(UPDATE_TESTIMONIAL);
  
  // QUERY data from db to display testimonials to admin page
  // reminder: "data" is the object described by associated query/mutation
  const { loading, data } = useQuery(GET_TESTIMONIALS);
  const tstData = data?.testimonials || [];
  console.log('tstData: ', tstData)
  
  
 
  // use MUTATION to submit replaced/updated testimonial values to db for persistent storage
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log('updated modalData: ', modalData)
    // try {
      const mutationResponse = await updatedTst({
        variables: {
          _id: modalData._id,
          tstName: modalData.tstName,
          tstCompany: modalData.tstCompany,
          tstMessage: modalData.tstMessage
        }
      });
      // const token = mutationResponse.data.updatedTst.token;
    //   Auth.login(token);
    // } catch (event) {
    //   console.log(event);
    // }
  };

  // modal
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
const handleClick = (testimonial) => {
    setModalData(testimonial)
}
 

const handleInputChange = (e) => {
  const {name, value} = e.target
   setModalData({
     ...modalData, 
    // indicates to get value of name attribute and return the associated value property 
     [name]: value
   })
}

  return (
    <>
      <h4>
        There are currently {tstData.length} testimonials displaying to your
        page:
      </h4>
      {tstData &&
        tstData.map((testimonial) => (
          // 'key' is required on mapped data for React to track data changes
          <div key={testimonial._id}>
            <CardGroup>
              <Card>
                <CardBody>
                  <CardTitle tag="h5">{testimonial.tstName}</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                    {testimonial.tstCompany}
                  </CardSubtitle>
                  <CardText>{testimonial.tstMessage}</CardText>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                    {testimonial.updated_at}
                  </CardSubtitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                    {testimonial.created_at}
                  </CardSubtitle>
                  <Button className="button" onClick={() => {
                    setOpen(true)
                    handleClick(testimonial)
                    }}>
                    Update
                  </Button>
                </CardBody>
              </Card>
            </CardGroup>
          </div>
        ))}
      <Modal open={open} onClose={() => setOpen(false)}>
        {console.log('modalData: ', modalData)}
        <h2>Replace/update current testimonial:</h2>
        <form action="">
          <p>
            <label labelName="tstName">
              Name:
              <input
                type="text"
                name='tstName'
                placeholder={modalData.tstName}
                value={modalData.tstName}
                onChange={handleInputChange}
                // onMouseOut={(e) => handleFormState(modalData._id)}
              />${modalData.tstName}
            </label>
          </p>
          <p>
            <label labelName="tstCompany">
              Company:
              <input
                type="text"
                name="tstCompany"
                placeholder={modalData.tstCompany}
                value={modalData.tstCompany}
                onChange={handleInputChange}
                // onMouseOut={(e) => handleFormState(e)}
              />
            </label>
          </p>
          <p>
            <label labelName="tstMessage">
              Message:
              <input
                type="text"
                name="tstMessage"
                placeholder={modalData.tstMessage}
                value={modalData.tstMessage}
                onChange={handleInputChange}
                // onMouseOut={(e) => handleFormState(e)}
              />
            </label>
          </p>
          <button onClick={handleFormSubmit}>Submit</button>
          {/* <input type="submit" value="Submit" /> */}
        </form>
      </Modal>
    </>
  );
};

export default TestimonialList;
