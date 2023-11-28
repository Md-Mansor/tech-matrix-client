import { useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "../../../Hook/useAxiosPrivate";
import { FaTrashAlt, FaUsers } from "react-icons/fa";



const Users = () => {
    const axiosSecure = useAxiosPrivate();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const result = await axiosSecure.get('/users');
            return result.data;
        }
    })
    console.log(users);

    const handleDeleteUser = (user) => {
        console.log(user._id);
        axiosSecure.delete(`/users/${user._id}`)
            .then((res) => {
                console.log(res);
                if (res.data.deletedCount > 0) {
                    refetch();
                }
            })
            .catch(err => {
                console.log(err);
            })
    };

    return (
        <div>
            <div className="flex justify-evenly m-5 bg-slate-400 p-3 rounded">
                <h1 className="text-3xl">All Users</h1>
                <h1 className="text-3xl">Total Users :{users.length}</h1>
            </div>

            <div className="m-5">
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Sl</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {

                                users.map((user, idx) => <tr key={user._id}>
                                    <th>{idx + 1}</th>
                                    <td>{user?.name ?? user?.displayName}</td>
                                    <td>{user?.email}</td>
                                    <td>
                                        <button className="btn btn-outline btn-md w-16 btn-error">
                                            <FaUsers></FaUsers>
                                        </button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteUser(user)} className="btn btn-outline btn-md w-16 btn-error">
                                            <FaTrashAlt></FaTrashAlt>
                                        </button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Users;