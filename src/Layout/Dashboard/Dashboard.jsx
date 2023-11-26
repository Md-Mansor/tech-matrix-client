import { NavLink, Outlet } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";
import { MdProductionQuantityLimits } from "react-icons/md";
import { HiHome } from "react-icons/hi2";
import { ImProfile } from "react-icons/im";



const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-slate-700 text-white">
                <h1 className="font-extrabold text-center">my dashboard</h1>
                <ul className="menu p-3 text-lg font-semibold">
                    <li >
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
                </ul>
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
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;