import axios from "axios";
import getAPIServerURL from '../others/getAPIServerURL';


const baseUrl = `${getAPIServerURL()}/api/login`;

let authChangeListeners = [];

export const setAuthInfo = (authInfo) => {
    localStorage.setItem("authInfo", JSON.stringify(authInfo));
    authChangeListeners.forEach(changeListener => changeListener(authInfo))
};

export const registerListener = (listener) => authChangeListeners.push(listener)
export const getAuthInfo = () => JSON.parse(localStorage.getItem("authInfo"));
export const removeListener = (listenerToBeRemoved) => authChangeListeners = authChangeListeners.filter(listener => listener != listenerToBeRemoved);
export const login = (loginInfo) => axios.post(baseUrl, loginInfo).then(res => setAuthInfo(res.data));
export const logout = () => setAuthInfo(null);


axios.interceptors.request.use(request => {
    request.headers["Authorization"] = 'Bearer ' + (getAuthInfo()?.token || "");
    console.log(request)
    return request;
},
    error => { Promise.reject("Failed to fetch data") }
)

export default {
    setAuthInfo,
    registerListener,
    getAuthInfo,
    removeListener,
    login,
    logout
};