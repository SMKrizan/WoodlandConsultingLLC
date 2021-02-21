import { useReducer } from "react";
import {
  SUBMIT_MESSAGE,
  DELETE_MESSAGE,
  ADD_TESTIMONIAL,
  UPDATE_TESTIMONIAL,
  DELETE_TESTIMONIAL,
  UPDATE_OWNER_INFO,
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    // user-submitted form message
    case SUBMIT_MESSAGE:
      return {
        ...state,
        message: [...action.message]
      };
      // admin-page message deletion
    case DELETE_MESSAGE:
      return {
        ...state,
        message: [...action.message]
      }
    // add testimonial from admin page
    case ADD_TESTIMONIAL:
      return {
        ...state,
        testimonial: [...action.testimonial]
      }
    // update testimonial from admin page
    case UPDATE_TESTIMONIAL:
      return {
        ...state,
        testimonial: [...action.testimonial]
      }
    // delete testimonial text from admin page
    case DELETE_TESTIMONIAL:
      return {
        ...state,
        testimonial: [...action.testimonial]
      }
    // update owner info on admin page
    case UPDATE_OWNER_INFO:
      return {
        ...state,
        ownerInfo: [...action.ownerInfo]
      }

    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState)
}