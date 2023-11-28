import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
// import { FaHome } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";
import { MdDashboardCustomize } from "react-icons/md";




const NavBar = () => {

    const { logOut, user } = useContext(AuthContext);

    const handelLogout = () => {
        logOut()
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            })
    }
    console.log(user);
    const navItems =
        <>

            {/* <Link to="/"> <FaHome /> </Link> */}
            <Link className="mx-5" to="/">Home</Link>
            <Link to="/product">Product</Link>

        </>


    return (
        <div className=" ">
            <div className="navbar fixed z-50  bg-gradient-to-r from-zinc-500 to-slate-300  max-w-screen-2xl text-5xl  opacity-90  font-bold text-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost text-xl">Tech Matrix</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <div className="menu text-3xl  font-semibold menu-horizontal px-1">
                        {navItems}
                    </div>
                </div>

                <div className="navbar-end">
                    {
                        user ? (
                            <div>
                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="">
                                        <div className="flex flex-col-reverse items-center cursor-pointer gap-1">
                                            <img src={user?.photoURL} alt="" className="rounded-full w-12 h-12" />
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                        <div className="flex flex-col items-start gap-2">
                                            <div>
                                                <a className="text-lg">{user?.displayName ?? user?.name}</a>
                                            </div>
                                            <div>
                                                <Link to="/dashboard" className="flex gap-2 items-center text-lg"><span>
                                                    <MdDashboardCustomize />
                                                </span>Dashboard</Link>
                                            </div>

                                            <button className="flex gap-2 items-center text-lg" onClick={handelLogout}><span>
                                                <TbLogout2 />
                                            </span>Log Out</button>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        ) :
                            <Link to='login' className="btn btn-outline btn-info">Log In</Link>

                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;