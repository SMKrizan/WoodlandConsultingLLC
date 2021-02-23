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
  const [updatedTst, { error }] = useMutation(UPDATE_TESTIMONIAL);

//   
  const initialTstData = (tstData) {

      tstName = tstData.tstName,
      tstCompany: tstData.tstCompany,
      tstMessage: tstData.tstMessage,
      createdAt: tstData.createdAt
    }



  // reminder: "data" is the object described by associated query/mutation
  const { loading, data } = useQuery(GET_TESTIMONIALS);
  const tstData = data?.testimonials || [];
  console.log("tstData: ", tstData);

  // updates testimonial state values with user-updates to form
    const handleTstUpdate = (e) => {
      if (tstData._id === this._id) {
          console.log(tstData._id)
        dispatch({
          type: UPDATE_TST,
          name: e.target.name,
          value: e.target.value,
        });
      }
      return testimonial
    };

  // submits replaced/updated testimonial values to db for persistent storage
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await updatedTst({
        variables: {
          tstName: tstData.tstName,
          tstCompany: tstData.tstCompany,
          tstMessage: tstData.tstMessage,
        },
      });
      const token = mutationResponse.data.updatedTst.token;
      Auth.login(token);
    } catch (event) {
      console.log(event);
    }
  };

  // modal
  const [open, setOpen] = React.useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

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
                    {testimonial.updatedAt}
                  </CardSubtitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                    {testimonial.createdAt}
                  </CardSubtitle>
                  <Button className="button" onClick={() => setOpen(true)}>
                    Update
                  </Button>
                </CardBody>
              </Card>
            </CardGroup>
          </div>
        ))}
      <Modal open={open} onClose={() => setOpen(false)}>
        <h2>Replace/update current testimonial:</h2>
        <form action="">
          <p>
            <label labelName="name">
              Name:
              <input
                type="text"
                name="tstName"
                placeholder={tstData.tstName}
                value={tstData.tstName}
                onChange={(e) => handleTstUpdate(e)}
              />
            </label>
          </p>
          <p>
            <label labelName="company">
              Company:
              <input
                type="text"
                name="tstCompany"
                placeholder={tstData.tstCompany}
                value={tstData.tstCompany}
                onchange={(e) => handleTstUpdate(e)}
              />
            </label>
          </p>
          <p>
            <label labelName="Message">
              Message:
              <input
                type="text"
                name="tstMessage"
                placeholder={tstData.tstMessage}
                value={tstData.tstMessage}
                onChange={(e) => handleTstUpdate(e)}
              />
            </label>
          </p>
          <button onSubmit={handleFormSubmit}>Submit</button>
          <input type="submit" value="Submit" />
        </form>
      </Modal>
    </>
  );
};

export default TestimonialList;
