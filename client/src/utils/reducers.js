import { useReducer } from "react";
import {
  SUBMIT_MESSAGE,
  DELETE_MESSAGE,
  ADD_TST,
  UPDATE_TST,
  DELETE_TST,
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
    // add testimonial from admin page
    case ADD_TST:
      return {
        ...state,
        testimonials: [...action.testimonials]
      }
    // update testimonial from admin page
    case UPDATE_TST:
      return {
        ...state,
        testimonials: [...action.testimonials]
      }
    // delete testimonial text from admin page
    case DELETE_TST:
      return {
        ...state,
        testimonials: [...action.testimonials]
      }
    // update owner info on admin page
    case UPDATE_OWNER_INFO:
      return {
        ...state,
        [action.field]: action.payload,
        // ownerInfo: [...action.ownerInfo]
      }

    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState)
}