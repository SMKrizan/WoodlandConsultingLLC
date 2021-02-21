import { useReducer } from "react";
import {
  GET_PROJECTS,
  UPDATE_MESSAGES,
  ADD_TESTIMONIALS,
  UPDATE_TESTIMONIALS,
  REMOVE_TESTIMONIALS,
  UPDATE_OWNER_INFO
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case GET_PROJECTS:
      return {
        ...state,
        categories: [...action.categories],
      };

    case UPDATE_MESSAGES:
      return {
        ...state,
        messages: [...action.messages]
      }
    
    case ADD_TESTIMONIALS:
      return {
        ...state,
        testimonials: [...action.testimonials]
      }

    case UPDATE_TESTIMONIALS:
      return {
        ...state,
        testimonials: [...action.testimonials]
      }

    case REMOVE_TESTIMONIALS:
      return {
        ...state,
        testimonials: [...action.testimonials]
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