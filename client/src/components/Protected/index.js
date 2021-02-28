import React from "react";
import { Route, Redirect } from 'react-router-dom';
// import AuthService from "../../utils/auth"


export const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (isAuthenticated) {
                    return <Component />
                } else {
                    return (<Redirect to={{ pathname: "/admin", state: { from: props.location } }} />)

                }
            }}
        />
    );
};
