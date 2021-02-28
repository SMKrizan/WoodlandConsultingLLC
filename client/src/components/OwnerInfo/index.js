import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { GET_OWNER } from "../../utils/queries";
import { UPDATE_OWNER } from "../../utils/mutations";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

const ManageOwnerInfo = (props) => {
  const { loading, data } = useQuery(GET_OWNER);
  const ownerData = data?.owner || [];
  const [updateOwner, { error }] = useMutation(UPDATE_OWNER);
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const mutationResponse = await updateOwner({
      variables: {
        _id: newOwnerInfo._id,
        ownerName: newOwnerInfo.ownerName,
        ownerEmail: newOwnerInfo.ownerEmail,
        address: newOwnerInfo.address,
      },
    });
  };

  const [newOwnerInfo, setNewOwnerInfo] = useState({
    ownerName: "",
    ownerEmail: "",
    address: "",
  });
  const handleClick = (data) => {
    setNewOwnerInfo(data);
  };
  function handleChange(event) {
    const { name, value } = event.target;

    setNewOwnerInfo({
      ...newOwnerInfo,
      [name]: value,
    });
  }
  const [open, setOpen] = useState(false);
  const onCloseModal = () => setOpen(false);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (!ownerData) {
    return <h2>Something went wrong.</h2>;
  }

  return (
    <>
      <div>
        <h3>Name: {ownerData.ownerName}</h3>
        <h3>Email: {ownerData.ownerEmail}</h3>
        <h3>Address: {ownerData.address}</h3>
      </div>
      <div>
        <button
          className="button"
          onClick={(onOpenModal) => {
            setOpen(true);
            handleClick(ownerData);
          }}
        >
          {" "}
          Update{" "}
        </button>
      </div>
      <Modal
        styles={{
          overlay: { background: "transparent" },
          modal: { background: "var(--maroon)", border: "2px white solid" },
        }}
        open={open}
        onClose={() => setOpen(false)}
        center
      >
        <h2>Please update your information</h2>
        <form
          action=""
          key={newOwnerInfo._id}
          value={newOwnerInfo}
          onSubmit={handleChange}
          onClick={handleFormSubmit}
        >
          <p>
            <label htmlFor="ownerName">
              New Name:{" "}
              <input
                type="name"
                name="ownerName"
                value={newOwnerInfo.ownerName}
                onChange={handleChange}
              />
            </label>
          </p>
          <p>
            <label htmlFor="ownerEmail">
              New Email:{" "}
              <input
                type="email"
                name="ownerEmail"
                value={newOwnerInfo.ownerEmail}
                onChange={handleChange}
              />
            </label>
          </p>
          <p>
            <label htmlFor="ownerAddress">
              New Address:{" "}
              <input
                type="address"
                name="address"
                value={newOwnerInfo.address}
                onChange={handleChange}
              />
            </label>
          </p>
          {error ? (
            <div>
              <p className="error-text">
                {" "}
                Something went wrong..Please provide information
              </p>
            </div>
          ) : null}
          <input type="submit" value="Submit" onClick={onCloseModal} />
        </form>
      </Modal>
    </>
  );
};

export default ManageOwnerInfo;
