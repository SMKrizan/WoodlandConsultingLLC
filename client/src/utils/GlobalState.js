import React, { createContext, useContext } from "react";
import { useProductReducer } from './reducers'

const StoreContext = createContext();
const { Provider } = StoreContext;

// creates new context object and makes state data available to all components that call for it
const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useProductReducer({
        messages: [],
        testimonials: [],
        testimonial: {},
        modalData: {},
        ownerInfo: []
        // tstForm: false,
        // tstFormVals: {}
    });
    console.log('GlobalState-data: ', state);
    return <Provider value={[state, dispatch]} {...props} />;
};

// custom React hook executed within component returns state/dispatch data
const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };