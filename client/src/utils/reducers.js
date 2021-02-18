import { useReducer } from "react";
import {
  GET_PROJECTS
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {


    case GET_PROJECTS:
      return {
        ...state,
        categories: [...action.categories],
      }

    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState)
}