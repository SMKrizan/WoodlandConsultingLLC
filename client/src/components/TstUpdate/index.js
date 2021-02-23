// import React, { useState } from "react";
// import { Modal } from "react-responsive-modal";
// import { useStoreContext } from "../../utils/GlobalState";
// import { UPDATE_TESTIMONIAL } from "../../utils/mutations";
// import { UPDATE_TST } from '../../utils/actions';
// import "./index.css";

// const TstUpdate = () => {
//     const [state, dispatch] = useStoreContext();
//     const { tstFormVals } = state;

//     const formVals = () => {
//         const tstId = tstFormVals.find((tst) => tst._id === _id);
//     }

//   if (testimonial) {
//     dispatch({
//         type: UPDATE_TST,
//         _id: _id,
//         tstName: tstVals.tstName,
//         tstCompany: tst.tstCompany,
//         tstMessage: tst.tstMessage
//     })
//   }

//   const handleTstUpdate = (e) => {
//       dispatch({
//         type: UPDATE_TST,
//         name: e.target.name,
//         value: e.target.value
//       })
//   }

//   if (state.tstForm) {
//     return (
//       <>
//         <Modal>
//           <h2>Update/replace testimonial:</h2>
//           <form action="">
//             <p>
//               <label htmlFor="name">
//                 Name:
//                 <input
//                   type="text"
//                   name="tstName"
//                   value={tst.tstName}
//                   onChange={(e) => setName(e.target.value)}
//                 />
//               </label>
//             </p>
//             <p>
//               <label htmlFor="company">
//                 Company:
//                 <input
//                   type="text"
//                   name="tstCompany"
//                   value={tst.tstCompany}
//                   onchange={(e) => setCompany(e.target.value)}
//                 />
//               </label>
//             </p>
//             <p>
//               <label htmlFor="Message">
//                 Message:
//                 <input
//                   type="text"
//                   name="tstMessage"
//                   value={tst.tstMessage}
//                   onChange={(e) => setMessage(e.target.value)}
//                 />
//               </label>
//             </p>
//             <button onSubmit={UPDATE_TESTIMONIAL}>Submit</button>
//             <input type="submit" value="Submit" />
//           </form>
//           <div className="close" onClick={toggleForm}>
//             [close]
//           </div>
//         </Modal>
//       </>
//     );
//   }
// };

// export default TstUpdate;
