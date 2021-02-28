import { useReducer } from "react";
import {
  SUBMIT_MESSAGE,
  DELETE_MESSAGE,
  UPDATE_TST,
  UPDATE_OWNER_INFO,
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    // user-submitted form message
    case SUBMIT_MESSAGE:
      return {
        ...state,
        messages: [...action.messages]
      };
    // admin-page message deletion
    case DELETE_MESSAGE:
      return {
        ...state,
        messages: [...action.messages]
      }
    // pull values to form from testimonial onClick
    case UPDATE_TST:
      return {
        ...state,
        testimonials: [...action.testimonials]
      }
    // update owner info on admin page
    case UPDATE_OWNER_INFO:
      return {
        ...state,
        ownerInfo: {...action.modalData}
      }

    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState)
}