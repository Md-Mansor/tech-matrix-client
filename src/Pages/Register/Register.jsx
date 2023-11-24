import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-sky-100 ">
                <div className=" hero-content flex flex-col lg:flex-row">
                    <div className="w-1/2">
                        <img src="" alt="" className="rounded-md" />
                    </div>
                    <div className="rounded-md flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
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
                                <input className="btn btn-outline btn-success" type="submit" value="Register" />
                            </div>
                        </form>
                        {/* <p>{success}</p> */}
                        {/* <p>{registerError}</p> */}
                        <h1 className="text-center border p-2 text-lg font-medium ">Already Have an Account <br /> <Link to="/login" className="hover:text-rose-700 " >log In Now </Link> </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;