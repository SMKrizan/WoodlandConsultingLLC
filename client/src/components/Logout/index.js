import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
// import { Button } from 'react-bootstrap';

function Logout() {

    const { logout, isAuthenticated } = useAuth0();
    return (
        //if the user is not auth then
        !isAuthenticated && (
            < button onClick={() =>
                logout()
            }> Logout</button >
        ))
}
export default Logout;
