import axios from "axios";


const secure = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true
})

const useAxiosPrivate = () => {
    return secure
};

export default useAxiosPrivate;