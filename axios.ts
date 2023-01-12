import axios from "axios";
import Cookies from "js-cookie";

const instance = axios.create({
    baseURL:"http://localhost:4000",

});


export const getConfig = () => {
    const token = Cookies.get('token');
    return {
        headers: {Authorization: `Bearer ${token}`}
    }
};
export default instance;