import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../Firebase/Firebase.config";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import useAxiosPublic from "../../Hook/useAxiosPublic";





const Log = () => {
    const { logIn } = useContext(AuthContext);
    const google = new GoogleAuthProvider();
    const navigate = useNavigate()
    const auth = getAuth(app)
    const axiosPublic = useAxiosPublic();

    // google Login
    const handelGoogleLog = () => {
        signInWithPopup(auth, google)
            .then(result => {
                const user = result.user;
                console.log(user);
                const userInfo = {
                    email: user?.email,
                    name: user?.displayName,
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                    })
                    .catch(error => {
                        console.error(error);
                    })
                    .finally(() => {
                        toast.success('Login Successful')
                        navigate('/')
                    });

            })
    }



    const handelEmailLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.event.value;
        console.log(email, password);

        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('User Login Successfully')
                navigate('/')
            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-sky-100">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="w-1/2">
                        <img src="" alt="" />
                    </div>
                    <div className=" rounded-md flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <h1 className="text-3xl text-center font-semibold">Log In</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span>Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span>Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <input onSubmit={handelEmailLogin} className="btn btn-outline btn-info" type="submit" value="Login" />
                            </div>
                        </form>
                        <div onClick={handelGoogleLog} className="flex items-center cursor-pointer justify-center gap-4 font-semibold text-2xl my-4 border  rounded-full" >
                            <FcGoogle />
                            <p>Login With Google</p>
                        </div>
                        <h1 className="text-center border p-2 text-lg font-medium  ">New In This Page <Link to="/register" className="hover:text-rose-700 " >Register Now </Link> </h1>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Log;