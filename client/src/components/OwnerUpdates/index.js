// component to conditionally render form for updating OwnerInfo and Testimonials

// Testimonial --> <onClick> updates testimonials on Home page and redirects to AdminPage
// Form fields: tstName, tstCompany, tstMessage
// Mutation: UPDATE_TESTIMONIAL updates db
// Action: UPDATE_TST updates state

// OwnerInfo --> <onClick> updates Jess's contact info in Footer and redirects to AdminPage
// Form fields: ownerName, ownerEmail, address
// Mutation: UPDATE_OWNER updates db
// Action: UPDATE_OWNER_INFO updates state
// import React from 'react';
// import { Modal } from 'react-responsive-modal';

// const OwnerUpdates = () => {
//     const [open, setOpen] = React.useState(false);

//     return (
//         <>
//             <button className="button" onClick={() => setOpen(true)}>
//                 Open modal
//       </button>

//             <Modal open={open} onClose={() => setOpen(false)}>
//                 <h2>Please update your information</h2>
//                 <form action="">
//                     <p>
//                         <label htmlFor="ownerName">
//                             Name
//               <input type="text" />
//                         </label>
//                     </p>
//                     <p>
//                         <label htmlFor="ownerEmail">
//                             Email
//               <input type="text" />
//                         </label>
//                     </p>
//                     <p>
//                         <label htmlFor="ownerAddress">
//                             Address
//               <input type="text" />
//                         </label>
//                     </p>
//                     <button>test</button>
//                     <input type="submit" value="Submit" />
//                 </form>
//             </Modal>
//         </>
//     );
// };

// export default OwnerUpdates;