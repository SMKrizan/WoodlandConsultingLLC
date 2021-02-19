import decode from 'jwt-decode';

// creates new JS class of which a new version will be instantiated for every component that imports it; this ensures a new version of functionality is being used and reduces risk of leaving remnant data; applied OOP principles so that each method is responsible for one thing and one thing only
class AuthService {
    // retrieve data saved in token
    getProfile() {
        return decode(this.getToken());
    }

    // check whether user is still logged in
    loggedIn() {
        // checks if there is a saved token and it's still valid
        const token = this.getToken();
        // use type coersion to check whether token is NOT undefined and NOT expired
        return !!token && !this.isTokenExpired(token); 
    }

    // check if token has expired
    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) {
                return true;
            } else {
                return false;
            }
        } catch (err) {
            return false;
        }
    }

    // retrieve token from localStorage
    getToken() {
        // retrieves user token from localStorage
        return localStorage.getItem('id_token');
    }

    // set token to localStorage and reload page to homepage
    login(idToken) {
        // saves user token to localStorage
        localStorage.setItem('id_token', idToken);

        window.location.assign('/');
    }

    // clear token from localStorage and force logout with reload
    logout() {
        // Clear user token and profile data from localStorage
        localStorage.removeItem('id_token');
        // reloads page and resets state of application
        window.location.assign('/');
    }
}

export default new AuthService();