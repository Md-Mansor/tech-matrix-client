import axios from "axios";


const secure = axios.create({
    baseURL: "https://tech-matrix-server.vercel.app/",
    withCredentials: true
})

const useAxiosPrivate = () => {
    return secure
};

export default useAxiosPrivate;