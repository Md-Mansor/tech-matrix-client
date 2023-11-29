import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";


const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const navigate = useNavigate();
    if (loading) {
        return <span>Loading.........</span>
    }
    if (user) {
        return children;
    }
    else {
        navigate('/login')
    }
};

export default PrivateRouter;