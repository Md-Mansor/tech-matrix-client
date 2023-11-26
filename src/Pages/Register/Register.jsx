import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {


    const { createUser } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();


    const handelRegister = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        setRegisterError('')
        setSuccess('')
        console.log(name, email, password);

        // if (password.length < 6) {
        //     toast.error('password must be at least 6 character')
        //     return;
        // }
        // else if (!/[A-Z]/.test(password)) {
        //     toast.error('at least one uppercase letter')
        //     return;
        // }
        // else if (!/[#?!@$%^&*-]/.test(password)) {
        //     toast.error('give at least one special character')
        //     return;
        // }


        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('user created')
                navigate('/')

            })
            .catch(error => {
                console.error(error);
                toast.error('user Already exist')
            })

    }



    return (
        <div>
            <div className="hero min-h-screen bg-sky-100 ">
                <div className=" hero-content flex flex-col lg:flex-row">
                    <div className="w-1/2">
                        <img src="" alt="" className="rounded-md" />
                    </div>
                    <div className="rounded-md flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handelRegister} className="card-body">
                            <h1 className="text-3xl text-center font-semibold">Register Here</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name:</span>
                                </label>
                                <input type="name" placeholder="name" name="name" className="input input-bordered" required />
                            </div >
                            <div className="form-control">
                                <label className="label">
                                    <span className="">Email:</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="">Password:</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-outline btn-info" type="submit" value="Register" />
                            </div>
                        </form>
                        <h1 className="text-center border p-2 text-lg font-medium ">Already Have an Account <br /> <Link to="/login" className="hover:text-rose-700 " >log In Now </Link> </h1>
                        <p>{success}</p>
                        <p>{registerError}</p>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;