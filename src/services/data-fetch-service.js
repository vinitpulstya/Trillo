import axios from "axios";

export async function signup(data) {
    try {
        const payload = { ...data, "role_name": "user"}
        const response = await axios.post('http://127.0.0.1:5000/register', payload);
        return response;
    } catch(error) {
        throw error.response;
    }
}