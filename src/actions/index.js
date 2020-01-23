import data from '../assets/data'
const user_email = "hruday@gmail.com";
const user_password = "hruday123";


export function loginUser({ email, password }) {
    let error = null, isAuth = false;
    if (email !== user_email || password !== user_password) {
        error = "Invalid Credentials"
    } else {
        isAuth = true;
    }
    let response = {
        isAuth: isAuth,
        error: error
    }
    return {
        type: 'USER_LOGIN',
        payload: response
    }
}


export function getUsers() {
    return {
        type: 'GET_USERS',
        payload: data.user
    }
}

