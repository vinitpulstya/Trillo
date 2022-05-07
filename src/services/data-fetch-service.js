import axios from "axios";

const base_url = 'http://127.0.0.1:5000';

const _urlSignup = base_url + '/register';
const _urlLogin = base_url + '/login';

export async function signup(username, password, email) {
    try {
        const payload = {
            "username": username, 
            "password": password,
            "email": email,
            "role_name": "user"
            }
        const response = await axios.post(_urlSignup, payload);
        return response;
    } catch(error) {
        throw error.response;
    }
}

export async function login(username, password) {
    try {
        const payload = {
            "username": username,
            "password": password,
        }
        const response = await axios.post(_urlLogin, payload);
        return response;
    } catch(error) {
        throw error.response;
    }
}