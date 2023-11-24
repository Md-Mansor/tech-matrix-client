import { Link } from "react-router-dom";

const Log = () => {
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
                                <input className="btn btn-outline btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <div className="flex flex-col gap-1 justify-center  items-center">
                            <p className="">Or Login With</p>
                            <img src="" alt="google" className="w-16 h-16 hover:cursor-pointer" />
                        </div>
                        <h1 className="text-center border p-2 text-lg font-medium  ">New In This Page <Link to="/register" className="hover:text-rose-700 " >Register Now </Link> </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Log;