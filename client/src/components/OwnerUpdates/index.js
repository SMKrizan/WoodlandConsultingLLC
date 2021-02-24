// component to conditionally render form for updating OwnerInfo and Testimonials

// Testimonial --> <onClick> updates testimonials on Home page and redirects to AdminPage
// Form fields: tstName, tstCompany, tstMessage
// Mutation: UPDATE_TESTIMONIAL updates db
// Action: UPDATE_TST updates state

// OwnerInfo --> <onClick> updates Jess's contact info in Footer and redirects to AdminPage
// Form fields: ownerName, ownerEmail, address
// Mutation: UPDATE_OWNER updates db
// Action: UPDATE_OWNER_INFO updates state
// import React, { useState } from 'react';
// import { UPDATE_OWNER } from '../../utils/mutations';
// import { useMutation } from '@apollo/react-hooks';


// // import { Modal } from 'react-responsive-modal';

// const OwnerUpdates = (props) => {


//     const [newOwnerInfo, setNewOwnerInfo] = useState({ name: '', email: '', address: '' });
//     const [updateOwner, { error }] = useMutation(UPDATE_OWNER);


//     const handleFormSubmit = event => {
//         event.preventDefault();
//         updateOwner({ variables: { name: newOwnerInfo.ownerName, email: newOwnerInfo.ownerEmail, address: newOwnerInfo.address } })
//     };

//     // -----------------CHANGE INPUT--------------------
//     function handleChange(event) {
//         const { name, value } = event.target;
//         setNewOwnerInfo({
//             ...newOwnerInfo,
//             [name]: value
//         });
//     }
//     //     const [open, setOpen] = React.useState(false);

//     return (

//         <form
//             value={newOwnerInfo}
//             onSubmit={handleFormSubmit}
//         >
//             <p><label htmlFor="ownerName">
//                 Name <input type="name" onChange={handleChange} /></label></p>
//             <p><label htmlFor="ownerEmail">
//                 Email <input type="email" onChange={handleChange} /></label></p>
//             <p><label htmlFor="ownerAddress">
//                 Address <input type="address" onChange={handleChange} /></label></p>
//             {
//                 error ? <div>
//                     <p className="error-text" >Provide information</p>
//                 </div> : null
//             }
//             <button>Submit</button>
//             <input type="submit" value="Submit" />

//         </form>
//         //         <>
//         //             <button className="button" onClick={() => setOpen(true)}>
//         //                 Open modal
//         //       </button>

//         //             <Modal open={open} onClose={() => setOpen(false)}>
//         //                 <h2>Please update your information</h2>
//         //                 <form action="">
//         //                     <p>
//         //                         <label htmlFor="ownerName">
//         //                             Name
//         //               <input type="text" />
//         //                         </label>
//         //                     </p>
//         //                     <p>
//         //                         <label htmlFor="ownerEmail">
//         //                             Email
//         //               <input type="text" />
//         //                         </label>
//         //                     </p>
//         //                     <p>
//         //                         <label htmlFor="ownerAddress">
//         //                             Address
//         //               <input type="text" />
//         //                         </label>
//         //                     </p>
//         //                     <button>test</button>
//         //                     <input type="submit" value="Submit" />
//         //                 </form>
//         //             </Modal>
//         //         </>
//     );
// };

// export default OwnerUpdates;