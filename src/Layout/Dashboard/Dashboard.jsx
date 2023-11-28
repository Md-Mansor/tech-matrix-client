import { NavLink, Outlet } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";
import { MdProductionQuantityLimits } from "react-icons/md";
import { HiHome } from "react-icons/hi2";
import { ImProfile } from "react-icons/im";
import { FaUsers } from "react-icons/fa6";
import { FcStatistics } from "react-icons/fc";
import { IoTicketSharp } from "react-icons/io5";
import { MdReviews } from "react-icons/md";
import { MdReportProblem } from "react-icons/md";





const Dashboard = () => {

    const isAdmin = true;
    const isModerator = true;
    return (
        <div className=" lg:flex ">
            <div className="lg:w-64 min-h-screen bg-slate-700 text-white">
                <h1 className="font-extrabold text-center">my dashboard</h1>
                <ul className="menu p-3 text-lg font-semibold">
                    {/* admin route */}
                    {isAdmin && (
                        <>
                            <li>
                                <NavLink to='/dashboard/users'>
                                    <FaUsers />
                                    Manage Users
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/statistics'>
                                    <FcStatistics />
                                    Statistics
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/coupons'>
                                    <IoTicketSharp></IoTicketSharp>
                                    Manage Coupons
                                </NavLink>
                            </li>
                        </>
                    )}
                    {/* moderator route */}
                    {isModerator && (
                        <>
                            <li>
                                <NavLink to="/dashboard/review">
                                    <MdReviews></MdReviews>
                                    Product Review Queue
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/report">
                                    <MdReportProblem></MdReportProblem>
                                    Reported Contents
                                </NavLink>
                            </li>
                        </>
                    )}

                    {/* user Route  */}
                    {!isAdmin && !isModerator && (
                        <>
                            <li>
                                <NavLink to='/dashboard/profile'>
                                    <ImProfile />
                                    My Profile
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/add'>
                                    <MdAddShoppingCart />
                                    Add Product
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/product'>
                                    <MdProductionQuantityLimits />
                                    My Product
                                </NavLink>
                            </li>
                        </>
                    )}

                </ul>
                {/* Shared Nav Link */}
                <div className="divider divider-info">Web UI</div>
                <ul className="menu p-3 text-lg font-semibold">
                    <li>
                        <NavLink to="/">
                            <HiHome />
                            Home
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="lg:w-1/2">
                <Outlet></Outlet>
            </div>
        </div >
    );
};

export default Dashboard;