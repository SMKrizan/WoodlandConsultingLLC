import { useReducer } from "react";
import {
  QUERY_MESSAGES,
  QUERY_TESTIMONIALS,
  QUERY_OWNER_INFO,
  UPDATE_OWNER_INFO,
  ADD_TESTIMONIAL,
  REMOVE_TESTIMONIALS,
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {

    case GET_MESSAGES:
      return {
        ...state,
        getMessages: [...action.getMessages]
      };

    case ADD_MESSAGE:
      return {
        ...state,
        addMessage: [...action.addMessage]
      }

    case REMOVE_MESSAGE:
      return {
        ...state,
        removeMessage: [...action.removeMessage]
      }

    case ADD_TESTIMONIAL:
      return {
        ...state,
        addTestimonial: [...action.addTestimonial]
      }

    case UPDATE_TESTIMONIAL:
      return {
        ...state,
        updateTestimonial: [...action.updateTestimonial]
      }

    case REMOVE_TESTIMONIAL:
      return {
        ...state,
        removeTestimonial: [...action.removeTestimonial]
      }

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